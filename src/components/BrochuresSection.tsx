"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { imageUrl } from "@/sanity/utils";
import type { Brochure } from "@/sanity/types";

interface BrochuresSectionProps {
  brochures: Brochure[];
}

export default function BrochuresSection({ brochures }: BrochuresSectionProps) {
  if (!brochures.length) return null;

  return (
    <section className="bg-light-bg px-6 py-28 md:py-36 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Brochures
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            Resources &amp; <span className="text-gold">Brochures</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {brochures.map((brochure, index) => {
            const coverUrl = brochure.image
              ? imageUrl(brochure.image, { width: 800, quality: 75 })
              : null;
            const downloadHref = brochure.downloadLink ?? brochure.fileUrl;

            return (
              <motion.div
                key={`${brochure.title}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col overflow-hidden rounded-3xl border border-light-gray bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden bg-light-bg">
                  {coverUrl ? (
                    <Image
                      src={coverUrl}
                      alt={brochure.title ?? "Brochure"}
                      width={800}
                      height={500}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy to-navy/70">
                      <FileText size={40} className="text-gold" />
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                        Brochure
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h4 className="font-heading text-lg font-semibold text-navy">
                    {brochure.title}
                  </h4>
                  {brochure.description && (
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {brochure.description}
                    </p>
                  )}
                  <div className="mt-auto pt-6">
                    {downloadHref ? (
                      <a
                        href={downloadHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-[20px] border-2 border-gold bg-gold px-6 py-2.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-gold/90 hover:scale-[1.03]"
                      >
                        <Download size={16} />
                        {brochure.buttonText ?? "Download"}
                      </a>
                    ) : (
                      <div className="w-full rounded-[20px] border-2 border-light-gray px-6 py-2.5 text-center text-sm font-semibold tracking-wide text-gray-400">
                        {brochure.buttonText ?? "Download"}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
