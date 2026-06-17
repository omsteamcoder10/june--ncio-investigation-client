// components/membership/MemberBenefits.tsx
import { CheckCircle } from "lucide-react";
import { MEMBERSHIP_BENEFITS } from "@/lib/constants";

export default function MemberBenefits() {
  return (
    <section className="py-0 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Benefits list */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-10">
          <h3 className="font-display text-2xl font-bold text-[#1a237e] mb-6 text-center">
            Member Benefits
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {MEMBERSHIP_BENEFITS.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#1a237e] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ID card types */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a237e] rounded-xl p-6 text-white">
            <div className="text-3xl mb-3">🟦</div>
            <h4 className="font-bold text-lg mb-2">Blue ID Card — District Member</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              For members who join at the district level. The blue card identifies you as an official 
              NCIO District Member with access to all district-level programs and events.
            </p>
          </div>
          <div className="bg-red-700 rounded-xl p-6 text-white">
            <div className="text-3xl mb-3">🟥</div>
            <h4 className="font-bold text-lg mb-2">Red ID Card — State / Zonal Member</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              For members who join or are promoted to state or zonal level. The red card identifies 
              senior NCIO members with broader responsibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}