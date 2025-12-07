"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Departments", href: "#departments" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-aos-border/60 bg-aos-bg/80 backdrop-blur-xl">
      <div className="aos-container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-aos-primary to-aos-accent shadow-aos-soft" />
          <div className="flex flex-col leading-tight">
            <span className="text-xs uppercase tracking-[0.2em] text-aos-muted">
              AOS
            </span>
            <span className="text-sm font-semibold">Office Suite</span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm text-aos-muted md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-aos-text"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-4 flex items-center gap-3">
            <button className="rounded-full border border-aos-border px-4 py-1.5 text-xs font-medium text-aos-muted transition hover:border-aos-primary hover:text-aos-text">
              Sign in
            </button>
            <button className="rounded-full bg-gradient-to-r from-aos-primary to-aos-accent px-4 py-1.5 text-xs font-medium text-aos-text shadow-aos-soft transition hover:brightness-110">
              Get early access
            </button>
          </div>
        </nav>

        {/* Mobile button */}
        <button
          className="inline-flex items-center justify-center rounded-full border border-aos-border/80 p-1.5 text-aos-muted md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-aos-border/60 bg-aos-surface/95 px-4 pb-4 pt-2 md:hidden">
          <div className="space-y-2 text-sm text-aos-muted">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-lg px-2 py-1.5 transition hover:bg-aos-surface-alt hover:text-aos-text"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <button className="w-full rounded-full border border-aos-border px-4 py-2 text-xs font-medium text-aos-muted transition hover:border-aos-primary hover:text-aos-text">
              Sign in
            </button>
            <button className="w-full rounded-full bg-gradient-to-r from-aos-primary to-aos-accent px-4 py-2 text-xs font-medium text-aos-text shadow-aos-soft transition hover:brightness-110">
              Get early access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
