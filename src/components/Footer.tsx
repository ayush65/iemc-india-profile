import { company, footer } from "@/lib/data";
import { CurrentYear } from "@/components/CurrentYear";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary py-10 text-white">
      <div className="container-page flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <h3 className="text-lg">{footer.brand}</h3>
          <p className="text-sm text-slate-400">{footer.tagline}</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-slate-400 md:items-end">
          <a
            href={`mailto:${company.email}`}
            className="transition hover:text-white"
          >
            {company.email}
          </a>
          <p>
            © <CurrentYear /> {company.name} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
