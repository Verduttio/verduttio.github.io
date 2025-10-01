import React from "react";

const Header: React.FC = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full rounded-2xl bg-[#242e55]/95 p-6 shadow-[0_10px_20px_rgba(0,0,0,.67)]">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center md:flex-row md:text-left">
          <img
            src="/photo-me.jpg"
            alt="Bartłomiej Szwaja"
            className="h-28 w-28 rounded-full object-cover ring-2 ring-white/40 shadow"
          />
          <div className="flex flex-col items-center gap-3 md:items-start">
            <a
              href="https://github.com/Verduttio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-blue-600/90 px-3 py-1.5 text-sm font-medium shadow hover:bg-blue-600"
            >
              Java / Backend Developer
            </a>
            <h3 className="m-0 text-2xl font-semibold">Bartłomiej Szwaja</h3>
            <a
              href="https://en.uj.edu.pl/en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-amber-500/90 px-3 py-1.5 text-sm font-medium text-black shadow hover:bg-amber-500"
            >
              Master in Computer Science
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
