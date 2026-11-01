"use client";
import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Scroll-driven scenes run for everyone (they only move when the visitor scrolls).
// This flag only switches off motion that runs by itself: ambient drift, loops, inertial scroll.
export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { mulberry32, POWDER } from "./util";

export { gsap, ScrollTrigger };
