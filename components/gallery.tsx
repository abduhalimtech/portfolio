"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage { src: string; alt: string }
interface GalleryProps { images: GalleryImage[]; title?: string }

export default function Gallery({ images, title }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Keyboard nav
  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setSelectedIndex(i => (i! === 0 ? images.length - 1 : i! - 1));
      if (e.key === "ArrowRight") setSelectedIndex(i => (i! === images.length - 1 ? 0 : i! + 1));
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex, images.length]);

  // Focus trap
  useEffect(() => {
    if (selectedIndex === null || !dialogRef.current) return;
    const els = dialogRef.current.querySelectorAll<HTMLElement>(
      'button, [href], [tabindex]:not([tabindex="-1"])'
    );
    const first = els[0], last = els[els.length - 1];
    const onTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
      else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
    };
    window.addEventListener("keydown", onTab);
    first?.focus();
    return () => window.removeEventListener("keydown", onTab);
  }, [selectedIndex]);

  // Touch swipe
  const handleSwipe = useCallback(() => {
    if (selectedIndex === null) return;
    if (touchStart - touchEnd > 50) setSelectedIndex(i => (i! === images.length - 1 ? 0 : i! + 1));
    if (touchEnd - touchStart > 50) setSelectedIndex(i => (i! === 0 ? images.length - 1 : i! - 1));
  }, [touchStart, touchEnd, selectedIndex, images.length]);

  return (
    <div className="space-y-4">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}

      {/* Thumbnails (square without plugin) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className="relative overflow-hidden rounded-lg border border-border hover:border-sky-400 transition-colors group"
            aria-label={`View ${img.alt}`}
          >
            {/* Square box: width 100%, padding-top 100% */}
            <div className="relative w-full pt-[100%]">
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                priority={idx < 4}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Image gallery: ${title || "Screenshots"}`}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedIndex(null) }}
          onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
          onTouchEnd={(e) => { setTouchEnd(e.changedTouches[0].clientX); handleSwipe(); }}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col">
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-10 right-0 p-2 text-white hover:text-sky-400 transition-colors z-10"
              aria-label="Close gallery"
            >
              <X size={24} />
            </button>

            <div className="relative flex-1 min-h-[300px] flex items-center justify-center overflow-hidden rounded-lg bg-black/50">
              <Image
                src={images[selectedIndex].src || "/placeholder.svg"}
                alt={images[selectedIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 90vw"
                priority
              />
            </div>

            <div className="flex items-center justify-between mt-4 px-2">
              <button
                onClick={() => setSelectedIndex(i => (i! === 0 ? images.length - 1 : i! - 1))}
                className="p-2 rounded-lg bg-sky-400/10 hover:bg-sky-400/20 text-sky-400 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="text-sm text-muted-foreground">
                {selectedIndex + 1} / {images.length}
              </div>

              <button
                onClick={() => setSelectedIndex(i => (i! === images.length - 1 ? 0 : i! + 1))}
                className="p-2 rounded-lg bg-sky-400/10 hover:bg-sky-400/20 text-sky-400 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="mt-3 text-center text-sm text-muted-foreground">
              {images[selectedIndex].alt}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
