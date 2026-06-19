"use client";
import { useState, useEffect } from "react";
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
  { label: "Updates", href: "/updates" },
  { label: "Member Portal", href: "/member-portal" },
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 border-b border-[#d4af37]/40 ${
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 relative group"
            onClick={() => setMobileOpen(false)}
          >
            <div className="relative w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 transition-all duration-500 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300/30 to-yellow-300/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <Image
                src="/logo.png"
                alt="NCIO Logo"
                fill
                className="object-contain drop-shadow-2xl relative z-10"
                priority
              />
              <div className="absolute -top-2 -right-2 z-20 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full p-1.5 shadow-lg animate-pulse">
                <Shield size={14} className="text-white" />
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-sm xl:text-base font-semibold transition-all duration-300 group-hover:scale-105 ${
                      scrolled
                        ? "text-amber-900 hover:text-amber-700"
                        : "text-amber-950 hover:text-amber-800"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className="group-hover:rotate-180 transition-transform duration-300"
                    />
                  </button>
                  <div className="absolute top-full left-1/2 w-[560px] -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 origin-top group-hover:scale-100 scale-95">
                    <div className="relative overflow-hidden rounded-[1.35rem] border border-[#d4af37]/45 bg-[#06183d]/95 p-3 shadow-[0_28px_80px_rgba(4,13,38,0.45)] backdrop-blur-2xl">
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8b6b1f] via-[#fff2ad] to-[#8b6b1f]" />
                      <div className="absolute right-0 top-0 h-40 w-40 bg-[#d4af37]/10 blur-3xl" />
                      <div className="relative mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f8e287]">
                            NCIO Assistance
                          </p>
                          <p className="mt-1 text-sm text-slate-300">
                            Choose a service ID page
                          </p>
                        </div>
                        <Shield size={28} className="text-[#f8e287]" />
                      </div>
                      <div className="relative grid grid-cols-2 gap-2">
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
                              className="group/item flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f8e287]/60 hover:bg-[#f8e287]/10"
                            >
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#b8860b] via-[#fff1a8] to-[#b8860b] text-[#06183d] shadow-lg shadow-[#d4af37]/20">
                                <Icon size={19} />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-sm font-bold text-white transition-colors group-hover/item:text-[#f8e287]">
                                  {item.label}
                                </span>
                                <span className="mt-1 block text-xs leading-relaxed text-slate-300">
                                  {meta.desc}
                                </span>
                              </span>
                              <ArrowRight
                                size={15}
                                className="ml-auto mt-1 shrink-0 text-[#f8e287] opacity-0 transition-all duration-300 group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
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
                  className={`px-3 xl:px-4 py-2 text-sm xl:text-base font-semibold transition-all duration-300 relative ${
                    pathname === link.href
                      ? "text-amber-800 font-bold"
                      : scrolled
                      ? "text-amber-900 hover:text-amber-700"
                      : "text-amber-950 hover:text-amber-800"
                  } hover:scale-105`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full shadow-lg shadow-amber-500/50"></span>
                  )}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/membership"
              className="relative overflow-hidden backdrop-blur-sm px-5 xl:px-6 py-2.5 rounded-full text-sm xl:text-base font-bold transition-all duration-300 border-2 shadow-lg hover:shadow-amber-300/50 group bg-white/90 hover:bg-amber-50 text-amber-800 border-amber-400/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Shield size={16} className="text-amber-600" />
                Join Now
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-yellow-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <Link
              href="/donate"
              className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold px-6 xl:px-8 py-2.5 rounded-full text-sm xl:text-base transition-all duration-300 shadow-lg hover:shadow-amber-500/50 transform hover:scale-105 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Donate Now
                <Sparkles
                  size={16}
                  className="text-amber-200 group-hover:rotate-180 transition-transform duration-500"
                />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2.5 transition-all duration-300 hover:scale-110 backdrop-blur-sm rounded-full border-2 shadow-lg ${
              scrolled
                ? "bg-white/80 text-amber-700 border-amber-300/50"
                : "bg-white/30 text-amber-900 border-amber-400/50"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} className="sm:w-7 sm:h-7" />
            ) : (
              <Menu size={24} className="sm:w-7 sm:h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Right Side Drawer (1/2 width, full height) */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-1/2 bg-gradient-to-b from-[#06183d] to-[#0a2459] backdrop-blur-xl border-l-2 border-[#d4af37]/50 shadow-2xl transition-all duration-300 transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } z-50 overflow-y-auto`}
      >
        <div className="p-4 sm:p-6 space-y-2">
          {/* Close Button inside drawer */}
          <button
            className="ml-auto block p-2 text-[#f8e287] hover:text-white transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <X size={24} />
          </button>

          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="space-y-1">
                <button
                  className="flex items-center justify-between w-full py-3.5 sm:py-4 px-4 text-base sm:text-lg font-semibold text-[#f8e287] hover:text-white transition-all duration-300 rounded-xl hover:bg-[#f8e287]/10"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                    {link.label}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180 text-[#f8e287]" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="ml-4 space-y-2 rounded-2xl border border-[#d4af37]/30 bg-[#0a2459]/95 p-3 shadow-xl animate-fadeIn">
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
                          className="flex items-center gap-3 rounded-xl border border-[#d4af37]/20 bg-white/[0.05] px-3 py-3 text-sm text-white transition-all duration-300 hover:border-[#f8e287]/60 hover:bg-[#f8e287]/10"
                          onClick={() => {
                            setMobileOpen(false);
                            setServicesOpen(false);
                          }}
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#b8860b] via-[#fff1a8] to-[#b8860b] text-[#06183d]">
                            <Icon size={17} />
                          </span>
                          <span>
                            <span className="block font-bold text-[#f8e287]">{item.label}</span>
                            <span className="mt-0.5 block text-xs leading-5 text-slate-300">
                              {meta.desc}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 py-3.5 sm:py-4 px-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 ${
                  pathname === link.href
                    ? "text-[#f8e287] font-bold bg-[#f8e287]/10 border border-[#d4af37]/30"
                    : "text-[#f8e287]/80 hover:text-white hover:bg-[#f8e287]/10"
                }`}
                onClick={() => {
                  setMobileOpen(false);
                  setServicesOpen(false);
                }}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                )}
              </Link>
            )
          )}
          <div className="flex flex-col gap-3 pt-4 mt-4 border-t-2 border-[#d4af37]/30">
            <Link
              href="/membership"
              onClick={() => {
                setMobileOpen(false);
                setServicesOpen(false);
              }}
              className="w-full bg-gradient-to-r from-[#b8860b] via-[#f8e287] to-[#b8860b] text-[#06183d] font-bold py-4 rounded-full text-base sm:text-lg text-center shadow-lg hover:shadow-[#d4af37]/50 transition-all duration-300 hover:scale-105"
            >
              Join Now
            </Link>
            <Link
              href="/donate"
              onClick={() => {
                setMobileOpen(false);
                setServicesOpen(false);
              }}
              className="w-full border-2 border-[#d4af37] text-[#f8e287] font-bold py-4 rounded-full text-base sm:text-lg text-center hover:bg-[#d4af37] hover:text-[#06183d] transition-all duration-300 transform hover:scale-105"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Custom Animations */}
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
    </nav>
  );
}