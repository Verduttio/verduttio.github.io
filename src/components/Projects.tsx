import React from "react";
import {
  SiSpringboot, SiSharp, SiFlutter, SiDart, SiCplusplus, SiPython, SiDjango,
  SiDotnet, SiDocker, SiHeroku, SiUbuntu
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const projects = [
  { title: "My Movie Book", description: "Full stack app offering management of your favorite movies",
    technologies: [<FaJava key="java" />, <SiSpringboot key="springboot" />, <SiDocker key="docker" />, <SiHeroku key="heroku" />],
    link: "https://github.com/Verduttio/My-movie-book" },
  { title: "Resource Management System", description: "Comprehensive resource management system for companies. Supports Google OAuth2",
    technologies: [<FaJava key="java" />, <SiSpringboot key="springboot" />, <SiDocker key="docker" />, <SiUbuntu key="ubuntu" />],
    link: "https://github.com/Verduttio/Dominican-studentate-system" },
  { title: "Distributed Tracing", description: "Basic backend movie app based on microservices architecture to show the logic of distributed tracing",
    technologies: [<FaJava key="java" />, <SiSpringboot key="springboot" />, <SiDocker key="docker" />],
    link: "https://github.com/Verduttio/Distributed-tracing-in-Java" },
  { title: "Gyms Management App", description: "Full stack app offering management of your gyms. Tech in .NET and Blazor. Java version in Spring Boot available on Gitlab",
    technologies: [<SiSharp key="csharp" />, <SiDotnet key="dotnet" />, <FaJava key="java" />, <SiSpringboot key="spring" />],
    link: "https://github.com/Verduttio/Gyms-management-app" },
  { title: "Exam timer", description: "Exam timer helps to manage time during an exam or a test. It shows the remaining time for each exercise.",
    technologies: [<SiFlutter key="flutter" />, <SiDart key="dart" />],
    link: "https://github.com/Verduttio/Exam-timer" },
  { title: "Spaceflight simulator", description: "Build your own rocket and launch it. Control angle, engines power, and separate stages.",
    technologies: [<SiCplusplus key="cpp" />, <SiDocker key="docker" />],
    link: "https://github.com/Verduttio/Spaceflight-simulator" },
  { title: "Airport management system", description: "Very simple boarding system for airports",
    technologies: [<SiPython key="py" />, <SiDjango key="django" />],
    link: "https://github.com/Verduttio/airport-management-system" },
];

const Projects: React.FC = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold text-center">My projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <article
            key={idx}
            onClick={() => window.open(p.link)}
            className="cursor-pointer rounded-2xl bg-[#243b55]/95 p-5 shadow-[0_10px_20px_rgba(0,0,0,.2)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_15px_25px_rgba(0,0,0,.4)]"
          >
            <h3 className="mb-1 text-lg font-semibold">{p.title}</h3>
            <p className="mb-3 text-sm text-gray-200/85">{p.description}</p>
            <div className="flex gap-3 text-xl">{p.technologies}</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
