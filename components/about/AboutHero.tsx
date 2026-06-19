export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0b234f] py-24 md:py-32">
      {/* Gold Glows - Adjusted for better mobile performance */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#d4af37]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#d4af37]/10 rounded-full blur-[100px]" />

      {/* Top Gold Line - Retained for the luxury feel */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#b8860b] via-[#f8e287] to-[#b8860b]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Title - Using responsive text classes for smooth scaling */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
          About Our <br className="md:hidden" /> Organization
        </h1>

        {/* Subtitle - Increased readability for mobile */}
        <p className="mt-6 md:mt-8 max-w-2xl mx-auto text-white/70 text-base sm:text-lg md:text-xl font-light leading-relaxed">
          Dedicated to justice, legal awareness, social welfare,
          and community development across Tamil Nadu.
        </p>

        {/* Decorative divider - Subtle touch to anchor the content */}
        <div className="mt-10 flex justify-center gap-2">
          <div className="w-8 h-[2px] bg-[#d4af37]/50" />
          <div className="w-8 h-[2px] bg-[#d4af37]/50" />
          <div className="w-8 h-[2px] bg-[#d4af37]/50" />
        </div>
      </div>
    </section>
  );
}