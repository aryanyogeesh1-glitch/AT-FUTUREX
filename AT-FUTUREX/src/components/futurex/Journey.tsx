import { useState } from "react";
import { motion } from "motion/react";
import {
  Award,
  BookOpen,
  Compass,
  Clock,
  Hammer,
  Percent,
  Rocket,
  Trophy,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import { Reveal, SectionHeading, SectionLabel, Particles } from "./Atoms";

const STEPS = [
  {
    icon: BookOpen,
    title: "Learn",
    tone: "cyan",
    text: "Start from zero. Core ideas of electronics, data and AI explained the way a Class X student actually thinks.",
  },
  {
    icon: Hammer,
    title: "Build",
    tone: "electric",
    text: "Hands on the hardware and keyboard within the first hour — circuits, dashboards and pages you assemble yourself.",
  },
  {
    icon: Compass,
    title: "Explore",
    tone: "lime",
    text: "Break it, tweak it, test it. Mentors push you to experiment beyond the given instructions.",
  },
  {
    icon: Rocket,
    title: "Create",
    tone: "magenta",
    text: "Finish the day with something that is yours: a working build, a live dashboard, a published site.",
  },
];

const BENEFITS = [
  { icon: Clock, title: "6 Hours Duration", text: "A full immersive day, 9 AM to 3 PM.", tone: "cyan" },
  { icon: UtensilsCrossed, title: "Campus Lunch Provided", text: "Freshly served lunch on campus.", tone: "amber" },
  { icon: Award, title: "Course Certificate", text: "Verified participation certificate.", tone: "electric" },
  { icon: Trophy, title: "Top Participant Prizes", text: "Prizes for standout builds.", tone: "magenta" },
  { icon: Percent, title: "Exclusive PU Discount", text: "Special Anandathirtha PU College admission discount.", tone: "lime" },
  { icon: Wifi, title: "Full Lab Access", text: "Boards, laptops and tools all provided.", tone: "violet" },
];

export function Journey() {
  const [active, setActive] = useState(0);

  return (
    <section id="journey" className="relative overflow-hidden py-24">
      <Particles count={22} tone="violet" />
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <SectionLabel tone="lime">The Learning Journey</SectionLabel>
          <SectionHeading
            title="Four steps from curious to creator"
            sub="Tap any step to see how the day unfolds."
          />
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute top-8 right-0 left-0 hidden h-px bg-linear-to-r from-cyan/10 via-violet/50 to-magenta/10 lg:block" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => {
              const isActive = active === i;
              return (
                <Reveal key={s.title} delay={i * 0.1}>
                  <motion.button
                    type="button"
                    onClick={() => setActive(i)}
                    whileHover={{ y: -6 }}
                    className="glass-card corner-hud relative h-full w-full rounded-2xl p-6 text-left"
                    style={{
                      borderColor: isActive
                        ? `color-mix(in oklab, var(--${s.tone}) 70%, transparent)`
                        : undefined,
                      boxShadow: isActive
                        ? `0 0 44px -14px color-mix(in oklab, var(--${s.tone}) 90%, transparent)`
                        : undefined,
                    }}
                  >
                    <div
                      className="grid h-14 w-14 place-items-center rounded-xl border"
                      style={{
                        borderColor: `color-mix(in oklab, var(--${s.tone}) 55%, transparent)`,
                        background: `color-mix(in oklab, var(--${s.tone}) 14%, transparent)`,
                        color: `var(--${s.tone})`,
                      }}
                    >
                      <s.icon className="h-6 w-6" />
                    </div>
                    <div className="mt-5 flex items-baseline gap-3">
                      <span
                        className="font-display text-xs tracking-[0.3em]"
                        style={{ color: `var(--${s.tone})` }}
                      >
                        0{i + 1}
                      </span>
                      <h3 className="text-xl font-bold">{s.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
                  </motion.button>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-28">
          <SectionLabel tone="amber">What You Get</SectionLabel>
          <SectionHeading title="Everything included in your seat" />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card corner-hud grid h-full grid-cols-[auto_minmax(0,1fr)] items-start gap-4 rounded-2xl p-6"
              >
                <div
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border"
                  style={{
                    borderColor: `color-mix(in oklab, var(--${b.tone}) 50%, transparent)`,
                    background: `color-mix(in oklab, var(--${b.tone}) 12%, transparent)`,
                    color: `var(--${b.tone})`,
                  }}
                >
                  <b.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
