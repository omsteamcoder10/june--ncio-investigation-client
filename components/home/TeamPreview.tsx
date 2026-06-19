"use client";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

// ADD THIS DATA BACK IN
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge="Leadership" title="The Faces of Justice" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {TEAM_MEMBERS_PREVIEW.map((m) => (
            <div key={m.id} className="group cursor-pointer">
              {/* Image Frame */}
              <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-gray-100">
                <img 
                  src={m.photo} 
                  alt={m.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                {/* Gold corner accent */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#bf953f] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#bf953f] text-xs font-bold tracking-[0.2em] uppercase">
                  <MapPin size={12} /> {m.district}
                </div>
                <h3 className="text-2xl font-bold text-[#041a4a]">{m.name}</h3>
                <p className="text-[#bf953f] font-medium">{m.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed italic border-l-2 border-gray-100 pl-4 mt-4">
                  "{m.greeting.split(' ').slice(0, 15).join(' ')}..."
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link href="/team" className="inline-flex items-center gap-3 text-[#041a4a] font-bold text-lg hover:text-[#bf953f] transition-all">
            See The Full Team <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}