"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "adfilmic-cookie-consent";

type Consent = "accepted" | "essential" | null;

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "accepted" || saved === "essential") {
        setConsent(saved);
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  function save(value: "accepted" | "essential") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setConsent(value);
  }

  if (!ready || consent) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p className="cookie-banner-text">
        We use essential cookies to run this site and optional analytics if you
        allow them. See our{" "}
        <Link href="/cookies">Cookie Policy</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <div className="cookie-banner-actions">
        <button type="button" className="btn-ghost cookie-btn" onClick={() => save("essential")}>
          Essential only
        </button>
        <button type="button" className="btn-grad cookie-btn" onClick={() => save("accepted")}>
          Accept all
        </button>
      </div>
    </div>
  );
}
