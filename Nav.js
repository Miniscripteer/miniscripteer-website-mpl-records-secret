"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import AuthButtons from "./AuthButtons";

const LINKS = [
  { href: "/store", label: "Store" },
  { href: "/news", label: "News" },
  { href: "/countdown", label: "Countdown" },
  { href: "/mplrecords", label: "MPL Records" },
  { href: "/credits", label: "Credits" },
  { href: "/affiliates", label: "Affiliates" },
  { href: "/info", label: "Info" },
  { href: "/contacts", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-mono text-lg tracking-tight text-amber">
          miniscripteer<span className="text-fog">_</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-mono text-sm transition-colors hover:text-amber ${
                pathname === l.href ? "text-amber" : "text-fog"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <AuthButtons />
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="font-mono text-sm text-fog md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-line px-5 py-4 md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-fog hover:text-amber"
            >
              {l.label}
            </Link>
          ))}
          <AuthButtons />
        </nav>
      )}
    </header>
  );
}
