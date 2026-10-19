"use client";

import { motion } from "framer-motion";

interface VideoSectionProps {
  videoId: string;
  title?: string;
  description?: string;
}

export default function VideoSection({ videoId = "HkwFplcSNLM", title, description }: VideoSectionProps) {
  return (
    <section className="bg-white px-6 py-20 md:py-28 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {title && (
            <>
              <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Watch Our Story
              </span>
              <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
                {title}
              </h2>
            </>
          )}
          {description && (
            <p className="mt-4 text-base leading-relaxed text-gray-500 md:text-lg max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-2xl overflow-hidden shadow-xl border border-light-gray bg-navy"
        >
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`}
              title="MitsuBridge Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}