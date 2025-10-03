// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 mt-16">
      {/* softer gradient divider */}
      <div
        aria-hidden
        className="mx-auto w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"
      />

      <div className="mx-auto w-full max-w-6xl flex flex-col items-center gap-1.5 text-center">
        <p className="text-xs sm:text-[13px] text-white/70">
          © {year} Bartłomiej Szwaja. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
