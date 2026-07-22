"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Global", href: "/global" },
  { label: "MEAG", href: "/meag" },
  { label: "About", href: "/#about" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/global") return pathname === "/global";
    if (href === "/meag") return pathname === "/meag";
    return pathname === "/" && href.startsWith("/#");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-500 md:h-11 md:w-11 ${
              scrolled
                ? "border-navy/20 bg-navy/5"
                : "border-white/30 bg-white/10"
            }`}
          >
            <svg
              className={`h-5 w-5 transition-colors duration-500 md:h-6 md:w-6 ${
                scrolled ? "text-navy/60" : "text-white/60"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span
            className={`font-heading text-2xl font-bold tracking-tight transition-colors duration-500 ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            Mitsu<span className="text-gold">Bridge</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                isActive(link.href)
                  ? "text-gold"
                  : scrolled
                    ? "text-navy"
                    : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className={`rounded-[20px] border-2 px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 ${
              scrolled
                ? "border-gold text-gold hover:bg-gold hover:text-white"
                : "border-white text-white hover:bg-white hover:text-navy"
            }`}
          >
            Book a Consultation
          </Link>
        </div>

        <button
          className={`lg:hidden transition-colors duration-500 ${
            scrolled ? "text-navy" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 pb-8 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                    isActive(link.href) ? "text-gold" : "text-navy"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="rounded-[20px] border-2 border-gold px-6 py-2.5 text-center text-sm font-semibold tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
