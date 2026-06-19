"use client";
import Link from "next/link";

export default function MissionBanner() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left: The "Gold Blueprint" Element */}
        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-48 h-48 border border-[#041a4a]/20 rotate-45 flex items-center justify-center">
            <div className="absolute inset-2 border-2 border-[#bf953f]" />
            <div className="text-4xl -rotate-45 font-black text-[#041a4a]">⚖️</div>
          </div>
        </div>

        {/* Right: The Mission Statement */}
        <div className="md:col-span-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#041a4a] mb-8 leading-snug">
            To create a world where every individual has access to 
            <span className="text-[#bf953f] block mt-2 underline decoration-2 underline-offset-8">basic human rights.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <p className="text-[#041a4a]/70 text-lg flex-1">
              Clean water, education, and healthcare for all citizens, empowering communities to stand for justice.
            </p>
            {/* <Link 
              href="/about"
              className="px-8 py-3 bg-[#041a4a] text-white font-bold tracking-widest hover:bg-[#bf953f] transition-all"
            >
              OUR MISSION
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}