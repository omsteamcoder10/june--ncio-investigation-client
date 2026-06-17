// components/about/OurPurpose.tsx
import Link from "next/link";

export default function OurPurpose() {
  return (
    <section className="py-5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Content first */}
        <div className="max-w-3xl mx-auto">
          
          {/* Heading */}
          <div className="text-center mb-6">
            <span className="text-[#f9a825] font-medium text-sm uppercase tracking-wider">
              Why We Exist
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1a237e] mt-2 mb-6">
              Our Purpose
            </h2>
          </div>
          
          {/* Description */}
          <div className="text-center">
            <p className="text-gray-600 leading-relaxed mb-4">
              NCIO was born out of a simple, painful observation: that in India, the laws that protect citizens are often
              the most inaccessible to those who need them most. The poor, the uneducated, the elderly, and the vulnerable
              are consistently denied their rights — not because the rights don't exist, but because they don't know them,
              can't afford to exercise them, or are intimidated into silence.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              NCIO was established to change this — district by district, citizen by citizen. We train people to know
              their rights, we fight alongside them when those rights are violated, and we build communities of mutual
              support and service.
            </p>
          </div>
          
          {/* Images Grid - Between content and buttons */}
          <div className="mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Image 1 */}
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                <img 
                  src="/about/purpose1.webp" 
                  alt="Legal aid camp" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image 2 */}
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                <img 
                  src="/about/purpose2.webp" 
                  alt="Community support" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image 3 */}
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                <img 
                  src="/about/purpose3.webp" 
                  alt="Food distribution" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image 4 */}
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                <img 
                  src="/about/purpose4.webp" 
                  alt="Tree planting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
           
          </div>
          
          {/* Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/team"
              className="bg-[#1a237e] hover:bg-[#0d1440] text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              Meet Our Team
            </Link>
            <Link href="/contact"
              className="border-2 border-[#1a237e] text-[#1a237e] hover:bg-[#1a237e] hover:text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              Contact Us
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}