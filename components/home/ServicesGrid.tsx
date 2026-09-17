// components/home/ServicesGrid.tsx

import {
  FileText,
  Scale,
  GraduationCap,
  Plane,
  HeartPulse,
  Droplet,
  Trees,
  Utensils,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const SERVICES = [
  {
    id: "rti-assistance",
    title: "RTI Assistance",
    shortDesc:
      "Support with Right to Information applications, appeals, documentation, and follow-up.",
    icon: <FileText />,
  },
  {
    id: "free-legal-assistance",
    title: "Free Legal Assistance",
    shortDesc:
      "Legal guidance, documentation support, and advocate referrals for eligible individuals.",
    icon: <Scale />,
  },
  {
    id: "education-support",
    title: "Education Support",
    shortDesc:
      "Scholarships, educational materials, and student support initiatives.",
    icon: <GraduationCap />,
  },
  {
    id: "nri-support-services",
    title: "NRI Support Services",
    shortDesc:
      "Assistance and coordination for Non-Resident Indians and their families in appropriate matters.",
    icon: <Plane />,
  },
  {
    id: "medical-camps",
    title: "Medical Camps",
    shortDesc:
      "Medical camps, health screenings, basic healthcare support, medicines, and referrals.",
    icon: <HeartPulse />,
  },
  {
    id: "blood-donation-drives",
    title: "Blood Donation Drives",
    shortDesc:
      "Blood donation camps and coordination with voluntary blood donors during emergencies.",
    icon: <Droplet />,
  },
  {
    id: "environmental-initiatives",
    title: "Environmental Initiatives",
    shortDesc:
      "Tree planting, environmental clean-up activities, and public awareness programs.",
    icon: <Trees />,
  },
  {
    id: "hunger-relief",
    title: "Hunger Relief",
    shortDesc:
      "Food distribution and relief support for vulnerable individuals and families.",
    icon: <Utensils />,
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <SectionHeading
          badge=""
          title="Our Services"
          subtitle=""
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-6 mt-8 sm:mt-10 md:mt-12">

          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                p-4 sm:p-5 md:p-6
                min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px]

                bg-gradient-to-b
                from-[#071d49]
                via-[#081f57]
                to-[#041433]

                border-2
                border-[#d4af37]

                shadow-[0_10px_30px_rgba(212,175,55,0.15)]

                hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(212,175,55,0.35)]
                hover:border-[#f8e287]

                transition-all
                duration-500
                flex flex-col
              "
            >

              {/* Gold Top Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b8860b] via-[#fff4b8] to-[#b8860b]" />

              {/* Icon */}
              <div
                className="
                  w-12 sm:w-14 md:w-16
                  h-12 sm:h-14 md:h-16
                  rounded-xl
                  flex items-center justify-center
                  mb-3 sm:mb-4 md:mb-6

                  bg-gradient-to-br
                  from-[#b8860b]
                  via-[#f8e287]
                  to-[#b8860b]

                  text-[#071d49]
                  text-xl sm:text-2xl md:text-3xl
                  shadow-lg
                  flex-shrink-0
                "
              >
                {svc.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  text-sm sm:text-base md:text-xl
                  font-bold
                  text-[#f8e287]
                  mb-2 sm:mb-3 md:mb-4
                  group-hover:text-white
                  transition-colors
                  leading-tight
                  line-clamp-2
                  flex-shrink-0
                "
              >
                {svc.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-slate-300
                  text-xs sm:text-sm
                  leading-relaxed
                  flex-1
                  line-clamp-3 sm:line-clamp-4 md:line-clamp-5
                "
              >
                {svc.shortDesc}
              </p>

              {/* Gold Corner Glow */}
              <div
                className="
                  absolute
                  -top-10
                  -right-10
                  w-16 sm:w-20 md:w-24
                  h-16 sm:h-20 md:h-24
                  rounded-full
                  bg-[#f8e287]/10
                  blur-2xl
                "
              />

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}