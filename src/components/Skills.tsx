"use client";

import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Java", "Spring Boot", "Django"],
    gradient: "from-indigo-500/20 to-indigo-600/5",
    border: "border-indigo-500/20",
    dot: "bg-indigo-500",
    chipHover: "hover:border-indigo-400/40 hover:text-indigo-300",
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart"],
    gradient: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
    dot: "bg-purple-500",
    chipHover: "hover:border-purple-400/40 hover:text-purple-300",
  },
  {
    title: "Bases de datos",
    items: ["PostgreSQL", "MongoDB", "Supabase", "MySQL", "Oracle Database"],
    gradient: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/20",
    dot: "bg-cyan-500",
    chipHover: "hover:border-cyan-400/40 hover:text-cyan-300",
  },
  {
    title: "IA",
    items: ["Prompt Engineering", "Groq API"],
    gradient: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/20",
    dot: "bg-amber-500",
    chipHover: "hover:border-amber-400/40 hover:text-amber-300",
  },
  {
    title: "Herramientas",
    items: ["Git", "GitHub", "Postman", "Swagger", "Android Studio", "Render", "Firebase"],
    gradient: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20",
    dot: "bg-emerald-500",
    chipHover: "hover:border-emerald-400/40 hover:text-emerald-300",
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-heading font-bold text-text-bright mb-10 text-center">
            Habilidades Técnicas
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.title} delay={i * 0.08}>
              <div
                className={`rounded-xl border ${group.border} bg-gradient-to-br ${group.gradient} p-5 hover:shadow-lg hover:shadow-black/10 transition-all duration-200 h-full`}
              >
                <h3 className="font-semibold text-text-bright mb-3 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${group.dot}`} />
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1 bg-surface/60 text-slate-300 text-sm rounded-full border border-border ${group.chipHover} transition-all duration-200 cursor-default`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
