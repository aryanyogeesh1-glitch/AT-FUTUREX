import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, Ticket, X, Zap, ZapOff } from "lucide-react";
const logoAsset = "/college-logo.png";
import { EVENT } from "@/lib/futurex";
import { GlowButton, Particles, Reveal } from "./Atoms";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#workshops", label: "Workshops" },
  { href: "#journey", label: "Journey" },
  { href: "#register", label: "Register" },
];

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left"
      style={{
        scaleX: x,
        background: "linear-gradient(90deg, var(--cyan), var(--violet), var(--magenta))",
        boxShadow: "0 0 12px var(--cyan)",
      }}
    />
  );
}

export function Nav({ effects, onToggleEffects }: { effects: boolean; onToggleEffects: () => void }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-cyan/15 bg-background/80 backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logoAsset}
            alt="AT FUTUREX logo"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-lg object-contain"
          />
          <span className="truncate font-display text-sm font-bold tracking-[0.2em] sm:text-base">
            AT FUTUREX
          </span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="mr-2 hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-cyan"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={onToggleEffects}
            aria-label={effects ? "Turn off visual effects" : "Turn on visual effects"}
            className="grid h-10 w-10 place-items-center rounded-lg border border-cyan/35 text-cyan transition-colors hover:bg-cyan/10"
          >
            {effects ? <Zap className="h-4 w-4" /> : <ZapOff className="h-4 w-4" />}
          </button>
          <a
            href={EVENT.registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-magenta/50 bg-magenta/10 px-5 py-2.5 font-display text-[0.65rem] tracking-[0.2em] text-magenta uppercase transition-colors hover:bg-magenta/20 sm:inline-flex"
          >
            Register
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-cyan/35 text-cyan md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-cyan/15 bg-background/95 px-5 py-4 backdrop-blur-xl md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-semibold text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="hud-grid absolute inset-0 opacity-40" />
      <Particles count={30} tone="cyan" />
      <div
        className="absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--electric) 45%, transparent), transparent 70%)",
        }}
      />
      <Reveal className="relative mx-auto max-w-4xl px-5 text-center">
        <h2 className="text-4xl leading-[1.05] font-black sm:text-6xl">
          <span className="text-foreground">Tech Today,</span>{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(100deg, var(--cyan), var(--magenta))" }}
          >
            A Brighter Tomorrow
          </span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Thirty seats. One day. A head start that stays with you.
        </p>
        <div className="mt-10 flex justify-center">
          <GlowButton href={EVENT.registrationUrl}>
            <Ticket className="h-4 w-4" /> Register Now
          </GlowButton>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-cyan/15 py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 text-sm text-muted-foreground sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div className="min-w-0">
          <img
            src={logoAsset.url}
            alt="AT FUTUREX logo"
            width={64}
            height={64}
            className="mb-3 h-16 w-16 object-contain"
          />
          <div className="font-display text-sm tracking-[0.25em] text-foreground">AT FUTUREX</div>
          <p className="mt-2">
            {EVENT.tagline} — organized by {EVENT.organizer}.
          </p>
        </div>
      </div>
    </footer>
  );
}
