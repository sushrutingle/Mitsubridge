"use client";

import { MapPin, Phone, Mail, Globe, X, Send } from "lucide-react";

const footerSections = [
  {
    title: "Global Services",
    links: ["Market Entry", "Company Setup", "Sales Enablement", "Logistics"],
  },
  {
    title: "MEAG",
    links: ["AI Courses", "Workshops", "Governance", "Leadership"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy px-6 pt-20 pb-8 lg:px-12" id="contact">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-heading text-2xl font-bold text-white">
              Mitsu<span className="text-gold">Bridge</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Connecting businesses across borders while empowering leaders for
              the AI-powered future. International expertise meets executive AI
              education.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <Globe size={18} />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <X size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <Send size={18} />
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading text-lg font-semibold text-white">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 transition-colors duration-300 hover:text-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-heading text-lg font-semibold text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>London, United Kingdom</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>+44 (0) 20 7123 4567</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <a href="mailto:admissions@mitsubridgeglobal.co.uk" className="transition-colors duration-300 hover:text-gold">admissions@mitsubridgeglobal.co.uk</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} MitsuBridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
