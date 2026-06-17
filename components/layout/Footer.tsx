// components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { SITE_PHONE, SITE_EMAIL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#0d1440] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand - Logo with natural rectangle shape */}
          <div>
            <div className="mb-4">
              <div className="bg-white rounded-lg p-2 inline-block shadow-lg">
                <Image
                  src="/logo.png"
                  alt="NCIO Logo"
                  width={140}
                  height={60}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Fighting for justice, healthcare, education, and dignity for every citizen of India. Registered under Indian Trust Act.
            </p>
            <div className="flex gap-2">
              <a 
                href="https://www.facebook.com/NCIO.INDIA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-[#f9a825] hover:text-[#1a237e] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={14} />
              </a>
              <a 
                href="https://www.instagram.com/ncio.india/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-[#f9a825] hover:text-[#1a237e] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={14} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 hover:bg-[#f9a825] hover:text-[#1a237e] rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#f9a825] mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
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
                  <Link href={href} className="text-gray-400 hover:text-[#f9a825] text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[#f9a825] mb-4 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2">
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
                  <Link href={href} className="text-gray-400 hover:text-[#f9a825] text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#f9a825] mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={15} className="text-[#f9a825] flex-shrink-0 mt-0.5" />
                <span>
                  No:1/1203, Guruvayurappan Nagar,<br />
                  Arivoli Nagar, Palladam,<br />
                  Naranapuram Post, Tirupur Dist (641664)
                </span>
              </li>
              <li>
                <a href={`tel:${SITE_PHONE}`} className="flex gap-3 text-sm text-gray-400 hover:text-[#f9a825] transition-colors">
                  <Phone size={15} className="text-[#f9a825] flex-shrink-0" /> {SITE_PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="flex gap-3 text-sm text-gray-400 hover:text-[#f9a825] transition-colors">
                  <Mail size={15} className="text-[#f9a825] flex-shrink-0" /> {SITE_EMAIL}
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <Link href="/membership"
                className="inline-block bg-[#f9a825] hover:bg-[#f57f17] text-[#1a237e] font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
                Apply for Membership
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} National Crime Investigates Organization. All rights reserved.</p>
          <p>Registered NGO under Indian Trust Act | Tirupur, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}