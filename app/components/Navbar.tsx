"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Overview" },
  { href: "/drones", label: "Drone Systems" },
  { href: "/ai-tools", label: "AI Tools" },
  { href: "/comparison", label: "Comparison" },
  { href: "/components-page", label: "Components" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#080c18]/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-blue-400 text-xl">◈</span>
            <span className="font-bold text-slate-100 tracking-tight text-sm sm:text-base">
              Drones & AI / War Tech Analysis
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-slate-400 hover:text-blue-400 rounded-md transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-[#080c18]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-4 py-3 text-sm text-slate-400 hover:text-blue-400 hover:bg-slate-800/50 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
