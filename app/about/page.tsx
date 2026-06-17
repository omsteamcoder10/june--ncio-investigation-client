// app/about/page.tsx
import PageBanner from "@/components/shared/PageBanner";
import WhoWeAre from "@/components/about/WhoWeAre";
import MissionVision from "@/components/about/MissionVision";
import OurPurpose from "@/components/about/OurPurpose";
import WhyChooseUs from "@/components/about/WhyChooseUs";

import FloatingButtons from "@/components/layout/FloatingButtons";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Learn about NCIO's mission, vision, and journey"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      
      
      <MissionVision />
      <OurPurpose />
      
      <WhyChooseUs />
      
      <WhoWeAre />
      <FloatingButtons />
    </>
  );
}