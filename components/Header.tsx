"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-card">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-base font-semibold tracking-tight" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </nav>

        <button
          type="button"
          className="relative h-10 w-10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute left-2 right-2 h-px bg-paper transition-transform duration-300 ${
              open ? "top-1/2 rotate-45" : "top-[15px]"
            }`}
          />
          <span
            className={`absolute left-2 right-2 h-px bg-paper transition-transform duration-300 ${
              open ? "top-1/2 -rotate-45" : "top-[25px]"
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line px-6 pb-4 md:hidden">
          {nav.map((item) => (
            <NavLink key={item.label} {...item} mobile onClick={() => setOpen(false)} />
          ))}
        </nav>
      )}
    </header>
  );
}

function NavLink({
  label,
  href,
  external,
  mobile,
  onClick,
}: {
  label: string;
  href?: string;
  external?: boolean;
  mobile?: boolean;
  onClick?: () => void;
}) {
  const className = mobile
    ? "border-b border-line py-4 text-lg hover:text-volt"
    : "text-[15px] text-paper/80 transition-colors hover:text-volt";

  // No destination yet: render the label without a link.
  if (!href) {
    return (
      <span className={`${className} cursor-default hover:text-paper/80`} aria-disabled="true">
        {label}
      </span>
    );
  }

  if (external) {
    return (
      <a href={href} className={className} onClick={onClick} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}
