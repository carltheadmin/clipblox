import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------
   Scroll reveal
------------------------------------------------------------------- */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------
   Buttons
------------------------------------------------------------------- */
type Variant = "primary" | "secondary" | "white" | "ghost";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-blox text-white shadow-[0_4px_0_0_#7d0c15,0_14px_30px_-12px_rgba(238,28,44,0.75)] hover:-translate-y-0.5 hover:bg-blox-bright hover:shadow-[0_6px_0_0_#7d0c15,0_18px_36px_-12px_rgba(238,28,44,0.95)] active:translate-y-[3px] active:shadow-[0_1px_0_0_#7d0c15]",
  secondary:
    "bg-ink-800 text-white border border-ink-500 shadow-[0_4px_0_0_#000] hover:-translate-y-0.5 hover:border-white/45 hover:bg-ink-700 hover:shadow-[0_6px_0_0_#000] active:translate-y-[3px] active:shadow-[0_1px_0_0_#000]",
  white:
    "bg-white text-ink-950 shadow-[0_4px_0_0_#8d8d98] hover:-translate-y-0.5 hover:bg-ink-100 hover:shadow-[0_6px_0_0_#8d8d98] active:translate-y-[3px] active:shadow-[0_1px_0_0_#8d8d98]",
  ghost:
    "bg-transparent text-white border border-ink-500 hover:border-blox hover:bg-blox/10",
};

const SIZES: Record<Size, string> = {
  sm: "h-10 px-4 text-[13px]",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-7 text-[15px] sm:text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  full,
  className,
}: {
  variant?: Variant;
  size?: Size;
  full?: boolean;
  className?: string;
}) {
  return cn(
    "btn-shine relative inline-flex select-none items-center justify-center gap-2.5 overflow-hidden rounded-lg font-display font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200",
    VARIANTS[variant],
    SIZES[size],
    full && "w-full",
    className
  );
}

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  full?: boolean;
  icon?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  "aria-label"?: string;
}

export function Button({
  href,
  onClick,
  variant,
  size,
  full,
  icon,
  iconRight,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const cls = buttonClasses({ variant, size, full, className });
  const content = (
    <>
      {icon}
      <span className="relative">{children}</span>
      {iconRight}
    </>
  );

  if (href) {
    const external = /^https?:/i.test(href);
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} {...rest}>
      {content}
    </button>
  );
}

/* ------------------------------------------------------------------
   Section header
------------------------------------------------------------------- */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-pixel text-[11px] uppercase tracking-[0.22em] text-blox",
        className
      )}
    >
      <span className="flex gap-[3px]">
        <span className="h-2 w-2 bg-blox" />
        <span className="h-2 w-2 bg-blox/40" />
      </span>
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-[2.15rem] font-bold uppercase leading-[1.04] tracking-wide text-white sm:text-5xl lg:text-[3.4rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-ink-200 sm:text-lg">{description}</p>
      )}
    </div>
  );
}

/** Small pixel-corner label chip */
export function Chip({
  children,
  className,
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "red" | "light";
}) {
  return (
    <span
      className={cn(
        "notch inline-flex items-center gap-1.5 px-3 py-1.5 font-pixel text-[10px] uppercase tracking-[0.16em]",
        tone === "dark" && "bg-ink-700 text-ink-100",
        tone === "red" && "bg-blox text-white",
        tone === "light" && "bg-white text-ink-950",
        className
      )}
    >
      {children}
    </span>
  );
}
