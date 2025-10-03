// src/components/Header.tsx
import React from "react";
import { FiCode } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <section className="px-4">
      <div className="mx-auto w-full max-w-4xl">
        {/* grid shrinks to content from md up, then centers */}
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[200px_auto] md:w-max md:mx-auto">
          {/* Avatar */}
          <div className="justify-self-center md:justify-self-start">
            <img
              src="/photo-me.jpg"
              alt="Bartłomiej Szwaja"
              className="avatar-pop h-40 w-40 rounded-full object-cover ring-4 ring-white/60 shadow-[0_12px_24px_rgba(0,0,0,.35)]"
            />
          </div>

          {/* Tekst (name → role → degree) */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            {/* Name first */}
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Bartłomiej Szwaja
            </h1>

            {/* Role chip */}
            <span
              className="
                inline-flex items-center gap-2 self-center md:self-start
                rounded-lg bg-blue-600/90 px-3 py-1.5
                text-sm font-semibold text-white
                hover-pop shine
              "
            >
              <FiCode aria-hidden className="icon-wiggle" />
              <span>Software developer — 2+ yrs solid</span>
            </span>

            {/* Degree chip */}
            <a
              href="https://en.uj.edu.pl/en"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 self-center md:self-start
                rounded-lg bg-amber-500/90 px-3 py-1.5
                text-sm font-semibold text-black
                hover-pop shine
              "
            >
              <FaGraduationCap aria-hidden className="icon-wiggle" />
              <span>Master's degree in Computer Science</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
