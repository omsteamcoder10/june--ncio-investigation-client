// components/home/TeamPreview.tsx
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

// Team members data with photos directly in component
const TEAM_MEMBERS_PREVIEW = [
  {
    id: 1,
    name: "K. Rajendran",
    role: "State President",
    district: "Tirupur",
    photo: "/team/team1.webp",
    greeting: "Greetings from Tirupur! It is my honour to lead NCIO as State President. For over a decade, I have dedicated my life to ensuring justice reaches every corner of Tamil Nadu.",
  },
  {
    id: 2,
    name: "S. Meenakshi",
    role: "State Secretary",
    district: "Chennai",
    photo: "/team/team1.webp",
    greeting: "Warm greetings from Chennai! As State Secretary, I coordinate NCIO activities across all districts of Tamil Nadu. My passion is legal literacy — every citizen deserves to know their rights.",
  },
  {
    id: 3,
    name: "M. Selvakumar",
    role: "District Coordinator",
    district: "Coimbatore",
    photo: "/team/team1.webp",
    greeting: "Greetings from Coimbatore! I have been serving as District Coordinator for three years. Our Coimbatore chapter has conducted over 50 blood donation camps.",
  },
];

export default function TeamPreview() {
  return (
    <section className="py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading badge="Our People" title="Meet Our Team" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          {TEAM_MEMBERS_PREVIEW.map((m) => (
            <div key={m.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="relative h-56">
                <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-4">
                  <div>
                    <p className="text-white font-bold">{m.name}</p>
                    <p className="text-[#f9a825] text-sm">{m.role}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPin size={11} className="text-white/60" />
                      <span className="text-white/70 text-xs">{m.district}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-[#f9a825] text-3xl leading-none mb-1 font-serif">"</div>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 italic">{m.greeting}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/team"
            className="inline-flex items-center gap-2 border-2 border-[#1a237e] text-[#1a237e] hover:bg-[#1a237e] hover:text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm">
            View All Team Members <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}