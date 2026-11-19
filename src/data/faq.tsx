import type { ReactNode } from "react";
import { LINKS } from "./links";

const A = ({ href, children }: { href: string; children: ReactNode }) => {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="font-medium text-white underline decoration-blox decoration-2 underline-offset-4 transition-colors hover:text-blox"
    >
      {children}
    </a>
  );
};

export interface FaqItem {
  q: string;
  a: ReactNode;
}

export const FAQ: FaqItem[] = [
  {
    q: "What is ClipBlox?",
    a: (
      <>
        ClipBlox is a Roblox-focused clipping network. We connect creators, clippers, and brands
        through short-form content on platforms like TikTok, Instagram Reels, and YouTube Shorts.
      </>
    ),
  },
  {
    q: "How can I become a clipper?",
    a: (
      <>
        Join our official <A href={LINKS.discord}>Discord server</A>, read the information
        channels, and check the announcements for open campaigns. The{" "}
        <A href="#tutorials">tutorials on this page</A> walk you through the basics.
      </>
    ),
  },
  {
    q: "Can beginners join?",
    a: (
      <>
        Yes — beginners are welcome. Our <A href="#tutorials">Clipper Learning Center</A> was built
        for people with little or no clipping experience. Each campaign lists its own requirements,
        so check the announcement to see what applies.
      </>
    ),
  },
  {
    q: "Where can I find new campaigns?",
    a: (
      <>
        New campaigns are announced in the announcements channel of our official{" "}
        <A href={LINKS.discord}>Discord</A>. Check it regularly so you never miss one.
      </>
    ),
  },
  {
    q: "How do public and private campaigns work?",
    a: (
      <>
        Public campaigns are open opportunities available to eligible members of the community.
        Private campaigns are exclusive, with selected creators and qualified clippers, and their
        details stay in the appropriate private Discord channels. For the requirements of any
        campaign, check its announcement or channel in Discord.
      </>
    ),
  },
  {
    q: "Where can I find clipping tutorials?",
    a: (
      <>
        Right here on this website. Scroll to the <A href="#tutorials">Tutorials</A> section for
        step-by-step lessons covering getting started, editing, publishing, and submitting your
        clips. For campaign-specific questions, ask in our Discord.
      </>
    ),
  },
  {
    q: "How can my Roblox brand partner with ClipBlox?",
    a: (
      <>
        Join our <A href={LINKS.discord}>Discord server</A>, open a business inquiry ticket from
        the ticket or support section, and tell us about your brand and the campaign or partnership
        you have in mind. You can also see the full steps in the{" "}
        <A href="#brands">For Brands</A> section.
      </>
    ),
  },
  {
    q: "Where can I contact the ClipBlox team?",
    a: (
      <>
        The best place is our <A href={LINKS.discord}>Discord</A> — use the ticket or support
        section. You can also email{" "}
        <A href={`mailto:${LINKS.email}`}>{LINKS.email}</A> or reach us through our official social
        accounts.
      </>
    ),
  },
];
