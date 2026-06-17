"use client";
// components/gallery/GalleryGrid.tsx
import { useState } from "react";
import { X, Play,  } from "lucide-react";

// Photos data - add your images here
const PHOTOS = [
  { id: 1, url: "/gallery/photo1.webp" },
  { id: 2, url: "/gallery/photo2.webp" },
  { id: 3, url: "/gallery/photo3.webp" },
  { id: 4, url: "/gallery/photo4.webp" },
  { id: 5, url: "/gallery/photo5.webp" },
  { id: 6, url: "/gallery/photo6.webp" },
  { id: 7, url: "/gallery/photo7.webp" },
  { id: 8, url: "/gallery/photo8.webp" },
  { id: 9, url: "/gallery/photo9.webp" },
  { id: 10, url: "/gallery/photo10.webp" },
  { id: 11, url: "/gallery/photo11.webp" },
  { id: 12, url: "/gallery/photo12.webp" },
  { id: 13, url: "/gallery/photo13.webp" },
  { id: 14, url: "/gallery/photo14.webp" },
  { id: 15, url: "/gallery/photo15.webp" },
  { id: 16, url: "/gallery/photo16.webp" },
  { id: 17, url: "/gallery/photo17.webp" },
];

// Videos data - add your videos here
const VIDEOS = [
  {
    id: 1,
    url: "/gallery/video1.mp4",
  },
  {
    id: 2,
    url: "/gallery/video2.mp4",
  },
  {
    id: 3,
    url: "/gallery/video3.mp4",
  },
];

type MediaItem = {
  id: number;
  url: string;
  type: "photo" | "video";
};

export default function GalleryGrid() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Tab Buttons - No counts */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveTab("photos")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all ${
                activeTab === "photos"
                  ? "bg-[#1a237e] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
             
              📸 Moments
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all ${
                activeTab === "videos"
                  ? "bg-[#1a237e] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
             
              🎬 Highlights
            </button>
          </div>

          {/* Photos Grid - 4 columns desktop, 2 tablet, 2 mobile */}
          {activeTab === "photos" && (
            <>
              <div className="text-center mb-6">
                <h2 className="font-display text-2xl font-bold text-[#1a237e]">
                  Captured Moments
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Glimpses of our journey and impact
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {PHOTOS.map((photo) => (
                  <div
                    key={photo.id}
                    className="rounded-xl overflow-hidden aspect-square cursor-pointer group shadow-sm hover:shadow-lg transition-all"
                    onClick={() => setSelectedMedia({ ...photo, type: "photo" })}
                  >
                    <img
                      src={photo.url}
                      alt="Gallery"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Videos Grid - 3 columns desktop, 1 mobile */}
          {activeTab === "videos" && (
            <>
              <div className="text-center mb-6">
                <h2 className="font-display text-2xl font-bold text-[#1a237e]">
                  Event Highlights
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Watch our impactful moments in action
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {VIDEOS.map((video) => (
                  <div
                    key={video.id}
                    className="rounded-xl overflow-hidden aspect-video cursor-pointer group shadow-sm hover:shadow-lg transition-all relative bg-gray-900"
                    onClick={() => setSelectedMedia({ ...video, type: "video" })}
                  >
                    {/* Video thumbnail - using video element as thumbnail */}
                    <video
                      src={video.url}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      muted
                      playsInline
                    />
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <div className="w-16 h-16 bg-[#f9a825] rounded-full flex items-center justify-center">
                        <Play size={32} className="text-[#1a237e] ml-1" />
                      </div>
                    </div>
                    
                    {/* Video badge */}
                    <div className="absolute top-2 right-2 bg-black/60 rounded-full px-2 py-1 text-xs text-white flex items-center gap-1">
                      <Play size={10} /> Video
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Lightbox for Photos & Videos */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-5 right-5 text-white hover:text-[#f9a825] transition-colors z-10"
            onClick={() => setSelectedMedia(null)}
          >
            <X size={32} />
          </button>
          
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full"
          >
            {selectedMedia.type === "photo" ? (
              <img
                src={selectedMedia.url}
                alt="Gallery"
                className="max-w-full max-h-[85vh] rounded-xl object-contain mx-auto"
              />
            ) : (
              <video
                src={selectedMedia.url}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-xl mx-auto"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </>
  );
}