"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function GlobalInsight() {
  return (
    <section className="bg-light-bg px-6 py-28 md:py-36 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Insights
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            Featured Insight
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 overflow-hidden rounded-3xl border border-light-gray bg-white shadow-sm"
        >
          <div className="border-b border-light-gray bg-navy/5 px-8 py-6 md:px-12 md:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Featured Article
            </p>
            <h3 className="font-heading mt-3 text-2xl leading-tight text-navy md:text-3xl">
              Bridging Continents: Why the UK Should Be the Next Strategic Move
              for Korean Semiconductor Firms
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              by MitsuBridge Global
            </p>
          </div>

          <div className="px-8 py-8 md:px-12 md:py-10">
            <p className="leading-relaxed text-gray-700">
              As global supply chains recalibrate and national strategies
              sharpen their focus on semiconductors, one opportunity stands out:
              the UK is becoming an increasingly attractive launchpad for South
              Korean chip companies looking to expand their reach.
            </p>

            <h4 className="font-heading mt-10 text-xl font-semibold text-navy">
              Why the UK?
            </h4>
            <p className="mt-3 leading-relaxed text-gray-600">
              The United Kingdom offers a unique combination of government
              incentives, world-class R&amp;D infrastructure, and access to
              European and North American markets. For Korean semiconductor
              firms, the UK represents a strategic gateway rather than just
              another market.
            </p>

            <div className="mt-8 rounded-2xl border-l-4 border-gold bg-gold/5 px-6 py-5">
              <div className="flex gap-4">
                <Quote size={20} className="mt-1 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-medium italic leading-relaxed text-navy">
                    &ldquo;The UK is not just a market&mdash;it&rsquo;s a
                    strategic launchpad for Korean semiconductor firms to access
                    Europe and beyond.&rdquo;
                  </p>
                  <p className="mt-2 text-xs text-gray-400">
                    &mdash; MitsuBridge Global
                  </p>
                </div>
              </div>
            </div>

            <h4 className="font-heading mt-10 text-xl font-semibold text-navy">
              Government Support
            </h4>
            <p className="mt-3 leading-relaxed text-gray-600">
              The UK government has positioned semiconductors as a national
              priority. Key initiatives include:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "£1 billion National Semiconductor Strategy to boost domestic capabilities",
                "UK Semiconductor Hub providing infrastructure and R&D support",
                "Zero-tariff trade agreement enabling cost-effective market access",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-gold/20 bg-navy/5 px-6 py-4">
              <p className="text-sm font-medium text-navy">
                Key Insight: The National Semiconductor Strategy represents a
                landmark commitment, creating a favourable environment for
                foreign investment in UK semiconductor capabilities.
              </p>
            </div>

            <h4 className="font-heading mt-10 text-xl font-semibold text-navy">
              Innovation Ecosystem
            </h4>
            <p className="mt-3 leading-relaxed text-gray-600">
              The UK&rsquo;s innovation infrastructure provides Korean
              semiconductor firms with access to:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "University partnerships with world-leading research institutions",
                "Catapult Network bridging academia and industry",
                "OEM opportunities across automotive, defence, and FinTech",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {["Automotive", "Defence", "FinTech"].map((sector) => (
                <div
                  key={sector}
                  className="rounded-xl border border-light-gray bg-white px-4 py-3 text-center shadow-sm"
                >
                  <p className="text-sm font-semibold text-navy">{sector}</p>
                  <p className="mt-1 text-xs text-gray-400">Key sector</p>
                </div>
              ))}
            </div>

            <h4 className="font-heading mt-10 text-xl font-semibold text-navy">
              Manufacturing Opportunities
            </h4>
            <p className="mt-3 leading-relaxed text-gray-600">
              Korean semiconductor firms can leverage the UK&rsquo;s advanced
              manufacturing capabilities across several domains:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "ATP (Assembly, Testing & Packaging) — access to cutting-edge facilities",
                "Module Integration — combining chips into system-level solutions",
                "Compliance Enablement — navigating UK and EU regulatory frameworks",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h4 className="font-heading mt-10 text-xl font-semibold text-navy">
              Strategic Partnership
            </h4>
            <p className="mt-3 leading-relaxed text-gray-600">
              MitsuBridge Global plays a pivotal role in helping East Asian
              businesses navigate the UK and Indian markets. From initial market
              assessment to full operational setup, our team provides:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "On-the-ground representation and stakeholder introductions",
                "Regulatory compliance and entity formation support",
                "Supply chain mapping and logistics coordination",
                "Ongoing operational support for scaling businesses",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/5 to-navy/5 px-6 py-5">
              <p className="text-sm font-medium leading-relaxed text-navy">
                For Korean semiconductor firms, the combination of government
                support, world-class R&amp;D, and MitsuBridge&rsquo;s
                on-the-ground expertise makes the UK the ideal next strategic
                move.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
