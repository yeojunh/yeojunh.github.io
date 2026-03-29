"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// ─── Phone Slider ────────────────────────────────────────
function PhoneSlider() {
  const [value, setValue] = useState(5550000000);
  const formatPhone = (n: number) => {
    const s = String(Math.floor(Math.abs(n))).padStart(10, "0").slice(0, 10);
    return `(${s.slice(0, 3)}) ${s.slice(3, 6)}-${s.slice(6)}`;
  };
  return (
    <GagCard title="📞 Enter Your Phone Number" description="Use the precision slider below.">
      <div className="space-y-4">
        <div className="text-center font-mono text-2xl text-accent">{formatPhone(value)}</div>
        <input
          type="range"
          min={0}
          max={9999999999}
          step={7342}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full accent-accent cursor-pointer"
          aria-label="Phone number slider"
          aria-valuetext={formatPhone(value)}
        />
      </div>
    </GagCard>
  );
}

// ─── Runaway Button ──────────────────────────────────────
function RunawayButton() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const minDistance = 200;

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      const btn = buttonRef.current;
      const container = containerRef.current;
      if (!btn || !container) return;

      const containerRect = container.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      const btnCenterX = btnRect.left + btnRect.width / 2;
      const btnCenterY = btnRect.top + btnRect.height / 2;
      const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

      if (dist < minDistance && dist > 0) {
        const maxX = containerRect.width / 2 - btnRect.width / 2 - 10;
        const maxY = containerRect.height / 2 - btnRect.height / 2 - 10;

        // Push away proportionally — closer cursor = stronger push
        const pushStrength = (minDistance - dist) / minDistance;
        const angle = Math.atan2(btnCenterY - e.clientY, btnCenterX - e.clientX);
        const push = pushStrength * 60;

        let newX = pos.x + Math.cos(angle) * push;
        let newY = pos.y + Math.sin(angle) * push;

        // Clamp check
        const clampedX = Math.max(-maxX, Math.min(maxX, newX));
        const clampedY = Math.max(-maxY, Math.min(maxY, newY));

        // If cornered, escape to opposite side
        if (Math.abs(clampedX - pos.x) < 5 && Math.abs(clampedY - pos.y) < 5 && pushStrength > 0.5) {
          newX = -Math.sign(pos.x || 1) * maxX * (0.5 + Math.random() * 0.5);
          newY = -Math.sign(pos.y || 1) * maxY * (0.5 + Math.random() * 0.5);
        } else {
          newX = clampedX;
          newY = clampedY;
        }

        setPos({ x: newX, y: newY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [pos]);

  return (
    <GagCard title="📧 Report issue" description="Click the button to report an issue.">
      <div ref={containerRef} className="relative h-52 flex items-center justify-center overflow-hidden">
        <motion.button
          ref={buttonRef}
          className={`px-6 py-3 rounded-lg font-medium text-white transition-colors ${clicked ? "bg-green-500" : "bg-accent"}`}
          animate={{ x: pos.x, y: pos.y }}
          transition={{ type: "tween", duration: 0.1, ease: "easeOut" }}
          onClick={(e) => { e.preventDefault(); setClicked(true); setTimeout(() => setClicked(false), 1000); }}
        >
          Report issue
        </motion.button>
      </div>
    </GagCard>
  );
}

// ─── Volume / Brightness Dial ────────────────────────────
function BrightnessDial() {
  const [angle, setAngle] = useState(180);
  const [dragging, setDragging] = useState(false);
  const dialRef = useRef<HTMLDivElement>(null);
  const brightness = angle / 360;
  const radius = 48;
  const strokeWidth = 8;
  const center = radius + strokeWidth;
  const svgSize = (radius + strokeWidth) * 2;

  const handleMouseDown = () => setDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setDragging(false);
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!dragging || !dialRef.current) return;
      const rect = dialRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const a = Math.atan2(e.clientY - cy, e.clientX - cx);
      const deg = ((a * 180) / Math.PI + 360 + 90) % 360;
      setAngle(deg);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  // SVG arc path for the filled portion
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - angle / 360);

  // Knob position (angle=0 is top, clockwise)
  const knobAngle = ((angle - 90) * Math.PI) / 180;
  const knobX = center + radius * Math.cos(knobAngle);
  const knobY = center + radius * Math.sin(knobAngle);

  return (
    <GagCard title="🔊 Volume Control" description="Adjust the volume to your preference.">
      <div className="flex flex-col items-center gap-4">
        <div
          ref={dialRef}
          className="relative cursor-pointer select-none"
          style={{ width: svgSize, height: svgSize }}
          onMouseDown={handleMouseDown}
          role="slider"
          tabIndex={0}
          aria-label="Volume dial (actually controls brightness)"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(brightness * 100)}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowUp") { e.preventDefault(); setAngle((a) => Math.min(360, a + 10)); }
            if (e.key === "ArrowLeft" || e.key === "ArrowDown") { e.preventDefault(); setAngle((a) => Math.max(0, a - 10)); }
          }}
        >
          <svg width={svgSize} height={svgSize} className="transform -rotate-90">
            {/* Background track */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke="var(--border)"
              strokeWidth={strokeWidth}
            />
            {/* Filled arc */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke="var(--accent)"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
            />
          </svg>
          {/* Knob dot */}
          <div
            className="absolute w-4 h-4 bg-foreground rounded-full shadow-md"
            style={{
              left: knobX,
              top: knobY,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
        <p className="text-sm text-muted-foreground">
          &quot;Volume&quot;: {Math.round(brightness * 100)}%
        </p>
      </div>
      {/* Apply brightness filter to the playground page */}
      <style>{`
        .playground-content { filter: brightness(${0.2 + brightness * 1.8}); }
      `}</style>
    </GagCard>
  );
}

// ─── Gag Card Wrapper ────────────────────────────────────
function GagCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="rounded-xl border border-border bg-card-bg p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-5">{description}</p>
      {children}
    </motion.div>
  );
}

// ─── Playground Page ─────────────────────────────────────
export default function PlaygroundPage() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-3">The Playground</h1>
          <p className="text-muted text-lg">Where good UX goes to die</p>
        </motion.div>

        {isDesktop ? (
          <div className="playground-content space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <PhoneSlider />
              <BrightnessDial />
            </div>
            <RunawayButton />
          </div>
        ) : (
          /* Mobile fallback */
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-5xl mb-6">😈</p>
            <h2 className="text-xl font-semibold mb-3">Desktop Required</h2>
            <p className="text-muted max-w-sm mx-auto">
              The playground is best experienced on desktop — you&apos;ll need a mouse to
              appreciate the full chaos.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
