import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  FileText,
  HeartPulse,
  Megaphone,
  ShieldCheck,
} from "lucide-react";

const IMPACT_AREAS = [
  {
    title: "Legal & RTI Support",
    text: "Practical help for citizens who need guidance with applications, appeals, rights, and official documents.",
    icon: FileText,
    image: `${process.env.NEXT_PUBLIC_R2_URL}/services/rti.webp`,
    href: "/services/rti",
  },
  {
    title: "Health & Relief Work",
    text: "Medical camps, blood donation coordination, food support, and immediate welfare response for vulnerable families.",
    icon: HeartPulse,
    image: `${process.env.NEXT_PUBLIC_R2_URL}/services/medical.webp`,
    href: "/services/medical",
  },
  {
    title: "Awareness Campaigns",
    text: "Community programs that help people understand rights, safety, social responsibility, and public welfare.",
    icon: Megaphone,
    image: `${process.env.NEXT_PUBLIC_R2_URL}/about/why5.webp`,
    href: "/gallery",
  },
];

const TIMELINE = [
  { title: "Receive Request", text: "Members collect the concern, location, contact details, and supporting documents." },
  { title: "Assign Support", text: "The right district or service team studies the need and prepares the next action." },
  { title: "Coordinate Action", text: "NCIO follows up through calls, camps, referrals, paperwork, or field support." },
  { title: "Track Outcome", text: "Volunteers stay connected so requests do not disappear after the first response." },
];

export default function HomeShowcaseSections() {
  return (
    <>
      {/* Impact Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#06183d] tracking-tight">
              Real service areas, visible work, direct public value.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {IMPACT_AREAS.map((area) => {
              const Icon = area.icon;
              return (
                <Link
                  key={area.title}
                  href={area.href}
                  className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-[#b8860b] hover:shadow-2xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06183d] text-[#d4af37]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#06183d] mb-3">{area.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{area.text}</p>
                  {/* <span className="inline-flex items-center gap-2 font-bold text-[#b8860b]">
                    Explore <ArrowRight size={16} />
                  </span> */}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-[#06183d] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-16 items-center">
            <div>
              <p className="text-[#f8e287] font-bold tracking-widest uppercase text-sm mb-4">Action Method</p>
              <h2 className="text-4xl font-bold leading-tight mb-6">A simple process that keeps every request moving.</h2>
              <div className="flex gap-4">
                <Link href="/verify-id" className="px-6 py-3 rounded-full bg-white text-[#06183d] font-bold hover:bg-slate-200 transition">Verify ID</Link>
                <Link href="/member-portal" className="px-6 py-3 rounded-full border border-[#d4af37] text-[#f8e287] font-bold hover:bg-[#d4af37]/10 transition">Portal</Link>
              </div>
            </div>

            <div className="space-y-8">
              {TIMELINE.map((item, index) => (
                <div key={item.title} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37] bg-[#06183d] font-bold text-[#d4af37]">
                      {index + 1}
                    </div>
                    {index !== TIMELINE.length - 1 && <div className="mt-2 w-0.5 grow bg-slate-700" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}