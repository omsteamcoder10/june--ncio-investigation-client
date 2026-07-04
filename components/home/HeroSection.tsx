"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const DEFAULT_HERO = {
  heading_line1: "Working For",
  heading_line2: "Justice &",
  heading_line3: "Social Service",
  description:
    "Dedicated to serving society through legal aid, RTI services, blood donation drives, medical camps, awareness programs and community support initiatives.",
  button_text: "Contact Us",
  button_link: "/contact",
  image: "/home/4.png",
  image_alt: "NCIO Team",
};

export default function HeroSection() {
  const [content, setContent] = useState(DEFAULT_HERO);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/content?page=home&section=hero`
        );
        if (!res.ok) return;
        const data = await res.json();
        if (data && typeof data === "object" && !Array.isArray(data)) {
          setContent((prev) => ({ ...prev, ...data }));
        }
      } catch (err) {
        console.error("Failed to load home hero content:", err);
      }
    };

    loadContent();
  }, []);

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

          {/* Left Content */}
          <div className="text-center lg:text-left pt-6 sm:pt-10 md:pt-14 lg:pt-16">

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-white">
              {content.heading_line1 || DEFAULT_HERO.heading_line1}
              <span className="block text-[#d4af37]">
                {content.heading_line2 || DEFAULT_HERO.heading_line2}
              </span>
              <span className="block text-[#d4af37]">
                {content.heading_line3 || DEFAULT_HERO.heading_line3}
              </span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
              <div className="w-20 h-[2px] bg-[#d4af37]" />
              <span className="text-[#d4af37] text-xl">
                ★ ★ ★
              </span>
              <div className="w-20 h-[2px] bg-[#d4af37]" />
            </div>

            <p className="mt-8 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {content.description || DEFAULT_HERO.description}
            </p>

            <div className="mt-10 flex justify-center lg:justify-start">
              <Link
                href={content.button_link || DEFAULT_HERO.button_link}
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
                {content.button_text || DEFAULT_HERO.button_text}
              </Link>
            </div>

          </div>

          {/* Right Image */}
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
                    src={content.image || DEFAULT_HERO.image}
                    alt={content.image_alt || DEFAULT_HERO.image_alt}
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
