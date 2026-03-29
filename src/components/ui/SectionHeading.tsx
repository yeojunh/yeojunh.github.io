"use client";

import { FadeIn } from "@/components/effects/FadeIn";
import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <FadeIn>
      <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight mb-4 ${className}`}>
        {children}
      </h2>
    </FadeIn>
  );
}
