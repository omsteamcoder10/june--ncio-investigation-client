import type { Metadata } from 'next';
import { getSeoMeta } from '@/lib/getSeoMeta';
import FloatingButtons   from "@/components/layout/FloatingButtons";
import HeroSection       from "@/components/home/HeroSection";
import ServicesGrid      from "@/components/home/ServicesGrid";
import MissionBanner     from "@/components/home/MissionBanner";
import AboutPreview      from "@/components/home/AboutPreview";
import PremiumHighlights from "@/components/home/PremiumHighlights";
import HomeShowcaseSections from "@/components/home/HomeShowcaseSections";
import MembershipCTA     from "@/components/home/MembershipCTA";
import GalleryPreview    from "@/components/home/GalleryPreview";
import DonateCTA         from "@/components/home/DonateCTA";

export async function generateMetadata(): Promise<Metadata> {
  return getSeoMeta('/', 'NCIO — National Crime Investigates Organization');
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <PremiumHighlights />
      <ServicesGrid />
      <HomeShowcaseSections />
      <MissionBanner />
      <MembershipCTA />
      <GalleryPreview />
      <DonateCTA />
      <FloatingButtons />
    </>
  );
}