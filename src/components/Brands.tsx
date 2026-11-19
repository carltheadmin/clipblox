import { ArrowRight, BadgeCheck, Mail, Ticket } from "lucide-react";
import { BUSINESS_EMAIL_HREF, LINKS } from "../data/links";
import { Button, Reveal, SectionHeader } from "./ui";
import { DiscordIcon } from "./Icons";

const AUDIENCE = [
  "Roblox game developers",
  "Roblox studios",
  "Game owners",
  "Roblox-related companies",
  "Brands interested in short-form content marketing",
];

const STEPS = [
  "Join the official ClipBlox Discord server.",
  "Navigate to the ticket or support section.",
  "Open a new business inquiry ticket.",
  "Introduce your brand and explain what type of campaign or partnership you're interested in.",
  "Our team will review your inquiry and get back to you.",
];

const ASSURANCES = [
  "Handled through official ClipBlox Discord tickets",
  "Every inquiry is reviewed by the ClipBlox team",
  "Prefer email? You can reach us directly too",
];

export function Brands() {
  return (
    <section id="brands" className="section-edge relative overflow-hidden bg-ink-900 py-24 sm:py-28">
      <div className="absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-blox/15 blur-[130px]" />
      <div className="bg-grid-lines absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_50%,#000,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-8">
        <div className="grid items-stretch gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* left */}
          <Reveal>
            <SectionHeader
              eyebrow="For brands · Business inquiries"
              title={
                <>
                  Have a Roblox brand? <span className="text-blox">Let's work together.</span>
                </>
              }
              description="Looking to promote your Roblox game, product, or brand through short-form content? ClipBlox can help connect your brand with creators and clippers who understand the Roblox community."
            />

            <div className="mt-8">
              <p className="font-pixel text-[10px] uppercase tracking-[0.22em] text-ink-300">
                Built for
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {AUDIENCE.map((a) => (
                  <li
                    key={a}
                    className="rounded-lg border border-ink-500 bg-ink-850 px-3.5 py-2 text-sm font-medium text-ink-100"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-8 space-y-3">
              {ASSURANCES.map((a) => (
                <li key={a} className="flex items-center gap-3 text-[15px] text-ink-100">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-blox" />
                  {a}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                href={LINKS.discord}
                size="lg"
                icon={<DiscordIcon className="h-5 w-5" />}
                iconRight={<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
                className="group"
              >
                Start a business inquiry
              </Button>
              <Button
                href={BUSINESS_EMAIL_HREF}
                size="lg"
                variant="secondary"
                icon={<Mail className="h-5 w-5" />}
              >
                Email us
              </Button>
            </div>
            <p className="mt-4 text-sm text-ink-300">
              Email:{" "}
              <a
                href={BUSINESS_EMAIL_HREF}
                className="font-medium text-white underline decoration-blox decoration-2 underline-offset-4 transition-colors hover:text-blox"
              >
                {LINKS.email}
              </a>
            </p>
          </Reveal>

          {/* right: steps */}
          <Reveal delay={120} className="lg:h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-500 bg-ink-850 shadow-[0_40px_100px_-50px_rgba(238,28,44,0.55)]">
              <div className="h-1.5 bg-gradient-to-r from-blox via-blox-bright to-blox-deep" />
              <div className="bg-studs pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,#000,transparent_60%)]" />

              <div className="relative flex flex-1 flex-col p-6 sm:p-9">
                <div className="flex items-center gap-4">
                  <span className="notch grid h-12 w-12 place-items-center bg-blox text-white">
                    <Ticket className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-pixel text-[10px] uppercase tracking-[0.22em] text-blox">
                      5 simple steps
                    </p>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
                      How to work with us
                    </h3>
                  </div>
                </div>

                <ol className="relative mt-9 flex flex-1 flex-col justify-between gap-6">
                  <span
                    aria-hidden="true"
                    className="absolute bottom-6 left-[19px] top-6 w-[2px] bg-gradient-to-b from-blox via-blox/40 to-ink-600"
                  />
                  {STEPS.map((s, i) => (
                    <li key={i} className="group relative flex gap-5">
                      <span className="notch relative z-10 grid h-10 w-10 shrink-0 place-items-center bg-ink-700 font-display text-lg font-bold text-white transition-colors duration-300 group-hover:bg-blox">
                        {i + 1}
                      </span>
                      <p className="pt-1.5 text-[15px] leading-relaxed text-ink-100 sm:text-base">
                        {s}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
