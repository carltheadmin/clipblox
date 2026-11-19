import { ArrowRight, ShoppingBag } from "lucide-react";
import { LINKS } from "../data/links";
import { Logo } from "./Logo";
import { Button } from "./ui";
import { DiscordIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from "./Icons";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-x-clip pt-[68px]">
      {/* background layers */}
      <div className="absolute inset-0 -z-10 bg-ink-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_78%_32%,rgba(238,28,44,0.24),transparent_70%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_0%_100%,rgba(238,28,44,0.12),transparent_70%)]" />
      <div className="bg-studs absolute inset-0 -z-10 opacity-70 [mask-image:linear-gradient(to_bottom,#000_30%,transparent_95%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:min-h-[calc(100svh-68px)] lg:grid-cols-[1.12fr_0.88fr] lg:gap-6 lg:px-6 lg:pb-20 lg:pt-12 xl:px-8">
        {/* copy */}
        <div className="relative">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
            <Logo size="lg" />
            <span className="hidden h-10 w-px bg-ink-500 sm:block" />
            <span className="notch inline-flex items-center gap-2.5 bg-blox px-4 py-2 font-pixel text-[10px] uppercase tracking-[0.2em] text-white sm:text-[11px]">
              <span className="animate-blink h-2 w-2 bg-white" />
              Roblox Clipping Network
            </span>
          </div>

          <h1 className="mt-8 font-display text-[clamp(2.5rem,12vw,5rem)] font-bold uppercase leading-[0.98] tracking-wide text-white lg:text-[clamp(2.7rem,5.1vw,4.9rem)]">
            We turn <span className="text-blox text-block">Roblox</span> content into{" "}
            <span className="relative inline-block">
              <span className="text-block">views.</span>
              <span className="absolute -bottom-1.5 left-0 right-0 h-[6px] bg-blox sm:-bottom-2 sm:h-[8px]" />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
            ClipBlox is a Roblox-focused clipping network connecting creators, clippers, and brands
            through short-form content.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button
              href={LINKS.discord}
              size="lg"
              icon={<DiscordIcon className="h-5 w-5" />}
              iconRight={
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              }
              className="group"
            >
              Join ClipBlox
            </Button>
            <Button
              href={LINKS.whop}
              size="lg"
              variant="secondary"
              icon={<ShoppingBag className="h-5 w-5" />}
              className="group"
            >
              Explore our Whop
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3 text-ink-300">
            <span className="font-pixel text-[10px] uppercase tracking-[0.2em]">Built for</span>
            <span className="flex items-center gap-2 rounded-md border border-ink-600 bg-ink-850/80 px-3 py-1.5 text-xs font-medium text-ink-100">
              <TikTokIcon className="h-3.5 w-3.5" /> TikTok
            </span>
            <span className="flex items-center gap-2 rounded-md border border-ink-600 bg-ink-850/80 px-3 py-1.5 text-xs font-medium text-ink-100">
              <InstagramIcon className="h-3.5 w-3.5" /> Instagram Reels
            </span>
            <span className="flex items-center gap-2 rounded-md border border-ink-600 bg-ink-850/80 px-3 py-1.5 text-xs font-medium text-ink-100">
              <YouTubeIcon className="h-3.5 w-3.5" /> YouTube Shorts
            </span>
          </div>
        </div>

        {/* visual */}
        <div className="relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
