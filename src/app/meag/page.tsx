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
import MeagCTA from "@/components/MeagCTA";
import { getVideos } from "@/sanity/queries";

export default async function MeagPage() {
  const videos = await getVideos();
  const primaryVideo = videos[0]?.youtubeUrl ?? null;

  return (
    <>
      <Navbar />
      <MeagHero />
      <MeagAbout youtubeUrl={primaryVideo} />
      <MeagCrisisSection />
      <MeagVisionMission />
      <MeagStudentBenefits />
      <MeagSchoolBenefits />
      <MeagLearningModels />
      <MeagAccreditation />
      <MeagCareerPathways />
      <MeagCTA />
      <Footer />
    </>
  );
}
