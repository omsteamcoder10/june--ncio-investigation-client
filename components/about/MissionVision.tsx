"use client";

export default function MissionVision() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Accent - Hidden on mobile */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* Text Side: Vision & Mission */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 text-center lg:text-left order-2 lg:order-1">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-[#041a4a] leading-tight">
                Empowering Citizens, <br />
                <span className="text-[#bf953f]">Securing Justice.</span>
              </h2>
            </div>

            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              <div className="border-l-4 border-[#041a4a] pl-4 sm:pl-5 md:pl-6 lg:pl-8">
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#041a4a] mb-1 sm:mb-2">Our Mission</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;To turn silence into systemic action by providing legal awareness, 
                  social welfare, and community development to the vulnerable, 
                  district by district, citizen by citizen.&rdquo;
                </p>
              </div>

              <div className="border-l-4 border-[#bf953f] pl-4 sm:pl-5 md:pl-6 lg:pl-8">
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#041a4a] mb-1 sm:mb-2">Our Vision</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;To build a more equitable, aware, and globally connected India, 
                  where justice knows no borders and every citizen is empowered 
                  to exercise their inherent rights.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Visual Side: Founder Focus */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-[240px] xs:max-w-[260px] sm:max-w-[280px] md:max-w-sm lg:max-w-sm xl:max-w-md rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] relative transition-transform hover:-translate-y-2 duration-500 mx-auto lg:mx-0">
              <img 
                src={`${process.env.NEXT_PUBLIC_R2_URL}/home/3.webp`} 
                alt="Founder" 
                className="w-full h-full object-cover brightness-[1.2] contrast-[1.05] saturate-[1.1]"
                style={{
                  filter: 'brightness(1.2) contrast(1.08) saturate(1.15)'
                }}
              />
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#041a4a]/90 via-transparent to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}