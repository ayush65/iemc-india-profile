import { Compass, Cog, Globe, ShieldCheck, Target, Check } from "lucide-react";

import { aboutCards, visionMission } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";

const cardIcons = {
  shield: ShieldCheck,
  gears: Cog,
  globe: Globe,
} as const;

export function About() {
  return (
    <section id="about" className="section scroll-mt-24 bg-slate-50">
      <div className="container-page">
        <SectionHeading tag="Who We Are" title="About IEMC India Pvt. Ltd." />

        <Stagger className="grid gap-8 md:grid-cols-3">
          {aboutCards.map((card) => {
            const Icon = cardIcons[card.icon];

            return (
              <StaggerItem key={card.title} className="h-full">
                <article
                  className={`h-full rounded-xl border p-9 transition duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-[0_18px_44px_-14px_rgba(0,102,245,0.28)] ${
                    card.highlight
                      ? "border-none bg-gradient-to-br from-primary to-[#11284d] text-white"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <span
                    className={`mb-6 grid h-[52px] w-[52px] place-items-center rounded-md ${
                      card.highlight
                        ? "bg-white/15 text-amber-400"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <h3 className="mb-3 text-xl">{card.title}</h3>
                  <p
                    className={`text-[0.95rem] leading-relaxed ${
                      card.highlight ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {card.body}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

export function VisionMission() {
  const cards = [
    { ...visionMission.vision, tone: "vision" as const, Icon: Compass },
    { ...visionMission.mission, tone: "mission" as const, Icon: Target },
  ];

  return (
    <section id="vision-mission" className="section scroll-mt-24 bg-slate-100">
      <div className="container-page">
        <SectionHeading tag="Strategic Direction" title="Our Vision & Mission" />

        <Stagger className="grid gap-10 md:grid-cols-2" stagger={0.15}>
          {cards.map(({ tone, Icon, title, body, points }) => (
            <StaggerItem key={tone} className="h-full">
              <article
                className={`h-full rounded-[20px] bg-white p-9 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(10,25,49,0.22)] md:p-12 ${
                  tone === "vision"
                    ? "border-t-[5px] border-t-accent"
                    : "border-t-[5px] border-t-amber-500"
                }`}
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-slate-100 text-primary">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="text-2xl text-primary">{title}</h3>
                </div>

                <p className="mb-6 text-lg text-slate-700">{body}</p>

                <ul className="space-y-3">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-[0.95rem] text-slate-700"
                    >
                      <Check
                        size={17}
                        aria-hidden="true"
                        className="shrink-0 text-emerald-500"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
