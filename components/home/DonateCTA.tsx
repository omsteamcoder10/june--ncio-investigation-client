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

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
          Join Us in Making <br />
          <span className="text-[#bf953f]">a Difference</span>
        </h2>

        {/* Description */}
        <p className="text-white/70 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-2 sm:px-0">
          Every contribution—whether through membership, volunteering, or
          donation—helps build stronger communities and supports our efforts
          towards justice, awareness, healthcare, education, and social welfare.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-5">

          {/* Become a Member */}
          <Link
            href="/membership"
            className="
              w-[180px] sm:w-[170px] md:w-[180px]
              px-4 sm:px-5 md:px-6
              py-3 sm:py-3.5
              bg-gradient-to-r
              from-[#bf953f]
              to-[#fcf6ba]
              text-[#041a4a]
              font-bold
              uppercase
              tracking-widest
              text-[10px] sm:text-xs
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

          {/* Become a Volunteer */}
          <Link
            href="/volunteer"
            className="
              w-[180px] sm:w-[170px] md:w-[180px]
              px-4 sm:px-5 md:px-6
              py-3 sm:py-3.5
              border
              border-[#bf953f]
              text-[#bf953f]
              font-bold
              uppercase
              tracking-widest
              text-[10px] sm:text-xs
              hover:bg-[#bf953f]
              hover:text-[#041a4a]
              transition-all
              duration-300
              rounded-md
              text-center
            "
          >
            Become a Volunteer
          </Link>

          {/* Donate */}
          <Link
            href="/donate"
            className="
              w-[180px] sm:w-[170px] md:w-[180px]
              px-4 sm:px-5 md:px-6
              py-3 sm:py-3.5
              border
              border-[#bf953f]
              text-[#bf953f]
              font-bold
              uppercase
              tracking-widest
              text-[10px] sm:text-xs
              hover:bg-[#bf953f]
              hover:text-[#041a4a]
              transition-all
              duration-300
              rounded-md
              text-center
            "
          >
            Donate
          </Link>

        </div>
      </div>
    </section>
  );
}