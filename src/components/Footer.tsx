"use client";

import { MapPin, Phone, Mail, Globe, X, Shield } from "lucide-react";

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
                href="https://www.instagram.com/mitsubridge/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-2.75a1 1 0 110 2 1 1 0 010-2z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61594878226701#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
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
                <span>+91 7304756419</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <a href="mailto:admissions@mitsubridgeglobal.co.uk" className="transition-colors duration-300 hover:text-gold">
                  admissions@mitsubridgeglobal.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Shield size={16} className="mt-0.5 shrink-0 text-gold" />
                <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/privacy/`} className="transition-colors duration-300 hover:text-gold">
                  Privacy Policy
                </a>
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
