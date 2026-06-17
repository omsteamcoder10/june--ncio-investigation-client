"use client";
// components/layout/FloatingButtons.tsx
import Link from "next/link";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  // WhatsApp number with country code (no plus or spaces)
  const whatsappNumber = "919092592545";
  // Pre-filled message (optional - you can customize this)
  const whatsappMessage = "Hello NCIO, I have a question about your services.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={22} />
      </a>
      
      {/* Call */}
      <a
        href="tel:+919092592545"
        className="w-12 h-12 bg-[#1a237e] hover:bg-[#0d1440] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        title="Call NCIO"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}