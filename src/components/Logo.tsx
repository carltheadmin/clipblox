import { cn } from "../utils/cn";

/**
 * LOGO
 * ----
 * Drop your official logo file into `src/assets/` named `logo.png`, `logo.svg`,
 * `logo.webp` or `logo.jpg` and the whole site (navbar, hero, footer) will
 * automatically switch to it — undistorted (object-contain, fixed height).
 *
 * Until then, a stand-in pixel mark + wordmark is rendered.
 */
const logoModules = import.meta.glob("/src/assets/logo.{png,svg,webp,jpg,jpeg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const customLogo = Object.values(logoModules)[0];

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("shrink-0", className)}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {/* block body with stepped corners */}
      <path d="M6 0H42V6H48V42H42V48H6V42H0V6H6Z" fill="#ee1c2c" />
      {/* light + shade edges */}
      <path d="M6 0H42V4H6Z" fill="#ff5a66" />
      <path d="M6 44H42V48H6Z" fill="#a50f1b" />
      <path d="M44 6H48V42H44Z" fill="#c4131f" />
      {/* pixel play button: shadow then face */}
      <g fill="#5e0a12" transform="translate(3 3)">
        <rect x="15" y="8" width="4" height="4" />
        <rect x="15" y="12" width="8" height="4" />
        <rect x="15" y="16" width="12" height="4" />
        <rect x="15" y="20" width="16" height="8" />
        <rect x="15" y="28" width="12" height="4" />
        <rect x="15" y="32" width="8" height="4" />
        <rect x="15" y="36" width="4" height="4" />
      </g>
      <g fill="#ffffff">
        <rect x="15" y="8" width="4" height="4" />
        <rect x="15" y="12" width="8" height="4" />
        <rect x="15" y="16" width="12" height="4" />
        <rect x="15" y="20" width="16" height="8" />
        <rect x="15" y="28" width="12" height="4" />
        <rect x="15" y="32" width="8" height="4" />
        <rect x="15" y="36" width="4" height="4" />
      </g>
    </svg>
  );
}

interface LogoProps {
  size?: "sm" | "md" | "lg";
  tagline?: boolean;
  className?: string;
}

const SIZES = {
  sm: { mark: "h-8 w-8", word: "text-xl", img: "h-9" },
  md: { mark: "h-10 w-10", word: "text-2xl", img: "h-11" },
  lg: { mark: "h-14 w-14 sm:h-16 sm:w-16", word: "text-3xl sm:text-4xl", img: "h-14 sm:h-16" },
} as const;

export function Logo({ size = "md", tagline = false, className }: LogoProps) {
  const s = SIZES[size];

  if (customLogo) {
    return (
      <img
        src={customLogo}
        alt="ClipBlox — Roblox Clipping Network"
        className={cn("w-auto object-contain", s.img, className)}
      />
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className={s.mark} />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display font-bold tracking-wide text-white", s.word)}>
          CLIP<span className="text-blox">BLOX</span>
        </span>
        {tagline && (
          <span className="mt-1.5 font-pixel text-[9px] tracking-[0.22em] text-ink-300">
            ROBLOX CLIPPING NETWORK
          </span>
        )}
      </span>
    </span>
  );
}
