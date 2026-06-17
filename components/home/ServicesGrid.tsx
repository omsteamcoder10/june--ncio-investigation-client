// components/home/ServicesGrid.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { SERVICES } from "@/lib/constants";

export default function ServicesGrid() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          badge="What We Do"
          title="Ways We Help"
          subtitle="NCIO provides eight essential services to citizens across Tamil Nadu — all free of charge."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-6 md:mt-8">
          {SERVICES.map((svc) => (
            <Link key={svc.id} href={`/services/${svc.id}`}
              className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg border border-gray-100 group transition-all duration-200 hover:-translate-y-1">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{svc.icon}</div>
              <h3 className="font-semibold text-[#1a237e] text-base md:text-lg mb-2 group-hover:text-[#f9a825] transition-colors">{svc.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{svc.shortDesc}</p>
              <div className="mt-3 md:mt-4 text-[#1a237e] text-xs md:text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={12} className="md:w-4 md:h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}