"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const qualifications = [
  { icon: GraduationCap, title: "Cambridge Judge Business School" },
  { icon: GraduationCap, title: "University of Oxford" },
  { icon: GraduationCap, title: "Pune University" },
];

export default function MeagLeadership() {
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
            Leadership
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            Meet Our{" "}
            <span className="text-gold">Leadership</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-hidden rounded-3xl">
              <div
                className="aspect-[4/5] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=75')",
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Award size={14} />
              28+ Years International Experience
            </div>
            <h3 className="font-heading mt-5 text-2xl font-bold text-navy md:text-3xl">
              Anita Nadkarni
            </h3>
            <p className="mt-1 text-base font-medium text-gold">
              Data &amp; AI Transformation Leader
            </p>
            <p className="mt-5 leading-relaxed text-gray-600">
              An accomplished AI and Digital Transformation Leader with a
              distinguished international career spanning 28+ years and multiple
              roles across the UK, India, Europe, and the Middle East. Her
              expertise lies in driving complex digital and AI-led
              transformations, building high-performance teams, and embedding
              responsible, human-centred AI practices across global
              organisations.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Throughout her career, Anita has been at the forefront of
              integrating AI with business strategy, establishing data
              governance frameworks, and developing AI education programmes for
              diverse professional audiences. She has held leadership positions
              in both the public and private sectors, leading large-scale
              digital initiatives and supporting organisations to adopt AI
              responsibly at scale.
            </p>

            <div className="mt-8 space-y-3">
              {qualifications.map((qual) => {
                const Icon = qual.icon;
                return (
                  <div
                    key={qual.title}
                    className="flex items-center gap-3 rounded-xl border border-light-gray bg-white px-4 py-3"
                  >
                    <Icon size={18} className="shrink-0 text-gold" />
                    <span className="text-sm font-medium text-navy">
                      {qual.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-gold/20 bg-white px-6 py-4">
              <div className="flex items-start gap-3">
                <Briefcase size={18} className="mt-0.5 shrink-0 text-gold" />
                <p className="text-sm leading-relaxed text-gray-600">
                  Supported by consultants from Oxford, Cambridge and global
                  industry partners.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
