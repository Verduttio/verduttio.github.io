import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {
  SiSpringboot, SiSharp, SiFlutter, SiDart, SiCplusplus, SiPython, SiDjango,
  SiDotnet, SiDocker, SiHeroku, SiFastapi, SiAmazonwebservices,
  SiCloudflare, SiReact, SiTypescript, SiVite, SiGoogle
} from "react-icons/si";
import { FaJava, FaDatabase, FaFilePdf } from "react-icons/fa";

type ProjectBadge = {
  label: string;
  className: string;
};

type Project = {
  title: string;
  year: number;
  description: string;
  technologies: React.ReactNode[];
  link?: string;
  tag?: string;
  featured?: boolean;
  badges?: ProjectBadge[];
};

const projects: Project[] = [
  {
    title: "Gdzie Pomoc",
    year: 2026,
    description:
      "Web application created in Feb 2026 to help people quickly find places offering support and make it easier for volunteers to discover where they can help.",
    technologies: [
      <SiPython key="python" />,
      <SiFastapi key="fastapi" />,
      <SiAmazonwebservices key="aws" />,
      <SiCloudflare key="cloudflare" />,
      <SiReact key="react" />,
      <SiTypescript key="typescript" />,
      <SiVite key="vite" />,
    ],
    link: "https://gdzie-pomoc.pl",
    featured: true,
    badges: [
      {
        label: "LIVE",
        className: "bg-emerald-400/15 text-emerald-200 ring-1 ring-emerald-300/40",
      },
      {
        label: "Social impact",
        className: "bg-white/8 text-emerald-100 ring-1 ring-white/12",
      },
    ],
  },
  {
    title: "Dominican Studentate — Resource Management System",
    year: 2024,
    description:
      "Operational planning system for the Dominican Studentate with rule assignment, conflict detection, obstacle reporting, real-time visibility into who can perform each task, PDF schedule generation, and Google OAuth2 integration.",
    technologies: [
      <FaJava key="java" />,
      <SiSpringboot key="springboot" />,
      <SiDocker key="docker" />,
      <FaFilePdf key="pdf" />,
      <SiGoogle key="google" />,
    ],
    featured: true,
    badges: [
      {
        label: "LIVE",
        className: "bg-emerald-400/15 text-emerald-200 ring-1 ring-emerald-300/40",
      },
      {
        label: "Internal",
        className: "bg-white/8 text-white/80 ring-1 ring-white/12",
      },
    ],
  },
  { title: "My Movie Book", year: 2022, description: "Full stack app offering management of your favorite movies",
    technologies: [<FaJava key="java" />, <SiSpringboot key="springboot" />, <SiDocker key="docker" />, <SiHeroku key="heroku" />],
    link: "https://github.com/Verduttio/My-movie-book" },
  {
    title: "Airport Database Design",
    year: 2022,
    description:
      "SQL database project modeling airport operations, including flights, passengers, aircraft, and scheduling.",
    technologies: [<FaDatabase key="database" />],
    link: "https://github.com/Verduttio/Port-lotniczy--Baza-danych"
  },
  { title: "Distributed Tracing", year: 2022, description: "Basic backend movie app based on microservices architecture to show the logic of distributed tracing",
    technologies: [<FaJava key="java" />, <SiSpringboot key="springboot" />, <SiDocker key="docker" />],
    link: "https://github.com/Verduttio/Distributed-tracing-in-Java" },
  { title: "Gyms Management App", year: 2022, description: "Full stack app offering management of your gyms. Tech in .NET and Blazor. Java version in Spring Boot available on Gitlab",
    technologies: [<SiSharp key="csharp" />, <SiDotnet key="dotnet" />, <FaJava key="java" />, <SiSpringboot key="spring" />],
    link: "https://github.com/Verduttio/Gyms-management-app" },
  { title: "Exam timer", year: 2021, description: "Exam timer helps to manage time during an exam or a test. It shows the remaining time for each exercise.",
    technologies: [<SiFlutter key="flutter" />, <SiDart key="dart" />],
    link: "https://github.com/Verduttio/Exam-timer" },
  { title: "Spaceflight simulator", year: 2023, description: "Build your own rocket and launch it. Control angle, engines power, and separate stages.",
    technologies: [<SiCplusplus key="cpp" />, <SiDocker key="docker" />],
    link: "https://github.com/Verduttio/Spaceflight-simulator" },
  { title: "Airport management system", year: 2022, description: "Very simple boarding system for airports",
    technologies: [<SiPython key="py" />, <SiDjango key="django" />],
    link: "https://github.com/Verduttio/airport-management-system" },
];

const Projects: React.FC = () => {
  const orderedProjects = [
    ...projects.filter((project) => project.featured),
    ...projects
      .filter((project) => !project.featured)
      .sort((a, b) => b.year - a.year),
  ];

  return (
    <section id="projects" className="section-offset">
      <h2 className="text-xl font-semibold text-center">My projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {orderedProjects.map((p) => {
          const cardClassName = [
            "block rounded-2xl bg-[#243b55]/95 p-5 shadow-[0_10px_20px_rgba(0,0,0,.2)] transition-transform duration-300",
            p.link
              ? "group cursor-pointer hover:-translate-y-2 hover:shadow-[0_15px_25px_rgba(0,0,0,.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40"
              : "",
            p.featured
              ? "sm:col-span-2 lg:col-span-3 ring-1 ring-emerald-300/35 bg-[linear-gradient(180deg,rgba(36,59,85,.98),rgba(19,34,52,.98))]"
              : "",
          ].join(" ");

          const content = (
            <>
              {p.badges && p.badges.length > 0 ? (
                <div className="mb-3 flex flex-wrap gap-2">
                  {p.badges.map((badge) => (
                    <span
                      key={badge.label}
                      className={[
                        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
                        badge.className,
                      ].join(" ")}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              ) : p.tag ? (
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200/90">
                  {p.tag}
                </p>
              ) : null}
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-white/55">
                {p.year}
              </p>
              <div className="mb-1 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                {p.link && (
                  <span className="inline-flex items-center whitespace-nowrap text-white/55 transition group-hover:text-white/80">
                    <FiArrowUpRight className="text-sm transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                )}
              </div>
              <p className="mb-3 text-sm text-gray-200/85">{p.description}</p>
              {p.technologies.length > 0 && (
                <div className="flex gap-3 text-xl">{p.technologies}</div>
              )}
            </>
          );

          return p.link ? (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open project: ${p.title}`}
              className={cardClassName}
            >
              {content}
            </a>
          ) : (
            <article key={p.title} className={cardClassName}>
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
