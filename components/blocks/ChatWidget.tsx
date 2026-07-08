/* eslint-disable no-restricted-syntax --
 * Chat widget owns a local typographic/visual scale via ChatWidget.module.css,
 * so it uses raw h/p/span to keep styling self-contained and on-brand. */
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LoaderCircle, MessageCircle, Send, X } from 'lucide-react';
import styles from './ChatWidget.module.css';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  text: string;
};

const SESSION_STORAGE_KEY = 'aleesa_webchat_session_id';
const WELCOME_TEXT = "Hi, I'm the Keyob assistant. How can I help you today?";
const QUICK_REPLIES = ['What does Keyob do?', 'Book a consultation', 'Talk to a person'];

function makeWelcome(): Message {
  return { id: 'welcome', role: 'assistant', text: WELCOME_TEXT };
}

function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return '';
  let id = window.localStorage.getItem(SESSION_STORAGE_KEY);
  if (!id) {
    id = `chat_${crypto.randomUUID()}`;
    window.localStorage.setItem(SESSION_STORAGE_KEY, id);
  }
  return id;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([makeWelcome()]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sessionIdRef = useRef<string>('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    sessionIdRef.current = getOrCreateSessionId();
  }, []);

  // Keep the latest message in view.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, sending]);

  // Focus the input when the panel opens; close on Escape.
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const sendMessage = useCallback(
    async (raw: string) => {
      const text = raw.trim();
      if (!text || sending) return;

      const userMessage: Message = { id: crypto.randomUUID(), role: 'user', text };
      setMessages((prev) => [...prev, userMessage]);
      setInput('');
      setError(null);
      setSending(true);

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId: sessionIdRef.current,
            text,
            metadata: {
              page: typeof window !== 'undefined' ? window.location.pathname : undefined,
            },
          }),
        });

        const data = (await res.json().catch(() => ({}))) as {
          success?: boolean;
          reply?: string;
          sessionId?: string;
          message?: string;
        };

        if (data.sessionId) {
          sessionIdRef.current = data.sessionId;
          window.localStorage.setItem(SESSION_STORAGE_KEY, data.sessionId);
        }

        if (!res.ok || !data.success) {
          throw new Error(data.message || 'Something went wrong. Please try again.');
        }

        const reply = (data.reply ?? '').trim();
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: 'assistant',
            text: reply || "Thanks — we've received your message and will be in touch shortly.",
          },
        ]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      } finally {
        setSending(false);
      }
    },
    [sending],
  );

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void sendMessage(input);
    }
  }

  function toggleOpen() {
    setOpen((v) => !v);
    setHasOpened(true);
  }

  // Only the greeting is present → offer quick-reply chips.
  const showQuickReplies = messages.length === 1 && !sending;

  return (
    <div className={styles.root}>
      {/* Launcher */}
      <motion.button
        type="button"
        onClick={toggleOpen}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        whileTap={{ scale: 0.94 }}
        className={`${styles.launcher} ${!hasOpened ? styles.launcherPulse : ''}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className={styles.launcherIcon}
          >
            {open ? <X size={24} /> : <MessageCircle size={24} />}
          </motion.span>
        </AnimatePresence>
        {!hasOpened && !open && <span className={styles.unread} aria-hidden="true" />}
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Chat with Keyob"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            className={styles.panel}
          >
            {/* Header */}
            <div className={styles.header}>
              <span className={styles.avatar}>
                <MessageCircle size={20} />
              </span>
              <div className={styles.headerText}>
                <p className={styles.title}>
                  Keyob <em>Assistant</em>
                </p>
                <p className={styles.status}>
                  <span className={styles.statusDot} aria-hidden="true" />
                  Online — typically replies in moments
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className={styles.close}
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className={styles.body} ref={scrollRef} role="log" aria-live="polite">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={m.role === 'user' ? `${styles.row} ${styles.rowUser}` : styles.row}
                >
                  <div
                    className={`${styles.bubble} ${
                      m.role === 'user' ? styles.bubbleUser : styles.bubbleBot
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {showQuickReplies && (
                <div className={styles.chips}>
                  {QUICK_REPLIES.map((q) => (
                    <button
                      key={q}
                      type="button"
                      className={styles.chip}
                      onClick={() => void sendMessage(q)}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {sending && (
                <div className={styles.row}>
                  <div className={`${styles.bubbleBot} ${styles.typing}`} aria-label="Typing">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}

              {error && <div className={styles.error}>{error}</div>}
            </div>

            {/* Composer */}
            <div className={styles.composer}>
              <div className={styles.inputWrap}>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message…"
                  aria-label="Message"
                  className={styles.input}
                />
                <button
                  type="button"
                  onClick={() => void sendMessage(input)}
                  disabled={!input.trim() || sending}
                  aria-label="Send message"
                  className={styles.send}
                >
                  {sending ? (
                    <LoaderCircle size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                </button>
              </div>
              <p className={styles.footnote}>Powered by Aleesa AI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
