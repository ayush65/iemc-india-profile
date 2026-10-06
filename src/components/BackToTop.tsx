"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Floating scroll-to-top control, visible once the user scrolls past the hero. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-accent ${
        visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={19} aria-hidden="true" />
    </button>
  );
}
