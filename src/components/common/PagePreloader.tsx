import { useEffect, useMemo, useState } from "react";
import { HeartPulse } from "lucide-react";
import { hero } from "../../data/content";
import { galleryItems } from "../../data/gallery";
import { teamMembers } from "../../data/team";
import { featuredVideos } from "../../data/video";

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image();

    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;
  });
}

function waitForWindowLoad() {
  if (document.readyState === "complete") {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    window.addEventListener("load", () => resolve(), { once: true });
  });
}

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export function PagePreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  const imageSources = useMemo(
    () =>
      Array.from(
        new Set([
          hero.image,
          "/logos/bloom/horizontal/yellow.png",
          "/logos/bloom/vertical/yellow.png",
          ...galleryItems.map((item) => item.image),
          ...teamMembers.map((member) => member.photo),
          ...featuredVideos.map((video) => video.thumbnail),
        ]),
      ),
    [],
  );

  useEffect(() => {
    let isMounted = true;

    async function loadAssets() {
      const fontsReady = "fonts" in document ? document.fonts.ready : Promise.resolve();
      const assetLoad = Promise.all([
        waitForWindowLoad(),
        fontsReady,
        Promise.all(imageSources.map(preloadImage)),
        wait(900),
      ]);

      await Promise.race([assetLoad, wait(12000)]);

      if (!isMounted) return;

      setIsLeaving(true);
      window.setTimeout(() => {
        if (isMounted) {
          setIsVisible(false);
        }
      }, 520);
    }

    void loadAssets();

    return () => {
      isMounted = false;
    };
  }, [imageSources]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`preloader-screen ${isLeaving ? "preloader-screen--leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Bloom website"
    >
      <div className="preloader-card">
        <div className="preloader-heart-wrap">
          <HeartPulse className="preloader-heart" aria-hidden />
        </div>
        <svg
          className="preloader-ecg"
          viewBox="0 0 240 64"
          role="img"
          aria-label="Heartbeat loading animation"
        >
          <path
            d="M4 34 H48 L58 34 L68 18 L82 50 L96 34 H128 L140 34 L150 24 L164 42 L176 34 H236"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
        </svg>
        <img
          src="/logos/bloom/vertical/yellow.png"
          alt="Bloom '26"
          className="h-20 w-auto object-contain my-3"
        />
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-bloom-ink/54">
          Loading impact
        </p>
      </div>
    </div>
  );
}
