"use client";

export default function OurPurpose() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#041a4a] tracking-tight">
            Built on <span className="text-[#bf953f]">Purpose.</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#bf953f] mx-auto mt-6 sm:mt-7 md:mt-8 rounded-full"></div>
        </div>

        {/* Narrative Grid */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: The Visionary Context */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="bg-[#041a4a] p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] text-white shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#bf953f]">The Visionary</h3>
              <p className="leading-relaxed text-gray-300 text-sm sm:text-base">
                Dr. VPA Amirthalingam founded the NCIO under the Indian Trusts Act, 
                building a dynamic, state-wide organization dedicated to empowering 
                citizens through legal awareness and social welfare.
              </p>
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#bf953f]/30">
                <p className="italic text-base sm:text-lg">
                  &ldquo;An informed and empowered citizenry is the cornerstone of a just 
                  and progressive society.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Core Mission */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 md:space-y-10">
            <div className="prose prose-sm sm:prose-base lg:prose-lg text-gray-600 max-w-none">
              <p className="leading-relaxed text-sm sm:text-base">
                NCIO was born out of a simple, painful observation: that in India, the laws that protect 
                citizens are often the most inaccessible to those who need them most.
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                We fight for the poor, the elderly, and the vulnerable who are intimidated into silence. 
                Our purpose is to turn that silence into systemic action—district by district, 
                citizen by citizen.
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                Recognizing that justice knows no borders, we have fostered a growing international 
                network that actively supports the welfare of Indian workers abroad, ensuring 
                they receive guidance, protection, and assistance wherever they are in the world.
              </p>
            </div>

            {/* Stats/Highlights */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
              <div className="border-l-4 border-[#bf953f] pl-4 sm:pl-6">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#041a4a]">State-wide</h4>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mt-1">Impact Network</p>
              </div>
              <div className="border-l-4 border-[#bf953f] pl-4 sm:pl-6">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#041a4a]">Borderless</h4>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mt-1">Support System</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}