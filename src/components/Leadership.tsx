import Image from "next/image";
import { Mail } from "lucide-react";

import { company, getInitials, team } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";
import { LinkedInIcon } from "@/components/BrandIcons";
import { Stagger, StaggerItem } from "@/components/Reveal";

export function Leadership() {
  return (
    <section id="team" className="section scroll-mt-24 bg-slate-50">
      <div className="container-page">
        <SectionHeading
          tag="Executive Council"
          title="Meet Our Leadership Team"
          subtitle="The experienced engineering minds driving strategic vision at IEMC India."
        />

        <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <StaggerItem key={member.name} className="h-full">
              <article className="group h-full overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <div className="h-[260px] overflow-hidden bg-slate-200">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={500}
                      height={260}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="grid h-full w-full place-items-center bg-gradient-to-br from-primary to-accent font-display text-5xl font-bold text-white transition-transform duration-500 group-hover:scale-105"
                      aria-hidden="true"
                    >
                      {getInitials(member.name)}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg text-primary transition-colors group-hover:text-accent">{member.name}</h3>
                  <span className="mb-3 block text-sm font-semibold text-accent">
                    {member.role}
                  </span>
                  <p className="mb-4 text-sm leading-relaxed text-slate-500">{member.bio}</p>

                  <div className="flex items-center gap-3">
                    <a
                      href={member.linkedin}
                      aria-label={`${member.name} on LinkedIn`}
                      className="text-slate-500 transition hover:text-accent"
                    >
                      <LinkedInIcon size={18} />
                    </a>
                    <a
                      href={`mailto:${company.email}`}
                      aria-label={`Email ${company.name}`}
                      className="text-slate-500 transition hover:text-accent"
                    >
                      <Mail size={18} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
