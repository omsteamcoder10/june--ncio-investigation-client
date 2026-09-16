"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  // New client-approved content
  const content = {
    title: "Our Story",

    subtitle: "Serving Tamil Nadu Since 2013",

    description:
      "The National Crime Investigates Organization (NCIO) is committed to promoting justice, public awareness, and social welfare. We work at the grassroots level to support citizens, protect their rights, and connect communities with practical assistance across Tamil Nadu.",

    features: [
      "Registered Trust",
      "Independent Organization",
      "Statewide Volunteer Network",
      "Commitment to Public Transparency",
    ],

    button_text: "Read Full Mission",
    button_link: "/about",

    // IMAGE PATH — DO NOT CHANGE
    image: `${process.env.NEXT_PUBLIC_R2_URL}/home/1.webp`,
    image_alt: "NCIO volunteers at work",
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-center">

          {/* =========================
              IMAGE SIDE
          ========================== */}
          <div className="relative">

            {/* Decorative Gold Frame */}
            <div
              className="
                absolute
                -top-4 sm:-top-6
                -left-4 sm:-left-6
                w-3/4
                h-3/4
                border-2
                border-[#bf953f]/40
                rounded-br-[60px]
                sm:rounded-br-[100px]
              "
            />

            {/* Shadow layer behind image */}
            <div
              className="
                absolute
                -bottom-4
                -right-4
                w-full
                h-full
                bg-[#bf953f]/5
                rounded-tr-[60px]
                sm:rounded-tr-[100px]
                rounded-bl-[60px]
                sm:rounded-bl-[100px]
              "
            />

            {/* Main Image */}
            <div
              className="
                relative
                z-10
                overflow-hidden
                rounded-tr-[60px]
                sm:rounded-tr-[100px]
                rounded-bl-[60px]
                sm:rounded-bl-[100px]
                shadow-2xl
                shadow-[#041a4a]/10
              "
            >

              {/* Brightness overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-tr
                  from-transparent
                  via-white/10
                  to-white/20
                  z-10
                  pointer-events-none
                "
              />

              <Image
                src={content.image}
                alt={content.image_alt}
                width={600}
                height={450}
                priority
                className="
                  w-full
                  h-auto
                  object-cover
                  hover:scale-105
                  transition-transform
                  duration-700
                  brightness-[1.05]
                  contrast-[1.02]
                  saturate-[1.08]
                "
                style={{
                  filter: "brightness(1.08) contrast(1.05) saturate(1.1)",
                }}
              />

              {/* Vignette */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/10
                  via-transparent
                  to-transparent
                  z-10
                  pointer-events-none
                "
              />
            </div>
          </div>


          {/* =========================
              CONTENT SIDE
          ========================== */}
          <div className="lg:pl-6 xl:pl-10">

            {/* Title + Subtitle */}
            <div
              className="
                mb-6
                sm:mb-8
                border-l-4
                border-[#bf953f]
                pl-4
                sm:pl-6
              "
            >
              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-black
                  text-[#041a4a]
                  uppercase
                  tracking-tight
                  mb-2
                "
              >
                {content.title}
              </h2>

              <p
                className="
                  text-[#bf953f]
                  font-bold
                  text-base
                  sm:text-lg
                "
              >
                {content.subtitle}
              </p>
            </div>


            {/* Description */}
            <p
              className="
                text-gray-600
                text-base
                sm:text-lg
                leading-relaxed
                mb-6
                sm:mb-8
              "
            >
              {content.description}
            </p>


            {/* Features */}
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">

              {content.features.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-3
                    sm:gap-4
                    text-[#041a4a]
                    font-semibold
                    text-sm
                    sm:text-base
                    group
                    hover:translate-x-1
                    transition-transform
                    duration-200
                  "
                >

                  {/* Gold bullet */}
                  <div
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-[#bf953f]
                      flex-shrink-0
                      group-hover:scale-110
                      transition-transform
                      duration-200
                    "
                  />

                  {item}

                </div>
              ))}

            </div>


            {/* Read Full Mission Button */}
            <Link
              href={content.button_link}
              className="
                inline-flex
                items-center
                gap-2
                sm:gap-3
                px-6
                sm:px-8
                py-3
                sm:py-4
                bg-[#041a4a]
                text-white
                font-bold
                rounded-full
                hover:bg-[#bf953f]
                hover:scale-105
                transition-all
                duration-300
                text-sm
                sm:text-base
                shadow-lg
                shadow-[#041a4a]/20
                hover:shadow-[#bf953f]/30
                group
              "
            >
              {content.button_text}

              <ArrowRight
                size={18}
                className="
                  flex-shrink-0
                  group-hover:translate-x-1
                  transition-transform
                  duration-300
                "
              />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}