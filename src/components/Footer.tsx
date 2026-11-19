import type { ReactNode } from "react";
import { ArrowUp, Mail, ShoppingBag } from "lucide-react";
import { EMAIL_HREF, LINKS } from "../data/links";
import { Logo } from "./Logo";
import { DiscordIcon, InstagramIcon, TikTokIcon, XIcon, YouTubeIcon } from "./Icons";

const SOCIAL_ICONS: { name: string; href: string; icon: ReactNode }[] = [
  { name: "Discord", href: LINKS.discord, icon: <DiscordIcon className="h-5 w-5" /> },
  { name: "Whop", href: LINKS.whop, icon: <ShoppingBag className="h-5 w-5" /> },
  { name: "TikTok", href: LINKS.tiktok, icon: <TikTokIcon className="h-5 w-5" /> },
  { name: "Instagram", href: LINKS.instagram, icon: <InstagramIcon className="h-5 w-5" /> },
  { name: "YouTube", href: LINKS.youtube, icon: <YouTubeIcon className="h-5 w-5" /> },
  { name: "X (Twitter)", href: LINKS.x, icon: <XIcon className="h-[18px] w-[18px]" /> },
  { name: "Email", href: EMAIL_HREF, icon: <Mail className="h-5 w-5" /> },
];

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tutorials", href: "#tutorials" },
  { label: "Campaign Announcements", href: "#campaigns" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Brand Partnerships", href: "#brands" },
  { label: "FAQ", href: "#faq" },
];

const linkCls =
  "inline-flex items-center text-[15px] text-ink-200 transition-all hover:translate-x-1 hover:text-white";

export function Footer() {
  return (
    <footer id="contact" className="section-edge relative overflow-hidden bg-ink-900">
      <div className="absolute inset-x-0 top-0 h-px bg-blox/40" />
      <div className="absolute -bottom-40 left-1/2 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-blox/15 blur-[130px]" />
      <div className="bg-studs absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,transparent,#000_80%)]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 sm:px-6 xl:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <Logo size="md" tagline />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-200">
              ClipBlox is a Roblox-focused clipping network connecting creators, clippers, and brands
              through short-form content.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {SOCIAL_ICONS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={s.name}
                    title={s.name}
                    className="grid h-11 w-11 place-items-center rounded-lg border border-ink-500 bg-ink-800 text-ink-100 shadow-[0_3px_0_0_#000] transition-all hover:-translate-y-1 hover:border-blox hover:bg-blox hover:text-white hover:shadow-[0_6px_0_0_#7d0c15]"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <h4 className="font-pixel text-[11px] uppercase tracking-[0.22em] text-blox">
              Quick links
            </h4>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkCls}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="font-pixel text-[11px] uppercase tracking-[0.22em] text-blox">
              Contact
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={EMAIL_HREF} className={linkCls}>
                  <Mail className="mr-2.5 h-4 w-4 text-blox" />
                  {LINKS.email}
                </a>
              </li>
              <li>
                <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  <DiscordIcon className="mr-2.5 h-4 w-4 text-blox" />
                  Join our Discord
                </a>
              </li>
              <li>
                <a href={LINKS.whop} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  <ShoppingBag className="mr-2.5 h-4 w-4 text-blox" />
                  ClipBlox on Whop
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ink-300">
              Business inquiries: open a ticket in our Discord or send us an email.
            </p>
          </div>
        </div>

        {/* giant wordmark */}
        <div
          aria-hidden="true"
          className="pointer-events-none mt-16 select-none text-center font-display text-[clamp(3.6rem,17vw,15rem)] font-bold leading-[0.8] tracking-wide text-outline [mask-image:linear-gradient(to_bottom,#000_30%,transparent)]"
        >
          CLIPBLOX
        </div>

        <div className="relative flex flex-col items-center justify-between gap-4 border-t border-ink-600 py-7 text-sm text-ink-300 sm:flex-row">
          <p>© 2026 ClipBlox. All rights reserved.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-ink-100 transition-colors hover:text-blox"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
