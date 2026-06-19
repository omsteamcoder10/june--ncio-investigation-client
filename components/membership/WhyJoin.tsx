// components/membership/WhyJoin.tsx
import { Award, Scale, Users } from "lucide-react";

const JOIN_CARDS = [
  {
    icon: Users,
    title: "Join a Community",
    desc: "Become part of a statewide network of 5,000+ volunteers committed to social change. Build connections, share knowledge, and grow together.",
  },
  {
    icon: Scale,
    title: "Free Legal Support",
    desc: "NCIO members receive priority access to free legal consultations through our network of advocate volunteers. Know your rights.",
  },
  {
    icon: Award,
    title: "Official Recognition",
    desc: "Receive your official NCIO membership certificate and photo ID card, a recognised credential that opens doors to all NCIO programs.",
  },
];

export default function WhyJoin() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ee] py-12 sm:py-16 md:py-20">
      <div className="absolute right-0 top-0 h-48 sm:h-72 w-48 sm:w-72 bg-[#d4af37]/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 sm:mb-10 md:mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#d4af37]/50 bg-white px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[#9a7319] shadow-sm">
            Join NCIO
          </span>
          <h2 className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#06183d]">
            Why Join NCIO?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-slate-600 px-2">
            Become part of a disciplined public-service network with identity,
            support, and purpose.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-3">
          {JOIN_CARDS.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-[1.35rem] border border-[#d4af37]/35 bg-white p-5 sm:p-6 md:p-7 text-center shadow-[0_18px_45px_rgba(4,13,38,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/70"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8b6b1f] via-[#fff2ad] to-[#8b6b1f]" />
                <div className="mx-auto mb-4 sm:mb-5 flex h-14 sm:h-16 w-14 sm:w-16 items-center justify-center rounded-2xl bg-[#06183d] text-[#f8e287] shadow-lg shadow-[#06183d]/15 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={26} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#06183d]">
                  {card.title}
                </h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}