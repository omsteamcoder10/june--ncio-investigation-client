
import FloatingButtons from "@/components/layout/FloatingButtons";
import PageBanner     from "@/components/shared/PageBanner";
import WhyJoin        from "@/components/membership/WhyJoin";
import MembershipForm from "@/components/membership/MembershipForm";
import MemberBenefits from "@/components/membership/MemberBenefits";
export default function MembershipPage() {
  return (
    <>
    
      <PageBanner
        title="NCIO Membership"
        subtitle="Join our network of 5,000+ active members across Tamil Nadu"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Membership" }]}
      />
      <WhyJoin />
      
 <MemberBenefits />
      <section className="py-20 bg-white" id="apply">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#f9a825] font-medium text-sm uppercase tracking-wider">Apply Now</span>
            <h2 className="font-display text-3xl font-bold text-[#1a237e] mt-2">Membership Application</h2>
            <p className="text-gray-500 mt-2">Fill in the form below. Your application will be reviewed within 7 working days.</p>
          </div>
          
          <MembershipForm />
        </div>
      </section>
     
      <FloatingButtons />
    </>
  );
}