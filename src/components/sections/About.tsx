"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/effects/FadeIn";

const techStack = [
  { name: "C#", icon: "#" },
  { name: "Python", icon: "🐍" },
  { name: "Git", icon: "🔀" },
  { name: "Full Stack", icon: "⚡" },
  { name: "LLM Integration", icon: "🤖" },
  { name: "Developer Tools", icon: "🛠️" },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>About</SectionHeading>

        <div className="grid md:grid-cols-[1fr,auto] gap-10 md:gap-16 items-start">
          {/* Bio */}
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m a software engineer focused on AI tooling on the{" "}
                <span className="text-foreground font-medium">Visual Studio Copilot</span> team
                at <span className="text-foreground font-medium">Microsoft</span>. I studied
                Computer Science at the{" "}
                <span className="text-foreground font-medium">University of British Columbia</span>,
                where I also worked as a teaching assistant for Computer Vision, Applied Machine
                Learning, and Software Construction courses.
              </p>
              <p>
                I&apos;ve worked at Microsoft across{" "}
                <span className="text-foreground font-medium">Visual Studio Copilot</span> and{" "}
                <span className="text-foreground font-medium">Azure SDK</span>, as well as at{" "}
                <span className="text-foreground font-medium">Ansys</span> on OpticStudio and {" "}
                <span className="text-foreground font-medium">HCI research</span> at UBC&apos;s SOCIUS Lab.
              </p>
              <p>
                When I&apos;m not coding, I keep myself active by traveling, going rock climbing, surfing, and making
                pottery. I&apos;m also an ex-AA soccer player who runs sometimes.
              </p>
            </div>
          </FadeIn>

          {/* Photo */}
          <FadeIn delay={0.2} direction="none">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/yeojun.jpeg"
                  alt="Yeojun Han"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Tech Stack */}
        <FadeIn delay={0.3} className="mt-12">
          <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
            Tech Stack & Focus
          </h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group relative flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:border-accent/30 hover:bg-accent-muted transition-all cursor-default"
              >
                <span className="text-base" role="img" aria-label={tech.name}>
                  {tech.icon}
                </span>
                <span className="text-sm font-mono text-muted group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
