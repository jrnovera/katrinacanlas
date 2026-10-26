"use client";

import { useEffect, useState } from "react";

// Renders `text` with each of `phrases` marked. The highlight steps through them on a timer,
// and jumps to (and holds on) whichever phrase the pointer is over.
export default function CyclingHighlights({
  text,
  phrases,
  interval = 2400,
}: {
  text: string;
  phrases: string[];
  interval?: number;
}) {
  const [active, setActive] = useState(-1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % phrases.length), interval);
    return () => clearInterval(id);
  }, [paused, phrases.length, interval]);

  // Split the sentence into plain runs and phrase indices, in order.
  const parts: (string | number)[] = [];
  let rest = text;
  phrases.forEach((phrase, i) => {
    const at = rest.indexOf(phrase);
    if (at < 0) return;
    parts.push(rest.slice(0, at), i);
    rest = rest.slice(at + phrase.length);
  });
  parts.push(rest);

  return (
    <>
      {parts.map((part, k) =>
        typeof part === "string" ? (
          part
        ) : (
          <span
            key={k}
            className={`hl ${part === active ? "is-active" : ""}`}
            onPointerEnter={() => {
              setActive(part);
              setPaused(true);
            }}
            onPointerLeave={() => setPaused(false)}
          >
            {phrases[part]}
          </span>
        ),
      )}
    </>
  );
}
