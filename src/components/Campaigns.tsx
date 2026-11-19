import { ArrowRight, BellRing, Globe, Hash, Lock } from "lucide-react";
import { LINKS } from "../data/links";
import { Button, Chip, Reveal, SectionHeader } from "./ui";
import { DiscordIcon } from "./Icons";
import { cn } from "../utils/cn";

/** Decorative "channel" skeleton — intentionally contains NO real or fake campaign data. */
function ChannelPreview({ label, locked }: { label: string; locked?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="rounded-xl border border-ink-600 bg-ink-900/90 p-4"
    >
      <div className="flex items-center gap-2 border-b border-ink-600 pb-3 font-pixel text-[10px] uppercase tracking-[0.18em] text-ink-200">
        {locked ? <Lock className="h-3.5 w-3.5 text-blox" /> : <Hash className="h-3.5 w-3.5 text-blox" />}
        {label}
      </div>
      <div className="mt-4 space-y-3.5">
        {[0, 1].map((i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-0.5 h-8 w-8 shrink-0 rounded-md bg-ink-700" />
            <div className="flex-1 space-y-2">
              <span className="block h-2.5 w-24 rounded-[2px] bg-ink-600" />
              <span className="block h-2.5 w-full rounded-[2px] bg-ink-700" />
              <span className={cn("block h-2.5 rounded-[2px] bg-ink-700", i === 0 ? "w-3/4" : "w-1/2")} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Campaigns() {
  return (
    <section id="campaigns" className="section-edge relative overflow-hidden bg-ink-900 py-24 sm:py-28">
      <div className="bg-studs absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_40%,#000,transparent)]" />
      <div className="absolute left-1/2 top-1/3 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blox/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-8">
        <Reveal>
          <SectionHeader
            align="center"
            eyebrow="Campaign announcements"
            title={
              <>
                Stay updated. <span className="text-blox">Never miss a campaign.</span>
              </>
            }
            description="New clipping opportunities are announced through our official Discord. Make sure to regularly check the announcements channel so you never miss a new campaign."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* PUBLIC */}
          <Reveal>
            <article className="card card-lift group relative flex h-full flex-col overflow-hidden p-7 sm:p-8">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blox/20 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="notch grid h-16 w-16 place-items-center bg-blox text-white shadow-[inset_0_-5px_0_0_rgba(0,0,0,0.25),inset_0_4px_0_0_rgba(255,255,255,0.25)]">
                  <Globe className="h-8 w-8" />
                </div>
                <Chip tone="red">Open</Chip>
              </div>
              <h3 className="relative mt-7 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
                Public campaigns
              </h3>
              <p className="relative mt-3 text-base leading-relaxed text-ink-200 sm:text-lg">
                Open opportunities available to eligible members of the community.
              </p>
              <div className="relative mt-7">
                <ChannelPreview label="announcements" />
              </div>
              <p className="relative mt-4 text-sm text-ink-300">
                Find them in the <span className="font-semibold text-white">announcements</span> channel
                of our Discord.
              </p>
              <div className="relative mt-auto pt-8">
                <Button
                  href={LINKS.discord}
                  size="lg"
                  full
                  icon={<DiscordIcon className="h-5 w-5" />}
                  iconRight={<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
                >
                  View public campaigns
                </Button>
              </div>
            </article>
          </Reveal>

          {/* PRIVATE */}
          <Reveal delay={120}>
            <article className="card card-lift group relative flex h-full flex-col overflow-hidden p-7 sm:p-8">
              <div className="bg-studs absolute inset-0 opacity-30" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="notch grid h-16 w-16 place-items-center bg-white text-ink-950 shadow-[inset_0_-5px_0_0_rgba(0,0,0,0.18),inset_0_4px_0_0_rgba(255,255,255,0.8)]">
                  <Lock className="h-8 w-8" />
                </div>
                <Chip tone="light">Exclusive</Chip>
              </div>
              <h3 className="relative mt-7 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
                Private campaigns
              </h3>
              <p className="relative mt-3 text-base leading-relaxed text-ink-200 sm:text-lg">
                Exclusive campaigns with selected creators and qualified clippers.
              </p>
              <div className="relative mt-7">
                <ChannelPreview label="private channels" locked />
              </div>
              <p className="relative mt-4 text-sm text-ink-300">
                Details are shared only inside the appropriate{" "}
                <span className="font-semibold text-white">private Discord channels</span>.
              </p>
              <div className="relative mt-auto pt-8">
                <Button
                  href={LINKS.discord}
                  size="lg"
                  full
                  variant="white"
                  icon={<DiscordIcon className="h-5 w-5" />}
                  iconRight={<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
                >
                  Join our Discord
                </Button>
              </div>
            </article>
          </Reveal>
        </div>

        {/* reminder banner */}
        <Reveal delay={80} className="mt-8">
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl border border-blox/60 bg-blox-dark/50 shadow-[0_0_60px_-20px_rgba(238,28,44,0.7)] transition-shadow hover:shadow-[0_0_80px_-12px_rgba(238,28,44,0.9)]"
          >
            <div className="hazard absolute inset-x-0 top-0 h-2" />
            <div className="hazard absolute inset-x-0 bottom-0 h-2" />
            <div className="relative flex flex-col items-start gap-5 px-6 py-9 sm:flex-row sm:items-center sm:gap-7 sm:px-10">
              <span className="notch grid h-16 w-16 shrink-0 place-items-center bg-blox text-white">
                <BellRing className="animate-ring h-8 w-8 origin-top" />
              </span>
              <p className="flex-1 font-display text-xl font-bold uppercase leading-snug tracking-wide text-white sm:text-2xl lg:text-[1.7rem]">
                New campaigns drop regularly.{" "}
                <span className="text-blox-bright">Keep an eye on Discord announcements!</span>
              </p>
              <span className="inline-flex shrink-0 items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-white">
                Open Discord
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
