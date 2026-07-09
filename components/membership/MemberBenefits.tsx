// components/membership/MemberBenefits.tsx
import { BadgeCheck, CheckCircle, CreditCard, Shield } from "lucide-react";
import { MEMBERSHIP_BENEFITS } from "@/lib/constants";

export default function MemberBenefits() {
  return (
    <section className="bg-[#f8f5ee] pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-[#d4af37]/35 bg-white p-4 sm:p-6 md:p-8 lg:p-10 shadow-[0_20px_60px_rgba(4,13,38,0.10)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8b6b1f] via-[#fff2ad] to-[#8b6b1f]" />
          <div className="mb-6 sm:mb-8 md:mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] md:tracking-[0.25em] text-[#9a7319]">
                Member Benefits
              </p>
              <h3 className="mt-1 sm:mt-2 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#06183d]">
                What Your Membership Includes
              </h3>
            </div>
            <div className="flex h-10 sm:h-12 md:h-14 w-10 sm:w-12 md:w-14 items-center justify-center rounded-2xl bg-[#06183d] text-[#f8e287]">
              <BadgeCheck size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
          </div>

          <div className="grid gap-2 sm:gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {MEMBERSHIP_BENEFITS.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-2 sm:gap-3 md:gap-4 rounded-2xl border border-slate-100 bg-[#fbfaf7] p-3 sm:p-4 md:p-5"
              >
                <CheckCircle
                  size={16}
                  className="mt-0.5 shrink-0 text-[#b8860b] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px]"
                />
                <span className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 md:leading-7 text-slate-700">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[1.35rem] border border-blue-300/50 bg-gradient-to-br from-[#0b3f91] to-[#06183d] p-5 sm:p-6 md:p-7 lg:p-8 text-white shadow-[0_18px_50px_rgba(11,63,145,0.20)]">
            <div className="absolute right-0 top-0 h-24 sm:h-32 md:h-40 w-24 sm:w-32 md:w-40 bg-white/10 blur-3xl" />
            <CreditCard size={28} className="sm:w-8 sm:h-8 md:w-10 md:h-10 mb-3 sm:mb-4 md:mb-5 text-[#d7e8ff]" />
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">Blue ID Card - District Member</h4>
            <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base leading-6 sm:leading-7 md:leading-8 text-white/75">
              For members who join at the district level. The blue card
              identifies you as an official NCIO District Member with access to
              all district-level programs and events.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.35rem] border border-red-300/50 bg-gradient-to-br from-[#b91c1c] to-[#4a0710] p-5 sm:p-6 md:p-7 lg:p-8 text-white shadow-[0_18px_50px_rgba(185,28,28,0.20)]">
            <div className="absolute right-0 top-0 h-24 sm:h-32 md:h-40 w-24 sm:w-32 md:w-40 bg-white/10 blur-3xl" />
            <Shield size={28} className="sm:w-8 sm:h-8 md:w-10 md:h-10 mb-3 sm:mb-4 md:mb-5 text-[#ffe1e1]" />
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              Red ID Card - State / Zonal Member
            </h4>
            <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base leading-6 sm:leading-7 md:leading-8 text-white/75">
              For members who join or are promoted to state or zonal level. The
              red card identifies senior NCIO members with broader
              responsibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}