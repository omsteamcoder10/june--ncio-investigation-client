"use client";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function DonateCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#041a4a]">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Decorative elements */}
        <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 text-[#bf953f]/30">
          <Sparkles size={32} className="sm:w-10 sm:h-10" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
          Join Us in Creating <br />
          <span className="text-[#bf953f]">A Lasting Impact</span>
        </h2>
        
        <p className="text-white/70 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-2 sm:px-0">
          Every contribution—whether through membership or donation—builds the foundation 
          for a more just and empowered Tamil Nadu.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Link 
            href="/membership"
            className="
              w-full sm:w-auto
              px-6 sm:px-8 md:px-10 
              py-3 sm:py-4
              bg-gradient-to-r 
              from-[#bf953f] 
              to-[#fcf6ba] 
              text-[#041a4a] 
              font-bold 
              uppercase 
              tracking-widest 
              text-xs sm:text-sm 
              hover:scale-105 
              transition-all 
              duration-300 
              shadow-[0_10px_30px_rgba(191,149,63,0.3)]
              rounded-md
              text-center
            "
          >
            Become a Member
          </Link>
          <Link 
            href="/donate"
            className="
              w-full sm:w-auto
              px-6 sm:px-8 md:px-10 
              py-3 sm:py-4
              border 
              border-[#bf953f] 
              text-[#bf953f] 
              font-bold 
              uppercase 
              tracking-widest 
              text-xs sm:text-sm 
              hover:bg-[#bf953f] 
              hover:text-[#041a4a] 
              transition-all 
              duration-300
              rounded-md
              text-center
            "
          >
            Donate to the Cause
          </Link>
        </div>
      </div>
    </section>
  );
}