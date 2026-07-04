// app/about/page.tsx

import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import MissionVision from "@/components/about/MissionVision";
import OurPurpose from "@/components/about/OurPurpose";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { getSeoMeta } from '@/lib/getSeoMeta';

export async function generateMetadata() {
  return getSeoMeta('/about', 'About NCIO');
}

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />

      <div>
        <MissionVision />
        <OurPurpose />
        <WhyChooseUs />
        <WhoWeAre />
      </div>

      <FloatingButtons />
    </main>
  );
}