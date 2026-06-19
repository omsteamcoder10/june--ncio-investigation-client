
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
      <section className="relative overflow-hidden bg-[#f8f5ee] py-20 md:py-28" id="apply">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        <div className="absolute left-0 top-20 h-80 w-80 bg-[#d4af37]/20 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-80 w-80 bg-[#06183d]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#d4af37]/50 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#9a7319] shadow-sm">
              Apply Now
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-[#06183d] md:text-5xl">
              Membership Application
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Fill in the form below. Your application will be reviewed within 7 working days.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#d4af37]/35 bg-white p-4 shadow-[0_28px_80px_rgba(4,13,38,0.12)] sm:p-6 md:p-8">
            <MembershipForm />
          </div>
        </div>
      </section>
     
      <FloatingButtons />
    </>
  );
}
