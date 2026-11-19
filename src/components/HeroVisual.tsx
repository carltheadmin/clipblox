import { useRef, type CSSProperties } from "react";
import { Heart, MessageCircle, Scissors, Share2 } from "lucide-react";
import { Cube } from "./Cube";
import { LogoMark } from "./Logo";
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "./Icons";
import { cn } from "../utils/cn";

/** Generic blocky avatar (original artwork, not a Roblox asset). */
function BlockyAvatar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 84 134"
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {/* legs */}
      <rect x="22" y="86" width="19" height="42" fill="#1f1f25" />
      <rect x="43" y="86" width="19" height="42" fill="#1f1f25" />
      <rect x="22" y="122" width="19" height="6" fill="#0a0a0c" />
      <rect x="43" y="122" width="19" height="6" fill="#0a0a0c" />
      <rect x="22" y="86" width="19" height="3" fill="#33333b" />
      <rect x="43" y="86" width="19" height="3" fill="#33333b" />
      {/* arms */}
      <rect x="6" y="38" width="14" height="44" fill="#f3f3f5" />
      <rect x="64" y="38" width="14" height="44" fill="#f3f3f5" />
      <rect x="6" y="76" width="14" height="6" fill="#c9c9d1" />
      <rect x="64" y="76" width="14" height="6" fill="#c9c9d1" />
      <rect x="16" y="38" width="4" height="38" fill="#dcdce2" />
      {/* torso */}
      <rect x="22" y="38" width="40" height="46" fill="#ee1c2c" />
      <rect x="22" y="38" width="40" height="4" fill="#ff5a66" />
      <rect x="54" y="42" width="8" height="42" fill="#c4131f" />
      <rect x="22" y="80" width="40" height="4" fill="#a50f1b" />
      {/* chest pixel play icon */}
      <g fill="#fff">
        <rect x="34" y="50" width="3" height="3" />
        <rect x="34" y="53" width="6" height="3" />
        <rect x="34" y="56" width="9" height="3" />
        <rect x="34" y="59" width="9" height="3" />
        <rect x="34" y="62" width="6" height="3" />
        <rect x="34" y="65" width="3" height="3" />
      </g>
      {/* head */}
      <rect x="26" y="3" width="32" height="31" fill="#f3f3f5" />
      <rect x="26" y="3" width="32" height="4" fill="#ffffff" />
      <rect x="52" y="7" width="6" height="27" fill="#d9d9e0" />
      <rect x="26" y="30" width="32" height="4" fill="#c9c9d1" />
      {/* face */}
      <rect x="34" y="14" width="4" height="7" fill="#111114" />
      <rect x="46" y="14" width="4" height="7" fill="#111114" />
      <rect x="35" y="25" width="14" height="2" fill="#111114" />
      <rect x="33" y="23" width="2" height="2" fill="#111114" />
      <rect x="49" y="23" width="2" height="2" fill="#111114" />
    </svg>
  );
}

function FloatTile({
  className,
  delay,
  children,
}: {
  className?: string;
  delay: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "animate-float-slow absolute grid h-11 w-11 place-items-center rounded-lg border border-ink-500 bg-ink-800/95 text-white shadow-[0_4px_0_0_#000,0_14px_30px_-10px_rgba(0,0,0,0.9)] backdrop-blur sm:h-12 sm:w-12",
        className
      )}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}

const TRACKS: { color: string; segs: [number, number][] }[] = [
  { color: "bg-blox", segs: [[4, 22], [32, 16], [62, 24]] },
  { color: "bg-white", segs: [[10, 14], [40, 30], [78, 14]] },
  { color: "bg-ink-400", segs: [[4, 36], [46, 20], [70, 26]] },
];

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${-14 + x * 16}deg`);
    el.style.setProperty("--rx", `${6 - y * 12}deg`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--ry", "-14deg");
    el.style.setProperty("--rx", "6deg");
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto h-[580px] w-full max-w-[500px] select-none sm:h-[620px]"
      style={{ "--ry": "-14deg", "--rx": "6deg" } as CSSProperties}
    >
      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blox/30 blur-[110px]" />
      <div className="bg-studs absolute inset-8 opacity-60 [mask-image:radial-gradient(closest-side,#000,transparent)]" />

      {/* floating cubes */}
      <Cube size={60} tone="red" className="left-[5%] top-[3%]" float="7s" spin="26s" />
      <Cube size={38} tone="dark" className="right-[17%] top-[6%]" float="9s" spin="20s" delay="-3s" reverse />
      <Cube size={26} tone="light" className="left-[1%] top-[44%]" float="8s" spin="16s" delay="-2s" />
      <Cube size={34} tone="red" className="bottom-[19%] right-[2%]" float="6s" spin="18s" delay="-4s" reverse />
      <Cube size={46} tone="dark" className="bottom-[30%] left-[-1%]" float="10s" spin="30s" delay="-6s" />

      {/* phone */}
      <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2">
        <div
          className="relative h-[470px] w-[236px] transition-transform duration-200 ease-out"
          style={{
            transform:
              "perspective(1400px) rotateY(var(--ry)) rotateX(var(--rx)) rotateZ(2deg)",
          }}
        >
          {/* hard block shadow */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[38px] bg-blox-deep/80" />
          <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[38px] bg-blox-dark/70 blur-[2px]" />

          <div className="relative h-full w-full rounded-[38px] border-[6px] border-ink-500 bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.07)]">
            <div className="absolute inset-0 overflow-hidden rounded-[31px] bg-gradient-to-b from-[#2b0a0f] via-[#120406] to-black">
              <div className="bg-studs absolute inset-0 opacity-30" />
              {/* sun */}
              <div className="absolute left-1/2 top-[34%] h-36 w-36 -translate-x-1/2 rounded-full bg-blox/50 blur-3xl" />

              {/* baseplate floor */}
              <div
                className="absolute inset-x-[-70%] bottom-0 h-[50%] [mask-image:linear-gradient(to_top,#000_35%,transparent_96%)]"
                style={{ transform: "perspective(240px) rotateX(58deg)", transformOrigin: "50% 100%" }}
              >
                <div
                  className="animate-grid absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(238,28,44,0.7) 2px, transparent 2px), linear-gradient(90deg, rgba(238,28,44,0.7) 2px, transparent 2px)",
                    backgroundSize: "44px 44px, 44px 44px",
                    backgroundColor: "rgba(94,10,18,0.35)",
                  }}
                />
              </div>

              {/* avatar */}
              <div className="absolute bottom-[25%] left-1/2 w-[74px]">
                <div className="absolute -bottom-2 left-1/2 h-3 w-14 -translate-x-1/2 rounded-full bg-black/80 blur-[3px]" />
              </div>
              <div className="animate-hop absolute bottom-[26%] left-1/2 w-[74px] drop-shadow-[0_8px_18px_rgba(238,28,44,0.45)]">
                <BlockyAvatar className="h-auto w-full" />
              </div>

              {/* top UI */}
              <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                <span className="flex items-center gap-1.5 rounded bg-black/60 px-2 py-1 font-pixel text-[9px] tracking-widest text-white">
                  <span className="animate-blink h-1.5 w-1.5 rounded-full bg-blox" />
                  REC
                </span>
                <span className="rounded bg-black/60 px-2 py-1 font-pixel text-[9px] tracking-widest text-ink-200">
                  9:16
                </span>
              </div>

              {/* right action rail */}
              <div className="absolute bottom-[24%] right-2.5 flex flex-col items-center gap-3.5 text-white">
                <LogoMark className="h-8 w-8 ring-2 ring-white/90" />
                <Heart className="h-5 w-5 fill-blox text-blox" />
                <MessageCircle className="h-5 w-5" />
                <Share2 className="h-5 w-5" />
              </div>

              {/* caption */}
              <div className="absolute inset-x-4 bottom-12 text-center">
                <p className="font-display text-[22px] font-bold uppercase leading-[1.05] text-white [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,0_3px_0_#000]">
                  CLIP IT. CUT IT.
                  <br />
                  <span className="text-blox-bright">POST IT.</span>
                </p>
              </div>

              <div className="absolute inset-x-4 bottom-4 flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-blox" />
                <span className="font-pixel text-[9px] tracking-wider text-ink-100">@clipblox.agency</span>
              </div>
            </div>

            {/* notch */}
            <div className="absolute left-1/2 top-1.5 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
          </div>
        </div>
      </div>

      {/* platform tiles */}
      <FloatTile className="right-[-2px] top-[20%] sm:right-0" delay="-1s">
        <TikTokIcon className="h-5 w-5" />
      </FloatTile>
      <FloatTile className="right-[6px] top-[33%] sm:right-[10px]" delay="-3.5s">
        <InstagramIcon className="h-5 w-5" />
      </FloatTile>
      <FloatTile className="right-[-2px] top-[46%] sm:right-0" delay="-5s">
        <YouTubeIcon className="h-5 w-5" />
      </FloatTile>

      {/* clip chip */}
      <div
        className="animate-float absolute left-[2%] top-[22%] hidden items-center gap-2 rounded-lg border border-ink-500 bg-ink-800/95 px-3 py-2 font-display text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_0_0_#000] sm:flex"
        style={{ animationDelay: "-2s" }}
      >
        <Scissors className="h-4 w-4 text-blox" />
        Clip it
      </div>

      {/* timeline card */}
      <div className="absolute -bottom-1 left-0 w-[250px] rounded-xl border border-ink-500 bg-ink-900/90 p-3 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.9)] backdrop-blur sm:left-[-8px] sm:w-[280px]">
        <div className="mb-2.5 flex items-center justify-between font-pixel text-[9px] tracking-[0.2em] text-ink-300">
          <span>TIMELINE</span>
          <span className="flex items-center gap-1.5 text-blox">
            <span className="h-1.5 w-1.5 bg-blox" /> EDITING
          </span>
        </div>
        <div className="relative space-y-1.5">
          {TRACKS.map((t, i) => (
            <div key={i} className="relative h-4 rounded-[3px] bg-ink-700">
              {t.segs.map(([l, w], j) => (
                <span
                  key={j}
                  className={cn("absolute inset-y-0 rounded-[2px] opacity-90", t.color)}
                  style={{ left: `${l}%`, width: `${w}%` }}
                />
              ))}
            </div>
          ))}
          <span className="animate-playhead absolute -top-1.5 -bottom-1.5 w-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]">
            <span className="absolute -top-0.5 left-1/2 h-2 w-2 -translate-x-1/2 bg-white" />
          </span>
        </div>
      </div>
    </div>
  );
}
