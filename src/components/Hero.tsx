import Image from "next/image";
import { ArrowRight, Cpu } from "lucide-react";

import { hero, stats } from "@/lib/data";
import { StatCounter } from "@/components/StatCounter";
import { Float } from "@/components/Reveal";

/**
 * Hero entrance animations use pure CSS (`.anim-pop`) rather than JS reveals:
 * they start at first paint — before hydration — so the LCP headline is never
 * left invisible waiting on JavaScript.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-white to-slate-50 pb-20 pt-[4.5rem]"
    >
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ---------------------------------------------------------- copy */}
        <div className="text-center lg:text-left">
          <div className="anim-pop" style={{ animationDelay: "0.05s" }}>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#e0edff] px-3.5 py-1.5 text-sm font-semibold text-accent-hover">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              {hero.badge}
            </p>
          </div>

          {/* Static (no entrance animation): this is the LCP element — it must
              paint at full opacity on the very first frame. */}
          <div>
            <h1 className="mb-5 text-[2.25rem] font-bold tracking-tight text-primary sm:text-5xl lg:text-[3.25rem]">
              {hero.titleLine1}
              <br />
              {hero.titleLine2} <span className="text-accent">{hero.titleAccent}</span>.
            </h1>
          </div>

          <div className="anim-pop" style={{ animationDelay: "0.25s" }}>
            <p className="mx-auto mb-8 max-w-[540px] text-lg text-slate-500 lg:mx-0">
              {hero.description}
            </p>
          </div>

          <div className="anim-pop mb-14 flex flex-wrap justify-center gap-4 lg:justify-start" style={{ animationDelay: "0.35s" }}>
            <a href="#products" className="btn btn-primary">
              Explore Products
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href="#about" className="btn btn-outline">
              Corporate Profile
            </a>
          </div>

          <div className="anim-pop grid grid-cols-3 gap-6 border-t border-slate-200 pt-8" style={{ animationDelay: "0.45s" }}>
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------- visual */}
        <div className="anim-pop" style={{ animationDelay: "0.2s" }}>
          <div className="group relative">
            {/* decorative offset backdrop */}
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 h-full w-full rounded-[20px] bg-gradient-to-br from-accent/20 to-primary/10 transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1"
            />
            <div className="relative overflow-hidden rounded-[20px] shadow-xl">
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
