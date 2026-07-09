"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const techChips = [
  "Flutter",
  "Dart",
  "Provider",
  "Firebase",
  "Python",
  "FastAPI",
  "Supabase",
  "PostgreSQL",
  "Groq API",
  "Render",
  "Git",
  "GitHub",
];

export default function Project() {
  return (
    <section id="proyecto" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface opacity-50" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-heading font-bold text-text-bright mb-2 text-center">
            Proyecto Destacado
          </h2>
          <p className="text-sm text-text-muted text-center mb-10">
            Portafolio de Título, Duoc UC
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-surface rounded-2xl shadow-xl shadow-black/20 border border-border overflow-hidden">
            <div className="w-full bg-gray-900 flex items-center justify-center py-6 sm:py-8">
              <Image
                src="/raccu-foto.webp"
                alt="Raccu — App de Control Parental Gamificada"
                width={280}
                height={280}
                className="w-40 sm:w-56 h-auto"
                priority
              />
            </div>

            <div className="px-6 sm:px-8 pt-4">
              <a
                href="https://drive.google.com/file/d/1MktmDbkyDPdL8WdG8mmwSEqRGkw9Q_YD/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ver video demo →
              </a>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-heading font-bold text-text-bright mb-2">
                Raccu — App de Control Parental Gamificada
              </h3>
              <p className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Full Stack + IA
              </p>
              <p className="text-text-muted mb-8 leading-relaxed">
                Aplicación Android de control parental que convierte el límite de
                uso de pantalla en un sistema de logros gamificado para niños de 5
                a 15 años, reduciendo el conflicto entre padres e hijos por el uso
                del celular.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-text-bright mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    Frontend (Flutter)
                  </h4>
                  <ul className="space-y-2 text-sm text-text-muted">
                    <li className="flex gap-2">
                      <span className="text-indigo-400 mt-1 shrink-0">•</span>
                      Diseñé y desarrollé la interfaz completa de la app, con dos
                      flujos diferenciados: rol padre y rol hijo.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-400 mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-slate-300">Rol padre:</strong> panel de supervisión en tiempo
                        real, creación y asignación de desafíos con evidencias
                        revisables, tienda de recompensas, gestión de canjes y
                        bloqueo remoto de apps.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-indigo-400 mt-1 shrink-0">•</span>
                      <span>
                        <strong className="text-slate-300">Rol hijo:</strong> resumen de desafíos y puntos,
                        selección de avatar, subida de evidencias, tienda de
                        recompensas y pantalla de bloqueo.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text-bright mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    Backend (FastAPI + Python)
                  </h4>
                  <ul className="space-y-2 text-sm text-text-muted">
                    <li className="flex gap-2">
                      <span className="text-cyan-400 mt-1 shrink-0">•</span>
                      Construí la API REST que gestiona autenticación por roles,
                      desafíos, recompensas y bloqueos.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-400 mt-1 shrink-0">•</span>
                      Implementé bloqueo de apps a nivel de dispositivo (por
                      horario y automático) con monitoreo en tiempo real del uso
                      del menor.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-400 mt-1 shrink-0">•</span>
                      Integré la API de Groq (LLM) mediante prompt engineering
                      para generar desafíos personalizados según edad e intereses
                      del niño.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-400 mt-1 shrink-0">•</span>
                      Gestión de base de datos y autenticación con Supabase,
                      notificaciones push con Firebase, correos transaccionales
                      con Resend, despliegue en Render.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {techChips.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-surface-light/50 text-slate-300 text-sm rounded-full font-medium border border-border hover:border-indigo-400/40 hover:text-indigo-300 hover:shadow-sm hover:shadow-indigo-500/10 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/fernanda270122/mapachesecure-entrega"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  Ver repositorio en GitHub →
                </a>
                <a
                  href="https://raccu.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Ver landing page →
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
