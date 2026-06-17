// components/home/MissionBanner.tsx
import Link from "next/link";

export default function MissionBanner() {
  return (
    <section className="bg-gradient-to-br from-[#1a237e] to-[#0d1440] py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="text-5xl mb-6">⚖️</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
          "To create a world where every individual has access to basic human rights"
        </h2>
        <p className="text-white/60 text-lg mb-8">
          Including clean water, education, and healthcare for all citizens.
        </p>
        <Link href="/about"
          className="inline-block bg-[#f9a825] hover:bg-[#f57f17] text-[#1a237e] font-bold px-8 py-3 rounded-xl transition-colors">
          About NCIO
        </Link>
      </div>
    </section>
  );
}