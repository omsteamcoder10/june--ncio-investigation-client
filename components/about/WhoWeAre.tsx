"use client";

export default function WhoWeAre() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* Visual Identity / Brand Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 border-2 border-[#bf953f] rounded-[1.5rem] sm:rounded-[2rem] translate-x-3 sm:translate-x-4 translate-y-3 sm:translate-y-4 -z-10"></div>
            <div className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="/gallery/8.webp" 
                alt="NCIO Community Impact" 
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-auto object-cover"
              />
            </div>
          </div>

          {/* Institutional Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#041a4a] leading-tight">
                An Organization <br />
                <span className="text-[#bf953f]">of Impact.</span>
              </h2>
            </div>

            <div className="text-gray-600 leading-relaxed space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base">
                The National Crime Investigates Organization (NCIO) is a registered NGO under the 
                Indian Trusts Act. We are a dynamic, state-wide entity dedicated to empowering 
                citizens through legal awareness, comprehensive social welfare, and sustainable 
                community development.
              </p>
              <p className="text-sm sm:text-base">
                Our foundation is built upon transparency, integrity, and grassroots action. 
                From RTI facilitation and free legal aid to healthcare outreach and educational 
                support, our reach extends across every district of Tamil Nadu.
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#041a4a]">
                Justice knows no borders. We are committed to a borderless support system, 
                connecting citizens at home with communities overseas to ensure protection, 
                guidance, and assistance for all.
              </p>
            </div>

            {/* Credibility Badges */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-100 rounded-full text-xs sm:text-sm font-bold text-[#041a4a]">
                Registered Under Indian Trusts Act
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-100 rounded-full text-xs sm:text-sm font-bold text-[#041a4a]">
                State-wide Tamil Nadu Network
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}