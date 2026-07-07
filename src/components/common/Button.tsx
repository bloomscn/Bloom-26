import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-bloom-ink text-white shadow-[0_18px_36px_rgba(25,33,31,0.22)] hover:-translate-y-0.5 hover:bg-bloom-forest",
  secondary:
    "border border-bloom-ink/18 bg-white/65 text-bloom-ink backdrop-blur hover:-translate-y-0.5 hover:border-bloom-forest hover:bg-white",
  ghost: "text-bloom-ink hover:bg-bloom-ink/6",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  variant?: Variant;
}

interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>, PropsWithChildren {
  variant?: Variant;
  icon?: LucideIcon;
  showIcon?: boolean;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-black uppercase tracking-wide transition duration-300 focus:outline-none focus:ring-4 focus:ring-bloom-gold/45",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function AnchorButton({
  variant = "primary",
  icon: Icon,
  showIcon = true,
  className,
  children,
  ...props
}: AnchorButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-black uppercase tracking-wide transition duration-300 focus:outline-none focus:ring-4 focus:ring-bloom-gold/45",
        variants[variant],
        className,
      )}
      {...props}
    >
      {Icon ? <Icon aria-hidden className="size-4" /> : null}
      {children}
      {showIcon ? <ArrowRight aria-hidden className="size-4" /> : null}
    </a>
  );
}
