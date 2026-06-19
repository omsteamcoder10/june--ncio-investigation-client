"use client";
// components/contact/ContactSection.tsx
import { Phone, Mail, MapPin, Clock, Building2 } from "lucide-react";

export default function ContactSection() {
  const offices = [
    {
      name: "Register Office",
      address: "No:14/2, Thiruvaduthurai Addenam Street, Arumbakkam, Chennai-600106.",
      icon: <Building2 size={20} className="text-[#f9a825]" />,
    },
    {
      name: "Head Quarters",
      address: "No:1/1203, Guruvayurappan Nagar, Arivoli Nagar, Palladam, Naranapuram Post, Tirupur Dist (641664)",
      icon: <Building2 size={20} className="text-[#f9a825]" />,
    },
    {
      name: "Secretariat",
      address: "112 A Shanmuga nagar.1 st Main Road Pothur, Redhills Main Road, Red Hills, Chennai, Tamil Nadu 600052.",
      icon: <Building2 size={20} className="text-[#f9a825]" />,
    },
  ];

  return (
    <section className="py-6 sm:py-8 md:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-1 gap-8 sm:gap-10 md:gap-12">
          {/* Contact info */}
          <div>
            <span className="text-[#f9a825] font-medium text-[10px] sm:text-xs uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1a237e] mt-1 sm:mt-2 mb-4 sm:mb-6">
              Contact NCIO
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Have a question, need assistance, or want to get involved? Reach out to us through any of the 
              channels below. Our team will respond within 1–2 working days.
            </p>

            {/* Office Locations */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-8">
              <h3 className="font-semibold text-[#1a237e] text-base sm:text-lg mb-2 sm:mb-3">Our Offices</h3>
              {offices.map((office, index) => (
                <div key={index} className="flex gap-3 sm:gap-4">
                  <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 bg-[#1a237e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {office.icon}
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                      {office.name}
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-5 border-t pt-4 sm:pt-5 md:pt-6 border-gray-200">
              <h3 className="font-semibold text-[#1a237e] text-base sm:text-lg mb-2 sm:mb-3">Contact Details</h3>
              
              {/* Mobile */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 bg-[#1a237e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 text-[#f9a825]" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Mobile</p>
                  <a 
                    href="tel:+919092592545" 
                    className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#1a237e] transition-colors"
                  >
                    +91 90925 92545
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 bg-[#1a237e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 text-[#f9a825]" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">E-mail</p>
                  <a 
                    href="mailto:ncioindia@gmail.com" 
                    className="text-gray-700 font-medium text-sm sm:text-base hover:text-[#1a237e] transition-colors break-all"
                  >
                    ncioindia@gmail.com
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 bg-[#1a237e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 text-[#f9a825]" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Office Hours</p>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">Saturday: 10:00 AM - 2:00 PM | Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}