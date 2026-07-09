"use client";

import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    title: "Staff de Apoyo",
    company: "Municipalidad de Pirque",
    date: "Abril 2025",
    description:
      "Apoyo logístico y operativo en la organización de eventos y actividades municipales, coordinando equipos de trabajo bajo plazos ajustados.",
  },
  {
    title: "Auxiliar administrativo",
    company: "JJS, Autónomo",
    date: "Ene. 2022 – May. 2023",
    description:
      "Apoyo administrativo autónomo, gestionando tareas operativas y de organización para clientes particulares.",
  },
];

const education = [
  {
    title: "Analista Programador Computacional",
    institution: "Duoc UC",
    date: "2024 – 2026",
  },
  {
    title: "Certificado en Fundamentos de Python 1",
    institution: "Cisco Networking Academy",
    date: "2024",
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface opacity-30" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-heading font-bold text-text-bright mb-10 text-center">
            Experiencia
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-cyan-500/50 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 relative z-10" />
                  </div>
                  <div className="flex-1 bg-surface rounded-xl border border-border p-5 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-black/10 transition-all duration-200">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                      <h3 className="font-semibold text-text-bright">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-indigo-400 font-medium">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-sm text-text-muted/60 mb-2">{exp.date}</p>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.2}>
          <h2 className="text-3xl font-heading font-bold text-text-bright mt-16 mb-10 text-center">
            Educación
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <AnimatedSection key={i} delay={0.25 + i * 0.08}>
              <div className="bg-surface rounded-xl border border-border p-5 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-black/10 transition-all duration-200">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-semibold text-text-bright">{edu.title}</h3>
                  <span className="text-sm text-cyan-400 font-medium">
                    {edu.institution}
                  </span>
                </div>
                <p className="text-sm text-text-muted/60 mt-1">{edu.date}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
