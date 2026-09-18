import { motion } from "motion/react";
import { Activity, Boxes, MonitorSmartphone } from "lucide-react";
import { Reveal, SectionHeading, SectionLabel } from "./Atoms";

const HIGHLIGHTS = [
  {
    icon: Boxes,
    tone: "cyan",
    title: "Hands-on technology",
    text: "Real boards, real code editors, real data — nothing simulated or watched from a distance.",
  },
  {
    icon: MonitorSmartphone,
    tone: "violet",
    title: "Interactive digital displays",
    text: "Live demos on big screens where your build reacts in front of the whole room.",
  },
  {
    icon: Activity,
    tone: "lime",
    title: "Mentor-led sessions",
    text: "Small batches of thirty, so every student gets attention through the full six hours.",
  },
];

function Circuitry() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 300"
      className="h-full w-full"
      style={{ filter: "drop-shadow(0 0 6px color-mix(in oklab, var(--cyan) 60%, transparent))" }}
    >
      {[
        "M10 40 H120 V120 H240 V60 H390",
        "M10 150 H90 V230 H210 V170 H390",
        "M10 260 H150 V200 H300 V270 H390",
      ].map((d, i) => (
        <g key={d}>
          <path d={d} fill="none" stroke="color-mix(in oklab, var(--cyan) 28%, transparent)" strokeWidth="1.5" />
          <motion.path
            d={d}
            fill="none"
            stroke={i === 1 ? "var(--magenta)" : i === 2 ? "var(--lime)" : "var(--cyan)"}
            strokeWidth="2"
            strokeDasharray="60 620"
            initial={{ strokeDashoffset: 680 }}
            animate={{ strokeDashoffset: [680, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "linear", delay: i * 0.8 }}
          />
        </g>
      ))}
      {[
        [120, 120],
        [240, 60],
        [90, 230],
        [300, 200],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="var(--cyan)" opacity="0.8" />
      ))}
    </svg>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <SectionLabel>About the Event</SectionLabel>
          <SectionHeading
            title={
              <>
                A day built for students who want to{" "}
                <span className="text-cyan text-glow">make things</span>
              </>
            }
            sub="AT FUTUREX brings Class X students onto a college campus for a single, intense day of building with hardware, data and AI. You leave with skills, a certificate, and a project you made yourself."
          />
          <div className="mt-10 space-y-4">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.1}>
                <div className="glass-card corner-hud grid grid-cols-[auto_minmax(0,1fr)] gap-4 rounded-xl p-5">
                  <div
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border"
                    style={{
                      borderColor: `color-mix(in oklab, var(--${h.tone}) 50%, transparent)`,
                      color: `var(--${h.tone})`,
                    }}
                  >
                    <h.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold">{h.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass-card corner-hud relative aspect-4/3 overflow-hidden rounded-2xl p-6">
            <div className="hud-grid absolute inset-0 opacity-50" />
            <Circuitry />
            <div className="absolute right-6 bottom-6 left-6 flex flex-wrap gap-3">
              {["ARDUINO", "AI", "DATA", "WEB"].map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-cyan/35 bg-background/70 px-3 py-1 font-display text-[0.6rem] tracking-[0.25em] text-cyan"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
