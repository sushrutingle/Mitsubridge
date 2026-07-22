"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Map,
  Handshake,
  Users,
  Truck,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Company Formation",
    description:
      "Helping businesses establish compliant legal entities quickly.",
  },
  {
    icon: Map,
    title: "Market Entry Strategy",
    description:
      "Tailored expansion strategies for new international markets.",
  },
  {
    icon: Handshake,
    title: "Strategic Sales Development",
    description:
      "Building sales channels and strategic partnerships.",
  },
  {
    icon: Users,
    title: "Stakeholder Engagement",
    description:
      "Connecting businesses with government, industry, and ecosystem partners.",
  },
  {
    icon: Truck,
    title: "Logistics & Operations",
    description:
      "Supporting supply chain coordination and operational execution.",
  },
  {
    icon: Cpu,
    title: "Semiconductor & Manufacturing Advisory",
    description:
      "Specialist consulting for industrial manufacturing ecosystems.",
  },
];

export default function GlobalServices() {
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
            What We Do
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 md:text-lg">
            End-to-end support for international market entry and operational
            success.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => {
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
