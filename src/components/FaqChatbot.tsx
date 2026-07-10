"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FAQ_ITEMS } from "@/lib/faq-data";
import {
  SITE_CALENDLY_URL,
  SITE_EMAIL,
  SITE_NAME,
  SITE_WHATSAPP_URL,
} from "@/lib/site";

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

type ChatOption = {
  id: string;
  label: string;
};

const ALL_FAQ_OPTIONS: ChatOption[] = FAQ_ITEMS.map((item) => ({
  id: item.id,
  label: item.q,
}));

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function FaqChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [askedIds, setAskedIds] = useState<string[]>([]);
  const [options, setOptions] = useState<ChatOption[]>([]);
  const [mode, setMode] = useState<"menu" | "followup" | "done">("menu");
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);
  const greeted = useRef(false);

  const remainingFaqs = useMemo(
    () => ALL_FAQ_OPTIONS.filter((opt) => !askedIds.includes(opt.id)),
    [askedIds]
  );

  useEffect(() => {
    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    if (!greeted.current) {
      greeted.current = true;
      pushBot(
        `Hi — I'm the ${SITE_NAME} assistant. Choose a question below and I'll help right away.`
      );
      setMode("menu");
      setOptions(ALL_FAQ_OPTIONS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- greet once per session until reset
  }, [open]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, typing, options, open]);

  function schedule(fn: () => void, ms: number) {
    const id = window.setTimeout(fn, ms);
    timers.current.push(id);
  }

  function pushBot(text: string, after?: () => void) {
    setTyping(true);
    schedule(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: uid(), role: "bot", text }]);
      after?.();
    }, 450 + Math.min(text.length * 4, 700));
  }

  function followUpOptions(stillRemaining: number): ChatOption[] {
    if (stillRemaining <= 0) {
      return [
        { id: "calendly", label: "Book a call" },
        { id: "end", label: "End chat" },
      ];
    }
    return [
      { id: "menu", label: "Ask another question" },
      { id: "whatsapp", label: "Chat on WhatsApp" },
      { id: "email", label: "Email AdFilmic" },
      { id: "calendly", label: "Book a call" },
    ];
  }

  function showDoneOptions() {
    setMode("done");
    setOptions([
      { id: "calendly", label: "Book a call" },
      { id: "end", label: "End chat" },
    ]);
  }

  function resetAndClose() {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    setOpen(false);
    setTyping(false);
    setMessages([]);
    setAskedIds([]);
    setOptions([]);
    setMode("menu");
    greeted.current = false;
  }

  function handleOption(id: string, label: string) {
    if (typing) return;

    if (id === "end") {
      setMessages((prev) => [...prev, { id: uid(), role: "user", text: label }]);
      pushBot("Thanks for chatting — talk soon.", () => {
        schedule(() => resetAndClose(), 700);
      });
      setOptions([]);
      return;
    }

    if (id === "calendly") {
      setMessages((prev) => [...prev, { id: uid(), role: "user", text: label }]);
      pushBot("Opening Calendly so you can pick a time. Closing this chat now.", () => {
        schedule(() => {
          window.open(SITE_CALENDLY_URL, "_blank", "noopener,noreferrer");
          resetAndClose();
        }, 600);
      });
      setOptions([]);
      return;
    }

    if (id === "menu") {
      setMessages((prev) => [...prev, { id: uid(), role: "user", text: label }]);
      if (remainingFaqs.length === 0) {
        pushBot("You've covered all of our FAQs. Would you like to book a call?", () => {
          showDoneOptions();
        });
        return;
      }
      setMode("menu");
      setOptions(remainingFaqs);
      pushBot("Sure — pick another question.");
      return;
    }

    if (id === "whatsapp") {
      setMessages((prev) => [...prev, { id: uid(), role: "user", text: label }]);
      pushBot("Opening WhatsApp so you can message the team directly.", () => {
        window.open(SITE_WHATSAPP_URL, "_blank", "noopener,noreferrer");
        setMode("followup");
        setOptions(followUpOptions(remainingFaqs.length));
      });
      setOptions([]);
      return;
    }

    if (id === "email") {
      setMessages((prev) => [...prev, { id: uid(), role: "user", text: label }]);
      pushBot(`You can reach us at ${SITE_EMAIL}. Opening your email app now.`, () => {
        window.location.href = `mailto:${SITE_EMAIL}`;
        setMode("followup");
        setOptions(followUpOptions(remainingFaqs.length));
      });
      setOptions([]);
      return;
    }

    const faq = FAQ_ITEMS.find((item) => item.id === id);
    if (!faq) return;

    const nextAsked = askedIds.includes(id) ? askedIds : [...askedIds, id];
    const stillLeft = ALL_FAQ_OPTIONS.length - nextAsked.length;

    setAskedIds(nextAsked);
    setMessages((prev) => [...prev, { id: uid(), role: "user", text: label }]);
    setOptions([]);

    pushBot(faq.a, () => {
      if (stillLeft <= 0) {
        pushBot(
          "That covers all of our FAQs. You can book a call or end this chat.",
          () => showDoneOptions()
        );
      } else {
        setMode("followup");
        setOptions(followUpOptions(stillLeft));
      }
    });
  }

  function toggle() {
    if (open) {
      setOpen(false);
      return;
    }
    setOpen(true);
  }

  return (
    <div className={`faq-chat ${open ? "open" : ""}`}>
      {open && (
        <div
          className="faq-chat-panel"
          role="dialog"
          aria-label={`${SITE_NAME} assistant`}
          aria-modal="false"
        >
          <div className="faq-chat-header">
            <div className="faq-chat-avatar" aria-hidden="true">
              AF
            </div>
            <div className="faq-chat-header-text">
              <strong>{SITE_NAME} Assistant</strong>
              <span>Quick answers · tap an option</span>
            </div>
            <button
              type="button"
              className="faq-chat-close"
              onClick={resetAndClose}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="faq-chat-messages" ref={listRef}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`faq-chat-bubble ${msg.role === "bot" ? "bot" : "user"}`}
              >
                {msg.text}
              </div>
            ))}
            {typing && (
              <div className="faq-chat-bubble bot typing" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          <div className="faq-chat-options" aria-label="Suggested questions">
            {!typing &&
              options.map((opt) => (
                <button
                  key={`${mode}-${opt.id}-${askedIds.length}`}
                  type="button"
                  className={`faq-chat-option${
                    opt.id === "calendly" ? " faq-chat-option-primary" : ""
                  }`}
                  onClick={() => handleOption(opt.id, opt.label)}
                >
                  {opt.label}
                </button>
              ))}
          </div>
        </div>
      )}

      <button
        type="button"
        className="faq-chat-launcher"
        onClick={toggle}
        aria-expanded={open}
        aria-label={open ? "Close assistant" : "Open assistant"}
      >
        {open ? (
          <span className="faq-chat-launcher-x">×</span>
        ) : (
          <>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z" />
            </svg>
            <span>Ask AdFilmic</span>
          </>
        )}
      </button>
    </div>
  );
}
