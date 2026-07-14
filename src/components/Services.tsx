"use client";

import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Barbería El Roble",
    type: "Landing Page",
    description:
      "Landing page profesional para barbería en Providencia, Santiago. Incluye galería de trabajos, servicios con precios, testimonios de clientes, formulario de reserva y botón de WhatsApp.",
    tech: ["HTML", "CSS", "JavaScript", "Cloudflare Workers"],
    url: "https://barberia-el-roble.javier05jean96.workers.dev/",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-heading font-bold text-text-bright mb-2 text-center">
            Servicios Freelance
          </h2>
          <p className="text-sm text-text-muted text-center mb-10">
            Landing pages y sitios web para negocios y emprendedores
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-background rounded-2xl border border-border overflow-hidden hover:border-indigo-500/30 hover:shadow-lg hover:shadow-black/20 transition-all duration-300 group h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/20">
                      {service.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-bright mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs bg-surface/60 text-slate-400 rounded-full border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Ver sitio →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
