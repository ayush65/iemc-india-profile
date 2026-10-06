"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  target: number;
  suffix: string;
  label: string;
};

/**
 * Count-up metric that starts when the card scrolls into view
 * (IntersectionObserver), mirroring the original site behaviour.
 */
export function StatCounter({ target, suffix, label }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          instance.disconnect();

          // Respect reduced-motion: show the final figure immediately.
          if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ) {
            setValue(target);
            return;
          }

          const duration = 1800;
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;
          let current = 0;

          const timer = window.setInterval(() => {
            current += increment;
            if (current >= target) {
              setValue(target);
              window.clearInterval(timer);
            } else {
              setValue(Math.floor(current));
            }
          }, stepTime);
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      <span className="font-display text-[2.25rem] font-extrabold text-primary">
        {value}
      </span>
      <span className="font-display text-[1.75rem] font-bold text-accent">{suffix}</span>
      <span className="block text-sm font-medium text-slate-500">{label}</span>
    </div>
  );
}
