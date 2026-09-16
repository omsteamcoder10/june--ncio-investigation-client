"use client";

import Image from "next/image";
import Link from "next/link";

const DEFAULT_HERO = {
  heading_line1: "COMMITTED TO",
  heading_line2: "JUSTICE &",
  heading_line3: "SOCIAL WELFARE",

  description:
    "Dedicated to serving society through legal assistance, RTI support, blood donation drives, medical camps, education support, awareness programs, and community welfare initiatives.",

  button_text: "Contact Us",
  button_link: "/contact",

  // IMAGE PATH — DO NOT CHANGE
  image: `${process.env.NEXT_PUBLIC_R2_URL}/home/4.png`,
  image_alt: "NCIO Team",
};

export default function HeroSection() {
  const content = DEFAULT_HERO;

  return (
    <section className="relative overflow-hidden bg-[#102b5c] py-16 sm:py-20 md:py-24 lg:py-28">

      {/* Gold Border */}
      <div className="hidden sm:block absolute inset-4 border-2 border-[#d4af37]/70 rounded-[40px]" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(#d4af37 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="text-center lg:text-left pt-6 sm:pt-10 md:pt-14 lg:pt-16">

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-white">

              {content.heading_line1}

              <span className="block text-[#d4af37]">
                {content.heading_line2}
              </span>

              <span className="block text-[#d4af37]">
                {content.heading_line3}
              </span>

            </h1>


            {/* Decorative Divider */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">

              <div className="w-20 h-[2px] bg-[#d4af37]" />

              <span className="text-[#d4af37] text-xl">
                ★ ★ ★
              </span>

              <div className="w-20 h-[2px] bg-[#d4af37]" />

            </div>


            {/* Introduction / Description */}
            <p className="mt-8 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">

              {content.description}

            </p>


            {/* Contact Button */}
            <div className="mt-10 flex justify-center lg:justify-start">

              <Link
                href={content.button_link}
                className="
                  px-8 py-4
                  rounded-full
                  bg-gradient-to-r
                  from-[#b8860b]
                  via-[#f8e287]
                  to-[#b8860b]
                  text-[#041a4a]
                  font-bold
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                {content.button_text}
              </Link>

            </div>

          </div>


          {/* =========================
              RIGHT IMAGE
          ========================== */}
          <div className="flex justify-center mt-6 sm:mt-8 lg:mt-0">

            <div className="relative">

              {/* Outer Glow */}
              <div
                className="
                  absolute
                  -inset-6
                  rounded-full
                  bg-gradient-to-r
                  from-[#b8860b]
                  via-[#f8e287]
                  to-[#b8860b]
                  blur-3xl
                  opacity-30
                "
              />


              {/* Golden Ring */}
              <div
                className="
                  relative
                  w-[260px]
                  h-[260px]
                  sm:w-[340px]
                  sm:h-[340px]
                  md:w-[430px]
                  md:h-[430px]
                  lg:w-[500px]
                  lg:h-[500px]
                  xl:w-[560px]
                  xl:h-[560px]
                  rounded-full
                  p-[8px]
                  bg-gradient-to-r
                  from-[#b8860b]
                  via-[#f8e287]
                  to-[#b8860b]
                "
              >

                {/* Inner Circle */}
                <div
                  className="
                    relative
                    w-full
                    h-full
                    rounded-full
                    overflow-hidden
                    border-[6px]
                    border-[#041a4a]
                    bg-gradient-to-br
                    from-white
                    via-slate-50
                    to-slate-100
                  "
                >

                  <Image
                    src={content.image}
                    alt={content.image_alt}
                    fill
                    priority
                    className="
                      object-contain
                      object-top
                      scale-[0.95]
                    "
                    sizes="
                      (max-width: 640px) 260px,
                      (max-width: 768px) 340px,
                      (max-width: 1024px) 430px,
                      (max-width: 1280px) 500px,
                      560px
                    "
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}