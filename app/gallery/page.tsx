
import FloatingButtons from "@/components/layout/FloatingButtons";
import PageBanner  from "@/components/shared/PageBanner";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <>
   
      <PageBanner
        title="Photo Gallery"
        subtitle="Moments from our camps, drives, and community programs across Tamil Nadu"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <GalleryGrid />
     
      <FloatingButtons />
    </>
  );
}