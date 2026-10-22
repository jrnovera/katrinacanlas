"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

// Fades children up into view the first time they enter the viewport.
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  id,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} id={id} className={`reveal ${className}`} style={{ "--delay": `${delay}ms` } as React.CSSProperties}>
      {children}
    </Tag>
  );
}
