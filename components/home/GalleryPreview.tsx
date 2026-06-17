// components/home/GalleryPreview.tsx

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

// Gallery images directly in component
const GALLERY_PHOTOS = [
  { url: "/gallery/photo1.webp" },
  { url: "/gallery/photo2.webp" },
  { url: "/gallery/photo3.webp" },
  { url: "/gallery/photo4.webp" },
  { url: "/gallery/photo5.webp" },
  { url: "/gallery/photo6.webp" },
  { url: "/gallery/photo7.webp" },
  { url: "/gallery/photo8.webp" },
];

export default function GalleryPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Our Work in Pictures" title="Photo Gallery" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_PHOTOS.slice(0, 6).map((photo, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl aspect-video cursor-pointer shadow-sm"
            >
              <Image
                src={photo.url}
                alt="Gallery photo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border-2 border-[#1a3a6e] text-[#1a3a6e] hover:bg-[#1a3a6e] hover:text-white font-semibold px-8 py-3 rounded-md transition-colors"
          >
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}