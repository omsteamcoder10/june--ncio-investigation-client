"use client";

import PageBanner from "@/components/shared/PageBanner";
import { MapPin, Quote } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const DIRECTOR = {
  name: "K. Rajendran",
  role: "Director",
  district: "Tirupur, Tamil Nadu",
  photo: "/team/team1.webp",
  greeting:
    "Vanakkam! It is my honour to lead NCIO as Director. For over a decade, I have dedicated my life to ensuring justice reaches every corner of Tamil Nadu. Together, we will build a society where no citizen is denied their basic rights.",
};

const BOARD_OF_DIRECTORS = [
  {
    name: "S. Meenakshi",
    role: "Board of Director",
    district: "Chennai",
    photo: "/team/team1.webp",
    greeting:
      "Warm greetings! As a Board member, I ensure NCIO's programs reach every district effectively. Legal literacy is my passion — every citizen deserves to know their rights.",
  },
  {
    name: "M. Selvakumar",
    role: "Board of Director",
    district: "Coimbatore",
    photo: "/team/team1.webp",
    greeting:
      "Greetings from Coimbatore! I oversee our healthcare and blood donation initiatives. Every life saved through NCIO's camps drives me to do more.",
  },
  {
    name: "P. Lakshmi",
    role: "Board of Director",
    district: "Madurai",
    photo: "/team/team1.webp",
    greeting:
      "Vanakkam! I champion education and hunger relief programs at the board level. No child should go hungry or miss school because of poverty.",
  },
  {
    name: "R. Arumugam",
    role: "Board of Director",
    district: "Salem",
    photo: "/team/team1.webp",
    greeting:
      "Greetings from Salem! I lead NCIO's environmental initiatives and rural outreach. Planting trees and feeding communities — this is our duty.",
  },
  {
    name: "V. Priya",
    role: "Board of Director",
    district: "Trichy",
    photo: "/team/team1.webp",
    greeting:
      "Hello from Trichy! I coordinate RTI and NRI support programs. Every citizen who gets their rights back because of NCIO is my motivation.",
  },
  {
    name: "T. Suresh Kumar",
    role: "Board of Director",
    district: "Erode",
    photo: "/team/team1.webp",
    greeting:
      "Greetings! I handle community outreach and volunteer management across districts. NCIO's strength lies in its people — and I am proud to serve them.",
  },
];

const LEGAL_ADVISORS = [
  {
    name: "Adv. N. Krishnamurthy",
    role: "Chief Legal Advisor",
    district: "Chennai High Court",
    photo: "/team/team1.webp",
    
  },
  {
    name: "Adv. S. Padmavathi",
    role: "Chief Legal Advisor",
    district: "Madurai Bench",
    photo: "/team/team1.webp",
   
  },
  {
    name: "Adv. R. Balasubramanian",
    role: "Chief Legal Advisor",
    district: "Coimbatore District Court",
    photo: "/team/team1.webp",
    
  },
];

const CHIEF_ADVISORS = [
  {
    name: "Dr. K. Annamalai",
    role: "Chief Advisor",
    district: "Tirupur",
    photo: "/team/team1.webp",
    
  },
  {
    name: "Dr. M. Saranya",
    role: "Chief Advisor",
    district: "Salem",
    photo: "/team/team1.webp",
    
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1a237e]">{title}</h2>
      {subtitle && <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}

function DirectorCard({ member }: { member: typeof DIRECTOR }) {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
        <div className="flex flex-col md:flex-row">
          {/* Photo - Full image, responsive */}
          <div className="md:w-1/2 h-64 md:h-auto">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content - Blue background */}
          <div className="md:w-1/2 bg-gradient-to-br from-[#1a237e] to-[#0d1440] p-6 text-white">
            <h3 className="font-display text-xl font-bold mb-1">{member.name}</h3>
            <div className="flex items-center gap-1 mb-3">
              <MapPin size={12} className="text-[#f9a825]" />
              <span className="text-white/70 text-xs">{member.district}</span>
            </div>
            <div className="mt-3 pt-3 border-t border-white/20">
              <Quote size={20} className="text-[#f9a825] mb-2" />
              <p className="text-white/85 text-xs leading-relaxed italic">{member.greeting}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BoardCard({ member }: { member: (typeof BOARD_OF_DIRECTORS)[0] }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1">
      {/* Photo - Full image, responsive */}
      <div className="h-48 overflow-hidden">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content - Blue background */}
      <div className="bg-gradient-to-br from-[#1a237e] to-[#0d1440] p-4 text-white">
        <h3 className="font-bold text-base text-center">{member.name}</h3>
        <p className="text-[#f9a825] text-xs font-semibold text-center mt-1">{member.role}</p>
        <div className="flex items-center justify-center gap-1 mt-1">
          <MapPin size={10} className="text-[#f9a825]" />
          <span className="text-white/60 text-xs">{member.district}</span>
        </div>
        <div className="mt-3 pt-2 border-t border-white/20">
          <Quote size={12} className="text-[#f9a825] mx-auto mb-1" />
          <p className="text-white/75 text-xs leading-relaxed italic text-center line-clamp-2">{member.greeting}</p>
        </div>
      </div>
    </div>
  );
}

function SimpleCard({
  member,
}: {
  member: { name: string; role: string; district: string; photo: string; greeting?: string };
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1">
      {/* Photo - Full image, responsive */}
      <div className="h-40 overflow-hidden">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content - Blue background */}
      <div className="bg-gradient-to-br from-[#1a237e] to-[#0d1440] p-3 text-white text-center">
        <h3 className="font-bold text-sm">{member.name}</h3>
        <p className="text-[#f9a825] text-xs font-semibold mt-1">{member.role}</p>
        <div className="flex items-center justify-center gap-1 mt-1">
          <MapPin size={9} className="text-[#f9a825]" />
          <span className="text-white/60 text-xs">{member.district}</span>
        </div>
        {member.greeting && (
          <div className="mt-2 pt-1 border-t border-white/20">
            <p className="text-white/70 text-xs leading-relaxed italic line-clamp-2">{member.greeting}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function TeamPage() {
  return (
    <>
      <PageBanner
        title="Our Leadership"
        subtitle="Meet the dedicated individuals guiding NCIO's mission across Tamil Nadu"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Team" }]}
      />

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">

          {/* 1. DIRECTOR */}
          <SectionTitle title="Director" />
          <DirectorCard member={DIRECTOR} />

          {/* 2. BOARD OF DIRECTORS */}
          <SectionTitle title="Board of Directors" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {BOARD_OF_DIRECTORS.map((m) => (
              <BoardCard key={m.name} member={m} />
            ))}
          </div>

          {/* 3. CHIEF LEGAL ADVISORS */}
          <SectionTitle title="Chief Legal Advisors" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {LEGAL_ADVISORS.map((m) => (
              <SimpleCard key={m.name} member={m} />
            ))}
          </div>

          {/* 4. CHIEF ADVISORS */}
          <SectionTitle title="Chief Advisors" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            {CHIEF_ADVISORS.map((m) => (
              <SimpleCard key={m.name} member={m} />
            ))}
          </div>

          {/* JOIN CTA */}
          <div className="mt-8 bg-gradient-to-r from-[#f9a825] to-[#f57f17] rounded-2xl p-8 text-center">
            <h2 className="font-display text-xl font-bold text-[#1a237e] mb-2">
              Want to Be Part of Our Team?
            </h2>
            <p className="text-[#1a237e]/80 mb-5 max-w-md mx-auto text-sm">
              We are always looking for committed individuals to serve as district coordinators and volunteers across Tamil Nadu.
            </p>
            <a
              href="/membership"
              className="inline-block bg-[#1a237e] hover:bg-[#0d1440] text-white font-bold px-6 py-2.5 rounded-lg transition-colors shadow-md text-sm"
            >
              Apply for Membership
            </a>
          </div>

        </div>
      </section>
    </>
  );
}