"use client";

import {
  SiPhp,
  SiLaravel,
  SiMysql,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiLinux,
  SiVuedotjs,
} from "react-icons/si";

type Tech = {
  name: string;
  Icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  color?: string;
};

export default function About() {
  const techStack: Tech[] = [
    { name: "PHP",            Icon: SiPhp,            color: "#777BB4" },
    { name: "Laravel",        Icon: SiLaravel,        color: "#FF2D20" },
    { name: "MySQL",          Icon: SiMysql,          color: "#4479A1" },
    { name: "Redis",          Icon: SiRedis,          color: "#DC382D" },
    { name: "Docker",         Icon: SiDocker,         color: "#2496ED" },
    { name: "GitHub Actions", Icon: SiGithubactions,  color: "#2088FF" },
    { name: "Linux",          Icon: SiLinux,          color: "#FCC624" },
    { name: "Vue.js",         Icon: SiVuedotjs,       color: "#42B883" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">About Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Backend Developer with 4 years of experience designing and scaling production-grade systems. Passionate about performance, clean architecture, and automation — specializing in robust APIs and real-time services.
          <br />
          <br />
          Skilled in database optimization, caching, and CI/CD automation, ensuring efficient, maintainable, and scalable deployments.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techStack.map(({ name, Icon, color }) => (
            <div
              key={name}
              className="p-4 rounded-lg bg-background border border-border hover:border-sky-400 hover:bg-sky-400/5 transition-all duration-300
                         flex flex-col items-center justify-center text-center min-h-28"
            >
              <Icon size={32} style={{ color }} className="mx-auto" aria-hidden />
              <p className="mt-2 text-sm font-medium">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
