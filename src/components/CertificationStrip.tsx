export function CertificationStrip() {
  const pillars = ["QUALITY", "PRECISION", "RELIABILITY", "ENGINEERING"];

  return (
    <section aria-label="Certification and core pillars" className="border-b border-slate-200 bg-white">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-xl font-extrabold tracking-tight text-primary md:text-2xl">
            ISO 9001:2015
          </p>
          <p className="text-sm text-slate-500">Certified Engineering</p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {pillars.map((pillar, index) => (
            <li
              key={pillar}
              className="flex items-center gap-6 text-sm font-bold tracking-[0.2em] text-slate-600"
            >
              {pillar}
              {index < pillars.length - 1 ? (
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
