// components/home/QuickServicesStrip.tsx
import Link from "next/link";

const QUICK = [
  { label: "File RTI Application", href: "/services/rti",          icon: "📋" },
  { label: "Free Legal Help",      href: "/services/legal",         icon: "⚖️" },
  { label: "Blood Donation",       href: "/services/blood-donation",icon: "🩸" },
  { label: "Join NCIO",            href: "/membership",             icon: "🤝" },
];

export default function QuickServicesStrip() {
  return (
    <section className="bg-[#f9a825] py-3.5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-10">
          {QUICK.map((s) => (
            <Link key={s.href} href={s.href}
              className="flex items-center gap-2 text-[#1a237e] font-semibold text-sm hover:underline underline-offset-2 transition-all">
              <span>{s.icon}</span>{s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}