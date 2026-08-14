"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function GlobalCTA() {
  return (
    <section
      id="contact-global"
      className="relative overflow-hidden bg-navy px-6 py-28 md:py-36 lg:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,163,78,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,163,78,0.05),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
            Ready to Expand?
          </h2>
          <p className="mt-4 text-lg font-medium text-gold">
            Join the Growing Number of Successful Businesses
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            We are committed to your success and ready to provide the support
            you need for your market expansion in the UK.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:admissions@mitsubridgeglobal.co.uk"
              className="rounded-[20px] border-2 border-gold bg-gold px-8 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-gold/90 hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="mailto:admissions@mitsubridgeglobal.co.uk"
              className="rounded-[20px] border-2 border-white/30 px-8 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:scale-105"
            >
              Schedule a Consultation
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
            <Mail size={20} className="text-gold" />
            <a
              href="mailto:admissions@mitsubridgeglobal.co.uk"
              className="text-sm font-medium text-white/90 transition-colors hover:text-gold"
            >
              admissions@mitsubridgeglobal.co.uk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
