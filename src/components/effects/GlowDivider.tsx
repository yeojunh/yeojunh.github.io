"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function GlowDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="flex items-center justify-center py-12 md:py-16" aria-hidden="true">
      <div
        className="h-px max-w-md transition-all duration-1000 ease-out"
        style={{
          width: inView ? "100%" : "0%",
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
          opacity: 0.25,
        }}
      />
    </div>
  );
}
