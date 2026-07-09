"use client";

import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Java", "Spring Boot", "Django"],
    color: "blue",
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart"],
    color: "purple",
  },
  {
    title: "Bases de datos",
    items: ["PostgreSQL", "MongoDB", "Supabase", "MySQL", "Oracle Database"],
    color: "green",
  },
  {
    title: "IA",
    items: ["Prompt Engineering", "Groq API"],
    color: "amber",
  },
  {
    title: "Herramientas",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
      "Android Studio",
      "Render",
      "Firebase",
    ],
    color: "gray",
  },
];

const colorMap: Record<string, { bg: string; border: string; dot: string }> = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-100",
    dot: "bg-blue-500",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-100",
    dot: "bg-purple-500",
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-100",
    dot: "bg-green-500",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-100",
    dot: "bg-amber-500",
  },
  gray: {
    bg: "bg-gray-50",
    border: "border-gray-200",
    dot: "bg-gray-500",
  },
};

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Habilidades Técnicas
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const colors = colorMap[group.color];
            return (
              <AnimatedSection key={group.title} delay={i * 0.08}>
                <div
                  className={`rounded-xl border ${colors.border} ${colors.bg} p-5 hover:shadow-md transition-shadow duration-200 h-full`}
                >
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${colors.dot}`}
                    />
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all duration-200 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
