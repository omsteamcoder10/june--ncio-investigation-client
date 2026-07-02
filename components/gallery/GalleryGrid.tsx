"use client";
// components/gallery/GalleryGrid.tsx
import { useState } from "react";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

const PHOTOS = [
  { id: 1, url: "/gallery/1.webp" },
  { id: 2, url: "/gallery/2.webp" },
  { id: 3, url: "/gallery/3.webp" },
  { id: 4, url: "/gallery/4.webp" },
  { id: 5, url: "/gallery/5.webp" },
  { id: 6, url: "/gallery/6.webp" },
  { id: 7, url: "/gallery/7.webp" },
  { id: 8, url: "/gallery/8.webp" },
  { id: 9, url: "/gallery/9.webp" },
  { id: 10, url: "/gallery/10.webp" },
  { id: 11, url: "/gallery/11.webp" },
  { id: 12, url: "/gallery/12.webp" },
  { id: 13, url: "/gallery/13.webp" },
  { id: 14, url: "/gallery/14.webp" },
  { id: 15, url: "/gallery/15.webp" },
  { id: 16, url: "/gallery/16.webp" },
  { id: 17, url: "/gallery/17.webp" },
];

const VIDEOS = [
  { id: 1, url: "/gallery/video1.mp4" },
  { id: 2, url: "/gallery/video2.mp4" },
  { id: 3, url: "/gallery/video3.mp4" },
];

// ✅ New Updates images
const UPDATES = [
  { id: 1, url: "/updates/update1.webp" },
  { id: 2, url: "/updates/update2.webp" },
  { id: 3, url: "/updates/update3.webp" },
];

type MediaItem = {
  id: number;
  url: string;
  type: "photo" | "video" | "update";
};

export default function GalleryGrid() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [activeTab, setActiveTab] = useState<"photos" | "videos" | "updates">("photos");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const getCurrentMediaList = () => {
    if (activeTab === "photos") return PHOTOS;
    if (activeTab === "videos") return VIDEOS;
    return UPDATES;
  };

  const getMediaType = (): "photo" | "video" | "update" => {
    if (activeTab === "photos") return "photo";
    if (activeTab === "videos") return "video";
    return "update";
  };

  const handleMediaClick = (item: any, type: "photo" | "video" | "update", index: number) => {
    setSelectedMedia({ ...item, type });
    setCurrentIndex(index);
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const mediaList = getCurrentMediaList();
    const newIndex = currentIndex > 0 ? currentIndex - 1 : mediaList.length - 1;
    setCurrentIndex(newIndex);
    setSelectedMedia({ ...mediaList[newIndex], type: getMediaType() });
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const mediaList = getCurrentMediaList();
    const newIndex = currentIndex < mediaList.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedMedia({ ...mediaList[newIndex], type: getMediaType() });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const mediaList = getCurrentMediaList();
    if (e.key === "ArrowLeft") {
      const newIndex = currentIndex > 0 ? currentIndex - 1 : mediaList.length - 1;
      setCurrentIndex(newIndex);
      setSelectedMedia({ ...mediaList[newIndex], type: getMediaType() });
    } else if (e.key === "ArrowRight") {
      const newIndex = currentIndex < mediaList.length - 1 ? currentIndex + 1 : 0;
      setCurrentIndex(newIndex);
      setSelectedMedia({ ...mediaList[newIndex], type: getMediaType() });
    } else if (e.key === "Escape") {
      setSelectedMedia(null);
    }
  };

  const tabClass = (tab: string) =>
    `flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold transition-all text-sm sm:text-base ${
      activeTab === tab
        ? "bg-[#1a237e] text-white shadow-md"
        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
    }`;

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Tab Buttons */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 flex-wrap">
            <button onClick={() => setActiveTab("photos")} className={tabClass("photos")}>
              📸 Moments
            </button>
            <button onClick={() => setActiveTab("videos")} className={tabClass("videos")}>
              🎬 Highlights
            </button>
            {/* ✅ New Updates Tab */}
            <button onClick={() => setActiveTab("updates")} className={tabClass("updates")}>
              📢 Updates
            </button>
          </div>

          {/* Photos Grid */}
          {activeTab === "photos" && (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1a237e]">
                  Captured Moments
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Glimpses of our journey and impact
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {PHOTOS.map((photo, index) => (
                  <div
                    key={photo.id}
                    className="rounded-xl overflow-hidden aspect-square cursor-pointer group shadow-sm hover:shadow-lg transition-all"
                    onClick={() => handleMediaClick(photo, "photo", index)}
                  >
                    <img
                      src={photo.url}
                      alt="Gallery"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Videos Grid */}
          {activeTab === "videos" && (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1a237e]">
                  Event Highlights
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Watch our impactful moments in action
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {VIDEOS.map((video, index) => (
                  <div
                    key={video.id}
                    className="rounded-xl overflow-hidden aspect-video cursor-pointer group shadow-sm hover:shadow-lg transition-all relative bg-gray-900"
                    onClick={() => handleMediaClick(video, "video", index)}
                  >
                    <video
                      src={video.url}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#f9a825] rounded-full flex items-center justify-center">
                        <Play size={24} className="sm:w-8 sm:h-8 text-[#1a237e] ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/60 rounded-full px-2 py-1 text-[10px] sm:text-xs text-white flex items-center gap-1">
                      <Play size={10} /> Video
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ✅ Updates Grid */}
          {activeTab === "updates" && (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1a237e]">
                  Latest Updates
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Stay informed with our recent news & announcements
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {UPDATES.map((update, index) => (
                  <div
                    key={update.id}
                    className="rounded-xl overflow-hidden aspect-square cursor-pointer group shadow-sm hover:shadow-lg transition-all"
                    onClick={() => handleMediaClick(update, "update", index)}
                  >
                    <img
                      src={update.url}
                      alt="Update"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </section>

      {/* Lightbox with Navigation */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedMedia(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            className="absolute top-3 sm:top-5 right-3 sm:right-5 text-white hover:text-[#f9a825] transition-colors z-20"
            onClick={() => setSelectedMedia(null)}
          >
            <X size={28} className="sm:w-8 sm:h-8" />
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-2 sm:left-4 md:left-8 text-white hover:text-[#f9a825] transition-colors z-20 bg-black/50 hover:bg-black/70 rounded-full p-1 sm:p-2"
            onClick={handlePrevious}
          >
            <ChevronLeft size={28} className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-2 sm:right-4 md:right-8 text-white hover:text-[#f9a825] transition-colors z-20 bg-black/50 hover:bg-black/70 rounded-full p-1 sm:p-2"
            onClick={handleNext}
          >
            <ChevronRight size={28} className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </button>

          {/* Media Display */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full px-4 sm:px-0"
          >
            {selectedMedia.type === "video" ? (
              <video
                src={selectedMedia.url}
                controls
                autoPlay
                className="max-w-full max-h-[70vh] sm:max-h-[80vh] rounded-xl mx-auto"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              // photo & update — both show as image
              <img
                src={selectedMedia.url}
                alt="Media"
                className="max-w-full max-h-[70vh] sm:max-h-[80vh] rounded-xl object-contain mx-auto"
              />
            )}

            {/* Counter */}
            <div className="text-center mt-3 sm:mt-4 text-white/70 text-xs sm:text-sm">
              {currentIndex + 1} / {getCurrentMediaList().length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}