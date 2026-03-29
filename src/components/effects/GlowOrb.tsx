"use client";

export function GlowOrb() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(59,130,246,0.25) 0%, rgba(99,102,241,0.12) 40%, transparent 70%)",
      }}
    />
  );
}
