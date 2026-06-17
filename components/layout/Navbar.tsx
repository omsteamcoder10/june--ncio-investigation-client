"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

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
  { label: "Verify ID", href: "/verify-id" },
   { label: "Member Portal", href: "/member-portal" },
  { label: "Contact", href: "/contact" },
];


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking a link
  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    setServicesOpen(false);
    // If it's the home link and we're already on home, still close menu
    if (href === pathname) {
      // Just close menu, no navigation needed
      return;
    }
  };

  // Handle navigation with menu close
  const handleNavigation = (href: string) => {
    setMobileOpen(false);
    setServicesOpen(false);
    router.push(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={() => setMobileOpen(false)}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/logo.png"
                alt="NCIO Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-0">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-1 px-3 py-5 text-base font-medium text-gray-700 hover:text-[#f9a825] transition-colors">
                    {link.label} <ChevronDown size={14} />
                  </button>
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1a237e] hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-5 text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#f9a825] font-semibold"
                      : "text-gray-700 hover:text-[#f9a825]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/membership"
              className="bg-gray-100 hover:bg-gray-200 text-[#1a237e] font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Join Now
            </Link>
            <Link
              href="/donate"
              className="bg-[#f9a825] hover:bg-[#f57f17] text-[#1a237e] font-bold px-5 py-2 rounded-lg text-sm transition-colors shadow-md"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    className="flex items-center justify-between w-full py-3 text-base font-medium text-gray-700"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 border-l border-gray-200 ml-2 mt-1 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2.5 text-sm text-gray-600 hover:text-[#f9a825]"
                          onClick={() => {
                            setMobileOpen(false);
                            setServicesOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 text-base font-medium ${
                    pathname === link.href
                      ? "text-[#f9a825] font-semibold"
                      : "text-gray-700 hover:text-[#f9a825]"
                  }`}
                  onClick={() => {
                    setMobileOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="flex gap-3 pt-4 mt-2 border-t border-gray-200">
              <Link
                href="/membership"
                onClick={() => {
                  setMobileOpen(false);
                  setServicesOpen(false);
                }}
                className="flex-1 bg-gray-100 text-[#1a237e] font-semibold py-3 rounded-lg text-sm text-center"
              >
                Join Now
              </Link>
              <Link
                href="/donate"
                onClick={() => {
                  setMobileOpen(false);
                  setServicesOpen(false);
                }}
                className="flex-1 bg-[#f9a825] text-[#1a237e] font-bold py-3 rounded-lg text-sm text-center"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}