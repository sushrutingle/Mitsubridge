import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MitsuBridge | Connecting Businesses. Empowering Leaders.",
  description:
    "MitsuBridge helps organisations expand across international markets while preparing leaders for the AI-powered future.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mitsubridgeglobal.co.uk/#organization",
      "name": "MitsuBridge",
      "legalName": "MitsuBridge",
      "url": "https://mitsubridgeglobal.co.uk",
      "logo": "https://mitsubridgeglobal.co.uk/logo.png",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-7304756419",
          "contactType": "customer service",
          "email": "admissions@mitsubridgeglobal.co.uk",
          "availableLanguage": ["English"],
        },
      ],
      "sameAs": [
        "https://www.instagram.com/mitsubridge/",
        "https://www.facebook.com/profile.php?id=61594878226701",
      ],
      "founder": {
        "@type": "Person",
        "name": "Anita Nadkarni",
        "jobTitle": "Data & AI Transformation Leader",
      },
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "207/1, Sonigara Kesar",
          "addressLocality": "Wakad",
          "addressRegion": "Pune",
          "postalCode": "411057",
          "addressCountry": "IN",
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "9/23, Tower 2, World Trade Center",
          "addressLocality": "Kharadi, Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "400014",
          "addressCountry": "IN",
        },
      ],
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://mitsubridgeglobal.co.uk/#educationalOrganization",
      "name": "MitsuBridge MEAG",
      "url": "https://mitsubridgeglobal.co.uk",
      "description":
        "AI-powered executive education and leadership programmes, UK CPD-certified.",
      "accreditation": "UK CPD (Continuing Professional Development)",
      "educationalOrganizationType": "Executive Education Provider",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "207/1, Sonigara Kesar",
          "addressLocality": "Wakad",
          "addressRegion": "Pune",
          "postalCode": "411057",
          "addressCountry": "IN",
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "9/23, Tower 2, World Trade Center",
          "addressLocality": "Kharadi, Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "400014",
          "addressCountry": "IN",
        },
      ],
      "sameAs": [
        "https://www.instagram.com/mitsubridge/",
        "https://www.facebook.com/profile.php?id=61594878226701",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen antialiased">
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
