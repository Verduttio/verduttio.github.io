import React, { useState } from "react";
import { FiCode } from "react-icons/fi";
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

            {/* Role chip -> opens modal */}
            <button
              type="button"
              onClick={() => setOpenExp(true)}
              aria-haspopup="dialog"
              aria-controls="experience-modal"
              aria-expanded={openExp}
              className="
                inline-flex items-center gap-2 self-center md:self-start
                rounded-lg bg-blue-600/90 px-3 py-1.5
                text-sm font-semibold text-white
                hover-pop shine
                cursor-pointer active:scale-[.98] transition
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40
              "
            >
              <FiCode aria-hidden className="icon-wiggle" />
              <span>Software developer — 2+ yrs solid</span>
            </button>

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

      {/* Modal */}
      <ExperienceModal open={openExp} onClose={() => setOpenExp(false)} />
    </section>
  );
};

export default Header;
