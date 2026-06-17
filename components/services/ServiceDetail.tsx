// components/services/ServiceDetail.tsx
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import type { Service } from "@/types";

export default function ServiceDetail({ service }: { service: Service }) {
  const others = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image - Full height to match content */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-full">
              <img 
                src={service.photo} 
                alt={service.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-3xl font-bold text-[#1a237e] mb-6">{service.title}</h2>
              <div className="space-y-4">
                {service.description.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact"
                  className="bg-[#1a237e] hover:bg-[#0d1440] text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                  Contact Us
                </Link>
                <Link href="/membership"
                  className="bg-[#f9a825] hover:bg-[#f57f17] text-[#1a237e] font-bold px-6 py-3 rounded-xl transition-colors">
                  Join NCIO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="font-display text-2xl font-bold text-[#1a237e] mb-6">Other Services</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((s) => (
              <Link key={s.id} href={`/services/${s.id}`}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-gray-100 transition-all block">
                <h4 className="font-semibold text-[#1a237e] text-lg mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm">{s.shortDesc || (s.description?.[0]?.substring(0, 100) + "...")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}