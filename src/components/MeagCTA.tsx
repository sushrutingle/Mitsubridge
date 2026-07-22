"use client";

import { motion } from "framer-motion";

export default function MeagCTA() {
  return (
    <section
      id="meag-partner"
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
            Transform AI Education
            <br />
            <span className="text-gold">at Your Institution</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Help your students build globally recognised AI capabilities while
            positioning your institution as a leader in responsible AI
            education.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() =>
                document
                  .getElementById("meag-partner")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-[20px] border-2 border-gold bg-gold px-8 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-gold/90 hover:scale-105"
            >
              Become a Partner School
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("meag-programme")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-[20px] border-2 border-white/30 px-8 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:scale-105"
            >
              Contact MEAG
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
