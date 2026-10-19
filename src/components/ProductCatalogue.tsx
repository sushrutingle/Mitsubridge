"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight, GraduationCap, Briefcase, BookOpen, Layers, Target, Users, Cpu, Shield, Scale, Code, FlaskConical, Landmark, Stethoscope, Building2 } from "lucide-react";

interface Product {
  title: string;
  audience: string;
  duration: string;
  price: string;
  cpdHours: string;
  description: string;
  brochureUrl: string;
  category: "students" | "professionals";
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const studentProducts: Product[] = [
  {
    title: "MEAG CS AI Engineering Certificate",
    audience: "CS & IT Engineer / MCA",
    duration: "5 semesters",
    price: "₹9,000 / semester",
    cpdHours: "96 CPD hours (5 sems)",
    description: "AI-powered software, intelligent workflows, knowledge systems and AI agents.",
    brochureUrl: "https://drive.google.com/file/d/1w_DAjqJxxYjkOkvVUdxhb9PpKh3z2VWK/view?usp=drive_link",
    category: "students",
    icon: Code,
  },
  {
    title: "MEAG Industrial AI Engineering Certificate",
    audience: "Non-CS Core Engineer",
    duration: "5 semesters",
    price: "₹9,000 / semester",
    cpdHours: "96 CPD hours (5 sems)",
    description: "AI for industrial systems, sensors, automation, robotics and infrastructure.",
    brochureUrl: "https://drive.google.com/file/d/1w_DAjqJxxYjkOkvVUdxhb9PpKh3z2VWK/view?usp=drive_link",
    category: "students",
    icon: Cpu,
  },
  {
    title: "MEAG AI Specialist Certificate",
    audience: "Under Graduates (Any Stream)",
    duration: "1 Year",
    price: "₹28,000",
    cpdHours: "48 CPD hours",
    description: "Learn how to select, structure, and integrate AI capabilities into study, research, business, and workplace workflows.",
    brochureUrl: "https://drive.google.com/file/d/1nt78Q3FAiqobUS5p5ZpptKlpOD9fXmG3/view?usp=drive_link",
    category: "students",
    icon: BookOpen,
  },
  {
    title: "MEAG International Junior AI Certificate",
    audience: "Grades 7-9 (School)",
    duration: "3 Years",
    price: "₹6,000 / year",
    cpdHours: "24 CPD hours / year",
    description: "AI literacy, critical thinking, responsible AI habits and practical problem-solving.",
    brochureUrl: "https://drive.google.com/file/d/1vt7DHH0-D6qJEqO7plxirWG3iBVUD78w/view?usp=sharing",
    category: "students",
    icon: GraduationCap,
  },
  {
    title: "MEAG International Applied AI Certificate",
    audience: "Grades 10-12 (Junior College)",
    duration: "1 Year",
    price: "₹8,000",
    cpdHours: "24 CPD hours",
    description: "Independent AI use for learning, research, creativity, productivity and real-world challenges.",
    brochureUrl: "https://drive.google.com/file/d/19UaAwGuwQmrSnZHgAPxqblIfPmYjaMSJ/view?usp=sharing",
    category: "students",
    icon: Target,
  },
];

const professionalProducts: Product[] = [
  {
    title: "MEAG Executive AI Leadership Certification",
    audience: "MBA & Management Students",
    duration: "4 semesters",
    price: "₹15,000 / semester",
    cpdHours: "96 CPD hours (4 sems)",
    description: "Identify AI opportunities, redesign business processes, evaluate value and risk, and contribute to AI-enabled transformation.",
    brochureUrl: "https://drive.google.com/file/d/1_u8UaSEUWx-osEPUrZFjSXPP0lRux8eR/view?usp=sharing",
    category: "professionals",
    icon: Users,
  },
  {
    title: "MEAG Strategic AI Practitioner Certificate",
    audience: "Learners from Any Background",
    duration: "3 months",
    price: "₹25,000",
    cpdHours: "24 CPD hours",
    description: "Move from experimenting with AI to systematic use in research, analysis, communication and productivity.",
    brochureUrl: "https://drive.google.com/file/d/1unTM_QFjET5QEkr0q3GnrAkJiyR_Lm7R/view?usp=sharing",
    category: "professionals",
    icon: Layers,
  },
  {
    title: "MEAG AI Project Management Certificate",
    audience: "Project Managers",
    duration: "4 months",
    price: "₹30,000",
    cpdHours: "32 CPD hours",
    description: "Apply AI to project delivery, scoping, output evaluation, risk, governance and implementation.",
    brochureUrl: "https://drive.google.com/file/d/1cjfJo2gPLsbq8H2Njae11Gdnln6TgV3p/view?usp=sharing",
    category: "professionals",
    icon: Briefcase,
  },
  {
    title: "MEAG Enterprise AI Architect Certificate",
    audience: "Architects & Lead Developers",
    duration: "6 months",
    price: "₹50,000",
    cpdHours: "48 CPD hours",
    description: "Design enterprise AI systems combining agents, knowledge systems, data, workflows and governance.",
    brochureUrl: "https://drive.google.com/file/d/1Kcb6ska9NGwVpgXCAHovZImJcpqvtV_L/view?usp=sharing",
    category: "professionals",
    icon: Building2,
  },
  {
    title: "MEAG AI Professional Certificate",
    audience: "Law, Healthcare & Regulated Sectors",
    duration: "6 months",
    price: "₹50,000",
    cpdHours: "48 CPD hours",
    description: "Apply AI responsibly within high-stakes professional workflows and domain requirements.",
    brochureUrl: "https://drive.google.com/file/d/14-BzxM6g3EQdLKzYZIfMXVT8uzhFP0bl/view?usp=sharing",
    category: "professionals",
    icon: Scale,
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon;
  const isStudent = product.category === "students";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-light-gray bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-gold/30"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${isStudent ? "bg-gold/10 text-gold" : "bg-navy/10 text-navy"}`}>
          <Icon size={16} />
        </div>
        <span className={`text-xs font-semibold uppercase tracking-[0.1em] ${isStudent ? "text-gold" : "text-navy"}`}>
          {isStudent ? "For Students" : "For Professionals"}
        </span>
      </div>

      <span className="mb-3 inline-block px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-slate-500 bg-slate-100 rounded">
        {product.audience}
      </span>

      <h4 className="font-heading text-lg font-semibold text-navy mb-2">{product.title}</h4>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

      <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-2 rounded-lg mb-4">
        <span>⏱️ {product.duration}</span>
        <span className="text-gold font-bold">{product.price}</span>
        <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">{product.cpdHours}</span>
      </div>

      <a
        href={product.brochureUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
      >
        View Brochure
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </a>
    </motion.div>
  );
}

export default function ProductCatalogue() {
  return (
    <section className="bg-white px-6 py-28 md:py-36 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            MEAG AI Pathways
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            UK CPD-Certified Programmes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 md:text-lg">
            Advanced pathways translating AI capability into business transformation and real-world delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="border-l-4 border-gold pl-4 mb-10">
            <h3 className="font-heading text-2xl font-bold text-navy">For Students</h3>
            <p className="text-sm text-gray-600 mt-1">Translate academic learning into enterprise digital transformation.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studentProducts.map((product, i) => <ProductCard key={i} product={product} index={i} />)}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="border-l-4 border-gold pl-4 mb-10">
            <h3 className="font-heading text-2xl font-bold text-navy">For Professionals</h3>
            <p className="text-sm text-gray-600 mt-1">Systematic AI adoption for business transformation and workplace execution.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {professionalProducts.map((product, i) => <ProductCard key={i} product={product} index={i} />)}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-6 py-2 text-sm font-semibold text-gold">
            <FileText size={16} />
            All programmes include UK CPD Certification
          </span>
        </motion.div>
      </div>
    </section>
  );
}