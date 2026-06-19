"use client";

const features = [
  {
    title: "State-Wide Presence",
    description: "A robust, deep-rooted network established across every district in Tamil Nadu, ensuring aid reaches those who need it most.",
  },
  {
    title: "Borderless Support",
    description: "An inclusive international network protecting Indian workers abroad, providing guidance and assistance regardless of location.",
  },
  {
    title: "Legal Transparency",
    description: "Operated strictly under the Indian Trusts Act, ensuring every action is grounded in integrity, accountability, and legal transparency.",
  },
  {
    title: "Comprehensive Outreach",
    description: "From RTI facilitation and legal aid to healthcare and environmental sustainability, we tackle multifaceted social challenges.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#041a4a]">
            Why Partner with NCIO?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 sm:p-7 md:p-8 bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-100 transition-all hover:border-[#bf953f] hover:shadow-xl"
            >
              <div className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 bg-[#041a4a]/5 rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:bg-[#bf953f] transition-colors">
                <div className="w-5 sm:w-6 h-5 sm:h-6 border-2 border-[#041a4a] group-hover:border-white transition-colors"></div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#041a4a] mb-2 sm:mb-3 md:mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}