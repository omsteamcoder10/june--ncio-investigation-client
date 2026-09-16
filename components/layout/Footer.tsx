// components/layout/Footer.tsx

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { SITE_PHONE, SITE_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-8">

          {/* Brand - Logo with company name professionally */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 group mb-3 sm:mb-4"
            >
              {/* Logo */}
              <div className="relative w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-all duration-500 group-hover:scale-105 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300/30 to-yellow-300/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700"></div>

                <Image
                  src={`${process.env.NEXT_PUBLIC_R2_URL}/logo/1.png`}
                  alt="NCIO Logo"
                  fill
                  className="object-contain drop-shadow-2xl relative z-10"
                  priority
                />
              </div>

              {/* Company Name */}
              <div className="flex flex-col leading-[1]">
                <span
                  className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-lg xl:text-xl font-black text-[#08215F] uppercase whitespace-nowrap"
                  style={{ textShadow: "0 0.5px 0 #08215F" }}
                >
                  NATIONAL CRIME
                </span>

                <span
                  className="text-[7px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-base xl:text-lg font-black text-[#08215F] uppercase whitespace-nowrap"
                  style={{
                    letterSpacing: "0.08em",
                    textShadow: "0 0.5px 0 #08215F",
                  }}
                >
                  INVESTIGATES ORGANIZATION
                </span>
              </div>
            </Link>

            {/* Client Tagline */}
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Working for justice, healthcare, education, and dignity for
              every citizen of India.
            </p>

            {/* Social Media */}
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/NCIO.INDIA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 sm:w-8 h-7 sm:h-8 bg-gray-100 hover:bg-[#f9a825] hover:text-white rounded-full flex items-center justify-center transition-colors text-gray-600"
              >
                <Facebook size={13} className="sm:w-[14px] sm:h-[14px]" />
              </a>

              <a
                href="https://www.instagram.com/ncio.india/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 sm:w-8 h-7 sm:h-8 bg-gray-100 hover:bg-[#f9a825] hover:text-white rounded-full flex items-center justify-center transition-colors text-gray-600"
              >
                <Instagram size={13} className="sm:w-[14px] sm:h-[14px]" />
              </a>

              <a
                href="#"
                className="w-7 sm:w-8 h-7 sm:h-8 bg-gray-100 hover:bg-[#f9a825] hover:text-white rounded-full flex items-center justify-center transition-colors text-gray-600"
              >
                <Youtube size={13} className="sm:w-[14px] sm:h-[14px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#f9a825] mb-3 sm:mb-4 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">
              Quick Links
            </h4>

            <ul className="space-y-1.5 sm:space-y-2">
              {[
                ["Our Services", "/services"],
                ["Our Team", "/team"],
                ["Membership", "/membership"],
                ["Gallery", "/gallery"],
                ["Latest Updates", "/updates"],
                ["Donate", "/donate"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-600 hover:text-[#f9a825] text-xs sm:text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-[#f9a825] mb-3 sm:mb-4 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">
              Contact Us
            </h4>

            <ul className="space-y-2.5 sm:space-y-3">

              {/* Address */}
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                <MapPin
                  size={14}
                  className="sm:w-[15px] sm:h-[15px] text-[#f9a825] flex-shrink-0 mt-0.5"
                />

                <span>
                  No. 1/1203, Guruvayurappan Nagar,
                  <br />
                  Arivoli Nagar, Palladam,
                  <br />
                  Naranapuram Post,
                  <br />
                  Tiruppur District – 641 664,
                  <br />
                  Tamil Nadu, India.
                </span>
              </li>

              {/* Phone */}
              <li>
                <a
                  href={`tel:${SITE_PHONE}`}
                  className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 hover:text-[#f9a825] transition-colors"
                >
                  <Phone
                    size={14}
                    className="sm:w-[15px] sm:h-[15px] text-[#f9a825] flex-shrink-0"
                  />

                  {SITE_PHONE}
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 hover:text-[#f9a825] transition-colors"
                >
                  <Mail
                    size={14}
                    className="sm:w-[15px] sm:h-[15px] text-[#f9a825] flex-shrink-0"
                  />

                  {SITE_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-500">

          <p>
            © {new Date().getFullYear()} National Crime Investigates
            Organization. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5">
            <p className="text-center sm:text-right">
              Registered NGO under Indian Trust Act | Tirupur, Tamil Nadu
            </p>

            <span className="text-gray-300">|</span>

            <p className="text-center sm:text-right">
              Developed by:{" "}
              <a
                href="https://orangemegasoftware.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f9a825] hover:text-[#f57f17] font-semibold transition-colors duration-200 hover:underline"
              >
                OMS
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}