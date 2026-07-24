"use client";

/**
 * ZiggyZap — AI Concierge Widget
 *
 * Floating chat widget. Bottom-right. Opens from a pulsing avatar button.
 * Streams responses from /api/chat. Cannes-quality visual craft.
 *
 * WCAG AA Accessible:
 * - Focus trap in modal (keyboard navigation)
 * - Live region status updates
 * - Full keyboard support (Escape to close)
 * - Speech-to-text via Web Speech API
 *
 * Special triggers:
 * - Glitch Mode: hover any .btn for >5s → widget opens with glitch greeting
 * - Bugged Out: user types "help" or "support" → joke then real help
 * - Zap & Reward: click avatar 3× → easter egg on 3rd click
 */

import { useEffect, useRef, useState, useCallback } from "react";
import { getRandomGreeting } from "@/lib/ziggyzap/persona";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Message {
  role: "user" | "assistant";
  content: string;
  pending?: boolean; // true while streaming
}

interface FocusTrapElements {
  firstElement: HTMLElement | null;
  lastElement: HTMLElement | null;
}

// ── Markdown-lite renderer ────────────────────────────────────────────────────
// Converts ZiggyZap's markdown links, bold, and line breaks to safe HTML.
// No external deps — keep the bundle lean.

function renderMarkdown(text: string): string {
  // 1. Strip all HTML tags from the raw text so the AI can never inject markup.
  //    We do this before any of our own replacements so our <strong>/<a>/<br>
  //    output is not affected.
  const stripped = text.replace(/<[^>]*>/g, "");

  return stripped
    // Bold **text**
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Markdown links [text](url) — external
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
      (_, label, url) => {
        // Validate URL scheme — block javascript: and data: URIs
        try {
          const parsed = new URL(url);
          if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return label;
        } catch {
          return label;
        }
        const safeLabel = label.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const safeUrl = url.replace(/"/g, "%22");
        return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer" class="zz-link">${safeLabel}</a>`;
      },
    )
    // Markdown links [text](/path) — internal
    .replace(
      /\[([^\]]+)\]\(\/([^)]*)\)/g,
      (_, label, path) => {
        const safeLabel = label.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const safePath = path.replace(/"/g, "%22");
        return `<a href="/${safePath}" class="zz-link">${safeLabel}</a>`;
      },
    )
    // Line breaks
    .replace(/\n/g, "<br>");
}

// ── Component ─────────────────────────────────────────────────────────────────

export function ZiggyZap() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [avatarClicks, setAvatarClicks] = useState(0);
  const [avatarTooltip, setAvatarTooltip] = useState<string | null>(null);
  const [avatarJiggle, setAvatarJiggle] = useState(false);
  const [leadEmailPending, setLeadEmailPending] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const glitchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasGreeted = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const modalPanelRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // ── Auto-scroll ──────────────────────────────────────────────────────────────

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ── Focus trap for modal (WCAG 2.4.3) ──────────────────────────────────────────

  useEffect(() => {
    if (!modalOpen || !modalPanelRef.current) return;

    function getFocusableElements(element: HTMLElement): HTMLElement[] {
      const selector = [
        "a[href]",
        "button:not([disabled])",
        "textarea:not([disabled])",
        "input[type='text']:not([disabled])",
        "[tabindex]:not([tabindex='-1'])",
      ].join(",");
      return Array.from(element.querySelectorAll(selector));
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setModalOpen(false);
        return;
      }

      if (e.key === "Tab") {
        const focusableElements = getFocusableElements(modalPanelRef.current!);
        if (focusableElements.length === 0) return;

        const currentElement = document.activeElement as HTMLElement;
        const currentIndex = focusableElements.indexOf(currentElement);

        if (e.shiftKey) {
          // Shift+Tab: move backward
          if (currentIndex <= 0) {
            e.preventDefault();
            focusableElements[focusableElements.length - 1]?.focus();
          }
        } else {
          // Tab: move forward
          if (currentIndex >= focusableElements.length - 1) {
            e.preventDefault();
            focusableElements[0]?.focus();
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    // Focus first focusable element in modal
    const focusableElements = getFocusableElements(modalPanelRef.current);
    focusableElements[0]?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  // ── Keyboard support for floating panel (Escape key) ───────────────────────────

  useEffect(() => {
    if (!open || modalOpen) return; // Only for floating panel, not modal

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, modalOpen]);

  // ── Web Speech API initialization ─────────────────────────────────────────────

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return; // Browser doesn't support Web Speech API

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
      setStatusMessage("Listening... Please speak into your microphone.");
    };

    recognition.onend = () => {
      setIsListening(false);
      setStatusMessage("");
    };

    recognition.onerror = (event: any) => {
      setStatusMessage(`Voice input error: ${event.error}. Please try typing instead.`);
      setIsListening(false);
    };

    recognition.onresult = (event: any) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      if (transcript.trim()) {
        setInput(transcript.trim());
        setStatusMessage("Voice input received. Press send to post your message.");
      }
    };

    recognitionRef.current = recognition;
  }, []);

  // ── Greeting on first open ───────────────────────────────────────────────────

  useEffect(() => {
    if (open && !hasGreeted.current) {
      hasGreeted.current = true;
      const greeting = getRandomGreeting();
      setMessages([{ role: "assistant", content: greeting }]);
    }
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // ── Modal mode: listen for custom event ────────────────────────────────────────

  useEffect(() => {
    function handleModalOpen() {
      setModalOpen(true);
      if (!hasGreeted.current) {
        hasGreeted.current = true;
        const greeting = getRandomGreeting();
        setMessages([{ role: "assistant", content: greeting }]);
      }
      setTimeout(() => inputRef.current?.focus(), 100);
    }

    window.addEventListener("ziggy:modal", handleModalOpen);
    return () => window.removeEventListener("ziggy:modal", handleModalOpen);
  }, []);

  // ── Glitch Mode: hover any .btn for >5s ─────────────────────────────────────

  useEffect(() => {
    function onMouseEnter(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest(".btn")) return;
      glitchTimerRef.current = setTimeout(() => {
        if (!open) {
          setOpen(true);
          triggerGlitchMode();
        }
      }, 5000);
    }

    function onMouseLeave(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest(".btn")) return;
      if (glitchTimerRef.current) clearTimeout(glitchTimerRef.current);
    }

    document.addEventListener("mouseenter", onMouseEnter, true);
    document.addEventListener("mouseleave", onMouseLeave, true);
    return () => {
      document.removeEventListener("mouseenter", onMouseEnter, true);
      document.removeEventListener("mouseleave", onMouseLeave, true);
      if (glitchTimerRef.current) clearTimeout(glitchTimerRef.current);
    };
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Core send function ───────────────────────────────────────────────────────

  const sendMessage = useCallback(async (userContent: string, isInjected = false) => {
    if (!userContent.trim() || loading) return;

    // Bugged Out trigger
    const lower = userContent.toLowerCase();
    const isBuggedOut = lower === "help" || lower === "support" ||
      lower.startsWith("help ") || lower.startsWith("support ");

    const userMsg: Message = { role: "user", content: userContent };
    const pendingMsg: Message = { role: "assistant", content: "", pending: true };

    setMessages((prev) => {
      const base = isInjected ? prev : [...prev, userMsg];
      return [...base, pendingMsg];
    });

    if (!isInjected) setInput("");
    setLoading(true);

    // Build message history to send
    const historyForApi = (await new Promise<Message[]>((resolve) => {
      setMessages((prev) => {
        resolve(prev.filter((m) => !m.pending));
        return prev;
      });
    }));

    const apiMessages = [
      ...historyForApi.map((m) => ({ role: m.role, content: m.content })),
      { role: "user" as const, content: userContent },
    ];

    // If bugged out, prepend instruction
    if (isBuggedOut) {
      apiMessages.unshift({
        role: "user" as const,
        content: "[SYSTEM TRIGGER: BUGGED OUT] The user typed 'help' or 'support'. Respond with the Bugged Out Advice script.",
      });
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!res.ok || !res.body) {
        throw new Error("Stream failed");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let fullContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const delta = decoder.decode(value, { stream: true });
        fullContent += delta;

        setMessages((prev) => {
          const updated = [...prev];
          const lastIdx = updated.findLastIndex((m) => m.pending);
          if (lastIdx !== -1) {
            updated[lastIdx] = { role: "assistant", content: fullContent, pending: true };
          }
          return updated;
        });
      }

      // Mark complete
      setMessages((prev) =>
        prev.map((m, i) =>
          i === prev.length - 1 && m.pending
            ? { role: "assistant", content: fullContent }
            : m
        )
      );

      // Check if ZiggyZap asked for email (lead capture)
      if (
        fullContent.toLowerCase().includes("what's the best email") ||
        fullContent.toLowerCase().includes("email to send it to") ||
        fullContent.toLowerCase().includes("drop an email")
      ) {
        setLeadEmailPending(true);
      }

      // Detect quiz score mention for lead capture context
      const scoreMatch = fullContent.match(/(\d+)\s*(?:out of|\/)\s*15/i);
      if (scoreMatch) {
        setQuizScore(parseInt(scoreMatch[1], 10));
      }
    } catch {
      setMessages((prev) =>
        prev.map((m, i) =>
          i === prev.length - 1 && m.pending
            ? {
                role: "assistant",
                content:
                  "Something glitched in the matrix. Not me — probably the internet. Try again in a moment.",
              }
            : m
        )
      );
    } finally {
      setLoading(false);
    }
  }, [loading]);

  // ── Detect email in user message when lead pending ───────────────────────────

  const handleInput = useCallback(async (value: string) => {
    if (
      leadEmailPending &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
    ) {
      setLeadEmailPending(false);
      // Fire lead capture in background
      fetch("/api/chat-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: value.trim(),
          score: quizScore ?? undefined,
          total: 15,
        }),
      }).catch(() => {}); // silent fail — ZiggyZap handles confirmation via chat
    }
    await sendMessage(value);
  }, [leadEmailPending, quizScore, sendMessage]);

  // ── Glitch Mode trigger ──────────────────────────────────────────────────────

  function triggerGlitchMode() {
    if (hasGreeted.current) {
      // Already greeted — inject the glitch trigger
      sendMessage("ERROR 404: Boredom detected. Initialising Glitch Quiz Mode! ⚠️", true);
    } else {
      hasGreeted.current = true;
      setMessages([
        { role: "assistant", content: "ERROR 404: Boredom detected. Initialising Glitch Quiz Mode! ⚠️" },
      ]);
      setTimeout(() => {
        sendMessage("ERROR 404: Boredom detected. Initialising Glitch Quiz Mode! ⚠️", true);
      }, 600);
    }
  }

  // ── Zap & Reward: avatar click counter ──────────────────────────────────────

  function handleAvatarClick() {
    if (open) {
      setOpen(false);
      return;
    }

    const next = avatarClicks + 1;
    setAvatarClicks(next);

    if (next === 1) {
      setAvatarTooltip("Zzzzzzap!");
      setAvatarJiggle(true);
      setTimeout(() => { setAvatarJiggle(false); setAvatarTooltip(null); }, 800);
    } else if (next === 2) {
      setAvatarTooltip("Oooh persistent. Just like Lisa's AI workflows 🔁");
      setAvatarJiggle(true);
      setTimeout(() => { setAvatarJiggle(false); setAvatarTooltip(null); }, 1200);
    } else {
      // 3rd click — open and fire easter egg
      setAvatarClicks(0);
      setAvatarTooltip(null);
      setOpen(true);
      setTimeout(() => {
        if (!hasGreeted.current) {
          hasGreeted.current = true;
          sendMessage("🎉 Jackpot! You've unlocked ZiggyZap's secret mode!", true);
        } else {
          sendMessage("🎉 Jackpot! You've unlocked ZiggyZap's secret mode!", true);
        }
      }, 300);
    }
  }

  // ── Voice input handler ──────────────────────────────────────────────────────

  function handleVoiceInput() {
    if (!recognitionRef.current) {
      setStatusMessage("Voice input not supported on this browser. Please use Chrome, Edge, or Safari.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
    }
  }

  // ── Submit handler ───────────────────────────────────────────────────────────

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleInput(input);
  }

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Floating Avatar Button ─────────────────────────────────────────── */}
      <div className="zz-launcher" aria-label="Chat with ZiggyZap">
        {avatarTooltip && (
          <div className="zz-tooltip" role="status">
            {avatarTooltip}
          </div>
        )}
        <button
          className={`zz-avatar-btn${avatarJiggle ? " zz-jiggle" : ""}${open ? " zz-avatar-btn--open" : ""}`}
          onClick={handleAvatarClick}
          aria-expanded={open}
          aria-controls="zz-panel"
          title={open ? "Close ZiggyZap" : "Chat with ZiggyZap"}
        >
          <span className="zz-monogram" aria-hidden="true">
            {open ? "✕" : "ZZ"}
          </span>
          {!open && <span className="zz-pulse-ring" aria-hidden="true" />}
        </button>
      </div>

      {/* ── Chat Panel ────────────────────────────────────────────────────── */}
      {open && (
        <div
          id="zz-panel"
          className="zz-panel"
          role="dialog"
          aria-label="ZiggyZap AI Concierge"
          aria-modal="true"
          ref={panelRef}
        >
          {/* Header */}
          <div className="zz-header">
            <div className="zz-header-identity">
              <span className="zz-bolt" aria-hidden="true">⚡</span>
              <div>
                <p className="zz-name">ZiggyZap</p>
                <p className="zz-subtitle">AI CONCIERGE</p>
              </div>
            </div>
            <div className="zz-header-status">
              <span className={`zz-status-dot${loading ? " zz-status-dot--thinking" : ""}`} aria-hidden="true" />
              <span className="zz-status-label">{loading ? "thinking..." : "online"}</span>
            </div>
          </div>

          {/* Messages */}
          <div className="zz-messages" role="log" aria-live="polite" aria-label="Conversation">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`zz-msg zz-msg--${msg.role}${msg.pending ? " zz-msg--pending" : ""}`}
              >
                {msg.role === "assistant" && (
                  <span className="zz-msg-avatar" aria-hidden="true">ZZ</span>
                )}
                <div
                  className="zz-msg-bubble"
                  // Safe: renderMarkdown only generates <strong>, <a>, <br> — no user-controlled HTML
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
                />
              </div>
            ))}

            {/* Typing indicator */}
            {loading && messages[messages.length - 1]?.content === "" && (
              <div className="zz-msg zz-msg--assistant">
                <span className="zz-msg-avatar" aria-hidden="true">ZZ</span>
                <div className="zz-typing" aria-label="ZiggyZap is thinking">
                  <span /><span /><span />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Status/Live Region (WCAG 4.1.2) */}
          <div
            className="zz-live-region"
            role="status"
            aria-live="polite"
            aria-atomic="true"
            aria-label="Status messages"
          >
            {statusMessage && <p>{statusMessage}</p>}
          </div>

          {/* Input */}
          <form className="zz-input-row" onSubmit={handleSubmit} aria-label="Send a message">
            <input
              ref={inputRef}
              className="zz-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={leadEmailPending ? "Enter your email address..." : "Ask ZiggyZap anything..."}
              disabled={loading}
              autoComplete={leadEmailPending ? "email" : "off"}
              aria-label="Your message"
            />
            {/* Voice input button (if Web Speech API supported) */}
            {typeof window !== "undefined" &&
              ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition) && (
                <button
                  type="button"
                  className={`zz-voice${isListening ? " zz-voice--active" : ""}`}
                  onClick={handleVoiceInput}
                  disabled={loading}
                  aria-label={isListening ? "Stop listening" : "Speak to input"}
                  title={isListening ? "Stop listening" : "Click to speak"}
                  aria-pressed={isListening}
                >
                  🎤
                </button>
              )}
            <button
              type="submit"
              className="zz-send"
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              →
            </button>
          </form>

          {/* Footer */}
          <p className="zz-footer-note">
            Powered by <a href="/about" className="zz-footer-link">Lisa Galea</a> &amp; Claude
          </p>
        </div>
      )}

      {/* ── Modal Mode Overlay ────────────────────────────────────────────── */}
      {modalOpen && (
        <div
          className="zz-modal-overlay"
          onClick={() => setModalOpen(false)}
          role="presentation"
        >
          <div
            className="zz-modal-panel"
            role="dialog"
            aria-label="ZiggyZap Chat"
            aria-modal="true"
            ref={modalPanelRef}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="zz-modal-close"
              onClick={() => setModalOpen(false)}
              aria-label="Close chat"
              title="Close"
            >
              ✕
            </button>

            {/* Header */}
            <div className="zz-header">
              <div className="zz-header-identity">
                <span className="zz-bolt" aria-hidden="true">⚡</span>
                <div>
                  <p className="zz-name">ZiggyZap</p>
                  <p className="zz-subtitle">AI CONCIERGE</p>
                </div>
              </div>
              <div className="zz-header-status">
                <span className={`zz-status-dot${loading ? " zz-status-dot--thinking" : ""}`} aria-hidden="true" />
                <span className="zz-status-label">{loading ? "thinking..." : "online"}</span>
              </div>
            </div>

            {/* Messages */}
            <div className="zz-messages" role="log" aria-live="polite" aria-label="Conversation">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`zz-msg zz-msg--${msg.role}${msg.pending ? " zz-msg--pending" : ""}`}
                >
                  {msg.role === "assistant" && (
                    <span className="zz-msg-avatar" aria-hidden="true">ZZ</span>
                  )}
                  <div
                    className="zz-msg-bubble"
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
                  />
                </div>
              ))}

              {/* Typing indicator */}
              {loading && messages[messages.length - 1]?.content === "" && (
                <div className="zz-msg zz-msg--assistant">
                  <span className="zz-msg-avatar" aria-hidden="true">ZZ</span>
                  <div className="zz-typing" aria-label="ZiggyZap is thinking">
                    <span /><span /><span />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Status/Live Region (WCAG 4.1.2) */}
            <div
              className="zz-live-region"
              role="status"
              aria-live="polite"
              aria-atomic="true"
              aria-label="Status messages"
            >
              {statusMessage && <p>{statusMessage}</p>}
            </div>

            {/* Input */}
            <form className="zz-input-row" onSubmit={handleSubmit} aria-label="Send a message">
              <input
                ref={inputRef}
                className="zz-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={leadEmailPending ? "Enter your email address..." : "Ask ZiggyZap anything..."}
                disabled={loading}
                autoComplete={leadEmailPending ? "email" : "off"}
                aria-label="Your message"
              />
              {/* Voice input button (if Web Speech API supported) */}
              {typeof window !== "undefined" &&
                ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition) && (
                  <button
                    type="button"
                    className={`zz-voice${isListening ? " zz-voice--active" : ""}`}
                    onClick={handleVoiceInput}
                    disabled={loading}
                    aria-label={isListening ? "Stop listening" : "Speak to input"}
                    title={isListening ? "Stop listening" : "Click to speak"}
                    aria-pressed={isListening}
                  >
                    🎤
                  </button>
                )}
              <button
                type="submit"
                className="zz-send"
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                →
              </button>
            </form>

            {/* Footer */}
            <p className="zz-footer-note">
              Powered by <a href="/about" className="zz-footer-link">Lisa Galea</a> &amp; Claude
            </p>
          </div>
        </div>
      )}
    </>
  );
}
