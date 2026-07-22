"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Search,
  FlaskConical,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Eye,
  Brain,
  AlertTriangle,
  Shield,
  Lock,
  Smile,
} from "lucide-react";

const benefits = [
  { icon: BookOpen, title: "AI Across Academic Disciplines" },
  { icon: Search, title: "AI Research Enhancement" },
  { icon: FlaskConical, title: "Scientific Exploration" },
  { icon: Sparkles, title: "Creative Applications" },
  { icon: ShieldCheck, title: "Academic Integrity" },
  { icon: CheckCircle2, title: "AI Verification" },
  { icon: Eye, title: "Critical Evaluation" },
  { icon: Brain, title: "Responsible AI" },
  { icon: AlertTriangle, title: "AI Bias Awareness" },
  { icon: Shield, title: "Cybersecurity" },
  { icon: Lock, title: "Data Privacy" },
  { icon: Smile, title: "Digital Wellbeing" },
];

export default function MeagStudentBenefits() {
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
            Student Benefits
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            Preparing Students for{" "}
            <span className="text-gold">Global Careers</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex items-start gap-3 rounded-xl border border-light-gray bg-light-bg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-gold/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                  <Icon size={18} />
                </div>
                <p className="pt-1.5 text-sm font-medium leading-snug text-navy">
                  {item.title}
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
          className="mx-auto mt-12 max-w-4xl rounded-2xl border border-gold/20 bg-gradient-to-r from-gold/5 to-navy/5 px-8 py-6 text-center"
        >
          <p className="text-base font-medium leading-relaxed text-navy md:text-lg">
            Students build verified digital portfolios that strengthen university
            applications and future employment opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-6 py-2 text-sm font-semibold text-gold">
            <ShieldCheck size={18} />
            Successful participants receive internationally recognised UK CPD
            Certification.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
