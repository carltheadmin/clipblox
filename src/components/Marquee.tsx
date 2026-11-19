const ITEMS = [
  "Roblox Clipping Network",
  "Short-form content",
  "Clippers",
  "Creators",
  "Brands",
  "TikTok",
  "Instagram Reels",
  "YouTube Shorts",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-blox-deep/60 bg-blox py-3.5"
    >
      <div className="hazard absolute inset-x-0 top-0 h-[3px] opacity-40" />
      <div className="animate-marquee flex w-max items-center whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center">
            {row.map((t, i) => (
              <span key={`${dup}-${i}`} className="flex items-center">
                <span className="px-6 font-display text-lg font-bold uppercase tracking-[0.12em] text-white sm:text-xl">
                  {t}
                </span>
                <span className="h-2.5 w-2.5 bg-ink-950" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
