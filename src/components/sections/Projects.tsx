"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/effects/FadeIn";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, type Project } from "@/data/projects";
import { useState } from "react";

type Category = "all" | Project["category"];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "AI / ML", value: "ai" },
  { label: "Hackathon", value: "hackathon" },
  { label: "Personal", value: "personal" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 md:py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 70% 30%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 20% 70%, rgba(139,92,246,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-5xl mx-auto">
        <SectionHeading>Projects</SectionHeading>

        {/* Filter pills */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f.value
                    ? "bg-accent text-white"
                    : "border border-border text-muted hover:text-foreground hover:border-accent/30"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
