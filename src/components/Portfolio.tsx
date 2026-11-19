import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import {
  MIN_SLOTS,
  PLACEHOLDER_PLATFORMS,
  PORTFOLIO,
  type Platform,
  type PortfolioItem,
} from "../data/portfolio";
import { LINKS } from "../data/links";
import { Button, Chip, Reveal, SectionHeader } from "./ui";
import { DiscordIcon, InstagramIcon, TikTokIcon, XIcon, YouTubeIcon } from "./Icons";
import { cn } from "../utils/cn";

const PLATFORM_ICON: Record<Platform, typeof TikTokIcon> = {
  TikTok: TikTokIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
  X: XIcon,
};

function PlatformTag({ platform }: { platform: Platform }) {
  const Icon = PLATFORM_ICON[platform];
  return (
    <Chip className="bg-black/70 text-white backdrop-blur">
      <Icon className="h-3 w-3" />
      {platform}
    </Chip>
  );
}

/* Generated artwork used when no thumbnail has been supplied */
function ThumbArt({ seed, label }: { seed: number; label: string }) {
  const angle = [140, 215, 320][seed % 3];
  return (
    <div className="absolute inset-0 overflow-hidden bg-ink-800">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${angle}deg, rgba(238,28,44,0.38), rgba(10,10,12,0.2) 55%, rgba(238,28,44,0.1))`,
        }}
      />
      <div className="bg-studs absolute inset-0 opacity-60" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #fff 0 2px, transparent 2px 14px)",
        }}
      />
      <span className="absolute bottom-3 left-4 font-display text-5xl font-bold text-outline sm:text-6xl">
        {label}
      </span>
    </div>
  );
}

function PlayBadge({ dashed }: { dashed?: boolean }) {
  return (
    <span
      className={cn(
        "absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110",
        dashed
          ? "border-2 border-dashed border-ink-400 bg-ink-900/70"
          : "bg-blox shadow-[0_5px_0_0_#7d0c15,0_16px_34px_-10px_rgba(238,28,44,0.8)]"
      )}
    >
      <Play className="h-7 w-7 translate-x-0.5 fill-current" />
    </span>
  );
}

function ProjectCard({ item, index }: { item: PortfolioItem; index: number }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${item.brand}: ${item.title} on ${item.platform}`}
      className="card card-lift group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-ink-600">
        {item.thumbnail ? (
          <img
            src={item.thumbnail}
            alt={`${item.brand} — ${item.title}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ThumbArt seed={index} label={String(index + 1).padStart(2, "0")} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <div className="absolute left-3 top-3">
          <PlatformTag platform={item.platform} />
        </div>
        <PlayBadge />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-pixel text-[10px] uppercase tracking-[0.2em] text-blox">{item.brand}</p>
        <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-white">
          {item.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-200">{item.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors group-hover:text-blox">
          Watch clip <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}

function PlaceholderCard({ index, platform }: { index: number; platform: Platform }) {
  return (
    <div className="card group flex h-full flex-col overflow-hidden border-dashed">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-dashed border-ink-600">
        <ThumbArt seed={index} label={String(index + 1).padStart(2, "0")} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        <div className="absolute left-3 top-3 flex gap-2">
          <PlatformTag platform={platform} />
        </div>
        <div className="absolute right-3 top-3">
          <Chip tone="light">Placeholder</Chip>
        </div>
        <PlayBadge dashed />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-pixel text-[10px] uppercase tracking-[0.2em] text-ink-300">
          Campaign / brand name
        </p>
        <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-ink-100">
          Project slot {String(index + 1).padStart(2, "0")}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-300">
          Featured clips and brand collaborations will appear here as soon as they go live.
        </p>
        <span className="mt-5 inline-flex items-center gap-2 font-pixel text-[10px] uppercase tracking-[0.2em] text-ink-400">
          <span className="h-2 w-2 bg-ink-400" />
          Coming soon
        </span>
      </div>
    </div>
  );
}

export function Portfolio() {
  const placeholders = Math.max(0, MIN_SLOTS - PORTFOLIO.length);
  const hasReal = PORTFOLIO.length > 0;

  return (
    <section id="portfolio" className="section-edge relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blox/10 blur-[120px]" />
      <div className="bg-grid-lines absolute inset-0 [mask-image:radial-gradient(80%_50%_at_50%_0%,#000,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Portfolio · Our work"
              title={
                <>
                  Clips that <span className="text-blox">speak for us.</span>
                </>
              }
              description="A showcase of ClipBlox campaigns, published clips, and brand collaborations — added here as projects go live."
            />
            <Button
              href={LINKS.tiktok}
              variant="secondary"
              icon={<TikTokIcon className="h-4 w-4" />}
              iconRight={<ArrowUpRight className="h-4 w-4" />}
              className="shrink-0 self-start lg:self-auto"
            >
              Watch on TikTok
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 100}>
              <ProjectCard item={item} index={i} />
            </Reveal>
          ))}
          {Array.from({ length: placeholders }).map((_, i) => {
            const index = PORTFOLIO.length + i;
            return (
              <Reveal key={`ph-${i}`} delay={(index % 3) * 100}>
                <PlaceholderCard
                  index={index}
                  platform={PLACEHOLDER_PLATFORMS[index % PLACEHOLDER_PLATFORMS.length]}
                />
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10" delay={80}>
          <div className="flex flex-col gap-5 rounded-2xl border border-ink-600 bg-ink-850 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="font-display text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
                {hasReal ? "Want your brand featured here?" : "Want your brand to be featured here?"}
              </p>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-200 sm:text-[15px]">
                Open a business inquiry in our Discord and tell us about your Roblox game, product, or
                brand.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button
                href={LINKS.discord}
                icon={<DiscordIcon className="h-5 w-5" />}
                iconRight={<ArrowRight className="h-4 w-4" />}
              >
                Start an inquiry
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
