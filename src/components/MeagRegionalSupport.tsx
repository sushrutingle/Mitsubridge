"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function MeagRegionalSupport() {
  return (
    <section className="bg-white px-6 py-28 md:py-36 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Regional Team
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            Regional{" "}
            <span className="text-gold">Support</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="aspect-[4/5] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=75')",
                }}
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <MapPin size={14} />
                Strategic Regional Lead
              </div>
              <h3 className="font-heading mt-5 text-2xl font-bold text-navy md:text-3xl">
                Jagruti Milind Mangalvedhekar
              </h3>
              <p className="mt-2 text-base font-medium text-gold">
                Strategic Regional Partner and AI Orchestration Advisor
              </p>
              <p className="mt-5 leading-relaxed text-gray-600">
                Responsible for onboarding schools, workshop coordination and
                implementation support.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
