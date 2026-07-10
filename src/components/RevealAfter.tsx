"use client";

import { useEffect, useRef } from "react";

/** Reveals children after a delay once in view — for “emerge from image” timing. */
export default function RevealAfter({
  children,
  className = "",
  delayMs = 450,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: number | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer = window.setTimeout(() => {
              el.classList.add("visible");
            }, delayMs);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => {
      if (timer) window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [delayMs]);

  return (
    <div ref={ref} className={`reveal-from-image ${className}`.trim()}>
      {children}
    </div>
  );
}
