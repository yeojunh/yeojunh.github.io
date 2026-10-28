"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./SkyScene.module.css";

type EntryEdge = "top" | "left" | "right";

interface Flyer {
  element: HTMLElement;
  startX: number;
  startY: number;
  heading: number;
  speed: number;
  bird: boolean;
  phase: number;
  age: number;
  trail: { element: HTMLSpanElement; bornAt: number }[];
  lastTrailAge: number;
  tailOffset: number;
  x: number;
  y: number;
}

const birdFrames = ["\\v/", "-v-", "/v\\", "-v-"];
const planeSpeeds = [84, 66, 48];
const birdOffsets = [{ x: 22, y: 0 }, { x: -16, y: -18 }, { x: -16, y: 18 }];

export function SkyScene({ children }: { children: ReactNode }) {
  const skyRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const skyElement = skyRef.current;
    const buttonElement = motionRef.current;
    if (!skyElement || !buttonElement) return;
    const sky = skyElement;
    const motionButton = buttonElement;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const flyers: Flyer[] = Array.from(sky.querySelectorAll<HTMLElement>("[data-flyer]")).map((element, index) => ({
      element,
      startX: Number(element.dataset.x),
      startY: Number(element.dataset.y),
      heading: 0,
      speed: Number(element.dataset.speed),
      bird: element.dataset.flyer === "bird",
      phase: index * 1.7,
      age: 0,
      trail: [],
      lastTrailAge: 0,
      tailOffset: 0,
      x: 0,
      y: 0,
    }));
    const planes = flyers.filter(flyer => !flyer.bird);
    const birds = flyers.filter(flyer => flyer.bird);
    const birdPod = { x: 0, y: 0, heading: 0, age: 0 };
    const planeEntries: EntryEdge[] = [];
    const birdEntries: EntryEdge[] = [];
    let width = 0, height = 0;
    let frame: number | null = null;
    let lastTime: number | null = null;
    let paused = reducedMotion.matches;
    let activePlane: Flyer | null = null;
    let nextPlaneIndex = 0, nextFlightIn = .75;
    const trailLifetime = .9;
    const flightMargin = 32;
    const birdMargin = 72;

    function createCrossing(margin: number, remainingEntries: EntryEdge[]) {
      if (!remainingEntries.length) remainingEntries.push("top", "left", "right");
      const edge = remainingEntries.splice(Math.floor(Math.random() * remainingEntries.length), 1)[0];
      const low = .18 + Math.random() * .2;
      const high = .62 + Math.random() * .2;
      const [start, end] = Math.random() < .5 ? [low, high] : [high, low];
      const route = {
        left: { x: -margin, y: height * start, targetX: width + margin, targetY: height * end },
        right: { x: width + margin, y: height * start, targetX: -margin, targetY: height * end },
        top: { x: width * start, y: -margin, targetX: width * end, targetY: height + margin },
      }[edge];
      return {
        x: route.x,
        y: route.y,
        heading: Math.atan2(route.targetY - route.y, route.targetX - route.x),
      };
    }

    function hasExited(x: number, y: number, margin: number) {
      return x < -margin || x > width + margin || y < -margin || y > height + margin;
    }

    function startBirdPod() {
      const route = createCrossing(birdMargin, birdEntries);
      birdPod.x = route.x;
      birdPod.y = route.y;
      birdPod.heading = route.heading;
      birdPod.age = 0;
    }

    function positionBirdPod() {
      const cos = Math.cos(birdPod.heading), sin = Math.sin(birdPod.heading);
      const sway = Math.sin(birdPod.age * .12) * Math.min(24, Math.min(width, height) * .04);
      birds.forEach((bird, index) => {
        const offset = birdOffsets[index];
        bird.x = birdPod.x + offset.x * cos - (offset.y + sway) * sin;
        bird.y = birdPod.y + offset.x * sin + (offset.y + sway) * cos;
      });
    }

    function startFlight() {
      activePlane = planes[nextPlaneIndex];
      nextPlaneIndex = (nextPlaneIndex + 1) % planes.length;
      const route = createCrossing(flightMargin, planeEntries);
      activePlane.x = route.x;
      activePlane.y = route.y;
      activePlane.heading = route.heading;
      activePlane.lastTrailAge = activePlane.age;
    }

    function render() {
      flyers.forEach(flyer => {
        flyer.element.hidden = !flyer.bird && flyer !== activePlane;
        if (flyer.bird) {
          const wings = birdFrames[Math.floor(flyer.age * 6 + flyer.phase) % birdFrames.length];
          if (flyer.element.textContent !== wings) flyer.element.textContent = wings;
        }
        const rotation = flyer.bird
          ? Math.sin(flyer.age * .2 + flyer.phase) * 4
          : flyer.heading * 180 / Math.PI;
        flyer.element.style.transform = `translate(${flyer.x}px, ${flyer.y}px) translate(-50%, -50%) rotate(${rotation}deg)`;
        flyer.trail.forEach(point => {
          point.element.style.opacity = String((1 - (flyer.age - point.bornAt) / trailLifetime) * .7);
        });
      });
    }

    function fit() {
      const bounds = sky.getBoundingClientRect();
      if (width === bounds.width && height === bounds.height) return;
      width = bounds.width;
      height = bounds.height;
      activePlane = null;
      nextFlightIn = .75;
      startBirdPod();
      flyers.forEach(flyer => {
        flyer.age = 0;
        flyer.x = flyer.startX * width;
        flyer.y = flyer.startY * height;
        flyer.heading = 0;
        flyer.trail.forEach(point => point.element.remove());
        flyer.trail = [];
        flyer.lastTrailAge = 0;
        flyer.element.hidden = false;
        flyer.tailOffset = flyer.element.offsetHeight / 2 + 5;
      });
      positionBirdPod();
      render();
    }

    function tick(time: number) {
      frame = null;
      if (paused || document.hidden) { lastTime = null; return; }
      const dt = lastTime === null ? 0 : Math.min((time - lastTime) / 1000, .05);
      lastTime = time;
      if (activePlane === null) {
        nextFlightIn -= dt;
        if (nextFlightIn <= 0) startFlight();
      }
      birdPod.age += dt;
      birdPod.x += Math.cos(birdPod.heading) * birds[0].speed * dt;
      birdPod.y += Math.sin(birdPod.heading) * birds[0].speed * dt;
      if (hasExited(birdPod.x, birdPod.y, birdMargin)) startBirdPod();
      positionBirdPod();
      flyers.forEach(flyer => {
        flyer.age += dt;
        if (flyer === activePlane) {
          flyer.x += Math.cos(flyer.heading) * flyer.speed * dt;
          flyer.y += Math.sin(flyer.heading) * flyer.speed * dt;
          if (hasExited(flyer.x, flyer.y, flightMargin)) {
            activePlane = null;
            nextFlightIn = 5 + Math.random() * 4;
          }
        }
        while (flyer.trail.length && flyer.age - flyer.trail[0].bornAt >= trailLifetime) {
          flyer.trail[0].element.remove();
          flyer.trail.shift();
        }
        if (flyer === activePlane && flyer.age - flyer.lastTrailAge >= .06) {
          const dot = document.createElement("span");
          dot.className = styles.trail;
          dot.textContent = ".";
          const x = flyer.x - Math.cos(flyer.heading) * flyer.tailOffset;
          const y = flyer.y - Math.sin(flyer.heading) * flyer.tailOffset;
          dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
          sky.insertBefore(dot, flyer.element);
          flyer.trail.push({ element: dot, bornAt: flyer.age });
          flyer.lastTrailAge = flyer.age;
        }
      });
      render();
      frame = requestAnimationFrame(tick);
    }

    function syncMotion() {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
      lastTime = null;
      sky.classList.toggle(styles.paused, paused);
      motionButton.textContent = paused ? "Resume motion" : "Pause motion";
      motionButton.setAttribute("aria-pressed", String(paused));
      if (!paused && !document.hidden) frame = requestAnimationFrame(tick);
    }

    function toggleMotion() {
      paused = !paused;
      syncMotion();
    }

    function changeMotionPreference(event: MediaQueryListEvent) {
      paused = event.matches;
      syncMotion();
    }

    motionButton.addEventListener("click", toggleMotion);
    reducedMotion.addEventListener("change", changeMotionPreference);
    document.addEventListener("visibilitychange", syncMotion);
    const observer = new ResizeObserver(fit);
    observer.observe(sky);
    fit();
    syncMotion();

    return () => {
      observer.disconnect();
      motionButton.removeEventListener("click", toggleMotion);
      reducedMotion.removeEventListener("change", changeMotionPreference);
      document.removeEventListener("visibilitychange", syncMotion);
      if (frame !== null) cancelAnimationFrame(frame);
      flyers.forEach(flyer => flyer.trail.forEach(point => point.element.remove()));
      sky.classList.remove(styles.paused);
    };
  }, []);

  return (
    <div className={styles.scene}>
      <div className={styles.sky} ref={skyRef} aria-hidden="true">
        <pre className={`${styles.cloud} ${styles.cloudOne}`}>{`        .----.
    .--(      )--.
 .-(              ).
(___________________)`}</pre>
        <pre className={`${styles.cloud} ${styles.cloudTwo}`}>{`             .----.
        .---(      )--.
    .--(              )---.
 .-(                      ).
(___________________________)`}</pre>
        <pre className={`${styles.cloud} ${styles.cloudThree}`}>{`      .---.
  .--(     )--.
 (             )
  '-----------'`}</pre>
        {planeSpeeds.map((speed, index) => (
          <pre
            key={speed}
            className={styles.aircraft}
            data-flyer="plane"
            data-x={[.16, .83, .73][index]}
            data-y={[.27, .64, .13][index]}
            data-speed={speed}
            hidden
          >{"\u2708\uFE0E"}</pre>
        ))}
        {birdOffsets.map((_, index) => (
          <span
            key={index}
            className={styles.bird}
            data-flyer="bird"
            data-x={[.34, .39, .43][index]}
            data-y={[.32, .38, .44][index]}
            data-speed="20"
          >{birdFrames[index]}</span>
        ))}
      </div>
      <main className={styles.content}>
        {children}
        <footer>
          <a href="https://github.com/yeojunh" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/yeojun/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <button ref={motionRef} type="button" aria-pressed="false">Pause motion</button>
        </footer>
      </main>
    </div>
  );
}
