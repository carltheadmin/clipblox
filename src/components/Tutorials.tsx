import { useState } from "react";
import { ArrowRight, BookOpen, Check, RotateCcw } from "lucide-react";
import { ALL_LESSONS, CATEGORIES, TOTAL_LESSONS } from "../data/tutorials";
import { LINKS } from "../data/links";
import { useProgress } from "../hooks/useProgress";
import { Button, Reveal, SectionHeader } from "./ui";
import { DiscordIcon } from "./Icons";
import { LessonModal } from "./LessonModal";
import { cn } from "../utils/cn";

/** index of each category's first lesson inside ALL_LESSONS */
const OFFSETS = CATEGORIES.reduce<number[]>((acc, _c, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + CATEGORIES[i - 1].lessons.length);
  return acc;
}, []);

/** Pixel-block segmented progress bar */
function SegBar({
  total,
  filled,
  className,
  segClass = "h-2.5",
}: {
  total: number;
  filled: number;
  className?: string;
  segClass?: string;
}) {
  return (
    <div
      className={cn("flex flex-1 gap-[3px]", className)}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={filled}
    >
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "flex-1 rounded-[2px] transition-colors duration-500",
            segClass,
            i < filled ? "bg-blox shadow-[0_0_8px_rgba(238,28,44,0.6)]" : "bg-ink-600"
          )}
        />
      ))}
    </div>
  );
}

export function Tutorials() {
  const { isDone, toggle, reset } = useProgress();
  const [active, setActive] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const doneCount = ALL_LESSONS.filter((e) => isDone(e.lesson.id)).length;
  const category = CATEGORIES[active];
  const catDone = category.lessons.filter((l) => isDone(l.id)).length;

  const openLesson = (idx: number) => {
    setActive(ALL_LESSONS[idx].categoryIndex);
    setOpenIdx(idx);
  };

  const firstIncompleteIn = (ci: number) => {
    const li = CATEGORIES[ci].lessons.findIndex((l) => !isDone(l.id));
    return OFFSETS[ci] + (li === -1 ? 0 : li);
  };
  const firstIncompleteOverall = () => {
    const idx = ALL_LESSONS.findIndex((e) => !isDone(e.lesson.id));
    return idx === -1 ? 0 : idx;
  };

  const overallLabel =
    doneCount === 0 ? "Start learning" : doneCount < TOTAL_LESSONS ? "Continue learning" : "Review lessons";
  const catLabel =
    catDone === 0 ? "Start tutorial" : catDone < category.lessons.length ? "Continue tutorial" : "Review tutorial";

  return (
    <section id="tutorials" className="section-edge relative overflow-hidden bg-ink-950 py-24 sm:py-28">
      <div className="absolute -right-48 top-10 h-[480px] w-[480px] rounded-full bg-blox/12 blur-[130px]" />
      <div className="bg-grid-lines absolute inset-0 [mask-image:radial-gradient(80%_50%_at_50%_0%,#000,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Clipper learning center"
              title={
                <>
                  New to clipping? <span className="text-blox">Start here.</span>
                </>
              }
              description="No experience? No problem. Follow the learning path below — from understanding what clipping is to submitting your first published video. Work through it at your own pace."
            />
            <div className="flex shrink-0 items-center gap-3">
              <div className="notch bg-ink-800 px-4 py-3 text-center">
                <p className="font-display text-3xl font-bold leading-none text-white">
                  {CATEGORIES.length}
                </p>
                <p className="mt-1.5 font-pixel text-[9px] uppercase tracking-[0.18em] text-ink-300">
                  Categories
                </p>
              </div>
              <div className="notch bg-blox px-4 py-3 text-center">
                <p className="font-display text-3xl font-bold leading-none text-white">
                  {TOTAL_LESSONS}
                </p>
                <p className="mt-1.5 font-pixel text-[9px] uppercase tracking-[0.18em] text-white/80">
                  Lessons
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* dashboard */}
        <Reveal delay={100} className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-ink-600 bg-ink-850 shadow-[0_40px_100px_-50px_rgba(238,28,44,0.45)]">
            {/* top bar */}
            <div className="flex flex-col gap-5 border-b border-ink-600 bg-ink-900/80 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0 flex-1 lg:max-w-xl">
                <div className="flex items-center justify-between gap-3">
                  <p className="flex items-center gap-2.5 font-pixel text-[10px] uppercase tracking-[0.22em] text-ink-200">
                    <BookOpen className="h-4 w-4 text-blox" />
                    Your learning path
                  </p>
                  <p className="font-pixel text-[10px] tracking-wider text-white">
                    {doneCount}/{TOTAL_LESSONS} <span className="text-ink-300">complete</span>
                  </p>
                </div>
                <SegBar total={TOTAL_LESSONS} filled={doneCount} className="mt-3.5" segClass="h-3" />
                <p className="mt-2.5 text-xs text-ink-300">
                  Tick lessons off as you go. Progress is saved on this device only.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <Button
                  size="md"
                  onClick={() => openLesson(firstIncompleteOverall())}
                  iconRight={<ArrowRight className="h-4 w-4" />}
                >
                  {overallLabel}
                </Button>
                {doneCount > 0 && (
                  <Button
                    variant="ghost"
                    size="md"
                    onClick={reset}
                    icon={<RotateCcw className="h-4 w-4" />}
                    aria-label="Reset learning progress"
                  >
                    Reset
                  </Button>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-[340px_1fr]">
              {/* category selector */}
              <div className="flex flex-col border-b border-ink-600 lg:border-b-0 lg:border-r">
              <div
                role="tablist"
                aria-label="Tutorial categories"
                aria-orientation="vertical"
                className="grid grid-cols-2 gap-3 p-4 sm:p-5 lg:grid-cols-1"
              >
                {CATEGORIES.map((c, i) => {
                  const d = c.lessons.filter((l) => isDone(l.id)).length;
                  const complete = d === c.lessons.length;
                  const isActive = i === active;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      role="tab"
                      id={`tab-${c.id}`}
                      aria-selected={isActive}
                      aria-controls="tutorial-panel"
                      onClick={() => setActive(i)}
                      className={cn(
                        "group relative flex flex-col gap-3 overflow-hidden rounded-xl border p-3.5 text-left transition-all duration-300 lg:flex-row lg:items-center lg:gap-4 lg:p-4",
                        isActive
                          ? "border-blox bg-blox/10 shadow-[0_0_0_1px_rgba(238,28,44,0.25),0_16px_40px_-22px_rgba(238,28,44,0.8)]"
                          : "border-ink-600 bg-ink-900/60 hover:border-ink-400 hover:bg-ink-800"
                      )}
                    >
                      <span
                        className={cn(
                          "absolute inset-y-0 left-0 w-1 transition-colors",
                          isActive ? "bg-blox" : "bg-transparent"
                        )}
                      />
                      <div className="flex items-center justify-between lg:block">
                        <span
                          className={cn(
                            "notch grid h-11 w-11 shrink-0 place-items-center font-display text-xl font-bold transition-colors",
                            complete
                              ? "bg-white text-ink-950"
                              : isActive
                                ? "bg-blox text-white"
                                : "bg-ink-700 text-ink-100 group-hover:bg-ink-600"
                          )}
                        >
                          {complete ? <Check className="h-5 w-5" /> : c.number}
                        </span>
                        <span className="font-pixel text-[9px] tracking-wider text-ink-300 lg:hidden">
                          {d}/{c.lessons.length}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-[15px] font-bold uppercase leading-tight tracking-wide text-white sm:text-base">
                          {c.title}
                        </p>
                        <div className="mt-2.5 flex items-center gap-2.5">
                          <SegBar total={c.lessons.length} filled={d} segClass="h-1.5" />
                          <span className="hidden font-pixel text-[9px] tracking-wider text-ink-300 lg:inline">
                            {d}/{c.lessons.length}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="hidden p-5 pt-1 lg:block">
                <div className="rounded-xl border border-dashed border-ink-500 bg-ink-900/60 p-4">
                  <p className="font-pixel text-[10px] uppercase tracking-[0.2em] text-blox">Tip</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-200">
                    Follow the path from <span className="font-semibold text-white">01</span> to{" "}
                    <span className="font-semibold text-white">04</span> — or jump straight to any
                    lesson you need.
                  </p>
                </div>
              </div>
              </div>

              {/* active category panel */}
              <div
                key={category.id}
                id="tutorial-panel"
                role="tabpanel"
                aria-labelledby={`tab-${category.id}`}
                className="animate-fade p-5 sm:p-8"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-5">
                    <span className="text-outline font-display text-6xl font-bold leading-[0.9] sm:text-7xl">
                      {category.number}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-wide text-white sm:text-3xl">
                        {category.title}
                      </h3>
                      <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-200">
                        {category.blurb}
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => openLesson(firstIncompleteIn(active))}
                    iconRight={<ArrowRight className="h-4 w-4" />}
                    className="shrink-0 self-start"
                  >
                    {catLabel}
                  </Button>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <SegBar total={category.lessons.length} filled={catDone} segClass="h-2" />
                  <span className="shrink-0 font-pixel text-[10px] tracking-wider text-ink-200">
                    {catDone}/{category.lessons.length} DONE
                  </span>
                </div>

                <ol className="mt-8 space-y-3">
                  {category.lessons.map((l, li) => {
                    const d = isDone(l.id);
                    return (
                      <li
                        key={l.id}
                        className={cn(
                          "group flex flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:border-blox/60 hover:bg-ink-800/80 sm:flex-row sm:items-center sm:p-5",
                          d ? "border-ink-600 bg-ink-900/40" : "border-ink-600 bg-ink-900/70"
                        )}
                      >
                        <div className="flex min-w-0 flex-1 items-start gap-4">
                          <button
                            type="button"
                            aria-pressed={d}
                            aria-label={`${d ? "Mark incomplete" : "Mark complete"}: ${l.title}`}
                            onClick={() => toggle(l.id)}
                            className={cn(
                              "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md border-2 transition-all",
                              d
                                ? "border-blox bg-blox text-white shadow-[0_0_14px_rgba(238,28,44,0.55)]"
                                : "border-ink-500 text-transparent hover:border-blox hover:text-blox/50"
                            )}
                          >
                            <Check className="h-4 w-4" strokeWidth={3} />
                          </button>
                          <div className="min-w-0">
                            <p className="font-pixel text-[10px] uppercase tracking-[0.2em] text-blox">
                              Lesson {category.number}.{li + 1}
                            </p>
                            <h4
                              className={cn(
                                "mt-1 font-display text-lg font-bold uppercase leading-snug tracking-wide sm:text-xl",
                                d ? "text-ink-200" : "text-white"
                              )}
                            >
                              {l.title}
                            </h4>
                            <p className="mt-1.5 text-sm leading-relaxed text-ink-300">{l.summary}</p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant={d ? "secondary" : "primary"}
                          onClick={() => openLesson(OFFSETS[active] + li)}
                          iconRight={
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          }
                          className="shrink-0 sm:self-center"
                          aria-label={`View lesson: ${l.title}`}
                        >
                          View lesson
                        </Button>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </Reveal>

        {/* help strip */}
        <Reveal delay={120} className="mt-8">
          <div className="flex flex-col gap-5 rounded-2xl border border-ink-600 bg-gradient-to-r from-blox/15 via-ink-850 to-ink-850 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="font-display text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
                Campaign rules & payouts live in Discord.
              </p>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-200 sm:text-[15px]">
                These lessons cover the fundamentals. For campaign-specific requirements, ask the
                team or the community in the official ClipBlox Discord.
              </p>
            </div>
            <Button
              href={LINKS.discord}
              icon={<DiscordIcon className="h-5 w-5" />}
              className="shrink-0"
            >
              Join Discord
            </Button>
          </div>
        </Reveal>
      </div>

      {openIdx !== null && (
        <LessonModal
          flatIndex={openIdx}
          isDone={isDone(ALL_LESSONS[openIdx].lesson.id)}
          onToggleDone={() => toggle(ALL_LESSONS[openIdx].lesson.id)}
          onGo={openLesson}
          onClose={() => setOpenIdx(null)}
        />
      )}
    </section>
  );
}
