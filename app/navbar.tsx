"use client";

import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <nav className="mx-auto w-full max-w-6xl rounded-full border border-blue-400/25 bg-slate-900/45 shadow-[0_0_40px_rgba(59,130,246,0.2)] backdrop-blur-xl">
        <div className="flex items-center justify-between px-5 py-3 sm:px-7">
          <a
            href="#about"
            className="text-sm font-semibold tracking-[0.2em] text-blue-100 transition-colors duration-300 hover:text-blue-300"
          >
            RAHUL.DEV
          </a>

          <ul className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-slate-200 transition-all duration-300 hover:bg-blue-500/15 hover:text-blue-200 hover:shadow-[0_0_18px_rgba(59,130,246,0.35)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-full border border-blue-400/30 p-2 text-slate-100 transition-all duration-300 hover:border-blue-300 hover:bg-blue-500/15 hover:text-blue-200 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          </button>
        </div>

        {/* Mobile Menu */}

  <div
  className={`
    absolute left-1/2 top-20 z-50 w-[88%] -translate-x-1/2 md:hidden
    transition-all duration-300 ease-out
    ${
      isOpen
        ? "translate-y-0 opacity-100 scale-100"
        : "-translate-y-4 opacity-0 scale-95 pointer-events-none"
    }
  `}
>
    
    <div className="rounded-3xl border border-blue-500/15 bg-slate-900/90 p-4 shadow-[0_0_30px_rgba(59,130,246,0.12)] backdrop-blur-xl">
      
      <ul className="flex flex-col gap-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

    </div>

  </div>

      </nav>
    </header>
  );
}
