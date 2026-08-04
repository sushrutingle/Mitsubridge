"use client";

import { motion } from "framer-motion";
import { Shield, Lightbulb, Wrench, Globe } from "lucide-react";
import { youtubeEmbedUrl } from "@/sanity/utils";

interface MeagAboutProps {
  youtubeUrl?: string | null;
}

const features = [
  {
    icon: Shield,
    title: "Responsible AI",
    description:
      "Ethical frameworks that ensure AI is used safely and transparently.",
  },
  {
    icon: Lightbulb,
    title: "Critical Thinking",
    description:
      "Developing analytical skills to evaluate AI outputs and decisions.",
  },
  {
    icon: Wrench,
    title: "Practical Skills",
    description:
      "Hands-on experience with real-world AI tools and applications.",
  },
  {
    icon: Globe,
    title: "Global Readiness",
    description:
      "Preparing students for international careers in the AI economy.",
  },
];

export default function MeagAbout({ youtubeUrl }: MeagAboutProps) {
  const embedSrc = youtubeEmbedUrl(youtubeUrl) ?? "https://www.youtube.com/embed/IOozXb9jAF8";

  return (
    <section
      id="meag-programme"
      className="bg-white px-6 py-28 md:py-36 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <div className="aspect-video w-full">
                <iframe
                  src={embedSrc}
                  title="MEAG Programme Overview"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
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
              About the Programme
            </span>
            <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
              The Bridge to Global{" "}
              <span className="text-gold">AI Leadership</span>
            </h2>
            <p className="mt-6 leading-relaxed text-gray-600">
              MitsuBridge Executive AI Guild (MEAG) is designed to help schools
              prepare students for the future workforce by combining critical
              thinking with responsible AI adoption.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Rather than teaching students how to simply use AI tools, the
              programme develops strategic thinkers capable of leading AI-enabled
              projects.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              The initiative addresses growing global demand for professionals
              who understand how AI creates value across business, research, and
              innovation.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-light-gray bg-light-bg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-heading mt-3 text-sm font-semibold text-navy">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
