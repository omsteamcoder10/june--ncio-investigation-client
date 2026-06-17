// components/home/AboutPreview.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <Image
              src="/home/about-us.webp"
              alt="NCIO volunteers at work"
              width={600}
              height={450}
              className="rounded-2xl object-cover w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#c8982a] text-white p-5 rounded-xl shadow-lg">
              <div className="text-2xl font-bold font-display">10+</div>
              <div className="text-xs">Years of Service</div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <p className="text-[#c8982a] text-sm font-semibold uppercase tracking-widest mb-2">
              Who We Are
            </p>
            <h2 className="text-3xl font-bold text-[#1a3a6e] font-display mb-5">
              Serving Tamil Nadu Since 2013
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The National Crime Investigates Organization (NCIO) is a registered NGO under the 
              Indian Trust Act, committed to protecting and empowering citizens across Tamil Nadu. 
              We operate district-wise, with trained coordinators in every district ensuring our 
              services reach those who need them most.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              From free legal aid and RTI support to medical camps, blood donation drives, and 
              hunger relief — NCIO works tirelessly to ensure that no citizen is left behind. 
              Our volunteer network spans the entire state, and our membership program allows 
              dedicated individuals to formally join this mission.
            </p>
            
            {/* Key Facts List */}
            <ul className="space-y-2 mb-7">
              {[
                "Registered NGO under Indian Trust Act",
                "No political affiliation",
                "District-level coordinators across Tamil Nadu",
                "Transparent operations with public accountability"
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-[#c8982a] font-bold mt-0.5">✓</span> 
                  {item}
                </li>
              ))}
            </ul>

            {/* Read More Button */}
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a3a6e] text-white font-semibold rounded-md hover:bg-[#152f5a] transition-colors"
            >
              Read More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}