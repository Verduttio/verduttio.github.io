import React from "react";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section className="text-center">
      <h2 className="text-xl font-semibold">Contact</h2>

      <div className="mt-4 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <FaGoogle className="text-xl" aria-hidden />
          <span className="select-all">bartlomiej.szwaja20@gmail.com</span>
        </div>

        <div className="flex items-center gap-2">
          <FaGithub className="text-xl" aria-hidden />
          <a
            href="https://github.com/Verduttio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
            aria-label="GitHub Profile"
          >
            GitHub Profile
          </a>
        </div>

        <div className="flex items-center gap-2">
          <FaLinkedin className="text-xl" aria-hidden />
          <a
            href="https://pl.linkedin.com/in/bartlomiej-szwaja"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
            aria-label="LinkedIn Profile"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
