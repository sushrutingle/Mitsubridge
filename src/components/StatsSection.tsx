"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 25,
    suffix: "+",
    label: "Years of Cross-Industry Experience",
  },
  {
    value: 4,
    suffix: "",
    label: "Global Markets",
    sub: ["UK", "India", "Poland", "USA"],
  },
  {
    value: null,
    label: "Strategic Networks",
    sub: ["Tech London Advocates", "Global Tech Advocates"],
  },
  {
    value: null,
    label: "CPD",
    sub: ["Certified Executive AI Learning"],
  },
];

export default function StatsSection() {
  return (
    <section id="stats" className="bg-navy px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-gold/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Why MitsuBridge
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
            Trusted Expertise Across <br className="hidden md:block" />
            <span className="text-gold">Borders &amp; Industries</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
            >
              {stat.value !== null ? (
                <div className="font-heading text-5xl font-bold text-gold md:text-6xl">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
              ) : (
                <div className="font-heading text-2xl font-bold text-gold md:text-3xl">
                  {stat.label === "Strategic Networks" ? "Strategic" : "CPD"}
                </div>
              )}
              <p className="mt-3 text-sm font-medium leading-snug text-white/80">
                {stat.value !== null ? stat.label : stat.label}
              </p>
              {stat.sub && (
                <div className="mt-3 space-y-1">
                  {stat.sub.map((s) => (
                    <p
                      key={s}
                      className="text-xs leading-relaxed text-white/50"
                    >
                      {s}
                    </p>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
