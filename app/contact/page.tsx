// app/contact/page.tsx
import PageBanner from "@/components/shared/PageBanner";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import GoogleMap from "@/components/contact/GoogleMap";
import FloatingButtons from "@/components/layout/FloatingButtons";

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with NCIO for any queries, support, or collaboration opportunities"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left Side - Contact Info */}
            <ContactInfo />
            
            {/* Right Side - Contact Form (small) + Google Map */}
            <div className="space-y-6">
              <ContactForm />
              <GoogleMap />
            </div>
            
          </div>
        </div>
      </section>
      
      <FloatingButtons />
    </>
  );
}