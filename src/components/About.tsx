import { ArrowRight, Clapperboard, Megaphone, Rocket, Scissors, Users, Briefcase, GraduationCap } from "lucide-react";
import { LINKS } from "../data/links";
import { LogoMark } from "./Logo";
import { Reveal, SectionHeader } from "./ui";
import { cn } from "../utils/cn";

const FEATURES = [
  {
    n: "01",
    icon: Scissors,
    title: "For Clippers",
    text: "Discover campaigns and turn your editing skills into opportunities.",
    cta: "Start learning",
    href: "#tutorials",
  },
  {
    n: "02",
    icon: Briefcase,
    title: "For Brands",
    text: "Work with a network of creators who produce short-form Roblox content.",
    cta: "Work with us",
    href: "#brands",
  },
  {
    n: "03",
    icon: GraduationCap,
    title: "For Creators",
    text: "Develop your editing skills, build experience, and grow with the community.",
    cta: "Join the community",
    href: LINKS.discord,
  },
] as const;

function PipelineNode({
  icon: Icon,
  label,
  tone,
}: {
  icon: typeof Users;
  label: string;
  tone: "dark" | "red";
}) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div
        className={cn(
          "grid h-16 w-16 place-items-center rounded-xl border sm:h-20 sm:w-20",
          tone === "red"
            ? "border-blox bg-blox text-white shadow-[0_5px_0_0_#7d0c15,0_16px_34px_-12px_rgba(238,28,44,0.8)]"
            : "border-ink-500 bg-ink-800 text-white shadow-[0_5px_0_0_#000]"
        )}
      >
        <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
      </div>
      <span className="font-pixel text-[9px] uppercase tracking-[0.18em] text-ink-100 sm:text-[10px]">
        {label}
      </span>
    </div>
  );
}

function Connector() {
  return (
    <div className="relative mb-7 h-[3px] flex-1 overflow-hidden rounded bg-ink-600">
      <div
        className="absolute inset-0 animate-[marquee_1.2s_linear_infinite]"
        style={{
          backgroundImage: "linear-gradient(90deg, #ee1c2c 50%, transparent 50%)",
          backgroundSize: "12px 100%",
          width: "200%",
        }}
      />
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section-edge relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blox/10 blur-[120px]" />
      <div className="bg-grid-lines absolute inset-0 [mask-image:radial-gradient(70%_50%_at_50%_0%,#000,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="About ClipBlox"
              title={
                <>
                  A Roblox-focused <span className="text-blox">clipping network.</span>
                </>
              }
            />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
              ClipBlox connects talented video editors and content creators with Roblox brands and
              campaigns. We help transform content into engaging short-form videos across social
              platforms while building opportunities for experienced and aspiring clippers.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="card relative overflow-hidden p-6 sm:p-8">
              <div className="bg-studs absolute inset-0 opacity-50" />
              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-pixel text-[10px] uppercase tracking-[0.22em] text-ink-300">
                    How the network connects
                  </span>
                  <Rocket className="h-4 w-4 text-blox" />
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <PipelineNode icon={Clapperboard} label="Creators" tone="dark" />
                  <Connector />
                  <PipelineNode icon={Scissors} label="Clippers" tone="red" />
                  <Connector />
                  <PipelineNode icon={Megaphone} label="Brands" tone="dark" />
                </div>

                <div className="mt-8 flex items-center gap-4 rounded-xl border border-ink-600 bg-ink-900/80 p-4">
                  <LogoMark className="h-10 w-10" />
                  <p className="text-sm leading-snug text-ink-200">
                    <span className="font-display text-base font-bold uppercase tracking-wide text-white">
                      ClipBlox sits in the middle —
                    </span>{" "}
                    turning Roblox content into short-form videos built to be watched.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-20">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            const external = f.href.startsWith("http");
            return (
              <Reveal key={f.n} delay={i * 110}>
                <a
                  href={f.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="card card-lift group flex h-full flex-col p-7"
                >
                  <div className="flex items-start justify-between">
                    <div className="notch grid h-16 w-16 place-items-center bg-blox text-white shadow-[inset_0_-5px_0_0_rgba(0,0,0,0.25),inset_0_4px_0_0_rgba(255,255,255,0.25)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="font-display text-5xl font-bold text-outline transition-colors group-hover:[-webkit-text-stroke-color:rgba(238,28,44,0.5)]">
                      {f.n}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-bold uppercase tracking-wide text-white">
                    {f.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-200">{f.text}</p>
                  <span className="mt-7 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-blox transition-colors group-hover:text-white">
                    {f.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
