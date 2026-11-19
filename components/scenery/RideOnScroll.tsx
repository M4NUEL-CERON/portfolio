"use client";

import { useEffect } from "react";

// Runs each transit line's train (and lights each heading's sign) once when it scrolls into view, so touch screens see it too.
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
    document.querySelectorAll(".line, h2").forEach((el) => io.observe(el));

    // Looping weather and lights pause while their city is off screen.
    const idle = new IntersectionObserver((entries) => {
      for (const e of entries) e.target.classList.toggle("idle", !e.isIntersecting);
    });
    document.querySelectorAll(".hero, .close").forEach((el) => idle.observe(el));
    return () => { io.disconnect(); idle.disconnect(); };
  }, []);
  return null;
}
