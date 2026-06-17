
import FloatingButtons from "@/components/layout/FloatingButtons";
import PageBanner  from "@/components/shared/PageBanner";
import UpdatesList from "@/components/updates/UpdatesList";

export default function UpdatesPage() {
  return (
    <>
    
      <PageBanner
        title="Latest Updates"
        subtitle="News, events, and activities from NCIO across Tamil Nadu"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Updates" }]}
      />
      <UpdatesList />
     
      <FloatingButtons />
    </>
  );
}