import Image from "next/image";
import { ArrowRight, Cpu } from "lucide-react";

import { hero, stats } from "@/lib/data";
import { StatCounter } from "@/components/StatCounter";
import { Float } from "@/components/Reveal";

/**
 * Dark industrial hero with a blueprint grid, technical corner marks and a
 * staggered CSS-only entrance (animations never block content visibility).
 */
export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-primary pb-24 pt-20 text-white">
      {/* blueprint grid + technical marks */}
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-primary via-primary-soft/60 to-primary" />
      <div
        aria-hidden="true"
        className="absolute left-6 top-24 hidden h-40 w-40 border border-white/10 md:block"
      />
      <div
        aria-hidden="true"
        className="absolute right-10 top-32 hidden text-[0.65rem] font-bold tracking-[0.3em] text-white/30 md:block"
      >
        IEMC // IND · 635109
      </div>

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ---------------------------------------------------------- copy */}
        <div className="text-center lg:text-left">
          <div className="anim-pop" style={{ animationDelay: "0.05s" }}>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-semibold tracking-wide text-slate-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              {hero.badge}
            </p>
          </div>

          {/* Static: LCP element — paints at full opacity on first frame */}
          <div>
            <h1 className="mb-5 font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Engineering
              <br />
              Precision<span className="text-accent">.</span>
              <span className="mt-2 block text-[1.35rem] font-semibold tracking-[0.14em] text-slate-400 sm:text-2xl lg:text-3xl">
                POWERING INDUSTRIAL GROWTH
              </span>
            </h1>
          </div>

          <div className="anim-pop" style={{ animationDelay: "0.25s" }}>
            <p className="mx-auto mb-8 max-w-[560px] text-lg text-slate-400 lg:mx-0">
              {hero.description}
            </p>
          </div>

          <div className="anim-pop mb-14 flex flex-wrap justify-center gap-4 lg:justify-start" style={{ animationDelay: "0.35s" }}>
            <a href="#products" className="btn btn-primary">
              Explore Products
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="btn border border-white/15 bg-transparent text-white hover:bg-white/10 hover:border-white/30"
            >
              Contact IEMC
            </a>
          </div>

          <div className="anim-pop grid grid-cols-3 gap-6 border-t border-white/10 pt-8" style={{ animationDelay: "0.45s" }}>
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                tone="dark"
              />
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------- visual */}
        <div className="anim-pop" style={{ animationDelay: "0.2s" }}>
          <div className="group relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 h-full w-full rounded-[20px] bg-accent/20 transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1"
            />
            <div className="relative overflow-hidden rounded-[20px] border border-white/10 shadow-2xl">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                width={1000}
                height={480}
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[480px]"
              />
            </div>

            <Float className="absolute bottom-5 left-5">
              <div className="flex items-center gap-3.5 rounded-xl bg-white/95 p-4 shadow-md backdrop-blur-sm">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-white">
                  <Cpu size={20} aria-hidden="true" />
                </span>
                <span>
                  <strong className="block text-sm text-slate-900">{hero.badgeTitle}</strong>
                  <span className="text-xs text-slate-500">{hero.badgeSubtitle}</span>
                </span>
              </div>
            </Float>
          </div>
        </div>
      </div>
    </section>
  );
}
