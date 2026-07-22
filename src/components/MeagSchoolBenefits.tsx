"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Cloud,
  MonitorOff,
  GraduationCap,
  Headphones,
  BookMarked,
} from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "International AI Framework",
    description:
      "A globally relevant AI curriculum aligned with UK CPD standards.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based Delivery",
    description:
      "Fully online platform accessible from any device, anywhere.",
  },
  {
    icon: MonitorOff,
    title: "No Specialist Hardware",
    description:
      "Works on existing school infrastructure — no expensive equipment needed.",
  },
  {
    icon: GraduationCap,
    title: "Complimentary Teacher Training",
    description:
      "Professional development included at no additional cost.",
  },
  {
    icon: Headphones,
    title: "Implementation Support",
    description:
      "Dedicated support team to assist with rollout and integration.",
  },
  {
    icon: BookMarked,
    title: "Curriculum Integration",
    description:
      "Designed to complement existing curricula across subject areas.",
  },
];

export default function MeagSchoolBenefits() {
  return (
    <section className="bg-light-bg px-6 py-28 md:py-36 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            For Schools
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            Empowering{" "}
            <span className="text-gold">Educational Institutions</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-2xl border border-light-gray bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-gold/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy/5 text-navy transition-all duration-300 group-hover:bg-gold/10 group-hover:text-gold">
                  <Icon size={28} />
                </div>
                <h3 className="font-heading mt-5 text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
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
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold/20 bg-white px-8 py-6 text-center shadow-sm"
        >
          <p className="text-base font-medium leading-relaxed text-navy">
            Teachers do not require engineering or AI backgrounds. Comprehensive
            professional development is included.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
