import { NextResponse } from 'next/server';
import { env } from '@/lib/env';

// Server-side proxy for Aleesa Web Chat.
// Flow: browser widget -> this route (holds the secret key) -> Aleesa webhook.
// The API key is read from ALEESA_WEBCHAT_API_KEY and never reaches the client.

export const runtime = 'nodejs';

const MAX_TEXT_LENGTH = 4000;

type ChatRequestBody = {
  sessionId?: string;
  text?: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  metadata?: Record<string, unknown>;
};

export async function POST(request: Request) {
  const apiKey = env.ALEESA_WEBCHAT_API_KEY;
  // Full Aleesa web-chat endpoint URL, including the /webhooks/web-chat path.
  const endpoint = env.ALEESA_WEBHOOK_BASE_URL;

  if (!apiKey || !endpoint) {
    return NextResponse.json(
      {
        success: false,
        message:
          'Web chat is not configured. Set ALEESA_WEBCHAT_API_KEY and ALEESA_WEBHOOK_BASE_URL.',
      },
      { status: 503 },
    );
  }

  let body: ChatRequestBody;
  try {
    body = (await request.json()) as ChatRequestBody;
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid JSON body' }, { status: 400 });
  }

  const text = String(body.text ?? '').trim();
  if (!text) {
    return NextResponse.json({ success: false, message: 'text is required' }, { status: 400 });
  }
  if (text.length > MAX_TEXT_LENGTH) {
    return NextResponse.json(
      { success: false, message: 'Message is too long' },
      { status: 400 },
    );
  }

  // A stable sessionId keeps the visitor's messages in one conversation thread.
  const sessionId = String(body.sessionId ?? '').trim() || `chat_${crypto.randomUUID()}`;

  try {
    const upstream = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        apiKey,
        sessionId,
        text,
        customerName: body.customerName,
        customerEmail: body.customerEmail,
        customerPhone: body.customerPhone,
        metadata: { source: 'keyob-website-widget', ...(body.metadata ?? {}) },
      }),
      // Don't let a slow upstream hang the request forever.
      signal: AbortSignal.timeout(30_000),
    });

    const data = (await upstream.json().catch(() => ({}))) as {
      success?: boolean;
      reply?: string;
      message?: string;
    };

    if (!upstream.ok || data.success === false) {
      return NextResponse.json(
        {
          success: false,
          message: data.message || `Chat service returned HTTP ${upstream.status}`,
        },
        { status: upstream.status >= 400 ? upstream.status : 502 },
      );
    }

    return NextResponse.json({
      success: true,
      sessionId,
      reply: data.reply ?? '',
    });
  } catch (error) {
    const isTimeout = error instanceof Error && error.name === 'TimeoutError';
    return NextResponse.json(
      {
        success: false,
        message: isTimeout ? 'Chat service timed out' : 'Could not reach the chat service',
      },
      { status: 504 },
    );
  }
}
