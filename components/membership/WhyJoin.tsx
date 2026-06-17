// components/membership/WhyJoin.tsx
import { Users, Scale, Award } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { MEMBERSHIP_BENEFITS } from "@/lib/constants";

export default function WhyJoin() {
  return (
    <section className="py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* 3 cards */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-bold text-[#1a237e]">Why Join NCIO?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            {
              icon: <Users size={32} className="text-[#1a237e]" />,
              title: "Join a Community",
              desc: "Become part of a statewide network of 5,000+ volunteers committed to social change. Build connections, share knowledge, and grow together.",
            },
            {
              icon: <Scale size={32} className="text-[#1a237e]" />,
              title: "Free Legal Support",
              desc: "NCIO members receive priority access to free legal consultations through our network of advocate volunteers. Know your rights.",
            },
            {
              icon: <Award size={32} className="text-[#1a237e]" />,
              title: "Official Recognition",
              desc: "Receive your official NCIO membership certificate and photo ID card — a recognised credential that opens doors to all NCIO programs.",
            },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="flex justify-center mb-4">{c.icon}</div>
              <h3 className="font-semibold text-[#1a237e] text-lg mb-2">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}