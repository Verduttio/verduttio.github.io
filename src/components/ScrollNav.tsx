import React, { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "top",      label: "Home" },
  { id: "about",    label: "About" },
  { id: "stack",    label: "Stack" },
  { id: "certs",    label: "Certs" },
  { id: "projects", label: "Projects" },
  { id: "contact",  label: "Contact" },
];

const ScrollNav: React.FC = () => {
  const [active, setActive] = useState<string>("top");
  const lockUntil = useRef<number>(0);                 // block after click
  const els = useRef<Record<string, HTMLElement>>({}); // cache elements
  const ticking = useRef(false);

  // collect references to sections
  useEffect(() => {
    const map: Record<string, HTMLElement> = {};
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) map[id] = el as HTMLElement;
    });
    els.current = map;
  }, []);

  // scrollspy logic (throttle via rAF)
  useEffect(() => {
    const compute = () => {
      ticking.current = false;

      // lock in case of click (to prevent flickering during smooth scroll)
      if (performance.now() < lockUntil.current) return;

      const winH = window.innerHeight;
      const y = window.scrollY;
      const docH = document.documentElement.scrollHeight;

      // guard top / bottom
      if (y < 40) { if (active !== "top") setActive("top"); return; }
      if (y + winH >= docH - 2) { if (active !== "contact") setActive("contact"); return; }

      // reference line ~ 35% of the screen from the top
      const refY = winH * 0.35;

      let bestId = active;
      let bestDist = Number.POSITIVE_INFINITY;

      for (const { id } of SECTIONS) {
        const el = els.current[id];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - refY);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = id;
        }
      }

      if (bestId !== active) setActive(bestId);
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(compute);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // immediately compute once
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [active]);

const handleClick = (id: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
  setActive(id);                          // instant UI feedback
  lockUntil.current = performance.now() + 800; // lock for smooth-scroll

  if (id === "top") {
    e?.preventDefault();                 
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};


  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-3 left-1/2 -translate-x-1/2 z-50"
    >
      <ul className="
        flex items-center gap-1 rounded-full
        bg-white/6 backdrop-blur
        px-2 py-1 ring-1 ring-white/10
        shadow-[0_8px_16px_rgba(0,0,0,.22)]
      ">
        {SECTIONS.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(id, e)}
                aria-current={isActive ? "page" : undefined}
                className={[
                    "block rounded-full px-3 py-1.5 text-sm transition",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40",
                    isActive ? "bg-white/15 text-white" : "text-white/75 hover:text-white",
                ].join(" ")}
                >
                {label}
            </a>

            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ScrollNav;
