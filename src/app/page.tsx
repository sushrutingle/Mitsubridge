import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JourneySection from "@/components/JourneySection";
import StatsSection from "@/components/StatsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <JourneySection />
      <StatsSection />
      <ExpertiseSection />
      <AboutSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </>
  );
}
