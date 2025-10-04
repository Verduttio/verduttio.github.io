import React from "react";

const AboutMe: React.FC = () => (
  <section id="about" className="px-4 section-offset">
    <div className="mx-auto w-full max-w-3xl">
      <div className="text-center">
        <h2 className="text-xl font-semibold">My story</h2>

        <p className="mx-auto mt-3 max-w-3xl text-gray-200/90">
          Hi, I’m Bart — a software developer who loves turning ideas into reliable systems.
          I’m the kind of person who isn’t afraid to take ownership and pick up the challenge.
        </p>

        <p className="mx-auto mt-3 max-w-3xl text-gray-200/90">
          A new idea appears? I build it. Spaceflight simulator? Already done - just check my repo.
        </p>

        <p className="mx-auto mt-3 max-w-3xl text-gray-200/90">
          I enjoy the whole software lifecycle, with a strong focus on backend engineering in Java and Python.
          When a project needs it, I’m comfortable jumping into the frontend as well.
        </p>

        <p className="mx-auto mt-3 max-w-3xl text-gray-200/90">
          Automation is my default: Docker, CI/CD and Terraform — combined with cloud — let me ship secure,
          repeatable environments and iterate fast.
        </p>

        <p className="mx-auto mt-3 max-w-3xl text-gray-200/90">
          Most of my experience comes from places where customer problems are real and measurable — the kind
          of work that teaches pragmatism, clear communication and ownership.
        </p>

        <p className="mt-4 italic text-white/70">
          “Your capabilities speak for themselves.”
        </p>
      </div>
    </div>
  </section>
);

export default AboutMe;
