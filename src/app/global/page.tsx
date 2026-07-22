import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/GlobalHero";
import GlobalAbout from "@/components/GlobalAbout";
import GlobalServices from "@/components/GlobalServices";
import GlobalStats from "@/components/GlobalStats";
import GlobalInsight from "@/components/GlobalInsight";
import GlobalCTA from "@/components/GlobalCTA";
import GlobalContact from "@/components/GlobalContact";

export default function GlobalPage() {
  return (
    <>
      <Navbar />
      <GlobalHero />
      <GlobalAbout />
      <GlobalServices />
      <GlobalStats />
      <GlobalInsight />
      <GlobalCTA />
      <GlobalContact />
      <Footer />
    </>
  );
}
