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
            MEAG Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Effective Date: October 1, 2026<br />
            Last Updated: October 1, 2026
          </p>
        </motion.div>

        <motion.div
          className="prose prose-navy max-w-none space-y-10"
          variants={itemVariants}
        >
          <article>
            <p className="text-gray-700 leading-relaxed">
              Welcome to MitsuBridge Executive AI Group (MEAG) (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We respect your privacy and are committed to protecting the personal data you share with us when you visit our website at mitsubridgeglobal.co.uk (the &ldquo;Site&rdquo;) or interact with our educational and professional development programs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit or interact with our Site, advertising channels, or service offerings.
            </p>
          </article>

          <article>
            <h2>1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">We collect personal information through multiple channels as you interact with our programs, website, and digital outreach:</p>
            
            <h3>A. Information You Provide Directly</h3>
            <p className="text-gray-700 leading-relaxed">When you fill out contact forms, register for an inquiry, sign up for a newsletter, or communicate with us via WhatsApp or email, you may provide:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Contact Information:</strong> Full name, email address, phone number, school/institution name, and mailing address.</li>
              <li><strong>Inquiry & Program Data:</strong> Messages, feedback, student/grade information, or institutional requests.</li>
              <li><strong>Account Credentials:</strong> Username and password (if account registration is enabled for portals).</li>
            </ul>

            <h3>B. Information Collected Automatically</h3>
            <p className="text-gray-700 leading-relaxed">When you visit our Site, our servers and integrated third-party tools automatically log technical data:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Device & Usage Data:</strong> IP address, browser type, operating system, referring URLs, pages viewed, time spent, and navigation pathways.</li>
              <li><strong>Cookies & Tracking Technologies:</strong> Small data files stored on your device that remember preferences, track sessions, and optimize web performance.</li>
            </ul>

            <h3>C. Information from Ad Funnels & Messaging Platforms</h3>
            <p className="text-gray-700 leading-relaxed">When you interact with our digital marketing campaigns (e.g., Meta/Instagram ads) or message our business accounts (e.g., WhatsApp Business API), we collect your profile name, contact details, and the contents of your chat interactions to facilitate program inquiries and registrations.</p>
          </article>

          <article>
            <h2>2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed">We use your information for legitimate business and educational purposes, including:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Delivering Educational Services:</strong> Processing registrations for the MEAG Junior AI Achievement Award and institutional programs.</li>
              <li><strong>Communication & Support:</strong> Responding to inquiries, coordinating with school principals and parents, and providing service updates.</li>
              <li><strong>Marketing & Outreach:</strong> Delivering promotional communications regarding our UK CPD-certified programs (where permitted by law and subject to opt-out rights).</li>
              <li><strong>Analytics & Performance Optimization:</strong> Analyzing visitor interaction data and ad performance via tools like Google Analytics and Meta Pixel to improve user experience.</li>
              <li><strong>Legal Compliance & Security:</strong> Preventing fraudulent activities, enforcing our terms, and complying with applicable statutory regulations.</li>
            </ul>
          </article>

          <article>
            <h2>3. How We Share Your Information & Third-Party Tools</h2>
            <p className="text-gray-700 leading-relaxed">We do not sell your personal information. We share data only with trusted partners necessary to run our operations:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (e.g., cloud hosting, email delivery platforms, CRM software, and payment processors).</li>
              <li><strong>Advertising & Analytics Partners:</strong> Platforms such as Google Analytics (for website traffic analysis) and Meta (for managing ad conversions and lead forms).</li>
              <li><strong>Legal Requirements:</strong> If required by law, court order, or governmental regulation, or to protect our legal rights, property, or safety.</li>
              <li><strong>Business Transfers:</strong> In connection with a corporate merger, acquisition, asset sale, or business restructuring.</li>
            </ul>
          </article>

          <article>
            <h2>4. Cross-Border Data Transfers (UK, UAE, and India)</h2>
            <p className="text-gray-700 leading-relaxed">Because MEAG operates internationally across the United Kingdom, the United Arab Emirates (Dubai Free Zones), and India, personal data collected through our Site and outreach programs may be transferred to, stored, and processed in servers located outside your home country.</p>
            <p className="text-gray-700 leading-relaxed">We ensure that any international data transfers comply with applicable data protection standards, implementing appropriate technical and organizational security measures to protect your information across borders.</p>
          </article>

          <article>
            <h2>5. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed">We utilize cookies and similar tracking tools (such as the Meta Pixel and Google Analytics tags):</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Essential Cookies:</strong> Necessary for core website functionality and security.</li>
              <li><strong>Analytics & Performance Cookies:</strong> Help us aggregate visitor data to understand user journeys.</li>
              <li><strong>Marketing & Conversion Cookies:</strong> Used to measure the effectiveness of our social media ad campaigns.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed"><strong>Managing Cookies:</strong> You can adjust your browser settings to refuse or delete cookies, though doing so may impact certain Site features.</p>
          </article>

          <article>
            <h2>6. Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed">Depending on your jurisdiction (including India&apos;s DPDP Act or UK/EU GDPR frameworks where applicable), you may have specific rights regarding your data:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Access & Portability:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request the correction of inaccurate or incomplete records.</li>
              <li><strong>Deletion:</strong> Request the deletion of your personal data, subject to legal and statutory retention obligations.</li>
              <li><strong>Opt-Out of Marketing:</strong> Unsubscribe from promotional communications at any time via the link in our emails or by messaging our support line.</li>
              <li><strong>Withdraw Consent:</strong> Where data processing relies on your consent, you may withdraw it at any time.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">To exercise any of these rights, please contact us at <a href="mailto:admissions@mitsubridgeglobal.co.uk" className="text-gold hover:underline">admissions@mitsubridgeglobal.co.uk</a>.</p>
          </article>

          <article>
            <h2>7. Data Security and Retention</h2>
            <p className="text-gray-700 leading-relaxed"><strong>Data Security:</strong> We implement strict technical, administrative, and organizational security measures designed to safeguard your personal data against unauthorized access, loss, alteration, or disclosure.</p>
            <p className="text-gray-700 leading-relaxed"><strong>Data Retention:</strong> We retain your personal data only for as long as necessary to fulfill the educational, commercial, or legal purposes outlined in this policy.</p>
          </article>

          <article>
            <h2>8. Children&apos;s Privacy and Parental Consent (Grades 7&ndash;9 Focus)</h2>
            <p className="text-gray-700 leading-relaxed">Our institutional programs, including the MEAG Junior AI Achievement Award, are designed for students in Grades 7&ndash;9 (minors typically aged 12&ndash;15).</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>We do not knowingly collect personal data directly from minors without proper authorization.</li>
              <li>Where student information is collected, it is processed either directly through institutional school partnerships or with verifiable parental/guardian consent, in compliance with applicable child privacy protections and the Indian Digital Personal Data Protection (DPDP) Act.</li>
              <li>If you believe a minor has submitted personal data without required parental consent, please contact us immediately so we can securely delete it.</li>
            </ul>
          </article>

          <article>
            <h2>9. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">Our Site may contain links to external websites, social media platforms, or partner portals not operated by us. We are not responsible for the privacy practices or content of third-party platforms and encourage you to review their individual privacy policies.</p>
          </article>

          <article>
            <h2>10. Updates to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">We may update this Privacy Policy periodically to reflect shifts in legal requirements, technological integrations, or operational practices. Any changes will be posted on this page with a revised Effective Date.</p>
          </article>

          <article>
            <h2>11. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">If you have any questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please reach out to us at:</p>
            <address className="not-italic text-gray-700 leading-relaxed">
              <p><strong>Entity Name:</strong> MitsuBridge Global Ltd</p>
              <p><strong>Email:</strong> <a href="mailto:admissions@mitsubridgeglobal.co.uk" className="text-gold hover:underline">admissions@mitsubridgeglobal.co.uk</a></p>
              <p><strong>Phone:</strong> <a href="tel:+917304756419" className="text-gold hover:underline">+91 73047 56419</a></p>
            </address>
          </article>
        </motion.div>
      </motion.div>
    </section>
  );
}