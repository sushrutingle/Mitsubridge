"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-light-bg px-6 py-24 md:py-32 lg:px-12" id="about">
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
                    "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=75')",
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gold p-6 shadow-lg md:p-8">
              <p className="font-heading text-3xl font-bold text-white md:text-4xl">
                25+
              </p>
              <p className="mt-1 text-xs font-medium text-white/80">
                Years of Excellence
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              About MitsuBridge
            </span>
            <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
              Building Bridges Between <br />
              <span className="text-gold">Global Business</span> and{" "}
              <span className="text-gold">Artificial Intelligence</span>
            </h2>
            <p className="mt-6 leading-relaxed text-gray-600">
              MitsuBridge combines decades of international business expertise
              with next-generation executive AI education.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Our Global division helps companies establish and scale
              international operations, while the MitsuBridge Executive AI Guild
              equips leaders with practical AI capability for an evolving digital
              economy.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Together, these complementary services enable organisations to grow
              confidently, innovate responsibly, and remain globally competitive.
            </p>
            <button className="mt-8 rounded-[20px] border-2 border-gold bg-gold px-8 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-gold/90 hover:scale-105">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
