import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Socials } from "./components/Socials";
import { Tutorials } from "./components/Tutorials";
import { Campaigns } from "./components/Campaigns";
import { Portfolio } from "./components/Portfolio";
import { Brands } from "./components/Brands";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";

export default function App() {
  // Cursor spotlight on cards: one delegated listener updates CSS vars.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement | null)?.closest<HTMLElement>(".card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - r.left}px`);
      card.style.setProperty("--y", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="min-h-screen bg-ink-950 font-sans text-ink-100">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-blox focus:px-4 focus:py-2 focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Socials />
        <Tutorials />
        <Campaigns />
        <Portfolio />
        <Brands />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
