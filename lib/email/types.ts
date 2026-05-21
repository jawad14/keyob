export type EmailMessage = {
  to: string | string[];
  from?: string;
  replyTo?: string;
  subject: string;
  text?: string;
  html?: string;
};

export type EmailResult = { ok: true; id?: string } | { ok: false; error: string };

export interface Email {
  send(message: EmailMessage): Promise<EmailResult>;
}
