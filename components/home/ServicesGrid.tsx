// components/home/ServicesGrid.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { SERVICES } from "@/lib/constants";

export default function ServicesGrid() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <SectionHeading
          badge=""
          title="Ways We Help"
          subtitle=""
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-6 mt-8 sm:mt-10 md:mt-12">

          {SERVICES.map((svc) => (
            <Link
              key={svc.id}
              href={`/services/${svc.id}`}
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

              {/* Learn More - Visible on all devices */}
              {/* <div
                className="
                  flex
                  items-center gap-2
                  text-[#f8e287]
                  font-semibold
                  text-xs sm:text-sm
                  mt-3 sm:mt-4 md:mt-6
                  group-hover:gap-4
                  transition-all
                  flex-shrink-0
                "
              >
                Learn More
                <ArrowRight size={14} className="sm:w-4 sm:h-4" />
              </div> */}

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
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}