"use client";

import { useEffect, useRef, useState } from "react";

// Counts from 0 up to `value` once, the first time the number scrolls into view.
// After it has played, it stays at the final value for the rest of the browser session
// (scrolling back, page reloads, and dev hot-reloads don't replay it).
const PLAYED_KEY = "countup-played";

function hasPlayed() {
  try {
    return sessionStorage.getItem(PLAYED_KEY) === "1";
  } catch {
    return false;
  }
}

function markPlayed() {
  try {
    sessionStorage.setItem(PLAYED_KEY, "1");
  } catch {}
}

// Renders the final value on the server and with reduced motion, so nothing is lost without JS.
export default function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1800,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasPlayed() || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    setDisplay(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          setDisplay(value * (1 - Math.pow(1 - t, 3)));
          if (t < 1) frame = requestAnimationFrame(tick);
          else markPlayed();
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
