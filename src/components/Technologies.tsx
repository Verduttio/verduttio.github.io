import React from "react";
import { FaJava, FaStar } from "react-icons/fa";
import {
  SiAssemblyscript, SiCplusplus, SiSharp, SiDocker, SiDotnet, SiFlutter,
  SiGithub, SiGithubactions, SiHaskell, SiHeroku, SiPostgresql, SiPython,
  SiReact, SiSpringboot, SiTypescript
} from "react-icons/si";

type BadgeProps = {
  children: React.ReactNode;
  bg?: string;
  glow?: string;
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({ children, bg, glow, className }) => {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-xl px-3 py-1.5",
        "text-sm font-semibold",
        "transition-all hover:-translate-y-0.5",
        "ring-1 ring-white/10",
        bg ?? "bg-slate-700/80",
        className ?? "text-white",
      ].join(" ")}
      style={
        {
          boxShadow:
            "0 6px 12px rgba(0,0,0,.25), 0 0 22px var(--badge-glow), 0 0 44px var(--badge-glow)",
          ["--badge-glow" as any]: glow ?? "rgba(148,163,184,.45)",
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
};

const Row: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mt-4 flex flex-wrap items-center justify-center gap-3">{children}</div>
);

const Technologies: React.FC = () => {
  return (
    <section className="text-center">
      <h2 className="text-xl font-semibold">Tech stack</h2>

      {/* ★★★ */}
      <div className="mt-2 inline-flex items-center gap-1 text-lg">
        <FaStar /><FaStar /><FaStar />
      </div>

      <Row>
        <Badge
          bg="bg-gradient-to-r from-rose-500 to-pink-500"
          glow="rgba(244,63,94,.65)"
        >
          <FaJava /> Java
        </Badge>

        <Badge
          bg="bg-gradient-to-r from-emerald-500 to-emerald-600"
          glow="rgba(16,185,129,.6)"
        >
          <SiSpringboot /> Spring Boot
        </Badge>

        <Badge
          bg="bg-gradient-to-r from-sky-600 to-blue-600"
          glow="rgba(59,130,246,.6)"
        >
          <SiPostgresql /> PostgreSQL
        </Badge>

        <Badge
          bg="bg-gradient-to-r from-sky-500 to-sky-600"
          glow="rgba(56,189,248,.6)"
        >
          <SiDocker /> Docker
        </Badge>

        <Badge
          bg="bg-black"
          glow="rgba(255,255,255,.35)"
        >
          <SiGithub /> Github
        </Badge>
      </Row>

      {/* ★★ */}
      <div className="mt-6 inline-flex items-center gap-1 text-lg">
        <FaStar /><FaStar />
      </div>

      <Row>
        <Badge
          bg="bg-gradient-to-r from-cyan-600 to-blue-600"
          glow="rgba(59,130,246,.6)"
        >
          <SiReact /> React
        </Badge>

        <Badge
          bg="bg-gradient-to-r from-indigo-600 to-blue-700"
          glow="rgba(79,70,229,.6)"
        >
          <SiTypescript /> TypeScript
        </Badge>

        <Badge
          bg="bg-gradient-to-r from-zinc-200 to-zinc-300"
          glow="rgba(228,228,231,.75)"
          className="text-black"
        >
          <SiGithubactions /> GitHub Actions
        </Badge>

        <Badge
          bg="bg-gradient-to-r from-fuchsia-600 to-violet-600"
          glow="rgba(192,38,211,.6)"
        >
          <SiHeroku /> Heroku
        </Badge>

        <Badge
          bg="bg-gradient-to-r from-amber-400 to-amber-500"
          glow="rgba(245,158,11,.6)"
          className="text-black"
        >
          <SiPython /> Python
        </Badge>

        <Badge
          bg="bg-gradient-to-r from-violet-600 to-purple-600"
          glow="rgba(168,85,247,.6)"
        >
          <SiSharp /> C#
        </Badge>

        <Badge
          bg="bg-gradient-to-r from-violet-600 to-purple-700"
          glow="rgba(168,85,247,.6)"
        >
          <SiDotnet /> .NET
        </Badge>

        <Badge
          bg="bg-gradient-to-r from-blue-500 to-sky-600"
          glow="rgba(37,99,235,.6)"
        >
          <SiCplusplus /> C++
        </Badge>
      </Row>

      {/* ★ */}
      <div className="mt-6 inline-flex items-center gap-1 text-lg">
        <FaStar />
      </div>

      <Row>
        <Badge
          bg="bg-gradient-to-r from-purple-600 to-fuchsia-600"
          glow="rgba(147,51,234,.6)"
        >
          <SiHaskell /> Haskell
        </Badge>

        <Badge
          bg="bg-gradient-to-r from-zinc-200 to-zinc-300"
          glow="rgba(228,228,231,.75)"
          className="text-black"
        >
          <SiAssemblyscript /> Assembly
        </Badge>

        <Badge
          bg="bg-gradient-to-r from-sky-500 to-cyan-600"
          glow="rgba(14,165,233,.6)"
        >
          <SiFlutter /> Flutter
        </Badge>
      </Row>
    </section>
  );
};

export default Technologies;
