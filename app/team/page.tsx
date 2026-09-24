"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  FileText,
  Globe,
  Heart,
  MapPin,
  Megaphone,
  Quote,
  Shield,
  Star,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const ROLE_ICONS: Record<string, React.ElementType> = {
  "State President": Shield,
  "State Vice President": Star,
  "State General Secretary": FileText,
  "State Deputy General Secretary": FileText,
  "State Administrative Secretary": Wrench,
  "RTI Wing Coordinator": Globe,
  "State Public Relations Officer (PRO)": Megaphone,
  "State Youth Wing Organizer": Zap,
  "State Technical Wing Organizer": Wrench,
  "State Women's Wing Organizer": Heart,
  "Zonal Organizer": MapPin,
  "Board of Directors": Shield,
  "NRI Officers": Globe,
  "State Chairman": Star,
  "State Deputy Chairman": MapPin,
  "Deputy General Secretary": FileText,
  "Chief Advisors": Wrench,
  "Chief Legal Advisors (High Court)": Shield,
  "Chief Advisors (RTI)": Globe,
  "Coordinator (Organisation)": Wrench,
  "Administration PRO": Megaphone,
  "State Secretary": FileText,
};

/* =========================================================
   TEAM CATEGORIES
   ========================================================= */

type TeamCategory = {
  role: string;
  label: string;
};

const TEAM_CATEGORIES: TeamCategory[] = [
  { role: "Board of Directors (இயக்குநர்கள் குழு)", label: "Board of Directors" },
  { role: "NRI Officers (NRI அதிகாரிகள்)", label: "NRI Officers" },
  { role: "State Chairman (மாநில தலைவர்)", label: "State Chairman" },
  { role: "State Deputy Chairman (மாநில துணைத் தலைவர்)", label: "State Deputy Chairman" },
  { role: "State General Secretary (மாநில பொதுச் செயலாளர்)", label: "State General Secretary" },
  { role: "State Deputy General Secretary (மாநில துணைப் பொதுச் செயலாளர்)", label: "State Deputy General Secretary" },
  { role: "Deputy General Secretary (துணைப் பொதுச் செயலாளர்)", label: "Deputy General Secretary" },
  { role: "Chief Advisors (தலைமை ஆலோசகர்கள்)", label: "Chief Advisors" },
  { role: "Chief Legal Advisors (High Court) (தலைமை சட்ட ஆலோசகர்கள் - உயர் நீதிமன்றம்)", label: "Chief Legal Advisors (High Court)" },
  { role: "Chief Advisors (RTI) (தலைமை ஆலோசகர்கள் - RTI)", label: "Chief Advisors (RTI)" },
  { role: "Coordinator (Organisation) (ஒருங்கிணைப்பாளர் - அமைப்பு)", label: "Coordinator (Organisation)" },
  { role: "Administration PRO (நிர்வாக பொது தொடர்பு அதிகாரி)", label: "Administration PRO" },
  { role: "State Secretary (மாநில செயலாளர்)", label: "State Secretary" },
];

const EXISTING_CATEGORIES: TeamCategory[] = [
  { role: "State President (மாநில தலைவர்)", label: "State President" },
  { role: "State Vice President (மாநில துணைத் தலைவர்)", label: "State Vice President" },
  { role: "State Administrative Secretary (மாநில நிர்வாக செயலாளர்)", label: "State Administrative Secretary" },
  { role: "RTI Wing Coordinator (தகவல் அறியும் உரிமை பிரிவு ஒருங்கிணைப்பாளர்)", label: "RTI Wing Coordinator" },
  { role: "State Public Relations Officer (PRO) (மாநில பொது தொடர்பு அதிகாரி)", label: "State PRO" },
  { role: "State Youth Wing Organizer (மாநில இளைஞர் அணி ஒருங்கிணைப்பாளர்)", label: "State Youth Wing Organizer" },
  { role: "State Technical Wing Organizer (மாநில தொழில்நுட்ப அணி ஒருங்கிணைப்பாளர்)", label: "State Technical Wing Organizer" },
  { role: "State Women's Wing Organizer (மாநில பெண்கள் அணி ஒருங்கிணைப்பாளர்)", label: "State Women's Wing Organizer" },
  { role: "Zonal Organizer (மண்டல ஒருங்கிணைப்பாளர்)", label: "Zonal Organizer" },
];

type TeamGroup = {
  label: string;
  role: string;
  members: Member[];
};

const groupMembersByCategory = (members: Member[]): TeamGroup[] => {
  const groups: TeamGroup[] = [];

  const knownRoles = new Set(
    TEAM_CATEGORIES.map((category) => category.role).concat(
      EXISTING_CATEGORIES.map((category) => category.role)
    )
  );

  const orderedCategories = [...TEAM_CATEGORIES, ...EXISTING_CATEGORIES];

  orderedCategories.forEach((category) => {
    const categoryMembers = members.filter(
      (member) => member.role === category.role
    );

    if (categoryMembers.length) {
      groups.push({
        label: category.label,
        role: category.role,
        members: categoryMembers,
      });
    }
  });

  const leftover: Record<string, Member[]> = {};

  members.forEach((member) => {
    if (!knownRoles.has(member.role)) {
      const key = member.role || "Team Member";
      if (!leftover[key]) leftover[key] = [];
      leftover[key].push(member);
    }
  });

  Object.keys(leftover).forEach((role) => {
    groups.push({ label: role, role, members: leftover[role] });
  });

  return groups;
};

/* =========================================================
   API / IMAGE URL CONFIG
   ========================================================= */

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || "")
  .replace(/\/api\/?$/, "")
  .replace(/\/$/, "");

const resolveImageUrl = (value?: string | null): string => {
  if (!value || typeof value !== "string") return "";

  const trimmed = value.trim();
  if (!trimmed) return "";

  if (trimmed.startsWith("data:")) return trimmed;

  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("blob:")
  ) {
    return trimmed;
  }

  if (trimmed.startsWith("/files/")) return `${API_BASE_URL}${trimmed}`;
  if (trimmed.startsWith("/")) return `${API_BASE_URL}${trimmed}`;

  return trimmed;
};

/* =========================================================
   FOUNDER
   ========================================================= */

const FOUNDER = {
  name: "Dr. VPA Amirthalingam",
  title: "Founder & President",
  image: `${process.env.NEXT_PUBLIC_R2_URL}/image/1.png`,
  quote:
    "An informed and empowered citizenry is the cornerstone of a just and progressive society.",
  bio: [
    "Dr. VPA Amirthalingam is the visionary founder of the National Crime Investigates Organization (NCIO), a registered NGO under the Indian Trusts Act, dedicated to empowering citizens through legal awareness, social welfare, and community development.",
    "Driven by a deep sense of social responsibility, he has championed causes ranging from RTI facilitation and free legal aid to healthcare outreach, educational support, and environmental sustainability.",
    "Under his guidance, NCIO has expanded its reach significantly, establishing a strong network of dedicated members and volunteers throughout Tamil Nadu and fostering a growing international network that actively supports the welfare of Indian workers abroad.",
  ],
  stats: [
    { label: "Years of Service", value: "15+" },
    { label: "Districts Covered", value: "38" },
    { label: "Lives Impacted", value: "50K+" },
  ],
};

/* =========================================================
   TEAM MEMBER TYPE
   ========================================================= */

type Member = {
  id: number;
  name: string;
  role: string;
  district: string;
  photo: string;
  greeting: string;
  display_order: number;
};

/* =========================================================
   TEAM PAGE
   ========================================================= */

export default function TeamPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/team`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch team members: ${response.status}`);
        }

        const data = await response.json();
        setMembers(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to load team members:", error);
        setMembers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const categories = groupMembersByCategory(members);

  return (
    <main className="min-h-screen bg-[#faf8f2]">
      {/* =====================================================
          HERO SECTION — refined, more editorial
          ===================================================== */}

      <section className="relative overflow-hidden bg-[#081a3d]">
        {/* subtle fine-line texture instead of big circles */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, transparent 0px, transparent 78px, #d4af37 79px)",
          }}
        />

        <div className="pointer-events-none absolute -right-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#d4af37]/[0.06] blur-3xl" />

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-28">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#d4af37]" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e9c96a]">
              Our Leadership
            </span>
          </div>

          <h1 className="max-w-2xl text-4xl font-light leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            The People Behind
            <br />
            <span className="font-black text-[#e9c96a]">NCIO</span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
            Dedicated leaders united by a single mission — truth, justice, and
            service for every citizen of Tamil Nadu.
          </p>

          <div className="mt-9 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-[#e9c96a]">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="font-medium text-[#e9c96a]">Team</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOUNDER SECTION — cleaner, single-frame photo card
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20">
          <div>
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl bg-[#081a3d] shadow-[0_30px_60px_-15px_rgba(8,26,61,0.35)] lg:max-w-none">
              <img
                src={FOUNDER.image}
                alt={FOUNDER.name}
                className="aspect-[4/5] h-full w-full object-cover object-top"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050f26] via-[#050f26]/70 to-transparent p-5 pt-14">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#e9c96a]">
                  {FOUNDER.title}
                </p>
                <p className="mt-1 text-lg font-bold text-white">
                  {FOUNDER.name}
                </p>
              </div>
            </div>

            <div className="mx-auto mt-5 grid max-w-sm grid-cols-3 gap-2 lg:max-w-none">
              {FOUNDER.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-[#081a3d]/8 bg-white px-2 py-4 text-center"
                >
                  <p className="text-xl font-black text-[#081a3d] sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[9px] font-semibold uppercase leading-tight tracking-wide text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-1">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7319]">
              <span className="h-px w-6 bg-[#d4af37]" />
              Visionary Leader
            </span>

            <h2 className="mb-6 text-3xl font-black leading-tight text-[#081a3d] sm:text-4xl">
              {FOUNDER.name}
            </h2>

            <div className="mb-7 border-l-2 border-[#d4af37] pl-5">
              <Quote size={20} className="mb-2 text-[#d4af37]" />
              <p className="text-base font-medium italic leading-8 text-[#081a3d]/80">
                {FOUNDER.quote}
              </p>
            </div>

            <div className="space-y-4">
              {FOUNDER.bio.map((para) => (
                <p key={para} className="text-sm leading-7 text-slate-600">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TEAM MEMBERS SECTION — refined list-style cards
          ===================================================== */}

      <section className="border-y border-[#081a3d]/8 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-28">
          <div className="mb-12 text-center sm:mb-16">
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7319]">
              <span className="h-px w-6 bg-[#d4af37]" />
              State Committee
              <span className="h-px w-6 bg-[#d4af37]" />
            </span>

            <h2 className="text-3xl font-black text-[#081a3d] sm:text-4xl">
              Executive Leadership
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
              The core team steering NCIO's mission across all 38 districts of
              Tamil Nadu.
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="h-9 w-9 animate-spin rounded-full border-[3px] border-[#081a3d] border-t-transparent" />
            </div>
          ) : members.length === 0 ? (
            <div className="py-24 text-center">
              <Users size={30} className="mx-auto mb-3 text-slate-200" />
              <p className="text-sm text-slate-400">No team members yet</p>
            </div>
          ) : (
            <div className="space-y-14 sm:space-y-16">
              {categories.map((group) => (
                <div key={group.role}>
                  <div className="mb-6 flex items-baseline gap-3 border-b border-[#081a3d]/8 pb-3">
                    <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#081a3d]">
                      {group.label}
                    </h3>
                    <span className="text-xs font-medium text-slate-400">
                      {group.members.length}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
                    {group.members.map((member) => {
                      const imageUrl = resolveImageUrl(member.photo);

                      return (
                        <div
                          key={member.id}
                          className="group overflow-hidden rounded-xl border border-[#081a3d]/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/50 hover:shadow-[0_18px_40px_-12px_rgba(8,26,61,0.18)]"
                        >
                          <div className="relative aspect-square overflow-hidden bg-[#f2f0e9]">
                            {imageUrl ? (
                              <img
                                src={imageUrl}
                                alt={member.name || "Team member"}
                                loading="lazy"
                                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                                onError={(event) => {
                                  const target = event.currentTarget;
                                  target.style.display = "none";
                                  const parent = target.parentElement;
                                  if (parent) {
                                    parent.classList.add(
                                      "bg-gradient-to-br",
                                      "from-[#081a3d]",
                                      "to-[#16346f]"
                                    );
                                  }
                                }}
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#081a3d] to-[#16346f]">
                                <span className="text-3xl font-black text-white/40">
                                  {member.name?.charAt(0) || "?"}
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="p-3 sm:p-4">
                            <p className="mb-1 text-[9px] font-bold uppercase leading-tight tracking-widest text-[#9a7319] line-clamp-1">
                              {member.role}
                            </p>

                            <p className="text-sm font-bold leading-tight text-[#081a3d] line-clamp-2 sm:text-base">
                              {member.name}
                            </p>

                            {member.district && (
                              <p className="mt-1.5 flex items-center gap-1 text-[11px] text-slate-400">
                                <MapPin size={10} />
                                {member.district}
                              </p>
                            )}

                            {member.greeting && (
                              <p className="mt-2 line-clamp-2 border-t border-[#081a3d]/6 pt-2 text-[11px] italic leading-relaxed text-slate-500">
                                {member.greeting}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          CTA SECTION
          ===================================================== */}

      <section className="bg-[#081a3d] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#e9c96a]">
            Be Part of the Change
          </p>

          <h2 className="mb-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Join the NCIO Family
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-sm leading-7 text-slate-300">
            Stand alongside thousands of dedicated members working to build a
            more just, aware, and equitable Tamil Nadu.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/membership#apply"
              className="rounded-full bg-[#d4af37] px-8 py-3.5 text-sm font-bold text-[#081a3d] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e9c96a]"
            >
              Apply for Membership
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}