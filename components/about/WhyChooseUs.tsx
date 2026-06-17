// components/about/WhyChooseUs.tsx

const REASONS = [
  {
    icon: "⚖️",
    title: "Free Legal Aid",
    desc: "Qualified advocates provide free legal consultation to citizens who cannot afford one.",
    bg: "bg-[#f9a825]",
  },
  {
    icon: "🏥",
    title: "Free Medical Camps",
    desc: "Regular camps in rural areas bring doctors, medicines, and diagnostics to underserved communities.",
    bg: "bg-[#1a237e]",
  },
  {
    icon: "📋",
    title: "RTI Support",
    desc: "We help citizens file RTI applications, track responses, and appeal denials at every level.",
    bg: "bg-[#f9a825]",
  },
  {
    icon: "🌐",
    title: "38 Districts Covered",
    desc: "Active coordinators in every district of Tamil Nadu ensure no citizen is left without support.",
    bg: "bg-[#1a237e]",
  },
  {
    icon: "🏆",
    title: "Registered NGO",
    desc: "Fully registered under Indian Trust Act with no political affiliations — 100% transparent.",
    bg: "bg-[#f9a825]",
  },
];

const PHOTOS = [
  {
    src: "/about/why1.webp",
    alt: "Free medical camp",
    style: "absolute top-0 left-0 w-[280px] h-[300px] border-[4px] border-[#f9a825]",
    radius: "rounded-[60%_40%_55%_45%_/_50%_60%_40%_50%]",
  },
  {
    src: "/about/why2.webp",
    alt: "Blood donation camp",
    style: "absolute top-[15px] right-0 w-[160px] h-[160px] border-[4px] border-[#1a237e] rotate-[4deg]",
    radius: "rounded-[18px]",
  },
  {
    src: "/about/why3.webp",
    alt: "Food distribution",
    style: "absolute top-[200px] right-[15px] w-[140px] h-[140px] border-[4px] border-[#f9a825]",
    radius: "rounded-full",
  },
  {
    src: "/about/why4.webp",
    alt: "Tree planting",
    style: "absolute bottom-0 left-0 w-[240px] h-[160px] border-[4px] border-[#1a237e]",
    radius: "rounded-[50%_20%_40%_30%_/_30%_50%_20%_40%]",
  },
  {
    src: "/about/why5.webp",
    alt: "Team meeting",
    style: "absolute bottom-[30px] right-0 w-[140px] h-[130px] border-[4px] border-[#f9a825] -rotate-[5deg]",
    radius: "rounded-[14px]",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1a237e] mt-2 mb-3">
            Why Choose NCIO?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Thousands of citizens across Tamil Nadu trust NCIO because of our commitment, integrity, and proven impact.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Photo collage ── */}
          <div className="relative h-[480px] w-full max-w-[480px] mx-auto">

            {/* Photos */}
            {PHOTOS.map((p) => (
              <div
                key={p.alt}
                className={`${p.style} overflow-hidden ${p.radius} shadow-lg`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Decorative dots and ring */}
            <div className="absolute top-[320px] left-[290px] w-4 h-4 rounded-full bg-[#f9a825]" />
            <div className="absolute bottom-[170px] left-[250px] w-3 h-3 rounded-full bg-[#1a237e]" />
            <div className="absolute top-[150px] left-[285px] w-9 h-9 rounded-full border-[3px] border-[#f9a825]" />

            {/* Experience badge */}
            <div className="absolute bottom-[80px] left-[80px] bg-[#1a237e] text-white rounded-xl px-5 py-3 text-center shadow-lg">
              <p className="text-2xl font-bold text-[#f9a825] leading-none">10+</p>
              <p className="text-xs text-white/80 mt-1 whitespace-nowrap">Years of Service</p>
            </div>

          </div>

          {/* ── RIGHT: Reasons list ── */}
          <div className="flex flex-col gap-6">
            {REASONS.map((r) => (
              <div key={r.title} className="flex items-start gap-4 group">
                <div
                  className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-xl ${r.bg} text-white transition-transform duration-200 group-hover:scale-110 shadow-md`}
                >
                  {r.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a237e] text-lg mb-1">{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}