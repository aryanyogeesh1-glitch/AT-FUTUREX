import { motion } from "motion/react";
import { BadgeCheck, GraduationCap, IdCard, MapPin, Navigation, Ticket, Users } from "lucide-react";
import campusImg from "@/assets/campus.jpg";
import { EVENT } from "@/lib/futurex";
import { GlowButton, Particles, Reveal, SectionHeading, SectionLabel } from "./Atoms";

export function Register() {
  return (
    <section id="register" className="relative overflow-hidden py-24">
      <Particles count={26} tone="magenta" />
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <SectionLabel tone="magenta">Registration</SectionLabel>
          <SectionHeading
            title="Claim one of the 30 seats"
            sub="Open to Class X students only. Seats are allotted strictly in order of registration."
          />
        </Reveal>

        <div className="mt-12 grid gap-6">
          <Reveal>
            <div className="glass-card corner-hud h-full rounded-2xl p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: GraduationCap, t: "Eligibility", d: "Class X students", tone: "cyan" },
                  { icon: Users, t: "Seats", d: "Strictly 30 only", tone: "magenta" },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-xl border p-5"
                    style={{
                      borderColor: `color-mix(in oklab, var(--${x.tone}) 40%, transparent)`,
                      background: `color-mix(in oklab, var(--${x.tone}) 8%, transparent)`,
                    }}
                  >
                    <x.icon className="h-6 w-6" style={{ color: `var(--${x.tone})` }} />
                    <div className="mt-4 font-display text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
                      {x.t}
                    </div>
                    <div className="mt-1 text-lg font-bold">{x.d}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 h-px bg-linear-to-r from-transparent via-magenta/50 to-transparent" />

              <p className="mt-8 text-muted-foreground">
                Registration runs through a Google Form. Fill your details, submit, and you will get
                a confirmation from the college before the event day.
              </p>

              <div className="mt-8">
                <GlowButton href={EVENT.registrationUrl} tone="cyan">
                  <Ticket className="h-4 w-4" /> Register on Google Forms
                </GlowButton>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Bring along */}
        <Reveal className="mt-24">
          <SectionLabel tone="amber">Bring Along</SectionLabel>
          <SectionHeading title="Two documents at the entry desk" />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {[
            { icon: IdCard, t: "School ID Card", d: "One clear photocopy of your school identity card.", tone: "cyan" },
            { icon: BadgeCheck, t: "Aadhaar Copy", d: "One photocopy of your Aadhaar card for verification.", tone: "lime" },
          ].map((x, i) => (
            <Reveal key={x.t} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card corner-hud grid grid-cols-[auto_minmax(0,1fr)] gap-5 rounded-2xl p-6"
              >
                <div
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border"
                  style={{
                    borderColor: `color-mix(in oklab, var(--${x.tone}) 55%, transparent)`,
                    background: `color-mix(in oklab, var(--${x.tone}) 12%, transparent)`,
                    color: `var(--${x.tone})`,
                  }}
                >
                  <x.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold">{x.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Venue */}
        <Reveal className="mt-24">
          <SectionLabel tone="electric">Venue</SectionLabel>
          <SectionHeading title="Anandathirtha PU College Campus" sub={EVENT.venue.address} />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-card corner-hud mt-10 grid overflow-hidden rounded-2xl lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[280px]">
              <img
                src={campusImg}
                alt="Anandathirtha PU College campus at dusk with neon accents"
                loading="lazy"
                width={1536}
                height={864}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/25 to-transparent" />
              <div className="hud-grid absolute inset-0 opacity-40" />
            </div>
            <div className="flex flex-col justify-center gap-6 p-8">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan" />
                <div className="min-w-0">
                  <div className="font-bold">{EVENT.venue.name}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{EVENT.venue.address}</p>
                </div>
              </div>
              <div className="rounded-xl border border-cyan/25 bg-background/60 p-5 text-sm text-muted-foreground">
                Entry through the main campus gate. Reporting time 8:30 AM — the first lab starts
                sharp at 9:00 AM.
              </div>
              <a
                href={EVENT.venue.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan/45 px-6 py-3 font-display text-xs tracking-[0.2em] text-cyan uppercase transition-colors hover:bg-cyan/10"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
