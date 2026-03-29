"use client";

import { Project } from "@/data/projects";
import { useState } from "react";
import { FadeIn } from "@/components/effects/FadeIn";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [imgIndex, setImgIndex] = useState(0);
  const hasMultipleImages = project.imagePaths.length > 1;
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <FadeIn delay={index * 0.1} direction="up" distance={30}>
      <div className="group relative rounded-xl border border-border bg-card-bg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.15)] h-full">

        {/* Image / Embed */}
        {project.embedPath ? (
          <div className="relative w-full h-48 bg-black/20">
            {!showEmbed ? (
              <button
                className="w-full h-full flex items-center justify-center text-muted hover:text-accent transition-colors"
                onClick={() => setShowEmbed(true)}
                aria-label={`Load 3D scene for ${project.title}`}
              >
                <span className="text-sm font-mono">Click to load 3D scene ▶</span>
              </button>
            ) : (
              <iframe
                src={project.embedPath}
                className="w-full h-full border-0"
                title={project.title}
              />
            )}
          </div>
        ) : project.imagePaths.length > 0 ? (
          <div
            className={`relative w-full h-48 overflow-hidden bg-black/5 dark:bg-white/5 ${hasMultipleImages ? "cursor-pointer" : ""}`}
            onClick={hasMultipleImages ? () => setImgIndex((i) => (i + 1) % project.imagePaths.length) : undefined}
            onKeyDown={hasMultipleImages ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setImgIndex((i) => (i + 1) % project.imagePaths.length); } } : undefined}
            role={hasMultipleImages ? "button" : undefined}
            tabIndex={hasMultipleImages ? 0 : undefined}
            aria-label={hasMultipleImages ? `Cycle images, ${imgIndex + 1} of ${project.imagePaths.length}` : undefined}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.imagePaths[imgIndex]}
              alt={project.title}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
            {hasMultipleImages && (
              <div className="absolute bottom-2 right-2 text-xs font-mono bg-black/50 text-white px-2 py-0.5 rounded">
                {imgIndex + 1}/{project.imagePaths.length}
              </div>
            )}
          </div>
        ) : null}

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2 leading-snug">{project.title}</h3>
          <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-1 rounded-md bg-accent-muted text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label={`GitHub repo for ${project.title}`}
              >
                <GithubIcon />
              </a>
            )}
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
