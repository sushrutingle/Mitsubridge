import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation | MitsuBridge",
  description: "Schedule a consultation with MitsuBridge for global business expansion or MEAG executive AI programmes.",
};

export default function ConsultationPage() {
  return (
    <>
      <Navbar />
      <ConsultationForm />
      <Footer />
    </>
  );
}