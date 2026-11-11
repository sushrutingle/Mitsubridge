"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, GraduationCap } from "lucide-react";

const faqCategories = [
  {
    id: "faq",
    title: "Frequently Asked Questions",
    icon: GraduationCap,
    items: [
      {
        q: "What is MEAG, and who are the programmes for?",
        a: "MEAG is a UK-based AI education organisation offering applied AI and orchestration programmes for school students (Grades 7–12), undergraduates (CS, non-CS, and core engineering), MBAs, working professionals, and domain specialists (Law, Healthcare). Both technical and non-coding visual pathways are available.",
      },
      {
        q: "What makes MEAG different from standard AI tutorials?",
        a: "Unlike short tutorials that teach isolated tools, MEAG guides learners through a 7-stage curriculum (Search → Prompt → Select → Integrate → Build → Deploy Agents → Orchestrate Teams). Learners explore a 50+ tool ecosystem to build, integrate, and manage real-world AI workflows.",
      },
      {
        q: "What will I gain, and does MEAG help with careers?",
        a: "Learners earn a UK CPD-accredited certificate, build a practical \"Proof of Work\" portfolio (live workflows, agent designs, and enterprise solutions) for future employers, and receive direct mentorship from global industry practitioners. Get career guidance and access to internship and job networks (placements are performance-based, not guaranteed).",
      },
      {
        q: "How are programmes delivered, and what are the tech/fee requirements?",
        a: "Courses are delivered online via the MEAG platform. No specialist labs or paid AI subscriptions are required, standard computers with free-tier AI tools are sufficient. Fees are payable upfront, with flexible EMI financing options available via partner institutions.",
      },
      {
        q: "How can educational institutions partner with MEAG?",
        a: "Schools, colleges, and universities can partner with MEAG through two main engagement models: Curriculum Integration (credit-based courses embedded semester-wise) or Optional Subject Pathways (parallel credentials alongside core studies). Partnerships include MoU frameworks, complete faculty enablement, student implementation support, and parent orientation sessions.",
      },
    ],
  },
];

export default function MeagFaq() {
  return (
    <section id="meag-faq" className="bg-white px-6 py-28 md:py-36 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            Everything You Need to Know About MEAG
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600 md:text-lg">
            Find answers about MEAG programmes, certification, careers, pricing
            and institutional partnerships.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {faqCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl border border-light-gray bg-white p-8 md:p-10 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 rounded-lg bg-gold/5 px-4 py-2 mb-6">
                  <Icon size={20} className="text-gold" />
                  <h3 className="font-heading text-base font-semibold text-navy uppercase tracking-[0.15em]">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <FaqItem
                      key={category.id + i}
                      question={item.q}
                      answer={item.a}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="group"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-xl border border-light-gray bg-white px-5 py-4 text-left text-navy font-medium hover:bg-gold/5 hover:border-gold transition-all duration-200 focus:outline-none"
      >
        <span className="text-sm">{question}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""} text-gray-400 group-hover:text-gold`}
        />
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="overflow-hidden border-t border-light-gray pt-4 mt-1"
      >
        <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
}
