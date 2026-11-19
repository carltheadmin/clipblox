import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ } from "../data/faq";
import { LINKS } from "../data/links";
import { Button, Reveal, SectionHeader } from "./ui";
import { DiscordIcon } from "./Icons";
import { cn } from "../utils/cn";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-edge relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <div className="absolute -right-40 top-1/4 h-[420px] w-[420px] rounded-full bg-blox/10 blur-[120px]" />
      <div className="bg-studs absolute inset-0 opacity-30 [mask-image:radial-gradient(60%_50%_at_50%_0%,#000,transparent)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:px-8">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="FAQ"
              title={
                <>
                  Got <span className="text-blox">questions?</span>
                </>
              }
              description="Quick answers to the most common questions about ClipBlox. Can't find what you need? Ask the team in Discord."
            />
            <div className="mt-8">
              <Button href={LINKS.discord} icon={<DiscordIcon className="h-5 w-5" />}>
                Ask on Discord
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={(i % 4) * 60}>
                <div
                  className={cn(
                    "overflow-hidden rounded-xl border transition-all duration-300",
                    isOpen
                      ? "border-blox/60 bg-ink-850 shadow-[0_20px_50px_-30px_rgba(238,28,44,0.7)]"
                      : "border-ink-600 bg-ink-900/70 hover:border-ink-400"
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="font-pixel text-[10px] tracking-widest text-blox">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-display text-lg font-bold uppercase leading-snug tracking-wide text-white sm:text-xl">
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-md border transition-all duration-300",
                          isOpen
                            ? "rotate-45 border-blox bg-blox text-white"
                            : "border-ink-500 bg-ink-800 text-white"
                        )}
                      >
                        <Plus className="h-4 w-4" strokeWidth={3} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    inert={!isOpen}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 pl-[3.6rem] pr-6 text-[15px] leading-relaxed text-ink-200 sm:pl-[4.1rem] sm:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
