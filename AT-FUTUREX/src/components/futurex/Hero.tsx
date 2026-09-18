import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Cpu, MapPin, Sparkles, Ticket, Users } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { EVENT } from "@/lib/futurex";
import { GlowButton, Particles } from "./Atoms";

function useCountdown(target: string) {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const t = new Date(target).getTime();
    const tick = () => setLeft(Math.max(0, t - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  if (left === null) return null;
  const s = Math.floor(left / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

function Unit({ value, label }: { value: number | null; label: string }) {
  return (
    <div className="corner-hud glass-card min-w-[74px] rounded-xl px-3 py-3 text-center sm:min-w-[92px]">
      <div className="font-display text-2xl font-bold text-cyan text-glow tabular-nums sm:text-3xl">
        {value === null ? "--" : String(value).padStart(2, "0")}
      </div>
      <div className="mt-1 text-[0.6rem] tracking-[0.25em] text-muted-foreground uppercase">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  const c = useCountdown(EVENT.dateISO);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pt-24 pb-20">
      <img
        src={heroImg}
        alt="Student wearing AR glasses surrounded by holographic code panels"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_60%_40%,transparent_0%,var(--background)_78%)]" />
      <div className="hud-grid absolute inset-0 -z-10 opacity-60" />
      <Particles count={40} />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-4 py-1.5 font-display text-[0.62rem] tracking-[0.3em] text-cyan uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" /> Organized by {EVENT.organizer}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-[2.7rem] leading-[0.95] font-black sm:text-6xl lg:text-7xl"
          >
            <span className="block text-foreground text-glow">AT FUTUREX</span>
            <span
              className="mt-3 block bg-clip-text text-2xl text-transparent sm:text-4xl lg:text-5xl"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, var(--cyan), var(--violet), var(--magenta), var(--lime))",
              }}
            >
              AI • CODE • CREATE
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
          >
            {EVENT.subtitle}. One campus, three hands-on labs, and a full day of building real
            technology.
          </motion.p>

          <div className="mt-7 flex flex-wrap gap-3 text-sm text-muted-foreground">
            {[
              { icon: Cpu, text: EVENT.dateLabel },
              { icon: Users, text: `Only ${EVENT.seats} seats` },
              { icon: MapPin, text: "College Campus" },
            ].map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="corner-hud flex items-center gap-2 rounded-lg border border-border bg-card/50 px-3 py-2"
              >
                <Icon className="h-4 w-4 text-cyan" />
                {text}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <GlowButton href={EVENT.registrationUrl}>
              <Ticket className="h-4 w-4" /> Register Now
            </GlowButton>
            <a
              href="#workshops"
              className="inline-flex items-center gap-2 rounded-full border border-cyan/40 px-6 py-4 font-display text-xs tracking-[0.2em] text-cyan uppercase transition-colors hover:bg-cyan/10"
            >
              Explore Workshops <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="glass-card corner-hud animate-floaty rounded-2xl p-6"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
              Launch Countdown
            </span>
            <span className="h-2 w-2 animate-pulse-ring rounded-full bg-lime" />
          </div>
          <div className="mt-5 grid grid-cols-4 gap-2 sm:gap-3">
            <Unit value={c?.days ?? null} label="Days" />
            <Unit value={c?.hours ?? null} label="Hrs" />
            <Unit value={c?.minutes ?? null} label="Min" />
            <Unit value={c?.seconds ?? null} label="Sec" />
          </div>
          <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-cyan/50 to-transparent" />
          <p className="mt-5 text-sm text-muted-foreground">
            Registration closes the moment all{" "}
            <span className="font-semibold text-magenta">{EVENT.seats} seats</span> are filled.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
