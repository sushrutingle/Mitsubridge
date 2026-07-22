"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Network, Brain } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "UK CPD Certified" },
  { icon: Network, label: "Global Career Pathways" },
  { icon: Brain, label: "Hands-on AI Leadership" },
];

export default function MeagHero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=75')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/65 to-navy/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <ShieldCheck size={14} />
              UK CPD Certified
            </span>
            <h1 className="font-heading text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              MitsuBridge
              <br />
              <span className="text-gold">Executive AI Guild</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Preparing students for global careers through UK CPD-certified
              pathways and hands-on AI leadership training.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollTo("meag-partner")}
                className="rounded-[20px] border-2 border-gold bg-gold px-8 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-gold/90 hover:scale-105"
              >
                Partner With Us
              </button>
              <button
                onClick={() => scrollTo("meag-programme")}
                className="rounded-[20px] border-2 border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold/20 hover:scale-105"
              >
                Explore the Programme
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {badges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm"
                  >
                    <Icon size={14} className="text-gold" />
                    {badge.label}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
