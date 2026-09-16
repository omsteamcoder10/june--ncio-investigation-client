"use client";

import { useState, useEffect, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  Sparkles,
  FileText,
  Scale,
  GraduationCap,
  Plane,
  HeartPulse,
  Droplets,
  Leaf,
  HandHeart,
  ArrowRight,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "#",
    dropdown: [
      { label: "RTI Services", href: "/services/rti" },
      { label: "Free Legal Services", href: "/services/legal" },
      { label: "Education", href: "/services/education" },
      { label: "NRI Services", href: "/services/nri" },
      { label: "Medical Camps", href: "/services/medical" },
      { label: "Blood Donation", href: "/services/blood-donation" },
      { label: "Environment", href: "/services/environment" },
      { label: "Hunger Relief", href: "/services/hunger" },
    ],
  },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Member", href: "/member-portal" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_DROPDOWN_META = {
  "/services/rti": {
    icon: FileText,
    desc: "Applications, appeals, and tracking support",
  },
  "/services/legal": {
    icon: Scale,
    desc: "Guidance, documents, and advocate referrals",
  },
  "/services/education": {
    icon: GraduationCap,
    desc: "Scholarships, supplies, and student support",
  },
  "/services/nri": {
    icon: Plane,
    desc: "Family, property, and embassy coordination",
  },
  "/services/medical": {
    icon: HeartPulse,
    desc: "Camps, checkups, medicines, and referrals",
  },
  "/services/blood-donation": {
    icon: Droplets,
    desc: "Donation camps and urgent donor network",
  },
  "/services/environment": {
    icon: Leaf,
    desc: "Tree planting, cleanup, and awareness drives",
  },
  "/services/hunger": {
    icon: HandHeart,
    desc: "Meals, relief kits, and crisis food support",
  },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  /* -----------------------------------------------------------
     SCROLL
  ----------------------------------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* -----------------------------------------------------------
     CLOSE MENU ON ROUTE CHANGE
  ----------------------------------------------------------- */
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  /* -----------------------------------------------------------
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ----------------------------------------------------------- */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* -----------------------------------------------------------
     NAVIGATION
  ----------------------------------------------------------- */
  const handleNavClick = (
    href: string,
    e?: MouseEvent<HTMLAnchorElement>
  ) => {
    if (href === "#") return;

    e?.preventDefault();

    setMobileOpen(false);
    setServicesOpen(false);

    router.push(href);
  };

  return (
    <>
      {/* =========================================================
          MAIN NAVBAR
          DESKTOP DESIGN KEPT
      ========================================================= */}
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-[9990] transition-all duration-300 border-b border-[#d4af37]/40 ${
          scrolled
            ? "shadow-[0_8px_32px_rgba(212,175,55,0.25)]"
            : ""
        }`}
        style={{
          background: scrolled
            ? `linear-gradient(
                90deg,
                #8b6b1f 0%,
                #cfa84a 10%,
                #f5e7a3 25%,
                #fff8d6 50%,
                #f5e7a3 75%,
                #cfa84a 90%,
                #8b6b1f 100%
              )`
            : `linear-gradient(
                90deg,
                #7a5c16 0%,
                #b8892c 15%,
                #e6c76b 35%,
                #fff4c4 50%,
                #e6c76b 65%,
                #b8892c 85%,
                #7a5c16 100%
              )`,
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-2.5 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-24">

            {/* =====================================================
                LOGO
            ===================================================== */}
            <Link
              href="/"
              className="
                flex
                min-w-0
                flex-shrink
                items-center
                gap-1.5
                sm:gap-2.5
                md:gap-3
                group
              "
              onClick={() => setMobileOpen(false)}
            >
              <div
                className="
                  relative
                  flex-shrink-0
                  w-11 h-11
                  sm:w-16 sm:h-16
                  md:w-16 md:h-16
                  lg:w-16 lg:h-16
                  xl:w-20 xl:h-20
                  transition-all
                  duration-500
                  group-hover:scale-105
                "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300/30 to-yellow-300/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700" />

                <Image
                  src={`${process.env.NEXT_PUBLIC_R2_URL}/logo/1.png`}
                  alt="NCIO Logo"
                  fill
                  className="object-contain drop-shadow-2xl relative z-10"
                  priority
                />

                <span
                  className="
                    absolute
                    -top-1
                    -right-1
                    sm:-top-1.5
                    sm:-right-1.5
                    z-20
                    flex
                    items-center
                    justify-center
                    w-4 h-4
                    sm:w-5 sm:h-5
                    rounded-full
                    bg-white
                    border
                    border-[#08215F]
                    text-[7px]
                    sm:text-[9px]
                    md:text-[10px]
                    font-black
                    text-[#08215F]
                    shadow-md
                  "
                  aria-label="Registered Trademark"
                >
                  ®
                </span>
              </div>

              <div className="min-w-0 flex flex-col leading-[1.05]">
                <span
                  className="
                    text-[8.5px]
                    sm:text-[13px]
                    md:text-sm
                    lg:text-sm
                    xl:text-base
                    font-black
                    text-[#08215F]
                    uppercase
                    whitespace-nowrap
                    tracking-wide
                  "
                  style={{
                    textShadow: "0 0.5px 0 #08215F",
                  }}
                >
                  NATIONAL CRIME
                </span>

                <span
                  className="
                    text-[7.5px]
                    sm:text-[11px]
                    md:text-xs
                    lg:text-xs
                    xl:text-sm
                    font-black
                    text-[#08215F]
                    uppercase
                    whitespace-nowrap
                  "
                  style={{
                    letterSpacing: "0.04em",
                    textShadow: "0 0.5px 0 #08215F",
                  }}
                >
                  INVESTIGATES ORGANIZATION
                </span>

                <span
                  className="
                    mt-0.5
                    text-[6px]
                    sm:text-[8.5px]
                    md:text-[9px]
                    lg:text-[10px]
                    xl:text-xs
                    font-bold
                    text-[#08215F]
                    uppercase
                    whitespace-nowrap
                  "
                  style={{
                    letterSpacing: "0.035em",
                    textShadow: "0 0.3px 0 #08215F",
                  }}
                >
                  (AN INTERNATIONAL ORGANIZATION)
                </span>
              </div>
            </Link>

            {/* =====================================================
                DESKTOP NAVIGATION
                NO DESKTOP CHANGE
            ===================================================== */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative group"
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1 px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold transition-all duration-200 rounded-lg hover:bg-white/20 ${
                        scrolled
                          ? "text-amber-900 hover:text-amber-700"
                          : "text-amber-950 hover:text-amber-800"
                      }`}
                    >
                      {link.label}

                      <ChevronDown
                        size={13}
                        className="group-hover:rotate-180 transition-transform duration-200"
                      />
                    </button>

                    <div className="absolute top-full left-1/2 w-[540px] xl:w-[580px] -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 origin-top group-hover:scale-100 scale-95">
                      <div className="relative overflow-hidden rounded-2xl border border-[#d4af37]/45 bg-[#06183d]/95 p-3 shadow-[0_28px_80px_rgba(4,13,38,0.45)] backdrop-blur-2xl">

                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8b6b1f] via-[#fff2ad] to-[#8b6b1f]" />

                        <div className="relative mb-3 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5">
                          <div>
                            <p className="text-[10px] xl:text-xs font-semibold uppercase tracking-[0.22em] text-[#f8e287]">
                              NCIO Assistance
                            </p>

                            <p className="mt-0.5 text-xs xl:text-sm text-slate-300">
                              Choose a service
                            </p>
                          </div>

                          <Shield
                            size={24}
                            className="text-[#f8e287]"
                          />
                        </div>

                        <div className="relative grid grid-cols-2 gap-1.5">
                          {link.dropdown.map((item) => {
                            const meta =
                              SERVICE_DROPDOWN_META[
                                item.href as keyof typeof SERVICE_DROPDOWN_META
                              ];

                            const Icon = meta.icon;

                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="group/item flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f8e287]/60 hover:bg-[#f8e287]/10"
                                onClick={(e) =>
                                  handleNavClick(
                                    item.href,
                                    e
                                  )
                                }
                              >
                                <span className="flex h-8 w-8 xl:h-9 xl:w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#b8860b] via-[#fff1a8] to-[#b8860b] text-[#06183d] shadow-lg shadow-[#d4af37]/20">
                                  <Icon size={16} />
                                </span>

                                <span className="min-w-0">
                                  <span className="block text-xs xl:text-sm font-bold text-white transition-colors group-hover/item:text-[#f8e287]">
                                    {item.label}
                                  </span>

                                  <span className="mt-0.5 block text-[10px] xl:text-xs leading-relaxed text-slate-300">
                                    {meta.desc}
                                  </span>
                                </span>

                                <ArrowRight
                                  size={14}
                                  className="ml-auto mt-0.5 shrink-0 text-[#f8e287] opacity-0 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                                />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold transition-all duration-200 rounded-lg hover:bg-white/20 relative ${
                      pathname === link.href
                        ? "text-amber-800 font-bold bg-white/20"
                        : scrolled
                        ? "text-amber-900 hover:text-amber-700"
                        : "text-amber-950 hover:text-amber-800"
                    } hover:scale-105`}
                    onClick={(e) =>
                      handleNavClick(
                        link.href,
                        e
                      )
                    }
                  >
                    {link.label}

                    {pathname === link.href && (
                      <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full shadow-lg shadow-amber-500/50" />
                    )}
                  </Link>
                )
              )}
            </div>

            {/* =====================================================
                DESKTOP CTA
            ===================================================== */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <Link
                href="/membership"
                className="relative overflow-hidden backdrop-blur-sm px-4 xl:px-5 py-2 rounded-full text-xs xl:text-sm font-bold transition-all duration-200 border-2 shadow-lg hover:shadow-amber-300/50 group bg-white/90 hover:bg-amber-50 text-amber-800 border-amber-400/50"
                onClick={(e) =>
                  handleNavClick(
                    "/membership",
                    e
                  )
                }
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Shield
                    size={14}
                    className="text-amber-600"
                  />
                  Join
                </span>

                <span className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-yellow-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>

              <Link
                href="/donate"
                className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold px-5 xl:px-7 py-2 rounded-full text-xs xl:text-sm transition-all duration-200 shadow-lg hover:shadow-amber-500/50 transform hover:scale-105 group"
                onClick={(e) =>
                  handleNavClick(
                    "/donate",
                    e
                  )
                }
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Donate

                  <Sparkles
                    size={14}
                    className="text-amber-200 group-hover:rotate-180 transition-transform duration-500"
                  />
                </span>

                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            </div>

            {/* =====================================================
                MOBILE MENU BUTTON
            ===================================================== */}
            <button
              type="button"
              className="
                lg:hidden
                relative
                z-[10000]
                flex-shrink-0
                ml-2
                flex
                items-center
                justify-center
                w-10
                h-10
                sm:w-11
                sm:h-11
                rounded-full
                border-2
                border-[#d4af37]
                bg-white/80
                text-[#08215F]
                shadow-lg
                transition-all
                duration-200
                active:scale-95
              "
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X
                  size={22}
                  strokeWidth={2.5}
                />
              ) : (
                <Menu
                  size={22}
                  strokeWidth={2.5}
                />
              )}
            </button>
          </div>
        </div>

        {/* =======================================================
            MOBILE MENU

            IMPORTANT:
            This stays INSIDE the nav stacking context.
            Overlay is below nav.
        ======================================================= */}
        <div
          className={`
            lg:hidden
            fixed
            top-0
            right-0
            bottom-0
            z-[10000]
            w-[86%]
            sm:w-[62%]
            md:w-[48%]
            max-w-[420px]
            bg-[#06183d]
            shadow-[-20px_0_60px_rgba(0,0,0,0.45)]
            border-l-2
            border-[#d4af37]/50
            transition-transform
            duration-300
            ease-out
            ${
              mobileOpen
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >
          <div className="h-full overflow-y-auto bg-gradient-to-b from-[#06183d] via-[#08204d] to-[#0a2459]">

            {/* =================================================
                MOBILE HEADER
            ================================================= */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-5 py-4 bg-[#06183d] border-b border-[#d4af37]/30">

              <div className="flex items-center gap-2.5 min-w-0">

                <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_R2_URL}/logo/1.png`}
                    alt="NCIO Logo"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-black text-[#f8e287] uppercase leading-none">
                    NCIO
                  </p>

                  <p className="mt-1 text-[8px] sm:text-[9px] font-medium text-slate-300 uppercase tracking-wide whitespace-nowrap">
                    National Crime Investigates
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                  w-9
                  h-9
                  rounded-full
                  border
                  border-[#d4af37]/50
                  bg-white/5
                  text-[#f8e287]
                  hover:bg-[#d4af37]/10
                  hover:text-white
                  transition-all
                "
                onClick={() =>
                  setMobileOpen(false)
                }
                aria-label="Close menu"
              >
                <X
                  size={21}
                  strokeWidth={2.5}
                />
              </button>
            </div>

            {/* =================================================
                MOBILE LINKS
            ================================================= */}
            <div className="px-3 sm:px-4 py-4 space-y-1">

              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="space-y-1"
                  >
                    {/* SERVICES */}
                    <button
                      type="button"
                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        px-4
                        py-3.5
                        sm:py-4
                        rounded-xl
                        text-[15px]
                        sm:text-base
                        font-bold
                        text-white
                        hover:text-[#f8e287]
                        bg-white/[0.03]
                        hover:bg-[#f8e287]/10
                        transition-all
                      "
                      onClick={() =>
                        setServicesOpen(
                          !servicesOpen
                        )
                      }
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#d4af37]" />

                        <span>
                          Services
                        </span>
                      </span>

                      <ChevronDown
                        size={18}
                        className={`text-[#f8e287] transition-transform duration-200 ${
                          servicesOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {/* SERVICE ITEMS */}
                    {servicesOpen && (
                      <div className="ml-2 sm:ml-4 mt-1 space-y-1.5 rounded-xl border border-[#d4af37]/30 bg-[#041533] p-2.5">

                        {link.dropdown.map(
                          (item) => {
                            const meta =
                              SERVICE_DROPDOWN_META[
                                item.href as keyof typeof SERVICE_DROPDOWN_META
                              ];

                            const Icon =
                              meta.icon;

                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={(e) =>
                                  handleNavClick(
                                    item.href,
                                    e
                                  )
                                }
                                className="
                                  flex
                                  items-center
                                  gap-3
                                  w-full
                                  rounded-lg
                                  border
                                  border-white/10
                                  bg-white/[0.04]
                                  px-3
                                  py-3
                                  hover:bg-[#f8e287]/10
                                  hover:border-[#d4af37]/50
                                  transition-all
                                "
                              >
                                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#b8860b] via-[#fff1a8] to-[#b8860b] text-[#06183d]">
                                  <Icon
                                    size={16}
                                  />
                                </span>

                                <span className="min-w-0">
                                  <span className="block text-sm font-bold text-white">
                                    {item.label}
                                  </span>

                                  <span className="block mt-0.5 text-[10px] leading-4 text-slate-300">
                                    {meta.desc}
                                  </span>
                                </span>
                              </Link>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) =>
                      handleNavClick(
                        link.href,
                        e
                      )
                    }
                    className={`
                      flex
                      items-center
                      justify-between
                      w-full
                      px-4
                      py-3.5
                      sm:py-4
                      rounded-xl
                      text-[15px]
                      sm:text-base
                      font-bold
                      transition-all
                      duration-200
                      ${
                        pathname === link.href
                          ? "text-[#f8e287] bg-[#f8e287]/10 border border-[#d4af37]/40"
                          : "text-white hover:text-[#f8e287] hover:bg-[#f8e287]/10"
                      }
                    `}
                  >
                    <span>
                      {link.label}
                    </span>

                    {pathname ===
                      link.href && (
                      <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                    )}
                  </Link>
                )
              )}

              {/* =================================================
                  MOBILE CTA
              ================================================= */}
              <div className="pt-5 mt-5 border-t border-[#d4af37]/30 space-y-3">

                <Link
                  href="/membership"
                  onClick={(e) =>
                    handleNavClick(
                      "/membership",
                      e
                    )
                  }
                  className="
                    flex
                    items-center
                    justify-center
                    w-full
                    min-h-[50px]
                    rounded-full
                    bg-gradient-to-r
                    from-[#b8860b]
                    via-[#f8e287]
                    to-[#b8860b]
                    text-[#06183d]
                    text-[15px]
                    sm:text-base
                    font-black
                    shadow-lg
                    transition-all
                    hover:scale-[1.02]
                  "
                >
                  Join
                </Link>

                <Link
                  href="/donate"
                  onClick={(e) =>
                    handleNavClick(
                      "/donate",
                      e
                    )
                  }
                  className="
                    flex
                    items-center
                    justify-center
                    w-full
                    min-h-[50px]
                    rounded-full
                    border-2
                    border-[#d4af37]
                    text-[#f8e287]
                    text-[15px]
                    sm:text-base
                    font-black
                    hover:bg-[#d4af37]
                    hover:text-[#06183d]
                    transition-all
                  "
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* =========================================================
          MOBILE OVERLAY

          IMPORTANT FIX:
          z-[9980] is BELOW navbar z-[9990].

          Previously overlay was z-[99980], which caused the
          dark overlay to cover the mobile menu.
      ========================================================= */}
      {mobileOpen && (
        <div
          className="
            lg:hidden
            fixed
            inset-0
            z-[9980]
            bg-black/55
            backdrop-blur-[1px]
          "
          onClick={() =>
            setMobileOpen(false)
          }
          aria-hidden="true"
        />
      )}

      {/* =========================================================
          ANIMATIONS
      ========================================================= */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}