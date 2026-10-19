import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JourneySection from "@/components/JourneySection";
import StatsSection from "@/components/StatsSection";
import ProductCatalogue from "@/components/ProductCatalogue";
import MeagStudentBenefits from "@/components/MeagStudentBenefits";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { getHomePageContent } from "@/sanity/queries";

export default async function Home() {
  const { hero, testimonials } = await getHomePageContent();

  return (
    <>
      <Navbar />
      <Hero
        heading={hero?.heading}
        subheading={hero?.subheading}
        ctaText={hero?.ctaText}
        ctaLink={hero?.ctaLink}
        backgroundImage={hero?.backgroundImage ?? null}
      />
      <JourneySection />
      <StatsSection />
      <ProductCatalogue />
      <MeagStudentBenefits />
      <AboutSection />
      <TestimonialsSection testimonials={testimonials} />
      <PartnersSection />
      <CTASection />
      <Footer />
    </>
  );
}
