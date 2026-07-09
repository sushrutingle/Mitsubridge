"use client";

import { motion } from "framer-motion";
import { Globe, Share2, Brain, GraduationCap } from "lucide-react";

const expertise = [
  {
    icon: Globe,
    title: "International Market Entry",
    description:
      "Tailored business development, market entry strategy, company setup, and operational support that enables organisations to expand confidently into international markets.",
  },
  {
    icon: Share2,
    title: "Strategic Ecosystem Connections",
    description:
      "Leveraging MitsuBridge's international partnerships and Tech London Advocates network to connect businesses with strategic opportunities across global innovation ecosystems.",
  },
  {
    icon: Brain,
    title: "Executive AI Strategy & Governance",
    description:
      "Helping leadership teams develop AI adoption strategies, governance frameworks, responsible AI practices, and executive-level AI capability.",
  },
  {
    icon: GraduationCap,
    title: "Applied Learning & Leadership",
    description:
      "Delivering CPD-certified AI orchestration programmes, leadership development, and practical AI learning for executives, professionals, and educational institutions.",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-white px-6 py-28 md:py-36 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Core Capabilities
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            Our Core Expertise
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 md:text-lg">
            Four pillars that define how MitsuBridge delivers value across
            global business and AI leadership.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group rounded-2xl border border-light-gray bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-gold/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy/5 text-navy transition-all duration-300 group-hover:bg-gold/10 group-hover:text-gold">
                  <Icon size={28} />
                </div>
                <h3 className="font-heading mt-6 text-xl leading-tight text-navy">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
