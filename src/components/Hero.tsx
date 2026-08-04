"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { imageUrl } from "@/sanity/utils";
import type { SanityImageSource } from "@/sanity/types";

interface HeroProps {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: SanityImageSource | null;
}

function renderHeading(text: string | undefined) {
  if (!text) {
    return (
      <>
        Executive AI
        <br />
        <span className="text-gold">Guild</span>
      </>
    );
  }
  const parts = text.trim().split(/\s+/);
  if (parts.length < 2) {
    return <span className="text-gold">{text}</span>;
  }
  const last = parts[parts.length - 1];
  const rest = parts.slice(0, -1).join(" ");
  return (
    <>
      {rest}
      <br />
      <span className="text-gold">{last}</span>
    </>
  );
}

export default function Hero({
  heading,
  subheading,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroProps) {
  const router = useRouter();

  const bgUrl = backgroundImage
    ? imageUrl(backgroundImage, { width: 1600, quality: 75 })
    : null;

  const meagHref = ctaLink ?? "/meag";

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: bgUrl
            ? `url('${bgUrl}')`
            : "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=75')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/65 to-navy/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex flex-1 cursor-pointer items-end overflow-hidden"
          onClick={() => router.push(meagHref)}
        >
          <div className="p-8 md:p-12 lg:p-16 xl:pl-20">
            <span className="mb-3 inline-block rounded-full border border-gold/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Division One
            </span>
            <h2 className="font-heading text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
              {renderHeading(heading)}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 md:text-base">
              {subheading ||
                "CPD-certified AI programmes, executive workshops, and governance frameworks for the AI-powered future."}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                router.push(meagHref);
              }}
              className="mt-6 rounded-[20px] border-2 border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold/20 hover:scale-105"
            >
              {ctaText ?? "Discover MEAG"}
            </button>
          </div>
        </motion.div>

        <div className="hidden h-3/4 self-center w-px bg-white/10 md:block" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex flex-1 cursor-pointer items-end overflow-hidden"
          onClick={() => router.push("/global")}
        >
          <div className="p-8 md:p-12 lg:p-16 xl:pr-20">
            <span className="mb-3 inline-block rounded-full border border-gold/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Division Two
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
                router.push("/global");
              }}
              className="mt-6 rounded-[20px] border-2 border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold/20 hover:scale-105"
            >
              Explore Global Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
