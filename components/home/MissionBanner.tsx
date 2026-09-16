"use client";

export default function MissionBanner() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">

        {/* Left: The "Gold Blueprint" Element */}
        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-48 h-48 border border-[#041a4a]/20 rotate-45 flex items-center justify-center">
            <div className="absolute inset-2 border-2 border-[#bf953f]" />
            <div className="text-4xl -rotate-45 font-black text-[#041a4a]">
              ⚖️
            </div>
          </div>
        </div>

        {/* Right: Our Commitment */}
        <div className="md:col-span-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#041a4a] mb-8 leading-snug">
            Our Commitment
          </h2>

          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <p className="text-[#041a4a]/70 text-lg flex-1 leading-relaxed">
              To promote awareness, dignity, and access to basic rights and
              essential support for every individual.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}