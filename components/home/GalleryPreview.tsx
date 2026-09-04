// components/home/GalleryPreview.tsx

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

// Gallery images directly in component
const GALLERY_PHOTOS = [
  { url: `${process.env.NEXT_PUBLIC_R2_URL}/gallery/1.webp` },
  { url: `${process.env.NEXT_PUBLIC_R2_URL}/gallery/2.webp` },
  { url: `${process.env.NEXT_PUBLIC_R2_URL}/gallery/3.webp` },
  { url: `${process.env.NEXT_PUBLIC_R2_URL}/gallery/4.webp` },
  { url: `${process.env.NEXT_PUBLIC_R2_URL}/gallery/5.webp` },
  { url: `${process.env.NEXT_PUBLIC_R2_URL}/gallery/6.webp` },
  { url: `${process.env.NEXT_PUBLIC_R2_URL}/gallery/7.webp` },
  { url: `${process.env.NEXT_PUBLIC_R2_URL}/gallery/8.webp` },
];

export default function GalleryPreview() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="" title="Photo Gallery" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-8 sm:mt-10 md:mt-12">
          {GALLERY_PHOTOS.slice(0, 6).map((photo, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl sm:rounded-[30px]
                border-2
                border-[#d4af37]/30
                shadow-xl sm:shadow-2xl
                hover:border-[#d4af37]
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              <div className="relative h-[180px] xs:h-[200px] sm:h-[240px] md:h-[260px] lg:h-[280px]">

                <Image
                  src={photo.url}
                  alt="Gallery Photo"
                  fill
                  className="
                    object-cover
                    group-hover:scale-110
                    transition-all
                    duration-700
                  "
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#041a4a]/90
                    via-transparent
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                />

                {/* Gold Top Border */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-1
                    w-full
                    bg-gradient-to-r
                    from-[#b8860b]
                    via-[#f8e287]
                    to-[#b8860b]
                  "
                />

              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          {/* <Link
            href="/gallery"
            className="
              inline-flex
              items-center
              gap-2
              px-6 sm:px-8
              py-3 sm:py-4
              rounded-full
              border-2
              border-[#041a4a]
              text-[#041a4a]
              font-bold
              text-sm sm:text-base
              hover:bg-[#041a4a]
              hover:text-white
              transition-all
              duration-300
            "
          >
            View All Photos
            <ArrowRight size={18} className="flex-shrink-0" />
          </Link> */}
        </div>
      </div>
    </section>
  );
}