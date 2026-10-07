import {
  capabilities,
  industries,
  processSteps,
  qualityPillars,
  whyIEMC,
} from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

/* 02 — What we do, as an engineering system rather than generic cards */
export function Capabilities() {
  return (
    <section id="capabilities" className="section scroll-mt-24 bg-slate-50">
      <div className="container-page">
        <SectionHeading tag="02 · Engineering Capability" title="What Makes Us Precise" />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <StaggerItem key={cap.title} className="h-full">
              <article className="h-full border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md">
                <span className="mb-4 block font-display text-sm font-bold tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 font-display text-lg text-primary">{cap.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-slate-500">{cap.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* 05 — Industries served (editorial numbered rows) */
export function Industries() {
  return (
    <section id="industries" className="section scroll-mt-24 bg-white">
      <div className="container-page">
        <SectionHeading tag="04 · Applications" title="Industries We Serve" />
        <ul className="divide-y divide-slate-200 border-y border-slate-200">
          {industries.map((industry, i) => (
            <Reveal key={industry} y={18}>
              <li className="group flex items-baseline gap-6 py-5 transition-colors hover:bg-slate-50">
                <span className="font-display text-sm font-bold tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl font-semibold tracking-tight text-primary transition-colors group-hover:text-accent md:text-2xl">
                  {industry}
                </span>
                <span aria-hidden="true" className="ml-auto h-2 w-2 rotate-45 border-t-2 border-r-2 border-slate-300 transition group-hover:translate-x-1 group-hover:border-accent" />
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 06 — Quality as a brand pillar */
export function Quality() {
  return (
    <section id="quality" className="section scroll-mt-24 bg-primary bg-grid-dark text-white">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-amber-400">
              05 · Quality
            </span>
            <h2 className="font-display text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl">
              Precision isn&apos;t a feature.
              <br />
              It&apos;s our <span className="text-accent">standard.</span>
            </h2>
            <p className="mt-6 max-w-[520px] text-lg text-slate-400">
              ISO 9001:2015 certified processes, Six Sigma-disciplined execution,
              and automated inspection — engineered into every unit we deliver.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {qualityPillars.map((pillar) => (
              <li
                key={pillar}
                className="border border-white/10 bg-white/5 p-5 text-sm font-medium text-slate-200 transition hover:border-accent/60 hover:bg-white/10"
              >
                {pillar}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* 09 — Engineering story / process timeline */
export function Process() {
  return (
    <section id="process" className="section scroll-mt-24 bg-white">
      <div className="container-page">
        <SectionHeading tag="07 · How We Build" title="Our Engineering Process" />
        <Stagger className="grid gap-6 md:grid-cols-5" stagger={0.1}>
          {processSteps.map((step, i) => (
            <StaggerItem key={step.title} className="h-full">
              <div className="h-full border-l-2 border-slate-200 pl-5 transition-colors hover:border-accent">
                <span className="font-display text-sm font-bold tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg text-primary">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{step.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* 11 — Why IEMC */
export function WhyIEMC() {
  return (
    <section id="why-iemc" className="section scroll-mt-24 bg-slate-100">
      <div className="container-page">
        <SectionHeading tag="09 · Why IEMC" title="Why Industrial Buyers Choose Us" />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyIEMC.map((item, i) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="h-full border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_36px_-14px_rgba(20,23,28,0.2)]">
                <span className="mb-4 block font-display text-sm font-bold tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 font-display text-lg text-primary">{item.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-slate-500">{item.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
