"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Globe } from "lucide-react";

export default function GlobalContact() {
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
            Get in Touch
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            Contact Information
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-light-gray bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Mail size={28} />
              </div>
              <h3 className="font-heading mt-5 text-lg font-semibold text-navy">
                Email
              </h3>
              <a
                href="mailto:admissions@mitsubridgeglobal.co.uk"
                className="mt-2 block text-sm text-gray-500 transition-colors hover:text-gold"
              >
                admissions@mitsubridgeglobal.co.uk
              </a>
            </div>

            <div className="rounded-2xl border border-light-gray bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <MapPin size={28} />
              </div>
              <h3 className="font-heading mt-5 text-lg font-semibold text-navy">
                Service Regions
              </h3>
              <div className="mt-2 space-y-1">
                {["United Kingdom", "India", "Poland", "United States"].map(
                  (region) => (
                    <p
                      key={region}
                      className="text-sm text-gray-500"
                    >
                      {region}
                    </p>
                  )
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-light-gray bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Globe size={28} />
              </div>
              <h3 className="font-heading mt-5 text-lg font-semibold text-navy">
                Business Focus
              </h3>
              <div className="mt-2 space-y-1">
                {[
                  "Semiconductor",
                  "OEM",
                  "Automotive",
                  "Advanced Manufacturing",
                ].map((focus) => (
                  <p key={focus} className="text-sm text-gray-500">
                    {focus}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
