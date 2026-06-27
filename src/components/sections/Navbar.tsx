"use client";

import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { NAV_ITEMS, PERSONAL_INFO } from "@/lib/constants";
import ThemeToggle from "@/components/ThemeToggle";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full backdrop-blur-md ${className}`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <a
          href="#home"
          className="font-display text-[28px] leading-[1.2] tracking-tight text-neutral-white transition-all hover:text-accent-light"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 rounded-[--radius-pill] border border-neutral-dark-gray/50 bg-neutral-card/80 px-2 py-1 backdrop-blur-sm lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[--radius-pill] px-5 py-2 font-body text-[14px] font-medium text-neutral-offwhite transition-all hover:bg-accent/10 hover:text-accent-light"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA button + theme toggle desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-[--radius-pill] bg-accent px-6 py-2.5 font-body text-[14px] font-bold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex items-center justify-center lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <BiX size={28} className="text-neutral-white" />
          ) : (
            <BiMenu size={28} className="text-neutral-white" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-neutral-dark-gray/30 bg-neutral-card/95 p-6 backdrop-blur-lg lg:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-[--radius-input] px-4 py-3 font-body text-[16px] font-medium text-neutral-offwhite transition-colors hover:bg-accent/10 hover:text-accent-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
