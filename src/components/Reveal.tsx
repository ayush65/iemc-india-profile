"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  /** Seconds before the animation starts. */
  delay?: number;
  /** Initial vertical offset in px. */
  y?: number;
  /** Initial scale (used for image/card reveals). */
  scale?: number;
  className?: string;
  /** Re-run every time the element re-enters the viewport. */
  repeat?: boolean;
};

/**
 * Shared scroll-into-view reveal (fade + rise). Respects reduced-motion.
 * Wraps server-rendered children, so sections stay server components.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  scale = 1,
  className,
  repeat = false,
}: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: !repeat, amount: 0.15, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Staggered children wrapper — each direct child fades/rises in sequence. */
export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Child of <Stagger/> — inherits the parent's stagger timing. */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Gentle looping float for badges/callouts. */
export function Float({
  children,
  className,
  distance = 12,
  duration = 4,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
