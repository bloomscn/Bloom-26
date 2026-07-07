import { useEffect, useState } from "react";
import type { NavItem } from "../types/content";

export function useActiveSection(items: NavItem[]) {
  const [active, setActive] = useState(items[0]?.href ?? "#home");

  useEffect(() => {
    let frame = 0;
    let lastActive = items[0]?.href ?? "#home";
    const sections = items
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    function updateActiveSection() {
      const activationLine = 140;
      const documentBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      let nextActive = lastActive;

      if (documentBottom && sections.at(-1)) {
        const lastSection = sections.at(-1);
        nextActive = lastSection ? `#${lastSection.id}` : nextActive;
      } else {
        let current = sections[0];

        for (const section of sections) {
          if (section.getBoundingClientRect().top <= activationLine) {
            current = section;
          } else {
            break;
          }
        }

        nextActive = current ? `#${current.id}` : nextActive;
      }

      if (nextActive !== lastActive) {
        lastActive = nextActive;
        setActive(nextActive);
      }

      frame = window.requestAnimationFrame(updateActiveSection);
    }

    frame = window.requestAnimationFrame(updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [items]);

  return active;
}
