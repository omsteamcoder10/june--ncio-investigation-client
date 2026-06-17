"use client";
// components/home/HeroSection.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    image: "/home/image1.webp",
    badge: "Welcome to NCIO",
    title: "Justice for Every Citizen",
    description: "Free legal aid, RTI support, and rights awareness for underprivileged communities across Tamil Nadu.",
  },
  {
    image: "/home/image2.webp",
    badge: "Healthcare for All",
    title: "Free Medical Camps",
    description: "Quality healthcare, free diagnostics, and medicines reaching rural and urban communities.",
  },
  {
    image: "/home/image3.webp",
    badge: "Empowering Youth",
    title: "Education Changes Lives",
    description: "Scholarships, free tuition, and educational support for students in need.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((s) => (s + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden">
      {/* Background Image - No zoom, fixed size */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={slide.image}
          alt="NCIO Hero"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={100}
          style={{ objectFit: 'cover' }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <span className="inline-block bg-[#f9a825]/20 text-[#f9a825] text-sm font-medium px-4 py-1.5 rounded-full mb-5 border border-[#f9a825]/30">
            {slide.badge}
          </span>
          <h1 className="font-display text-3xl md:text-6xl font-bold leading-tight mb-4">
            {slide.title}
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
            {slide.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/membership"
              className="bg-[#f9a825] hover:bg-[#f57f17] text-[#1a237e] font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Join NCIO
            </Link>
            <Link
              href="/donate"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/30"
            >
              Support Us
            </Link>
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 md:gap-4 z-10">
        <button 
          onClick={() => setCurrent((s) => (s - 1 + SLIDES.length) % SLIDES.length)}
          className="w-8 h-8 md:w-10 md:h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
        >
          <ChevronLeft size={16} className="md:w-5 md:h-5" />
        </button>
        {SLIDES.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "bg-[#f9a825] w-6 md:w-8 h-1.5 md:h-2" : "bg-white/50 w-1.5 md:w-2 h-1.5 md:h-2"
            }`}
          />
        ))}
        <button 
          onClick={() => setCurrent((s) => (s + 1) % SLIDES.length)}
          className="w-8 h-8 md:w-10 md:h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
        >
          <ChevronRight size={16} className="md:w-5 md:h-5" />
        </button>
      </div>
    </section>
  );
}