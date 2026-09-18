import { motion } from "motion/react";
import { BrainCircuit, CircuitBoard, Palette } from "lucide-react";
import arduinoImg from "@/assets/arduino.jpg";
import excelImg from "@/assets/ai-excel.jpg";
import webImg from "@/assets/prompt-web.jpg";
import { Reveal, SectionHeading, SectionLabel } from "./Atoms";

const WORKSHOPS = [
  {
    title: "Intro to Arduino",
    kicker: "Hardware Programming",
    tone: "cyan",
    icon: CircuitBoard,
    image: arduinoImg,
    alt: "Arduino UNO board wired to a breadboard with glowing LEDs",
    points: ["Meet the UNO board & sensors", "Wire real circuits on a breadboard", "Blink, buzz and automate with code"],
  },
  {
    title: "AI & Excel Mastery",
    kicker: "AI & Spreadsheet Tools",
    tone: "lime",
    icon: BrainCircuit,
    image: excelImg,
    alt: "Neon green AI analytics dashboard with charts and data tables",
    points: ["Formulas that do the heavy lifting", "Build a live data dashboard", "Let AI analyse and explain results"],
  },
  {
    title: "Prompt Engineering & Website Making",
    kicker: "Web Design & AI Prompts",
    tone: "magenta",
    icon: Palette,
    image: webImg,
    alt: "Website builder on a laptop with an AI prompt assistant in neon purple light",
    points: ["Write prompts that actually work", "Design a page that looks premium", "Publish your own live website"],
  },
];

export function Workshops() {
  return (
    <section id="workshops" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <SectionLabel tone="violet">Three Labs · One Day</SectionLabel>
          <SectionHeading
            title="Pick up skills that machines respect"
            sub="Every workshop is hands-on from minute one — no slides-only sessions, no passive watching."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {WORKSHOPS.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.12}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className="glass-card corner-hud group flex h-full flex-col overflow-hidden rounded-2xl"
                style={{ borderColor: `color-mix(in oklab, var(--${w.tone}) 35%, transparent)` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={w.image}
                    alt={w.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, var(--background), transparent 65%), linear-gradient(160deg, color-mix(in oklab, var(--${w.tone}) 28%, transparent), transparent 55%)`,
                    }}
                  />
                  <div className="scanlines absolute inset-0 opacity-30" />
                  <div
                    className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-lg border backdrop-blur"
                    style={{
                      borderColor: `color-mix(in oklab, var(--${w.tone}) 55%, transparent)`,
                      background: `color-mix(in oklab, var(--${w.tone}) 16%, transparent)`,
                      color: `var(--${w.tone})`,
                    }}
                  >
                    <w.icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span
                    className="font-display text-[0.6rem] tracking-[0.3em] uppercase"
                    style={{ color: `var(--${w.tone})` }}
                  >
                    {w.kicker}
                  </span>
                  <h3 className="mt-3 text-xl leading-tight font-bold">{w.title}</h3>
                  <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                    {w.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{
                            background: `var(--${w.tone})`,
                            boxShadow: `0 0 10px var(--${w.tone})`,
                          }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
