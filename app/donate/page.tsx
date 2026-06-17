import PageBanner from "@/components/shared/PageBanner";
import DonateInfo from "@/components/donate/DonateInfo";
import DonationImpact from "@/components/donate/DonationImpact";
import FloatingButtons from "@/components/layout/FloatingButtons";
import DonateButton from "@/components/donate/DonateButton";

export default function DonatePage() {
  return (
    <>
      <PageBanner
        title="Donate"
        subtitle="Your contribution helps us serve thousands of citizens across Tamil Nadu"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Donate" }]}
      />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <DonationImpact />
            </div>
            <div>
              <DonateInfo />
              <DonateButton />
            </div>
          </div>
        </div>
      </section>
      
      <FloatingButtons />
    </>
  );
}