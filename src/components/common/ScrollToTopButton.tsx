import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "../../utils/cn";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function updateVisibility() {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY - 6;
      const isScrollingDown = currentScrollY > lastScrollY + 6;

      if (currentScrollY <= 420 || isScrollingDown) {
        setIsVisible(false);
      } else if (isScrollingUp) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "fixed bottom-5 right-5 z-[60] grid size-10 place-items-center rounded-full border border-white/75 bg-bloom-ink text-white shadow-[0_14px_34px_rgba(25,33,31,0.2)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-bloom-gold hover:text-bloom-ink focus:outline-none focus:ring-4 focus:ring-bloom-gold/45 sm:bottom-7 sm:right-7 sm:size-12",
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowUp className="size-4 sm:size-5" aria-hidden />
    </button>
  );
}
