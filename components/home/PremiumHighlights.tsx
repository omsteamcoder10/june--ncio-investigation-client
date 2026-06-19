import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  FileSearch,
  HandHeart,
  MapPinned,
  Scale,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const TRUST_ITEMS = [
  {
    value: "38",
    label: "Districts Covered",
    text: "Coordinated volunteer presence across Tamil Nadu.",
  },
  {
    value: "5K+",
    label: "Active Members",
    text: "A growing public-service network for citizen support.",
  },
  {
    value: "50K+",
    label: "Lives Impacted",
    text: "Through legal aid, camps, relief, and awareness programs.",
  },
];

const ACTIONS = [
  {
    title: "Citizen Rights",
    text: "RTI guidance, documentation help, and legal awareness for everyday people.",
    icon: FileSearch,
  },
  {
    title: "Public Welfare",
    text: "Medical camps, blood donation, hunger relief, and community support drives.",
    icon: HandHeart,
  },
  {
    title: "Local Coordination",
    text: "District-level members help requests move from concern to practical action.",
    icon: MapPinned,
  },
];

const PILLARS = [
  { label: "Transparent", icon: BadgeCheck },
  { label: "Independent", icon: ShieldCheck },
  { label: "Justice Led", icon: Scale },
  { label: "People First", icon: UsersRound },
];

export default function PremiumHighlights() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ee] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      <div className="absolute left-0 top-20 h-48 sm:h-72 w-48 sm:w-72 bg-[#d4af37]/20 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-48 sm:h-72 w-48 sm:w-72 bg-[#06183d]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          
          {/* Left Card */}
          <div className="relative overflow-hidden rounded-[1.5rem] border border-[#d4af37]/35 bg-[#06183d] p-6 sm:p-7 md:p-9 shadow-[0_24px_70px_rgba(4,13,38,0.20)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8b6b1f] via-[#fff2ad] to-[#8b6b1f]" />
            <div className="absolute -right-16 -top-16 h-48 sm:h-56 w-48 sm:w-56 rounded-full border border-[#d4af37]/20" />
            <div className="absolute -bottom-20 left-8 h-40 sm:h-48 w-40 sm:w-48 bg-[#d4af37]/10 blur-3xl" />

            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[#f8e287]">
              Premium Public Service
            </p>
            <h2 className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              Built on trust, field work, and disciplined follow-up.
            </h2>
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-slate-300">
              NCIO connects citizens with practical support across justice,
              healthcare, education, relief work, and public awareness.
            </p>

            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2 sm:gap-3">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.label}
                    className="flex items-center gap-2 sm:gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-3 sm:px-4 py-2.5 sm:py-3"
                  >
                    <span className="flex h-8 sm:h-9 w-8 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#b8860b] via-[#fff1a8] to-[#b8860b] text-[#06183d]">
                      <Icon size={16} />
                    </span>
                    <span className="font-bold text-white text-sm sm:text-base">{pillar.label}</span>
                  </div>
                );
              })}
            </div>

            {/* <Link
              href="/membership"
              className="mt-6 sm:mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b8860b] via-[#fff0a3] to-[#b8860b] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-extrabold text-[#06183d] shadow-lg shadow-[#d4af37]/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Become a Member
              <ArrowRight size={16} />
            </Link> */}
          </div>

          {/* Right Side */}
          <div className="grid gap-4 sm:gap-5">
            
            {/* Trust Items */}
            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.25rem] border border-[#d4af37]/35 bg-white p-4 sm:p-5 shadow-[0_14px_40px_rgba(4,13,38,0.08)]"
                >
                  <div className="font-display text-3xl sm:text-4xl font-bold text-[#06183d]">
                    {item.value}
                  </div>
                  <h3 className="mt-2 sm:mt-3 font-bold text-[#b8860b] text-sm sm:text-base">
                    {item.label}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="rounded-[1.5rem] border border-[#d4af37]/35 bg-white p-4 sm:p-5 md:p-6 shadow-[0_14px_40px_rgba(4,13,38,0.08)]">
              <div className="mb-4 sm:mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#b8860b]">
                    What We Do
                  </p>
                  <h3 className="mt-1 sm:mt-2 font-display text-2xl sm:text-3xl font-bold text-[#06183d]">
                    Service With Structure
                  </h3>
                </div>
                {/* <Link
                  href="/#services"
                  className="inline-flex w-fit items-center gap-2 text-xs sm:text-sm font-bold text-[#06183d] transition-colors hover:text-[#b8860b]"
                >
                  Explore Services
                  <ArrowRight size={14} />
                </Link> */}
              </div>

              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {ACTIONS.map((action) => {
                  const Icon = action.icon;

                  return (
                    <div
                      key={action.title}
                      className="rounded-2xl border border-slate-100 bg-[#fbfaf7] p-3 sm:p-4"
                    >
                      <span className="flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-xl bg-[#06183d] text-[#f8e287]">
                        <Icon size={18} />
                      </span>
                      <h4 className="mt-3 sm:mt-4 font-bold text-[#06183d] text-sm sm:text-base">
                        {action.title}
                      </h4>
                      <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-600">
                        {action.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}