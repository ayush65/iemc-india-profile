import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

type Props = {
  tag: string;
  title: string;
  subtitle?: string;
  /** "dark" is used on the navy contact panel. */
  tone?: "light" | "dark";
};

/**
 * Shared section heading: eyebrow tag, title, optional subtitle and the
 * accent bar used throughout the site.
 */
export function SectionHeading({ tag, title, subtitle, tone = "light" }: Props) {
  const isDark = tone === "dark";

  return (
    <Reveal>
      <header className="mb-14 text-center">
        <SectionTag tone={tone}>{tag}</SectionTag>
        <h2
          className={`text-3xl font-bold md:text-[2.25rem] ${
            isDark ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </h2>
        {subtitle ? (
          <p
            className={`mt-2 text-lg ${isDark ? "text-slate-400" : "text-slate-500"}`}
          >
            {subtitle}
          </p>
        ) : null}
        <div
          aria-hidden="true"
          className={`anim-bar mx-auto mt-4 h-1 w-[50px] rounded-full ${
            isDark ? "bg-amber-400" : "bg-accent"
          }`}
        />
      </header>
    </Reveal>
  );
}

export function SectionTag({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  if (tone === "dark") {
    return (
      <span className="mb-3 inline-block text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-amber-400">
        {children}
      </span>
    );
  }

  return (
    <span className="mb-3 inline-block rounded-full bg-accent/10 px-3.5 py-1.5 text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-accent-hover">
      {children}
    </span>
  );
}
