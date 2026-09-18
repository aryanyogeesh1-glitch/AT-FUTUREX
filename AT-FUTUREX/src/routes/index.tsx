import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "motion/react";
import { Hero } from "@/components/futurex/Hero";
import { About } from "@/components/futurex/About";
import { Workshops } from "@/components/futurex/Workshops";
import { Journey } from "@/components/futurex/Journey";
import { Register } from "@/components/futurex/Register";
import { FinalCTA, Footer, Nav, ScrollProgress } from "@/components/futurex/Shell";

const title = "AT FUTUREX — AI • CODE • CREATE | Anandathirtha PU College";
const description =
  "A one-day technology experience for Class X students: Arduino, AI & Excel, and Prompt Engineering workshops at Anandathirtha Pre University College. Only 30 seats.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [effects, setEffects] = useState(true);

  return (
    <MotionConfig reducedMotion={effects ? "user" : "always"}>
      <div id="top" className="relative min-h-screen bg-background">
        <ScrollProgress />
        <Nav effects={effects} onToggleEffects={() => setEffects((v) => !v)} />
        <main>
          <Hero />
          <About />
          <Workshops />
          <Journey />
          <Register />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
