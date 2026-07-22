"use client";

import { motion } from "framer-motion";

export default function GlobalHero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[85vh] min-h-[550px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=75')",
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
            <span className="mb-4 inline-block rounded-full border border-gold/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Global Business Expansion
            </span>
            <h1 className="font-heading text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Global Business
              <br />
              <span className="text-gold">Expansion</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Helping semiconductor, automotive, OEM, and advanced manufacturing
              companies establish and scale successful operations across the
              United Kingdom, India, Poland and the United States.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollTo("contact-global")}
                className="rounded-[20px] border-2 border-gold bg-gold px-8 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-gold/90 hover:scale-105"
              >
                Contact Us
              </button>
              <button
                onClick={() => scrollTo("about-global")}
                className="rounded-[20px] border-2 border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold/20 hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
