import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Check, Info, X } from "lucide-react";
import { ALL_LESSONS, CATEGORIES } from "../data/tutorials";
import { LINKS } from "../data/links";
import { Button } from "./ui";
import { DiscordIcon } from "./Icons";
import { cn } from "../utils/cn";

interface LessonModalProps {
  flatIndex: number;
  isDone: boolean;
  onToggleDone: () => void;
  onGo: (flatIndex: number) => void;
  onClose: () => void;
}

export function LessonModal({ flatIndex, isDone, onToggleDone, onGo, onClose }: LessonModalProps) {
  const entry = ALL_LESSONS[flatIndex];
  const category = CATEGORIES[entry.categoryIndex];
  const { lesson, lessonIndex } = entry;
  const hasPrev = flatIndex > 0;
  const hasNext = flatIndex < ALL_LESSONS.length - 1;
  const nextEntry = hasNext ? ALL_LESSONS[flatIndex + 1] : null;

  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // scroll lock + focus management
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  // keyboard: Esc to close, Tab trap
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // jump to top when switching lessons
  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0 });
  }, [flatIndex]);

  return (
    <div
      className="animate-fade fixed inset-0 z-[100] flex items-end justify-center bg-black/80 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lesson-title"
        className="animate-modal relative flex max-h-[94svh] w-full max-w-2xl flex-col overflow-y-auto rounded-t-2xl border border-ink-500 bg-ink-900 shadow-[0_0_0_1px_rgba(238,28,44,0.2),0_40px_100px_-20px_rgba(238,28,44,0.35)] sm:rounded-2xl"
      >
        {/* header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-ink-600 bg-ink-900/95 px-5 py-4 backdrop-blur sm:px-7">
          <div className="min-w-0">
            <p className="truncate font-pixel text-[10px] uppercase tracking-[0.2em] text-blox">
              {category.number} · {category.title}
            </p>
            <div className="mt-2 flex items-center gap-1.5" aria-hidden="true">
              {category.lessons.map((l, i) => (
                <span
                  key={l.id}
                  className={cn(
                    "h-2 w-5 rounded-[2px]",
                    i === lessonIndex ? "bg-blox" : i < lessonIndex ? "bg-blox/40" : "bg-ink-600"
                  )}
                />
              ))}
              <span className="ml-2 font-pixel text-[9px] text-ink-300">
                {lessonIndex + 1}/{category.lessons.length}
              </span>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close lesson"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-ink-500 bg-ink-800 text-white transition-colors hover:border-blox hover:bg-blox/15"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* body */}
        <div className="px-5 py-7 sm:px-7 sm:py-8">
          <p className="font-pixel text-[10px] uppercase tracking-[0.2em] text-ink-300">
            Lesson {category.number}.{lessonIndex + 1}
          </p>
          <h3
            id="lesson-title"
            className="mt-3 font-display text-[1.7rem] font-bold uppercase leading-[1.08] tracking-wide text-white sm:text-4xl"
          >
            {lesson.title}
          </h3>
          <p className="mt-5 text-base leading-relaxed text-ink-100 sm:text-lg">{lesson.summary}</p>

          <h4 className="mt-9 flex items-center gap-3 font-pixel text-[11px] uppercase tracking-[0.22em] text-blox">
            <span className="h-2 w-2 bg-blox" />
            Key steps
          </h4>
          <ol className="mt-4 space-y-3">
            {lesson.points.map((p, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-xl border border-ink-600 bg-ink-850 p-4 text-[15px] leading-relaxed text-ink-100"
              >
                <span className="notch grid h-8 w-8 shrink-0 place-items-center bg-blox font-display text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-1">{p}</span>
              </li>
            ))}
          </ol>

          {lesson.note && (
            <div className="mt-6 flex gap-3 rounded-xl border border-blox/40 bg-blox/10 p-4 text-sm leading-relaxed text-ink-100">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-blox" />
              <p>{lesson.note}</p>
            </div>
          )}

          {lesson.discordCta && (
            <div className="mt-6 flex flex-col gap-4 rounded-xl border border-ink-600 bg-ink-850 p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-ink-200">
                Campaign-specific details are posted in the official ClipBlox Discord.
              </p>
              <Button
                href={LINKS.discord}
                size="sm"
                icon={<DiscordIcon className="h-4 w-4" />}
                className="shrink-0"
              >
                Open Discord
              </Button>
            </div>
          )}
        </div>

        {/* footer */}
        <div className="sticky bottom-0 mt-auto grid gap-3 border-t border-ink-600 bg-ink-900/95 px-5 py-4 backdrop-blur sm:grid-cols-[auto_1fr_auto] sm:items-center sm:px-7">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => hasPrev && onGo(flatIndex - 1)}
            icon={<ArrowLeft className="h-4 w-4" />}
            className={cn("hidden sm:inline-flex", !hasPrev && "pointer-events-none opacity-30")}
            aria-label="Previous lesson"
          >
            Prev
          </Button>

          <div className="sm:justify-self-center">
            <Button
              variant={isDone ? "secondary" : "primary"}
              size="sm"
              onClick={onToggleDone}
              full
              icon={
                <Check className={cn("h-4 w-4", isDone ? "text-blox-bright" : "text-white")} />
              }
              className="sm:w-auto"
            >
              {isDone ? "Completed" : "Mark as complete"}
            </Button>
          </div>

          {hasNext ? (
            <Button
              variant="white"
              size="sm"
              onClick={() => onGo(flatIndex + 1)}
              iconRight={<ArrowRight className="h-4 w-4" />}
              aria-label={`Next lesson: ${nextEntry?.lesson.title}`}
            >
              Next lesson
            </Button>
          ) : (
            <Button variant="white" size="sm" onClick={onClose}>
              Finish
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
