"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PrivacyPolicy() {
  const lastUpdated = "September 30, 2026";

  return (
    <section className="min-h-screen bg-white pt-32 pb-20 px-6 lg:px-12">
      <motion.div
        className="mx-auto max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Last updated: {lastUpdated}
          </p>
        </motion.div>

        <motion.div
          className="prose prose-navy max-w-none space-y-12"
          variants={itemVariants}
        >
          <article>
            <h2>1. Introduction</h2>
            <p>
              MitsuBridge (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your
              personal information and your right to privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website, use our services, or
              interact with us in other ways.
            </p>
            <p>
              We are the data controller for the personal data processed through
              our website and services. Our contact details are provided in
              Section 14 below.
            </p>
          </article>

          <article>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Data You Provide</h3>
            <p>We collect personal data that you voluntarily provide to us, including:</p>
            <ul>
              <li>Name, email address, phone number, and company/organization details</li>
              <li>Information submitted through contact forms, consultation bookings, or newsletter sign-ups</li>
              <li>Communications you send to us (emails, messages, inquiries)</li>
              <li>Information provided during business discussions or service delivery</li>
            </ul>

            <h3>2.2 Automatically Collected Data</h3>
            <p>When you access our website, we automatically collect:</p>
            <ul>
              <li>IP address, browser type, operating system, and device information</li>
              <li>Pages visited, time spent, referring URLs, and navigation patterns</li>
              <li>Cookies and similar tracking technologies (see Section 10)</li>
            </ul>

            <h3>2.3 Data from Third Parties</h3>
            <p>We may receive information about you from:</p>
            <ul>
              <li>Analytics providers (e.g., Google Analytics)</li>
              <li>Social media platforms when you interact with our content</li>
              <li>Partners or referral sources with your consent</li>
            </ul>
          </article>

          <article>
            <h2>3. How We Use Your Information</h2>
            <p>We process your personal data for the following purposes:</p>
            <ul>
              <li><strong>Service Delivery:</strong> To provide international business expansion and AI education services</li>
              <li><strong>Communication:</strong> To respond to inquiries, send updates, and manage bookings</li>
              <li><strong>Marketing:</strong> To send promotional content (with your consent where required)</li>
              <li><strong>Analytics:</strong> To understand website usage and improve our services</li>
              <li><strong>Legal Compliance:</strong> To fulfill legal obligations and protect our rights</li>
              <li><strong>Security:</strong> To detect and prevent fraud, abuse, and security incidents</li>
            </ul>
          </article>

          <article>
            <h2>4. Legal Basis for Processing (GDPR)</h2>
            <p>Under the UK GDPR and EU GDPR, we rely on the following legal bases:</p>
            <ul>
              <li><strong>Contract Performance:</strong> Processing necessary to deliver services you request</li>
              <li><strong>Legitimate Interests:</strong> Business operations, analytics, security, and improvement</li>
              <li><strong>Consent:</strong> For marketing communications and non-essential cookies</li>
              <li><strong>Legal Obligation:</strong> Compliance with applicable laws and regulations</li>
              <li><strong>Vital Interests:</strong> In rare cases to protect someone&apos;s life</li>
            </ul>
          </article>

          <article>
            <h2>5. Data Sharing and Third Parties</h2>
            <p>We do not sell your personal data. We may share it with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Hosting, analytics, email, CRM, and payment processors (under data processing agreements)</li>
              <li><strong>Professional Advisors:</strong> Legal, accounting, and compliance advisors</li>
              <li><strong>Partners:</strong> With your explicit consent for joint offerings</li>
              <li><strong>Authorities:</strong> When required by law, regulation, or legal process</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </article>

          <article>
            <h2>6. International Data Transfers</h2>
            <p>
              Our services operate globally. Your data may be transferred to and
              processed in countries outside the UK/EEA (including the United States
              and India). We ensure appropriate safeguards through:
            </p>
            <ul>
              <li>UK/EU Standard Contractual Clauses (SCCs)</li>
              <li>Adequacy decisions where applicable</li>
              <li>Binding Corporate Rules or approved certification mechanisms</li>
            </ul>
          </article>

          <article>
            <h2>7. Data Retention</h2>
            <p>We retain personal data only as long as necessary:</p>
            <ul>
              <li><strong>Contact/Inquiry Data:</strong> 3 years from last interaction</li>
              <li><strong>Client/Service Records:</strong> 7 years after service completion (legal/accounting requirements)</li>
              <li><strong>Marketing Data:</strong> Until you unsubscribe or 2 years of inactivity</li>
              <li><strong>Analytics/Logs:</strong> 26 months (aggregated/anonymized thereafter)</li>
              <li><strong>Legal Holds:</strong> Extended retention if required for legal proceedings</li>
            </ul>
          </article>

          <article>
            <h2>8. Your Rights</h2>
            <p>Under UK/EU data protection law, you have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion (&ldquo;right to be forgotten&rdquo;)</li>
              <li><strong>Restriction:</strong> Limit processing of your data</li>
              <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests or direct marketing</li>
              <li><strong>Withdraw Consent:</strong> Where processing is based on consent</li>
              <li><strong>Complaint:</strong> Lodge a complaint with the ICO (UK) or your national DPA</li>
            </ul>
            <p>To exercise these rights, contact us using the details in Section 14.</p>
          </article>

          <article>
            <h2>9. Cookies and Tracking Technologies</h2>
            <p>Our website uses cookies and similar technologies:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for website functionality (cannot be disabled)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand usage (Google Analytics, with IP anonymization)</li>
              <li><strong>Marketing Cookies:</strong> Enable personalized advertising (with your consent)</li>
              <li><strong>Functional Cookies:</strong> Remember preferences and improve experience</li>
            </ul>
            <p>
              You can manage cookie preferences through your browser settings or our
              cookie banner. Disabling essential cookies may impair website functionality.
            </p>
          </article>

          <article>
            <h2>10. Security Measures</h2>
            <p>We implement appropriate technical and organizational measures:</p>
            <ul>
              <li>Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
              <li>Access controls, authentication, and authorization protocols</li>
              <li>Regular security assessments and vulnerability scanning</li>
              <li>Staff training on data protection and security awareness</li>
              <li>Incident response and breach notification procedures</li>
            </ul>
            <p>
              While we strive to protect your data, no internet transmission or
              storage system is 100% secure.
            </p>
          </article>

          <article>
            <h2>11. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under 16 (or 13 in the US).
              We do not knowingly collect personal data from children. If you believe
              we have collected data from a child, please contact us immediately.
            </p>
          </article>

          <article>
            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of material changes by:
            </p>
            <ul>
              <li>Posting the updated policy on this page with a revised &ldquo;Last updated&rdquo; date</li>
              <li>Sending email notification for significant changes</li>
              <li>Displaying a prominent notice on our website</li>
            </ul>
            <p>Your continued use of our services after changes constitutes acceptance.</p>
          </article>

          <article>
            <h2>13. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites, plugins, and
              applications. We are not responsible for their privacy practices. We
              encourage you to review their privacy policies before providing any
              personal information.
            </p>
          </article>

          <article>
            <h2>14. Contact Us</h2>
            <p>For questions, concerns, or to exercise your rights:</p>
            <address className="not-italic">
              <p><strong>MitsuBridge</strong></p>
              <p>London, United Kingdom</p>
              <p>Email: <a href="mailto:admissions@mitsubridgeglobal.co.uk" className="text-gold hover:underline">admissions@mitsubridgeglobal.co.uk</a></p>
              <p>Phone: <a href="tel:+917304756419" className="text-gold hover:underline">+91 7304756419</a></p>
            </address>
            <p className="mt-4">
              For data protection inquiries, please include &ldquo;Data Protection&rdquo; in
              the subject line.
            </p>
          </article>
        </motion.div>
      </motion.div>
    </section>
  );
}