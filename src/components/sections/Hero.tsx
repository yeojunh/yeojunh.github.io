"use client";

import { GlowOrb } from "@/components/effects/GlowOrb";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { FadeIn } from "@/components/effects/FadeIn";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      <GlowOrb />

      <FadeIn trigger="load" delay={0.2} direction="none" className="relative z-10 max-w-3xl">
        {/* Status badge */}
        <FadeIn trigger="load" delay={0.5} direction="up" distance={10} className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs font-mono text-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-glow-pulse" />
            currently building AI tooling @ Microsoft
          </div>
        </FadeIn>

        {/* Name */}
        <FadeIn trigger="load" delay={0.3} direction="up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono tracking-tight mb-4">
            Yeojun Han
          </h1>
        </FadeIn>

        {/* Title */}
        <FadeIn trigger="load" delay={0.5} direction="up" distance={15}>
          <p className="text-lg md:text-xl text-muted mb-10 max-w-lg mx-auto">
            Software Engineer in AI Tooling
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn trigger="load" delay={0.7} direction="up" distance={15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-accent-muted hover:border-accent transition-all"
            >
              See my work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </MagneticButton>

            {/* <MagneticButton
              href="/playground"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white text-sm font-medium hover:bg-blue-600 transition-colors"
            >
              Visit the Playground
              <span>🎮</span>
            </MagneticButton> */}
          </div>
        </FadeIn>
      </FadeIn>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
        style={{ opacity: 0, animation: "fadeIn 0.8s ease-out 1.5s forwards, bounce 2s ease-in-out 2.3s infinite" }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
}
