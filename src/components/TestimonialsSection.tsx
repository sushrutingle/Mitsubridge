"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { imageUrl } from "@/sanity/utils";
import type { Testimonial } from "@/sanity/types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  if (!testimonials.length) return null;

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
            Testimonials
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            What Our <span className="text-gold">Partners Say</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const profileUrl = testimonial.profileImage
              ? imageUrl(testimonial.profileImage, { width: 96, quality: 80 })
              : null;

            return (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-3xl border border-light-gray bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Quote
                  size={32}
                  className="absolute right-6 top-6 text-gold/20"
                />
                <p className="text-sm leading-relaxed text-gray-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4 border-t border-light-gray pt-6">
                  {profileUrl ? (
                    <Image
                      src={profileUrl}
                      alt={testimonial.name ?? "Testimonial"}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 font-heading text-lg font-bold text-gold">
                      {(testimonial.name ?? "?").charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <h4 className="font-heading text-base font-semibold text-navy">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {[testimonial.designation, testimonial.company]
                        .filter(Boolean)
                        .join(", ")}
                    </p>
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
