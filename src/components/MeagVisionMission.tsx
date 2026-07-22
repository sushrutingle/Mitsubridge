"use client";

import { motion } from "framer-motion";
import { Eye, Target, Brain, Wrench, Shield, Lightbulb } from "lucide-react";

const pillars = [
  { icon: Brain, title: "Active Cognitive Partnership" },
  { icon: Wrench, title: "Practical Capability Development" },
  { icon: Shield, title: "Responsible AI Usage" },
  { icon: Lightbulb, title: "Strategic Thinking" },
];

export default function MeagVisionMission() {
  return (
    <section className="bg-light-bg px-6 py-28 md:py-36 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-light-gray bg-white p-8 md:p-10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <Eye size={28} />
            </div>
            <h3 className="font-heading mt-5 text-2xl font-semibold text-navy">
              Vision
            </h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              To build a global community of strategic leaders who combine human
              critical thinking with secure, intelligent automation to solve
              modern workplace challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-light-gray bg-white p-8 md:p-10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <Target size={28} />
            </div>
            <h3 className="font-heading mt-5 text-2xl font-semibold text-navy">
              Mission
            </h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              To help students and educational institutions transition from
              passive AI users into expert AI coordinators capable of leading
              international projects.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group rounded-2xl border border-light-gray bg-white p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-gold/30"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-navy/5 text-navy transition-all duration-300 group-hover:bg-gold/10 group-hover:text-gold">
                  <Icon size={28} />
                </div>
                <h4 className="font-heading mt-4 text-base font-semibold text-navy">
                  {item.title}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
