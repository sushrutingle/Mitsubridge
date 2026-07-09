"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const globalBullets = [
  "International Market Entry",
  "Company Formation",
  "Strategic Sales Enablement",
  "Channel Development",
  "Logistics Coordination",
  "Operational Support",
  "Semiconductor Expertise",
];

const meagBullets = [
  "AI Strategy",
  "AI Governance",
  "Executive Workshops",
  "CPD-Certified Courses",
  "School Leadership Programmes",
  "AI Orchestration",
  "Digital Portfolio Development",
];

function JourneyCard({
  icon,
  title,
  description,
  bullets,
  buttonLabel,
  gradientFrom,
  gradientTo,
  id,
}: {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  buttonLabel: string;
  gradientFrom: string;
  gradientTo: string;
  id: string;
}) {
  const scrollToSection = () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl border border-light-gray bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-10 lg:p-12"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]`}
      />
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold to-gold/60 transition-all duration-500 group-hover:w-full" />

      <div className="relative z-10">
        <span className="inline-block text-5xl md:text-6xl">{icon}</span>
        <h3 className="font-heading mt-4 text-2xl leading-tight text-navy md:text-3xl">
          {title}
        </h3>
        <p className="mt-4 leading-relaxed text-gray-600">{description}</p>
        <ul className="mt-6 space-y-3">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
              <Check size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={scrollToSection}
          className="mt-8 inline-block rounded-[20px] border-2 border-gold px-8 py-3 text-sm font-semibold tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-white hover:scale-105"
        >
          {buttonLabel}
        </button>
      </div>
    </motion.div>
  );
}

export default function JourneySection() {
  return (
    <section id="journey" className="bg-light-bg px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Our Divisions
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            Choose Your Journey
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 md:text-lg">
            MitsuBridge operates through two specialised divisions designed to
            help organisations grow globally and lead confidently in the age of
            Artificial Intelligence.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <JourneyCard
            icon="🌍"
            title="Global Market Expansion"
            description="Expand into international markets with tailored business development, operational support, and strategic partnerships focused on manufacturing and semiconductor industries."
            bullets={globalBullets}
            buttonLabel="Explore Global"
            gradientFrom="from-navy"
            gradientTo="to-navy/10"
            id="stats"
          />
          <JourneyCard
            icon="🤖"
            title="Executive AI Guild (MEAG)"
            description="Build executive AI capability through CPD-certified programmes, leadership workshops, governance frameworks, and applied AI learning without requiring technical expertise."
            bullets={meagBullets}
            buttonLabel="Explore MEAG"
            gradientFrom="from-gold"
            gradientTo="to-gold/10"
            id="expertise"
          />
        </div>
      </div>
    </section>
  );
}
