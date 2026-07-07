import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { GalleryItem } from "../../types/content";
import { Button } from "../common/Button";

import { cn } from "../../utils/cn";

interface GalleryCarouselProps {
  items: GalleryItem[];
}

export function GalleryCarousel({ items }: GalleryCarouselProps) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateSnaps = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    updateSnaps();
    emblaApi.on("select", updateSnaps);
    emblaApi.on("reInit", updateSnaps);
    emblaApi.scrollTo(0);

    return () => {
      emblaApi.off("select", updateSnaps);
      emblaApi.off("reInit", updateSnaps);
    };
  }, [emblaApi, items]);

  useEffect(() => {
    if (!emblaApi || selected) return;

    const interval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 4200);

    return () => window.clearInterval(interval);
  }, [emblaApi, selected]);

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-5 flex items-stretch">
          {items.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setSelected(item)}
              className="group flex min-w-0 flex-[0_0_100%] flex-col pl-5 text-left focus:outline-none sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-4xl bg-bloom-cream border border-bloom-ink/5 shadow-[0_8px_30px_rgba(25,33,31,0.04)] transition duration-300 group-hover:-translate-y-1.5 group-focus:ring-4 group-focus:ring-bloom-gold/45">
                <img
                  src={item.thumbnail}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Indicator (Sliding Scrollbar Only) */}
      <div className="mt-6 flex flex-col items-center sm:hidden px-4">
        <div className="relative h-[3px] w-28 rounded-full bg-bloom-ink/10 overflow-hidden">
          <div
            className="absolute h-full bg-bloom-gold rounded-full transition-all duration-300"
            style={{
              width: `${100 / Math.max(1, scrollSnaps.length)}%`,
              left: `${(selectedIndex / Math.max(1, scrollSnaps.length)) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Desktop Pagination Dots */}
      <div className="mt-6 hidden sm:flex flex-wrap items-center justify-center gap-2 px-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-bloom-gold/50",
              index === selectedIndex
                ? "w-6 bg-bloom-gold"
                : "w-2 bg-bloom-ink/20 hover:bg-bloom-ink/45",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <Button
          variant="secondary"
          className="size-12 px-0"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ArrowLeft className="size-5" />
        </Button>
        <Button
          variant="secondary"
          className="size-12 px-0"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ArrowRight className="size-5" />
        </Button>
      </div>

      {selected
        ? createPortal(
            <div
              className="fixed inset-0 z-80 flex flex-col items-center justify-center bg-bloom-ink/90 p-4 backdrop-blur-md cursor-zoom-out"
              role="dialog"
              aria-modal="true"
              aria-label="Image Lightbox"
              onClick={() => setSelected(null)}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-6 top-6 z-10 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition duration-200"
                aria-label="Close image"
              >
                <X className="size-6" />
              </button>

              {/* Lightbox Content */}
              <div
                className="relative flex max-w-5xl flex-col items-center justify-center p-2 cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selected.image}
                  alt={selected.alt}
                  className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
