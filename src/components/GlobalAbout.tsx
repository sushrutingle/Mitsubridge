"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const capabilities = [
  "Entity formation",
  "Regulatory compliance",
  "Stakeholder engagement",
  "Sales development",
  "Logistics coordination",
  "Operational scaling",
];

export default function GlobalAbout() {
  return (
    <section id="about-global" className="bg-white px-6 py-28 md:py-36 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl">
              <div
                className="aspect-[4/5] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=75')",
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              About Us
            </span>
            <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
              Who We Are
            </h2>
            <p className="mt-6 leading-relaxed text-gray-600">
              MitsuBridge Global is a strategic market entry and operations
              partner for semiconductor, automotive, OEM, and advanced
              manufacturing companies expanding into the United Kingdom, India,
              Poland and the United States.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              As a newly established arm of MidasTouch Solutions Mitsubishi
              Services Ltd (MTMS), MitsuBridge Global combines deep domain
              expertise in industrial manufacturing with on-the-ground execution
              capabilities.
            </p>
            <p className="mt-4 font-semibold text-navy">
              We support international businesses in:
            </p>
            <ul className="mt-4 space-y-3">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                  <span className="capitalize">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
