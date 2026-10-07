import { Compass, Target } from "lucide-react";

import { aboutCards, visionMission } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="section scroll-mt-24 bg-white">
      <div className="container-page">
        {/* Editorial split: large statement + introduction */}
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-3.5 py-1.5 text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-accent-hover">
              01 · Who We Are
            </span>
            <h2 className="font-display text-4xl font-bold leading-[1.15] tracking-tight text-primary md:text-5xl">
              Built around precision.
              <br />
              Driven by <span className="text-accent">engineering.</span>
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              IEMC India Pvt. Ltd. is a certified engineering organization
              headquartered and deep-rooted in Hosur, Tamil Nadu — delivering
              complete product lifecycle engineering for global manufacturing.
            </p>
            <p>
              From research and prototype conception through precision
              manufacturing to turnkey commissioning, we build industrial
              systems, customized automation machinery, and robust engineering
              solutions to international benchmarks.
            </p>
            <div className="tech-corner border border-slate-200 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Industries served
              </p>
              <p className="mt-2 text-base text-slate-700">
                Tier-1 automotive · Heavy machinery · Renewable energy · Aerospace
              </p>
            </div>
          </div>
        </div>

        {/* Capability value cards (keep data-driven) */}
        <Stagger className="mt-16 grid gap-8 md:grid-cols-3">
          {aboutCards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <AboutCard card={card} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function AboutCard({ card }: { card: (typeof aboutCards)[number] }) {
  return (
    <article
      className={`h-full rounded-xl border p-9 transition duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-[0_18px_44px_-14px_rgba(0,102,245,0.28)] ${
        card.highlight
          ? "border-none bg-gradient-to-br from-primary to-primary-soft text-white"
          : "border-slate-200 bg-white"
      }`}
    >
      <h3 className="mb-3 text-xl">{card.title}</h3>
      <p
        className={`text-[0.95rem] leading-relaxed ${
          card.highlight ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {card.body}
      </p>
    </article>
  );
}

export function VisionMission() {
  return (
    <section id="vision-mission" className="section scroll-mt-24 bg-slate-100">
      <div className="container-page">
        <SectionHeading tag="06 · Strategic Direction" title="Vision & Mission" />

        <Stagger className="grid gap-10 md:grid-cols-2" stagger={0.15}>
          {/* Vision — dark panel */}
          <StaggerItem className="h-full">
            <article className="h-full rounded-[20px] bg-primary p-9 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(0,0,0,0.4)] md:p-12">
              <div className="mb-6 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-amber-400">
                  <Compass size={24} aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl">{visionMission.vision.title}</h3>
              </div>
              <p className="mb-6 text-lg text-slate-300">{visionMission.vision.body}</p>
              <ul className="space-y-3">
                {visionMission.vision.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-[0.95rem] text-slate-300">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>

          {/* Mission — light panel */}
          <StaggerItem className="h-full">
            <article className="h-full rounded-[20px] border-t-[5px] border-t-accent bg-white p-9 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(10,25,49,0.22)] md:p-12">
              <div className="mb-6 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-slate-100 text-accent">
                  <Target size={24} aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl text-primary">{visionMission.mission.title}</h3>
              </div>
              <p className="mb-6 text-lg text-slate-700">{visionMission.mission.body}</p>
              <ul className="space-y-3">
                {visionMission.mission.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-[0.95rem] text-slate-700">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
