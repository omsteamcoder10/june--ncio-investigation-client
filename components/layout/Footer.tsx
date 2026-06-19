// components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { SITE_PHONE, SITE_EMAIL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#0d1440] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-8">

          {/* Brand - Logo with natural rectangle shape */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-3 sm:mb-4">
              <div className="bg-white rounded-lg p-1.5 sm:p-2 inline-block shadow-lg">
                <Image
                  src="/logo.png"
                  alt="NCIO Logo"
                  width={120}
                  height={50}
                  className="object-contain w-[100px] sm:w-[120px] md:w-[140px] h-auto"
                  priority
                />
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Fighting for justice, healthcare, education, and dignity for every citizen of India. Registered under Indian Trust Act.
            </p>
            <div className="flex gap-2">
              <a 
                href="https://www.facebook.com/NCIO.INDIA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 sm:w-8 h-7 sm:h-8 bg-white/10 hover:bg-[#f9a825] hover:text-[#1a237e] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={13} className="sm:w-[14px] sm:h-[14px]" />
              </a>
              <a 
                href="https://www.instagram.com/ncio.india/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 sm:w-8 h-7 sm:h-8 bg-white/10 hover:bg-[#f9a825] hover:text-[#1a237e] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={13} className="sm:w-[14px] sm:h-[14px]" />
              </a>
              <a 
                href="#" 
                className="w-7 sm:w-8 h-7 sm:h-8 bg-white/10 hover:bg-[#f9a825] hover:text-[#1a237e] rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube size={13} className="sm:w-[14px] sm:h-[14px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#f9a825] mb-3 sm:mb-4 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                ["About NCIO",     "/about"],
                ["Our Team",       "/team"],
                ["Membership",     "/membership"],
                ["Gallery",        "/gallery"],
                ["Latest Updates", "/updates"],
                ["Donate",         "/donate"],
                ["Contact",        "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-[#f9a825] text-xs sm:text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[#f9a825] mb-3 sm:mb-4 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                ["RTI Services",      "/services/rti"],
                ["Free Legal Aid",    "/services/legal"],
                ["Education Support", "/services/education"],
                ["NRI Services",      "/services/nri"],
                ["Medical Camps",     "/services/medical"],
                ["Blood Donation",    "/services/blood-donation"],
                ["Environment",       "/services/environment"],
                ["Hunger Relief",     "/services/hunger"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-[#f9a825] text-xs sm:text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-[#f9a825] mb-3 sm:mb-4 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
                <MapPin size={14} className="sm:w-[15px] sm:h-[15px] text-[#f9a825] flex-shrink-0 mt-0.5" />
                <span>
                  No:1/1203, Guruvayurappan Nagar,<br />
                  Arivoli Nagar, Palladam,<br />
                  Naranapuram Post, Tirupur Dist (641664)
                </span>
              </li>
              <li>
                <a href={`tel:${SITE_PHONE}`} className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 hover:text-[#f9a825] transition-colors">
                  <Phone size={14} className="sm:w-[15px] sm:h-[15px] text-[#f9a825] flex-shrink-0" /> {SITE_PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 hover:text-[#f9a825] transition-colors">
                  <Mail size={14} className="sm:w-[15px] sm:h-[15px] text-[#f9a825] flex-shrink-0" /> {SITE_EMAIL}
                </a>
              </li>
            </ul>
            <div className="mt-4 sm:mt-5">
              <Link href="/membership"
                className="inline-block bg-[#f9a825] hover:bg-[#f57f17] text-[#1a237e] font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm transition-colors w-full sm:w-auto text-center">
                Apply for Membership
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-500">
          <p>© {new Date().getFullYear()} National Crime Investigates Organization. All rights reserved.</p>
          <p className="text-center sm:text-right">Registered NGO under Indian Trust Act | Tirupur, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}