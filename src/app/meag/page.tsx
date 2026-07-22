import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MeagHero from "@/components/MeagHero";
import MeagAbout from "@/components/MeagAbout";
import MeagCrisisSection from "@/components/MeagCrisisSection";
import MeagVisionMission from "@/components/MeagVisionMission";
import MeagStudentBenefits from "@/components/MeagStudentBenefits";
import MeagSchoolBenefits from "@/components/MeagSchoolBenefits";
import MeagLearningModels from "@/components/MeagLearningModels";
import MeagAccreditation from "@/components/MeagAccreditation";
import MeagCareerPathways from "@/components/MeagCareerPathways";
import MeagLeadership from "@/components/MeagLeadership";
import MeagRegionalSupport from "@/components/MeagRegionalSupport";
import MeagCTA from "@/components/MeagCTA";

export default function MeagPage() {
  return (
    <>
      <Navbar />
      <MeagHero />
      <MeagAbout />
      <MeagCrisisSection />
      <MeagVisionMission />
      <MeagStudentBenefits />
      <MeagSchoolBenefits />
      <MeagLearningModels />
      <MeagAccreditation />
      <MeagCareerPathways />
      <MeagLeadership />
      <MeagRegionalSupport />
      <MeagCTA />
      <Footer />
    </>
  );
}
