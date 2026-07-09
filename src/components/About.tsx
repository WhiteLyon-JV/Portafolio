"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Sobre mí
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
            Soy estudiante de Analista Programador Computacional en Duoc UC, con
            el Portafolio de Título aprobado, lo que me habilita para iniciar mi
            Práctica Profesional de forma inmediata. Me especializo en desarrollo
            Full Stack, con experiencia práctica tanto en backend como en mobile:
            desde el diseño de la interfaz y la lógica de negocio, hasta la
            integración de IA y el despliegue en producción. Busco mi primera
            Práctica Profesional como Backend Developer, Analista Programador o
            Desarrollador Android, priorizando modalidad remota.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
