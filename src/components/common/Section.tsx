import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import type { SectionIntro as SectionIntroType } from "../../types/content";
import { cn } from "../../utils/cn";

interface SectionProps extends PropsWithChildren {
  id: string;
  className?: string;
  innerClassName?: string;
}

export function Section({ id, className, innerClassName, children }: SectionProps) {
  return (
    <section id={id} className={cn("section-band py-14 sm:py-20 lg:py-24", className)}>
      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionIntroProps {
  intro: SectionIntroType;
  align?: "left" | "center";
  className?: string;
}

export function SectionIntro({ intro, align = "left", className }: SectionIntroProps) {
  return (
    <motion.div
      className={cn("mb-10 max-w-3xl", align === "center" && "mx-auto text-center", className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="mb-4 font-hand text-2xl text-bloom-clay">{intro.label}</p>
      <h2 className="font-display text-4xl font-black leading-tight text-bloom-ink text-balance sm:text-5xl">
        {intro.heading}
      </h2>
      {intro.description ? (
        <p className="mt-5 text-lg leading-8 text-bloom-ink/72">{intro.description}</p>
      ) : null}
    </motion.div>
  );
}
