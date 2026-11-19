import type { CSSProperties } from "react";
import { cn } from "../utils/cn";

/** face order: front, back, left, right, top, bottom */
const TONES = {
  red: ["#ee1c2c", "#6d0a12", "#a3101c", "#c9142a", "#ff5260", "#4a070d"],
  dark: ["#25252b", "#0b0b0d", "#18181c", "#1f1f24", "#38383f", "#09090a"],
  light: ["#f1f1f3", "#8f8f99", "#c2c2cb", "#dadae0", "#ffffff", "#74747e"],
} as const;

interface CubeProps {
  size: number;
  tone?: keyof typeof TONES;
  className?: string;
  /** float animation duration, e.g. "7s" */
  float?: string;
  /** spin animation duration, e.g. "24s" */
  spin?: string;
  delay?: string;
  reverse?: boolean;
}

/**
 * A pure-CSS 3D cube (Roblox-style "part"). Outer wrapper floats,
 * inner element spins in 3D.
 */
export function Cube({
  size,
  tone = "red",
  className,
  float = "7s",
  spin = "22s",
  delay = "0s",
  reverse,
}: CubeProps) {
  const half = "calc(var(--s) / 2)";
  const transforms = [
    `translateZ(${half})`,
    `rotateY(180deg) translateZ(${half})`,
    `rotateY(-90deg) translateZ(${half})`,
    `rotateY(90deg) translateZ(${half})`,
    `rotateX(90deg) translateZ(${half})`,
    `rotateX(-90deg) translateZ(${half})`,
  ];

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute animate-float", className)}
      style={
        {
          width: size,
          height: size,
          perspective: 900,
          animationDuration: float,
          animationDelay: delay,
          "--s": `${size}px`,
        } as CSSProperties
      }
    >
      <div
        className="animate-cube h-full w-full"
        style={{
          transformStyle: "preserve-3d",
          animationDuration: spin,
          animationDelay: delay,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {transforms.map((t, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              transform: t,
              background: TONES[tone][i],
              boxShadow: "inset 0 0 0 3px rgba(255,255,255,0.09), inset 0 0 0 5px rgba(0,0,0,0.12)",
              backfaceVisibility: "hidden",
            }}
          />
        ))}
      </div>
    </div>
  );
}
