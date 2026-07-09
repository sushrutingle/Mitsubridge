"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <div className="flex h-full flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative flex h-1/2 w-full cursor-pointer items-end overflow-hidden md:h-full md:w-1/2"
          onClick={() => scrollTo("journey")}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=75')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-navy/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <span className="mb-3 inline-block rounded-full border border-gold/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Division One
            </span>
            <h2 className="font-heading text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
              Global Business
              <br />
              <span className="text-gold">Expansion</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 md:text-base">
              International market entry, strategic partnerships, and operational
              excellence for manufacturing and semiconductor industries.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollTo("journey");
              }}
              className="mt-6 rounded-[20px] border-2 border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold/20 hover:scale-105"
            >
              Explore Global Services
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative flex h-1/2 w-full cursor-pointer items-end overflow-hidden md:h-full md:w-1/2"
          onClick={() => scrollTo("journey")}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=75')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-navy/85 via-navy/70 to-navy/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <span className="mb-3 inline-block rounded-full border border-gold/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Division Two
            </span>
            <h2 className="font-heading text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
              Executive AI
              <br />
              <span className="text-gold">Guild</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 md:text-base">
              CPD-certified AI programmes, executive workshops, and governance
              frameworks for the AI-powered future.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollTo("journey");
              }}
              className="mt-6 rounded-[20px] border-2 border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold/20 hover:scale-105"
            >
              Discover MEAG
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center pb-6 md:pb-8">
        <div className="rounded-2xl bg-white/10 px-6 py-4 text-center backdrop-blur-md md:px-10 md:py-5">
          <h1 className="font-heading text-xl leading-tight text-white md:text-2xl lg:text-3xl">
            One Company.
            <br className="md:hidden" />{" "}
            <span className="text-gold">Two Powerful Growth Paths.</span>
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-white/70 md:text-sm">
            MitsuBridge helps organisations expand across international markets
            while preparing leaders for the AI-powered future.
          </p>
        </div>
      </div>
    </section>
  );
}
