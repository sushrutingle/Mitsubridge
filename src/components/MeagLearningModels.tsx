"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, Home } from "lucide-react";

const models = [
  {
    icon: BookOpen,
    title: "In-Class Delivery",
    description:
      "Embedded into the school timetable, our in-class delivery model integrates AI education directly into existing lessons. Teachers guide students through structured modules covering AI fundamentals, ethics, and practical applications without needing specialist expertise.",
  },
  {
    icon: Clock,
    title: "After-School Programme",
    description:
      "Our flexible after-school programme offers students the opportunity to explore AI and digital skills outside regular academic hours. This model is ideal for schools looking to offer enrichment activities that build career-relevant capabilities.",
  },
  {
    icon: Home,
    title: "Home Study",
    description:
      "Designed for independent learners, the home study pathway allows students to progress through CPD-certified AI modules at their own pace. Supported by online resources, mentorship, and progress tracking to ensure successful completion.",
  },
];

export default function MeagLearningModels() {
  return (
    <section className="bg-white px-6 py-28 md:py-36 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Learning Models
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            Flexible{" "}
            <span className="text-gold">Learning Models</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 md:text-lg">
            Choose the delivery model that best fits your institution and
            students.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {models.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-3xl border border-light-gray bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold to-gold/60 transition-all duration-500 group-hover:w-full" />
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon size={28} />
                </div>
                <h3 className="font-heading mt-6 text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-gray-500">
                  {item.description}
                </p>
                <button className="mt-6 rounded-[20px] border-2 border-gold px-6 py-2 text-sm font-semibold tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white hover:scale-105">
                  Learn More
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
