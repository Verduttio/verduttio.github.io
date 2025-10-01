import React from "react";
import { FaJava, FaStar } from "react-icons/fa";
import {
  SiAssemblyscript, SiCplusplus, SiSharp, SiDocker, SiDotnet, SiFlutter,
  SiGithub, SiGithubactions, SiHaskell, SiHeroku, SiPostgresql, SiPython,
  SiReact, SiSpringboot, SiTypescript
} from "react-icons/si";

const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <span className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium shadow ${className || "bg-slate-700/70 hover:bg-slate-700"}`}>
    {children}
  </span>
);

const Row: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-wrap items-center justify-center gap-3">{children}</div>
);

const Technologies: React.FC = () => {
  return (
    <section className="text-center">
      <h2 className="text-xl font-semibold">Tech stack</h2>

      <div className="mt-2 inline-flex items-center gap-1 text-lg">
        <FaStar /><FaStar /><FaStar />
      </div>

      <div className="mt-4">
        <Row>
          <Badge className="bg-rose-600/90 hover:bg-rose-600"><FaJava /> Java</Badge>
          <Badge className="bg-emerald-600/90 hover:bg-emerald-600"><SiSpringboot /> Spring Boot</Badge>
          <Badge className="bg-sky-600/90 hover:bg-sky-600"><SiPostgresql /> PostgreSQL</Badge>
          <Badge className="bg-sky-600/90 hover:bg-sky-600"><SiDocker /> Docker</Badge>
          <Badge className="bg-black/80 hover:bg-black"><SiGithub /> Github</Badge>
        </Row>
      </div>

      <div className="mt-6 inline-flex items-center gap-1 text-lg">
        <FaStar /><FaStar />
      </div>

      <div className="mt-4">
        <Row>
          <Badge className="bg-cyan-600/90 hover:bg-cyan-600"><SiReact /> React</Badge>
          <Badge className="bg-indigo-600/90 hover:bg-indigo-600"><SiTypescript /> TypeScript</Badge>
          <Badge><SiGithubactions /> GitHub Actions</Badge>
          <Badge className="bg-violet-600/90 hover:bg-violet-600"><SiHeroku /> Heroku</Badge>
          <Badge className="bg-amber-500/90 text-black hover:bg-amber-500"><SiPython /> Python</Badge>
          <Badge className="bg-slate-600/90 hover:bg-slate-600"><SiSharp /> C#</Badge>
          <Badge className="bg-slate-600/90 hover:bg-slate-600"><SiDotnet /> .NET</Badge>
          <Badge className="bg-blue-700/90 hover:bg-blue-700"><SiCplusplus /> C++</Badge>
        </Row>
      </div>

      <div className="mt-6 inline-flex items-center gap-1 text-lg">
        <FaStar />
      </div>

      <div className="mt-4">
        <Row>
          <Badge className="bg-slate-600/90 hover:bg-slate-600"><SiHaskell /> Haskell</Badge>
          <Badge><SiAssemblyscript /> Assembly</Badge>
          <Badge className="bg-cyan-600/90 hover:bg-cyan-600"><SiFlutter /> Flutter</Badge>
        </Row>
      </div>
    </section>
  );
};

export default Technologies;
