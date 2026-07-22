"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award } from "lucide-react";

export default function MeagAccreditation() {
  return (
    <section className="bg-light-bg px-6 py-28 md:py-36 lg:px-12">
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
              <div className="flex aspect-[3/4] w-full items-center justify-center bg-navy/5">
                <div className="text-center">
                  <Award size={80} className="mx-auto text-gold/60" />
                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.15em] text-gray-400">
                    Certificate
                    <br />
                    Placeholder
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Accreditation
            </span>
            <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
              UK <span className="text-gold">CPD</span> Accredited
            </h2>
            <p className="mt-6 leading-relaxed text-gray-600">
              The curriculum aligns with official UK Continuing Professional
              Development standards, ensuring that every module meets rigorous
              quality benchmarks for executive and professional education.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Certification is internationally recognised by universities and
              employers, giving students a competitive edge in global higher
              education admissions and career applications.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-gold/30 bg-gold/5 px-6 py-4">
              <ShieldCheck size={28} className="text-gold" />
              <div>
                <p className="text-sm font-semibold text-navy">
                  UK CPD Certified
                </p>
                <p className="text-xs text-gray-500">
                  Internationally recognised accreditation
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
