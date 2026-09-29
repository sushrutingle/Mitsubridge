import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MitsuBridge",
  description: "MitsuBridge Privacy Policy - How we collect, use, and protect your personal data in compliance with GDPR and UK data protection laws.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}