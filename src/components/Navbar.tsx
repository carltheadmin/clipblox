import { useEffect, useRef, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { LINKS, NAV_LINKS } from "../data/links";
import { cn } from "../utils/cn";
import { Logo } from "./Logo";
import { Button } from "./ui";
import { DiscordIcon } from "./Icons";

const SECTION_IDS = [
  "home",
  "about",
  "socials",
  "tutorials",
  "campaigns",
  "portfolio",
  "brands",
  "faq",
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 8);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      }

      // active section = last one whose top has crossed 35% of the viewport
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-ink-600/70 bg-ink-950/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-6 xl:px-8">
        <a href="#home" aria-label="ClipBlox — home" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo size="sm" />
        </a>

        {/* Desktop links */}
        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {NAV_LINKS.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group relative px-2.5 py-2 font-display text-[13px] font-bold uppercase tracking-wider transition-colors xl:px-3.5 xl:text-sm",
                  isActive ? "text-white" : "text-ink-300 hover:text-white"
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute inset-x-2.5 -bottom-0.5 h-[3px] origin-left bg-blox transition-transform duration-300 xl:inset-x-3.5",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <Button
            href={LINKS.discord}
            size="sm"
            icon={<DiscordIcon className="h-4 w-4" />}
            aria-label="Join the ClipBlox Discord"
          >
            Join Discord
          </Button>
          <Button
            href={LINKS.whop}
            size="sm"
            variant="secondary"
            icon={<ShoppingBag className="h-4 w-4" />}
            aria-label="Visit ClipBlox on Whop"
          >
            Whop
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-lg border border-ink-500 bg-ink-800 text-white transition-colors hover:border-blox lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Scroll progress */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-transparent">
        <div
          ref={barRef}
          className="h-full origin-left bg-blox shadow-[0_0_12px_2px_rgba(238,28,44,0.7)]"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-menu"
          className="animate-menu max-h-[calc(100vh-68px)] overflow-y-auto border-t border-ink-600/70 bg-ink-950/95 px-4 pb-6 pt-3 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.id}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between border-b border-ink-700 py-4 font-display text-lg font-bold uppercase tracking-wider",
                  active === l.id ? "text-white" : "text-ink-200"
                )}
              >
                <span className="flex items-center gap-3">
                  <span className="font-pixel text-[10px] text-blox">0{i + 1}</span>
                  {l.label}
                </span>
                {active === l.id && <span className="h-2.5 w-2.5 bg-blox" />}
              </a>
            ))}
          </nav>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Button
              href={LINKS.discord}
              full
              icon={<DiscordIcon className="h-4 w-4" />}
            >
              Join Discord
            </Button>
            <Button
              href={LINKS.whop}
              full
              variant="secondary"
              icon={<ShoppingBag className="h-4 w-4" />}
            >
              Whop
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
