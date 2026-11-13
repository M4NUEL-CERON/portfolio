"use client";

import { useEffect } from "react";

// Runs each transit line's train once when it scrolls into view, so touch screens (no hover) see it too.
export function RideOnScroll() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("in-view");
          io.unobserve(e.target);
        }
      },
      { threshold: 0.6 },
    );
    document.querySelectorAll(".line").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
