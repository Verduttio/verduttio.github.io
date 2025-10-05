import React, { useState } from "react";
import { FiCode, FiInfo, FiArrowUpRight } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import ExperienceModal from "./ExperienceModal";

const Header: React.FC = () => {
  const [openExp, setOpenExp] = useState(false);

  return (
    <section id="top" className="px-4 pt-12">
      <div className="mx-auto w-full max-w-4xl">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[200px_auto] md:w-max md:mx-auto">
          {/* Avatar */}
          <div className="justify-self-center md:justify-self-start">
            <img
              src="/photo-me.jpg"
              alt="Bartłomiej Szwaja"
              className="avatar-pop h-40 w-40 rounded-full object-cover ring-4 ring-white/60 shadow-[0_12px_24px_rgba(0,0,0,.35)]"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Bartłomiej Szwaja
            </h1>

            {/* Role chip */}
            <button
              type="button"
              onClick={() => setOpenExp(true)}
              aria-haspopup="dialog"
              aria-controls="experience-modal"
              aria-expanded={openExp}
              className="
                inline-flex items-center gap-2 self-center md:self-start
                rounded-lg px-3 py-1.5 text-sm font-semibold
                border border-blue-400/70 text-blue-100
                bg-white/5 hover:bg-blue-500/10
                hover-pop shine cursor-pointer active:scale-[.98] transition
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40
              "
              style={{
                // subtle blue glow
                boxShadow:
                  "0 6px 14px rgba(0,0,0,.22), 0 0 18px rgba(59,130,246,.30), 0 0 36px rgba(59,130,246,.18)",
              }}
            >
              <FiCode aria-hidden className="icon-wiggle" />
              <span>Software developer — 2+ yrs solid</span>
              <FiInfo aria-hidden className="text-[14px] opacity-90" />
            </button>

            {/* Master's chip */}
            <a
              href="https://en.uj.edu.pl/en"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 self-center md:self-start
                rounded-lg px-3 py-1.5 text-sm font-semibold
                border border-amber-400/70 text-amber-100
                bg-white/5 hover:bg-amber-500/10
                hover-pop shine transition
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40
              "
              style={{
                // subtle amber glow
                boxShadow:
                  "0 6px 14px rgba(0,0,0,.22), 0 0 18px rgba(245,158,11,.30), 0 0 36px rgba(245,158,11,.18)",
              }}
            >
              <FaGraduationCap aria-hidden className="icon-wiggle" />
              <span>Master's degree in Computer Science</span>
              <FiArrowUpRight aria-hidden className="text-[14px] opacity-90" />
            </a>

          </div>
        </div>
      </div>

      <ExperienceModal open={openExp} onClose={() => setOpenExp(false)} />
    </section>
  );
};

export default Header;
