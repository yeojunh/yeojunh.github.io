"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { experiences } from "@/data/experiences";

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28 px-6 overflow-hidden">
      {/* Side glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 0% 50%, rgba(59,130,246,0.1) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-3xl mx-auto">
        <SectionHeading>Experience</SectionHeading>

        <div className="divide-y divide-border">
          {experiences.map((exp, i) => (
            <ExperienceCard key={`${exp.title}-${exp.startDate}`} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
