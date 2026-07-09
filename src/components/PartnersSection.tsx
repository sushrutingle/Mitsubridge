"use client";

import { motion } from "framer-motion";

const partners = [
  "Global Tech Advocates",
  "Tech London Advocates",
  "University Partners",
  "Industry Partners",
  "Manufacturing Associations",
  "Semiconductor Alliance",
  "AI Leadership Forum",
  "Digital Innovation Network",
];

export default function PartnersSection() {
  return (
    <section className="overflow-hidden bg-white px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Our Network
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            Trusted Networks
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            Backed by strategic alliances across industries and borders.
          </p>
        </motion.div>
      </div>

      <div className="relative mt-16 overflow-hidden">
        <div className="flex gap-16 animate-scroll">
          {[...partners, ...partners].map((name, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center justify-center"
            >
              <div className="flex h-20 w-48 items-center justify-center rounded-2xl border border-light-gray bg-light-bg px-6 transition-all duration-300 hover:border-gold/50 hover:bg-gold/5 hover:shadow-md group">
                <span className="text-center text-sm font-semibold tracking-wide text-gray-400 transition-colors duration-300 group-hover:text-navy">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
