"use client";

import { Experience } from "@/data/experiences";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FadeIn } from "@/components/effects/FadeIn";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const logoSrc = isDark && experience.logoDarkPath ? experience.logoDarkPath : experience.logoPath;
  const shouldInvert = isDark && !experience.logoDarkPath && experience.invertInDark;

  return (
    <FadeIn delay={index * 0.08} direction="left" distance={20}>
      <a
        href={experience.website}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 md:gap-6 py-4 px-4 -mx-4 rounded-xl hover:bg-accent-muted/50 transition-colors"
      >
        {/* Logo */}
        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden flex items-center justify-center p-2 transition-shadow duration-300 group-hover:shadow-[0_0_12px_4px_rgba(59,130,246,0.35)]">
          {mounted && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={logoSrc}
              alt={experience.title}
              className="max-w-full max-h-full object-contain"
              style={shouldInvert ? { filter: "brightness(0) invert(1)" } : undefined}
            />
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
            <h3 className="text-sm md:text-base font-medium truncate group-hover:text-accent transition-colors">
              {experience.title}
            </h3>
            <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
              {experience.startDate} — {experience.endDate}
            </span>
          </div>
          <p className="text-sm text-muted">{experience.role}</p>
          {experience.description && (
            <p className="text-xs text-muted-foreground mt-0.5">{experience.description}</p>
          )}
        </div>

        {/* Arrow */}
        <svg
          className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </FadeIn>
  );
}
