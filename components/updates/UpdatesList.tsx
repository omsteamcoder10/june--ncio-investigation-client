// components/updates/UpdatesList.tsx
import Image from "next/image";

// Add your images here
const IMAGES = [
  { id: 1, url: "/updates/update1.webp" },
  { id: 2, url: "/updates/update2.webp" },
  { id: 3, url: "/updates/update3.webp" },
];

export default function UpdatesList() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.map((image) => (
            <div key={image.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="relative w-full">
                <img
                  src={image.url}
                  alt="Updates"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}