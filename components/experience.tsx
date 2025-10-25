"use client";

type Item = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export default function Experience() {
  // Derived from your finalized CV (concise, impact-focused, correct dates)
  const items: Item[] = [
    {
      role: "Co-Founder / Backend Lead",
      company: "UzhubTeam",
      period: "Jun 2025 – Oct 2025",
      description:
        "Led backend and Filament Admin for a multi-service platform. Prepared modular/multi-tenant structure and shipped docs for the mobile team.",
      highlights: [
        "Filament Admin, role/permissions",
        "Redis caching, MySQL tuning",
        "Linux VPS deploy, CI/CD",
      ],
    },
    {
      role: "Backend Developer — ReddeR Taxi",
      company: "Redder LLC",
      period: "Sep 2024 – Jul 2025",
      description:
        "Real-time ride-hailing backend serving 3,000+ riders and 1,000 drivers. Focus on realtime channels, performance, and secure APIs.",
      highlights: [
        "Laravel Reverb (WebSockets), private channel auth",
        "Queries 45→6; p95 900 ms→250 ms (eager + Redis)",
        "RBAC, idempotency, default pagination",
        "GitHub Actions CI/CD, Nginx/SSL, queue workers",
      ],
    },
    {
      role: "Backend Developer — ReddeR Logistics",
      company: "Redder LLC",
      period: "Oct 2023 – Sep 2024",
      description:
        "Logistics backend (orders, pricing, driver assignment) with queues/events and safe, zero-downtime releases.",
      highlights: [
        "Queues & events (Horizon)",
        "Safe migrations, zero-downtime deploys",
        "Swagger & Postman for mobile integration",
      ],
    },
    {
      role: "Software Engineer",
      company: "Ekspress Elektron Servis, Andijan",
      period: "Feb 2022 – Oct 2023",
      description:
        "Modernized internal systems and automated paper workflows; delivered a maintainable web stack for the company.",
      highlights: [
        "≈70% efficiency improvement via automation",
        "Laravel + MySQL refactors for stability",
        "Company website build & maintenance",
      ],
    },
    {
      role: "Backend Developer",
      company: "Digital City, Andijan",
      period: "Mar 2022 – Dec 2022",
      description:
        "Built multilingual admin panel and REST APIs for the Skerio startup, including role-based access control.",
      highlights: ["RBAC", "REST APIs for web/mobile"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Experience</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
        </div>

        <div className="space-y-8">
          {items.map((exp, idx) => (
            <article key={`${exp.company}-${exp.period}`} className="relative pl-8 pb-10">
              {/* timeline vertical line */}
              {idx !== items.length - 1 && (
                <div className="absolute left-[7px] top-4 w-0.5 h-[calc(100%-0.5rem)] bg-gradient-to-b from-sky-400 to-transparent" />
              )}
              {/* timeline dot */}
              <div className="absolute left-0 top-1.5 w-4 h-4 bg-sky-400 rounded-full ring-4 ring-background" />

              <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-xl font-semibold">
                  {exp.role} <span className="text-sky-500">·</span>{" "}
                  <span className="text-sky-400">{exp.company}</span>
                </h3>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </header>

              <p className="mt-2 text-muted-foreground">{exp.description}</p>

              <ul className="mt-3 space-y-1">
                {exp.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
