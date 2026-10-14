"use client";

import { motion } from "framer-motion";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf4jxRQnCmnJL17t8m0OSTpyj_LKDt7e7cPq2lnrfGG_zeNPw/viewform?embedded=true";

export default function ConsultationForm() {
  return (
    <section className="bg-light-bg px-6 py-20 md:py-28 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Book a Consultation
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            Let&apos;s Discuss Your Goals
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 md:text-lg">
            Whether you&apos;re exploring global expansion or AI leadership programmes, we&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl border border-light-gray overflow-hidden shadow-sm"
        >
          <div className="relative" style={{ paddingBottom: "100%", height: 0, minHeight: "700px" }}>
            <iframe
              src={GOOGLE_FORM_URL}
              title="Book a Consultation Form"
              className="absolute inset-0 w-full h-full border-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              loading="lazy"
              allowFullScreen
            />
          </div>
          
          <div className="p-6 md:p-8 border-t border-light-gray text-center bg-white/50 backdrop-blur-sm">
            <p className="text-sm text-gray-500">
              Having issues viewing the form?{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf4jxRQnCmnJL17t8m0OSTpyj_LKDt7e7cPq2lnrfGG_zeNPw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline font-medium"
              >
                Open in Google Forms
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}