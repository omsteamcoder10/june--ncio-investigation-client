// components/home/MembershipCTA.tsx

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { MEMBERSHIP_BENEFITS } from "@/lib/constants";

export default function MembershipCTA() {
  return (
    <section className="py-16 bg-[#1a3a6e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#c8982a] font-medium text-sm uppercase tracking-wider">
              Join NCIO
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-2 mb-4">
              Become a Member
            </h2>
            <p className="text-white/70 mb-6">
              Join 5,000+ members across Tamil Nadu and be part of a movement for justice, dignity, and opportunity.
            </p>
            <div className="space-y-3 mb-8">
              {MEMBERSHIP_BENEFITS?.slice(0, 5).map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 text-white/80 text-sm">
                  <CheckCircle size={16} className="text-[#c8982a] flex-shrink-0 mt-0.5" /> 
                  {benefit}
                </div>
              ))}
            </div>
            <Link
              href="/membership"
              className="inline-block bg-[#c8982a] hover:bg-[#b07d20] text-[#1a3a6e] font-bold px-8 py-3 rounded-md transition-colors"
            >
              Apply for Membership
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🏆", label: "Official ID Card", desc: "Get your NCIO photo ID card" },
              { icon: "⚖️", label: "Free Legal Aid", desc: "Access free legal consultation" },
              { icon: "🌐", label: "Wide Network", desc: "Connect with 5,000+ members" },
              { icon: "📜", label: "Certificate", desc: "Official membership certificate" },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-md p-4 text-white">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-semibold text-sm">{item.label}</p>
                <p className="text-white/60 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}