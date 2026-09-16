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
};

/* =========================================================
   API / IMAGE URL CONFIG
   ========================================================= */

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || "")
  .replace(/\/api\/?$/, "")
  .replace(/\/$/, "");

/**
 * Converts backend relative file paths into full backend URLs.
 *
 * DB example:
 * /files/team/team-member-26-xxx.webp
 *
 * Browser:
 * http://localhost:5000/files/team/team-member-26-xxx.webp
 */
const resolveImageUrl = (value?: string | null): string => {
  if (!value || typeof value !== "string") {
    return "";
  }

  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  // Base64 images
  if (trimmed.startsWith("data:")) {
    return trimmed;
  }

  // Already full URL
  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("blob:")
  ) {
    return trimmed;
  }

  // R2/backend file path
  if (trimmed.startsWith("/files/")) {
    return `${API_BASE_URL}${trimmed}`;
  }

  // Other absolute paths
  if (trimmed.startsWith("/")) {
    return `${API_BASE_URL}${trimmed}`;
  }

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
    {
      label: "Years of Service",
      value: "15+",
    },
    {
      label: "Districts Covered",
      value: "38",
    },
    {
      label: "Lives Impacted",
      value: "50K+",
    },
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

  /* =======================================================
     FETCH TEAM MEMBERS
     ======================================================= */

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/team`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch team members: ${response.status}`
          );
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

  /* =======================================================
     PAGE
     ======================================================= */

  return (
    <main className="min-h-screen bg-[#f8f5ee]">
      {/* =====================================================
          HERO SECTION
          ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#06183d] via-[#0a2459] to-[#112f73] pt-20 sm:pt-24">
        <div className="absolute -right-16 sm:-right-24 -top-16 sm:-top-24 h-64 sm:h-96 w-64 sm:w-96 rounded-full border border-white/5" />

        <div className="absolute bottom-0 left-0 h-48 sm:h-72 w-48 sm:w-72 -translate-x-1/3 translate-y-1/3 rounded-full border border-[#d4af37]/10" />

        <div className="h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14 lg:py-20">
          <div className="mb-3 sm:mb-4 flex items-center gap-2">
            <span className="h-px w-6 sm:w-8 bg-[#d4af37]" />

            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#f8e287]">
              Our Leadership
            </span>
          </div>

          <h1 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
            The Faces Behind{" "}
            <span className="gold-gradient-text">NCIO</span>
          </h1>

          <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-slate-200">
            Dedicated leaders united by a single mission: truth, justice, and
            service for every citizen of Tamil Nadu.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300">
            <Link
              href="/"
              className="transition hover:text-[#f8e287]"
            >
              Home
            </Link>

            <ChevronRight size={14} />

            <span className="font-semibold text-[#f8e287]">
              Team
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOUNDER SECTION
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14 lg:py-20">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute inset-0 translate-x-2 sm:translate-x-3 lg:translate-x-4 translate-y-2 sm:translate-y-3 lg:translate-y-4 rounded-[1.5rem] border-2 border-[#d4af37]/35" />

            <div className="relative mx-auto aspect-[4/5] max-w-[260px] sm:max-w-sm overflow-hidden rounded-[1.5rem] bg-[#06183d] shadow-[0_28px_80px_rgba(4,13,38,0.22)] lg:max-w-none">
              <img
                src={FOUNDER.image}
                alt={FOUNDER.name}
                className="h-full w-full object-cover object-top"
              />

              <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 lg:h-36 bg-gradient-to-t from-[#04122f]/95 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#f8e287]">
                  {FOUNDER.title}
                </p>

                <p className="mt-1 text-lg sm:text-xl font-black text-white">
                  {FOUNDER.name}
                </p>
              </div>
            </div>

            <div className="mx-auto mt-4 grid max-w-[260px] sm:max-w-sm grid-cols-3 gap-2 sm:gap-3 lg:max-w-none">
              {FOUNDER.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[#d4af37]/25 bg-white p-2 sm:p-3 text-center shadow-sm"
                >
                  <p className="text-xl sm:text-2xl font-black text-[#06183d]">
                    {stat.value}
                  </p>

                  <p className="mt-0.5 text-[8px] sm:text-[10px] font-semibold uppercase leading-tight tracking-wide text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="mb-3 sm:mb-4 inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#9a7319]">
              <span className="h-px w-4 sm:w-6 bg-[#d4af37]" />
              Visionary Leader
            </span>

            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-[#06183d]">
              {FOUNDER.name}
            </h2>

            <div className="relative mb-5 sm:mb-6 rounded-[1.35rem] bg-[#06183d] p-4 sm:p-5 shadow-[0_18px_45px_rgba(4,13,38,0.16)]">
              <Quote
                className="absolute left-3 sm:left-4 top-3 sm:top-4 text-[#f8e287]/30"
                size={28}
              />

              <p className="pl-5 sm:pl-6 text-xs sm:text-sm font-medium italic leading-6 sm:leading-7 text-white">
                "{FOUNDER.quote}"
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {FOUNDER.bio.map((para) => (
                <p
                  key={para}
                  className="text-sm leading-6 sm:leading-7 text-slate-600"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TEAM MEMBERS SECTION
          ===================================================== */}

      <section className="border-y border-[#d4af37]/20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14 lg:py-20">
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <span className="mb-2 sm:mb-3 inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#9a7319]">
              <span className="h-px w-4 sm:w-6 bg-[#d4af37]" />

              State Committee

              <span className="h-px w-4 sm:w-6 bg-[#d4af37]" />
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#06183d]">
              Executive Leadership
            </h2>

            <p className="mx-auto mt-2 sm:mt-3 max-w-xl text-xs sm:text-sm text-slate-500">
              The core team steering NCIO's mission across all 38 districts of
              Tamil Nadu.
            </p>
          </div>

          {/* =================================================
              LOADING
              ================================================= */}

          {loading ? (
            <div className="flex items-center justify-center py-16 sm:py-20 lg:py-24">
              <div className="h-8 sm:h-10 w-8 sm:w-10 animate-spin rounded-full border-4 border-[#06183d] border-t-transparent" />
            </div>
          ) : members.length === 0 ? (
            /* ===============================================
               NO MEMBERS
               =============================================== */

            <div className="py-16 sm:py-20 lg:py-24 text-center">
              <Users
                size={32}
                className="mx-auto mb-3 text-slate-200"
              />

              <p className="text-slate-400 text-sm">
                No team members yet
              </p>
            </div>
          ) : (
            /* ===============================================
               TEAM GRID
               =============================================== */

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:gap-5">
              {members.map((member) => {
                const Icon = ROLE_ICONS[member.role] ?? Users;

                /*
                 * IMPORTANT:
                 *
                 * member.photo:
                 * /files/team/team-member-26-xxx.webp
                 *
                 * becomes:
                 * http://localhost:5000/files/team/team-member-26-xxx.webp
                 */

                const imageUrl = resolveImageUrl(member.photo);

                return (
                  <div
                    key={member.id}
                    className="group relative cursor-default overflow-hidden rounded-[1.25rem] border border-[#d4af37]/20 bg-[#fbfaf7] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/60 hover:bg-[#06183d] hover:shadow-xl"
                  >
                    {/* =====================================
                        IMAGE
                        ===================================== */}

                    <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={member.name || "Team member"}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={(event) => {
                            const target = event.currentTarget;

                            /*
                             * Prevent broken-image icon.
                             * Hide image if R2 file cannot be loaded.
                             */
                            target.style.display = "none";

                            const parent = target.parentElement;

                            if (parent) {
                              parent.classList.add(
                                "bg-gradient-to-br",
                                "from-[#06183d]",
                                "to-[#112f73]"
                              );
                            }
                          }}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#06183d] to-[#112f73]">
                          <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white/45">
                            {member.name?.charAt(0) || "?"}
                          </span>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-[#06183d]/0 transition-colors duration-300 group-hover:bg-[#06183d]/30" />

                      <div className="absolute right-2 sm:right-3 top-2 sm:top-3 flex h-6 sm:h-7 md:h-8 w-6 sm:w-7 md:w-8 items-center justify-center rounded-full bg-[#f8e287] opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                        <Icon
                          size={12}
                          className="text-[#06183d]"
                        />
                      </div>
                    </div>

                    {/* =====================================
                        MEMBER DETAILS
                        ===================================== */}

                    <div className="p-3 sm:p-4">
                      <p className="mb-0.5 sm:mb-1 text-[8px] sm:text-[10px] font-bold uppercase leading-tight tracking-widest text-[#9a7319] line-clamp-1">
                        {member.role}
                      </p>

                      <p className="text-xs sm:text-sm md:text-base font-bold leading-tight text-slate-800 transition-colors duration-300 group-hover:text-white line-clamp-2">
                        {member.name}
                      </p>

                      {member.district && (
                        <p className="mt-1 flex items-center gap-1 text-[10px] sm:text-xs text-slate-400 transition-colors group-hover:text-blue-200">
                          <MapPin size={10} />

                          {member.district}
                        </p>
                      )}

                      {member.greeting && (
                        <div className="mt-2 sm:mt-3 border-t border-slate-100 pt-2 sm:pt-3 group-hover:border-white/10">
                          <Quote
                            size={10}
                            className="mb-0.5 sm:mb-1 text-[#d4af37]/60"
                          />

                          <p className="line-clamp-2 text-[10px] sm:text-xs italic leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-blue-100">
                            {member.greeting}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* =====================================
                        GOLD BOTTOM LINE
                        ===================================== */}

                    <div className="h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#d4af37] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          CTA SECTION
          ===================================================== */}

      <section className="bg-gradient-to-r from-[#06183d] via-[#0a2459] to-[#112f73] py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#f8e287]">
            Be Part of the Change
          </p>

          <h2 className="mb-3 sm:mb-4 md:mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white">
            Join the NCIO Family
          </h2>

          <p className="mx-auto mb-6 sm:mb-8 max-w-xl text-xs sm:text-sm leading-6 sm:leading-7 text-slate-200">
            Stand alongside thousands of dedicated members working to build a
            more just, aware, and equitable Tamil Nadu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
  href="/membership#apply"
  className="w-auto sm:w-auto rounded-full bg-gradient-to-r from-[#b8860b] via-[#fff0a3] to-[#b8860b] px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-black text-[#06183d] shadow-lg transition-all duration-200 hover:-translate-y-0.5"
>
  Apply for Membership
</Link>

<Link
  href="/contact"
  className="w-auto sm:w-auto rounded-full border border-white/30 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
>
  Contact Us
</Link>
          </div>
        </div>
      </section>
    </main>
  );
}