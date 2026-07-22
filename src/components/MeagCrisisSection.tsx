"use client";

import { motion } from "framer-motion";
import { BookOpen, AlertTriangle, Search, School } from "lucide-react";

const challenges = [
  {
    icon: BookOpen,
    title: "Reduced Independent Learning",
    description:
      "Students increasingly rely on AI for answers rather than developing independent research and problem-solving skills.",
  },
  {
    icon: AlertTriangle,
    title: "Weak Critical Thinking",
    description:
      "Without structured AI guidance, students struggle to evaluate, challenge, and verify AI-generated information.",
  },
  {
    icon: Search,
    title: "Poor Academic Research Practices",
    description:
      "Unsupervised AI use leads to plagiarism risks and undermines the development of rigorous academic methodologies.",
  },
];

export default function MeagCrisisSection() {
  return (
    <section className="bg-navy px-6 py-28 md:py-36 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="font-heading text-7xl font-bold text-gold md:text-8xl">
            86%
          </div>
          <p className="mt-4 text-xl font-medium text-white md:text-2xl">
            Global businesses report an AI skills shortage.
          </p>
          <p className="mt-2 text-sm text-white/50">
            Source: AWS &amp; Access Partnership Research
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {challenges.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon size={28} />
                </div>
                <h3 className="font-heading mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 px-8 py-6"
        >
          <div className="flex items-start gap-4">
            <School size={24} className="mt-1 shrink-0 text-gold" />
            <div>
              <h4 className="font-heading text-lg font-semibold text-white">
                Why Schools Need to Act
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Schools have an opportunity to establish secure, accredited AI
                learning frameworks before students transition into university
                and professional careers. Early adoption of structured AI
                education creates a competitive advantage for both institutions
                and their students.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
