// components/home/DonateCTA.tsx
import Link from "next/link";

export default function DonateCTA() {
  return (
    <section className="bg-[#f9a825] py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-[#1a237e] mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="text-[#1a237e]/70 mb-8 text-lg">
          Every member, every volunteer, every donation brings us closer to a Tamil Nadu where justice is accessible to all.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/membership"
            className="bg-[#1a237e] hover:bg-[#0d1440] text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-base">
            Join Us Today
          </Link>
          <Link href="/donate"
            className="bg-white hover:bg-gray-100 text-[#1a237e] font-bold px-8 py-3.5 rounded-xl transition-colors text-base shadow-md">
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
}