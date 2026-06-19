
import FloatingButtons   from "@/components/layout/FloatingButtons";
import HeroSection       from "@/components/home/HeroSection";
import QuickServicesStrip from "@/components/home/QuickServicesStrip";
import StatsStrip        from "@/components/home/StatsStrip";
import ServicesGrid      from "@/components/home/ServicesGrid";
import MissionBanner     from "@/components/home/MissionBanner";
import AboutPreview      from "@/components/home/AboutPreview";
import PremiumHighlights from "@/components/home/PremiumHighlights";
import HomeShowcaseSections from "@/components/home/HomeShowcaseSections";
import TeamPreview       from "@/components/home/TeamPreview";
import MembershipCTA     from "@/components/home/MembershipCTA";
import GalleryPreview    from "@/components/home/GalleryPreview";
import DonateCTA         from "@/components/home/DonateCTA";

export default function HomePage() {
  return (
    <>
      
      <HeroSection />
      <AboutPreview />
      <PremiumHighlights />
      {/* <QuickServicesStrip /> */}
      {/* <StatsStrip /> */}
      <ServicesGrid />
      <HomeShowcaseSections />
      <MissionBanner />
      
     
      <MembershipCTA />
       {/* <TeamPreview /> */}
      <GalleryPreview />
      <DonateCTA />
      
      <FloatingButtons />
    </>
  );
}
