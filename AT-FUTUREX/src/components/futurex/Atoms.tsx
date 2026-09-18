import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children, tone = "cyan" }: { children: ReactNode; tone?: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-display text-[0.65rem] tracking-[0.35em] uppercase"
      style={{
        borderColor: `color-mix(in oklab, var(--${tone}) 45%, transparent)`,
        color: `var(--${tone})`,
        background: `color-mix(in oklab, var(--${tone}) 10%, transparent)`,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: `var(--${tone})`, boxShadow: `0 0 10px var(--${tone})` }}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  title,
  sub,
  className,
}: {
  title: ReactNode;
  sub?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <h2 className="mt-5 text-3xl leading-[1.1] font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {sub ? <p className="mt-4 text-lg text-muted-foreground">{sub}</p> : null}
    </div>
  );
}

export function GlowButton({
  href,
  children,
  tone = "cyan",
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 font-display text-sm font-bold tracking-[0.18em] uppercase transition-transform duration-300 hover:scale-[1.04]",
        className,
      )}
      style={{
        color: "oklch(0.14 0.045 265)",
        background: `linear-gradient(120deg, var(--${tone}), var(--magenta))`,
        boxShadow: `0 0 34px -6px color-mix(in oklab, var(--${tone}) 75%, transparent)`,
      }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="pointer-events-none absolute inset-y-0 w-1/3 animate-sweep bg-white/30 blur-md" />
    </a>
  );
}

export function Particles({ count = 34, tone = "cyan" }: { count?: number; tone?: string }) {
  const reduced = useReducedMotion();
  const dots = Array.from({ length: count }, (_, i) => ({
    left: (i * 37) % 100,
    top: (i * 61) % 100,
    size: 1 + (i % 3),
    dur: 7 + (i % 7),
    delay: (i % 11) * 0.4,
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            background: `var(--${tone})`,
            boxShadow: `0 0 8px var(--${tone})`,
          }}
          animate={reduced ? { opacity: 0.4 } : { y: [0, -40, 0], opacity: [0.15, 0.8, 0.15] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
