"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const pathways = [
  {
    flag: "IN",
    country: "India",
    opportunities: [
      "Domestic Tech Giants & GCCs",
      "High-Growth AI Startups",
      "Engineering & Enterprise Hubs",
    ],
    gradient: "from-navy/5 to-navy/10",
  },
  {
    flag: "GB",
    country: "United Kingdom",
    opportunities: [
      "CPD-Recognized Tech Roles",
      "London Financial & AI Labs",
      "Research & Consulting Firms",
    ],
    gradient: "from-gold/5 to-gold/10",
  },
  {
    flag: "US",
    country: "United States",
    opportunities: [
      "Silicon Valley & Tech Hubs",
      "Enterprise AI Systems",
      "Remote & Global Internships",
    ],
    gradient: "from-navy/5 to-gold/5",
  },
  {
    flag: "PL",
    country: "Poland",
    opportunities: [
      "European R&D & Tech Centers",
      "Enterprise Software Engineering",
      "Global Capability Centers (GCCs)",
    ],
    gradient: "from-gold/5 to-gold/10",
  },
  {
    flag: "SG",
    country: "Singapore",
    opportunities: [
      "Southeast Asian Tech Hubs",
      "Commercial AI & Fintech",
      "Enterprise Data Ecosystems",
    ],
    gradient: "from-navy/5 to-gold/5",
  },
];

function FlagPlaceholder({ code }: { code: string }) {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-light-gray bg-white shadow-sm">
      <MapPin size={28} className="text-navy/40" />
    </div>
  );
}

export default function MeagCareerPathways() {
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
            Global Pathways
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            Global Career Mobility & Industry Networks
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gold/90 max-w-2xl mx-auto">
            Connecting students to verified AI roles across international tech hubs and high-growth domestic sectors.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pathways.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group rounded-2xl border border-light-gray bg-gradient-to-br ${item.gradient} p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}
            >
              <FlagPlaceholder code={item.flag} />
              <h3 className="font-heading mt-5 text-xl font-semibold text-navy">
                {item.country}
              </h3>
              <ul className="mt-4 space-y-2">
                {item.opportunities.map((opp) => (
                  <li
                    key={opp}
                    className="text-sm text-gray-500"
                  >
                    {opp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
