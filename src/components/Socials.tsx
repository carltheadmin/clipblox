import type { ReactNode } from "react";
import { ArrowUpRight, Mail, ShoppingBag } from "lucide-react";
import { EMAIL_HREF, LINKS } from "../data/links";
import { buttonClasses, Reveal, SectionHeader } from "./ui";
import { DiscordIcon, InstagramIcon, TikTokIcon, XIcon, YouTubeIcon } from "./Icons";
import { cn } from "../utils/cn";

interface Social {
  id: string;
  name: string;
  handle: string;
  description: string;
  cta: string;
  href: string;
  icon: ReactNode;
  primary?: boolean;
  span?: string;
}

const SOCIALS: Social[] = [
  {
    id: "discord",
    name: "Discord",
    handle: "discord.gg/Z5Gt5Rvgd9",
    description:
      "Our home base. Join the community, read campaign announcements, learn from other clippers, and open a ticket for support or business inquiries.",
    cta: "Join Discord",
    href: LINKS.discord,
    icon: <DiscordIcon className="h-7 w-7" />,
    primary: true,
    span: "sm:col-span-2",
  },
  {
    id: "whop",
    name: "Whop",
    handle: "whop.com/clipbloxnation",
    description: "Explore the official ClipBlox page on Whop.",
    cta: "Visit Whop",
    href: LINKS.whop,
    icon: <ShoppingBag className="h-7 w-7" />,
    primary: true,
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: "@clipblox.agency",
    description: "Watch short-form Roblox content and updates from ClipBlox.",
    cta: "Follow on TikTok",
    href: LINKS.tiktok,
    icon: <TikTokIcon className="h-7 w-7" />,
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@clipblox.nation",
    description: "Follow ClipBlox on Instagram for Reels and community updates.",
    cta: "Follow on Instagram",
    href: LINKS.instagram,
    icon: <InstagramIcon className="h-7 w-7" />,
  },
  {
    id: "youtube",
    name: "YouTube",
    handle: "@clipbloxagency",
    description: "Subscribe to the ClipBlox YouTube channel for Shorts and more.",
    cta: "Subscribe",
    href: LINKS.youtube,
    icon: <YouTubeIcon className="h-7 w-7" />,
  },
  {
    id: "x",
    name: "X (Twitter)",
    handle: "@clipbloxnation",
    description: "Follow ClipBlox on X for news and announcements.",
    cta: "Follow on X",
    href: LINKS.x,
    icon: <XIcon className="h-6 w-6" />,
  },
  {
    id: "email",
    name: "Email",
    handle: LINKS.email,
    description:
      "Prefer email? Reach the ClipBlox team directly for business inquiries and general questions.",
    cta: "Send an email",
    href: EMAIL_HREF,
    icon: <Mail className="h-7 w-7" />,
    span: "lg:col-span-2",
  },
];

function SocialCard({ s }: { s: Social }) {
  const external = s.href.startsWith("http");
  const wide = !!s.span;
  return (
    <a
      href={s.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={`${s.cta} — ${s.name}`}
      className={cn(
        "card card-lift group relative flex h-full flex-col overflow-hidden p-6 sm:p-7",
        s.id === "discord" &&
          "border-blox/40 bg-[linear-gradient(135deg,rgba(238,28,44,0.16),transparent_60%)]"
      )}
    >
      {s.id === "discord" && (
        <div className="bg-studs pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(135deg,#000,transparent_70%)]" />
      )}
      {wide && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -right-6 hidden h-60 w-60 text-white/[0.045] transition-colors duration-500 group-hover:text-blox/15 sm:block lg:h-72 lg:w-72 [&_svg]:!h-full [&_svg]:!w-full"
        >
          {s.icon}
        </div>
      )}
      <div className="relative flex items-start justify-between">
        <div className="notch grid h-14 w-14 place-items-center bg-ink-700 text-white transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-blox">
          {s.icon}
        </div>
        <ArrowUpRight className="h-5 w-5 text-ink-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blox" />
      </div>

      <h3 className="relative mt-6 font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-[1.7rem]">
        {s.name}
      </h3>
      <p className="relative mt-1.5 break-all font-pixel text-[10px] uppercase tracking-wider text-blox">
        {s.handle}
      </p>
      <p
        className={cn(
          "relative mt-4 flex-1 text-[15px] leading-relaxed text-ink-200",
          wide && "max-w-lg"
        )}
      >
        {s.description}
      </p>

      <span
        className={buttonClasses({
          variant: s.primary ? "primary" : "secondary",
          size: "md",
          className: cn(
            "relative mt-7 self-start",
            !s.primary && "group-hover:border-blox group-hover:bg-blox/15"
          ),
        })}
      >
        <span className="relative">{s.cta}</span>
        <ArrowUpRight className="relative h-4 w-4" />
      </span>
    </a>
  );
}

export function Socials() {
  return (
    <section id="socials" className="section-edge relative overflow-hidden bg-ink-900 py-24 sm:py-28">
      <div className="bg-studs absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_30%,#000,transparent)]" />
      <div className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-blox/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-8">
        <Reveal>
          <SectionHeader
            align="center"
            eyebrow="Our social platforms"
            title={
              <>
                Find <span className="text-blox">ClipBlox</span> everywhere.
              </>
            }
            description="Every official ClipBlox account in one place. Follow along, join the community, or get in touch — every card opens the right destination."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOCIALS.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 90} className={cn(s.span)}>
              <SocialCard s={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
