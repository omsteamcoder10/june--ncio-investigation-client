"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-center">
          
          {/* IMAGE SIDE: Asymmetric Layered Frame */}
          <div className="relative">
            {/* Decorative Gold Frame */}
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-3/4 h-3/4 border-2 border-[#bf953f]/40 rounded-br-[60px] sm:rounded-br-[100px]" />
            
            {/* Shadow layer behind image */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#bf953f]/5 rounded-tr-[60px] sm:rounded-tr-[100px] rounded-bl-[60px] sm:rounded-bl-[100px]" />
            
            <div className="relative z-10 overflow-hidden rounded-tr-[60px] sm:rounded-tr-[100px] rounded-bl-[60px] sm:rounded-bl-[100px] shadow-2xl shadow-[#041a4a]/10">
              {/* Brightness overlay for realistic lighting */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 z-10 pointer-events-none" />
              
              <Image
                src="/home/1.webp"
                alt="NCIO volunteers at work"
                width={600}
                height={450}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 brightness-[1.05] contrast-[1.02] saturate-[1.08]"
                priority
                style={{
                  filter: 'brightness(1.08) contrast(1.05) saturate(1.1)'
                }}
              />
              
              {/* Vignette effect for realistic depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10 pointer-events-none" />
            </div>
            
            {/* Floating Badge - Hidden on mobile */}
            {/* <div className="hidden md:block absolute -bottom-6 -right-6 z-20 bg-white/95 backdrop-blur-sm border border-gray-100/80 p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.12)] rounded-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-shadow duration-300">
              <div className="text-3xl lg:text-4xl font-black text-[#041a4a]">10+</div>
              <div className="text-xs lg:text-sm text-[#bf953f] font-bold uppercase tracking-widest">Years of Service</div>
            </div> */}
          </div>

          {/* CONTENT SIDE: Modern Editorial Layout */}
          <div className="lg:pl-6 xl:pl-10">
            <div className="mb-6 sm:mb-8 border-l-4 border-[#bf953f] pl-4 sm:pl-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#041a4a] uppercase tracking-tight mb-2">
                Our Story
              </h2>
              <p className="text-[#bf953f] font-bold text-base sm:text-lg">Serving Tamil Nadu Since 2013</p>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              The National Crime Investigates Organization (NCIO) stands as a pillar of integrity. 
              We operate beyond borders, transforming grassroots efforts into impactful justice 
              that protects the rights of every citizen in Tamil Nadu.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {[
                "Registered Trust Act NGO",
                "Completely Independent Operation",
                "State-wide Coordinate Network",
                "Commitment to Public Transparency"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4 text-[#041a4a] font-semibold text-sm sm:text-base group hover:translate-x-1 transition-transform duration-200">
                  <div className="w-2 h-2 rounded-full bg-[#bf953f] flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  {item}
                </div>
              ))}
            </div>

            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#041a4a] text-white font-bold rounded-full hover:bg-[#bf953f] hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-lg shadow-[#041a4a]/20 hover:shadow-[#bf953f]/30 group"
            >
              Read Full Mission 
              <ArrowRight size={18} className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}