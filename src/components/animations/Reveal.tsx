import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const variants = {
    up: { opacity: 0, y: 32 },
    left: { opacity: 0, x: -32 },
    right: { opacity: 0, x: 32 },
    scale: { opacity: 0, scale: 0.94 },
  };

  return (
    <motion.div
      className={cn(className)}
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
