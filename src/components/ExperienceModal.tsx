import React, { useEffect, useRef, useState } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Phase = "opening" | "open" | "closing";

const OPEN_MS = 240;  // czas animacji wejścia (dopasowany do panel-in)
const CLOSE_MS = 180; // czas animacji wyjścia (dopasowany do panel-out)

const ExperienceModal: React.FC<Props> = ({ open, onClose }) => {
  const [mounted, setMounted] = useState(false); // trzyma modal w DOM na czas animacji
  const [phase, setPhase] = useState<Phase>("closing");
  const dialogRef = useRef<HTMLDivElement>(null);

  // Zarządzanie fazą open/close z animacją
  useEffect(() => {
    if (open) {
      // 1) zamontuj modal, 2) odpal "opening" w następnej klatce
      setMounted(true);
      requestAnimationFrame(() => setPhase("opening"));
      // po animacji wejścia przejdź do "open" (stabilny stan, bez animacji)
      const t = setTimeout(() => setPhase("open"), OPEN_MS);
      return () => clearTimeout(t);
    } else if (mounted) {
      // zacznij animację wyjścia, a po niej odmontuj
      setPhase("closing");
      const t = setTimeout(() => setMounted(false), CLOSE_MS);
      return () => clearTimeout(t);
    }
  }, [open, mounted]);

  // Lock scroll + ESC + klik poza, gdy modal jest w DOM (niezależnie od fazy)
  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const onClickOutside = (e: MouseEvent) => {
      if (!dialogRef.current) return;
      if (!dialogRef.current.contains(e.target as Node)) onClose();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClickOutside);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClickOutside);
    };
  }, [mounted, onClose]);

  if (!mounted) return null;

  // Klasy animacji zależnie od fazy
  const overlayAnim =
    phase === "opening"
      ? "animate-[overlay-in_200ms_ease-out]"
      : phase === "closing"
      ? "animate-[overlay-out_160ms_ease-in_forwards]"
      : "";

  const panelAnim =
    phase === "opening"
      ? "animate-[panel-in_240ms_cubic-bezier(0.16,1,0.3,1)]"
      : phase === "closing"
      ? "animate-[panel-out_180ms_ease-in_forwards]"
      : "";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Experience"
      className={[
        "fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto p-4",
        "bg-black/40 backdrop-blur-sm",
        overlayAnim,
      ].join(" ")}
    >
      <div
        ref={dialogRef}
        className={[
          "relative w-full max-w-2xl rounded-2xl bg-[#202B4A]/95 ring-1 ring-white/10",
          "shadow-[0_24px_60px_rgba(0,0,0,.45)] p-5 md:p-7",
          panelAnim,
        ].join(" ")}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white/10 p-2 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40"
        >
          <FiX className="text-xl" />
        </button>

        <h3 className="text-lg md:text-xl font-semibold text-center">Experience</h3>

        {/* Timeline (bez zmian – akordeony możemy wygładzić w kolejnym kroku) */}
        <div className="mt-5 space-y-4">
          <details className="group rounded-xl bg-white/5 ring-1 ring-white/10 p-4 open:bg-white/7 transition">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white/75">2025 — present</p>
                <p className="text-base md:text-[17px] font-semibold">Software Developer I — Hyland</p>
              </div>
              <FiChevronDown className="text-xl transition group-open:rotate-180" />
            </summary>
            <div className="mt-3 text-sm text-white/90">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Java, React, TypeScript</li>
                <li>AWS &amp; Terraform</li>
                <li>Python, GitHub Actions (CI/CD)</li>
              </ul>
            </div>
          </details>

          <details className="group rounded-xl bg-white/5 ring-1 ring-white/10 p-4 open:bg-white/7 transition">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white/75">2024</p>
                <p className="text-base md:text-[17px] font-semibold">
                  Software Developer — Dominican Studentate
                </p>
              </div>
              <FiChevronDown className="text-xl transition group-open:rotate-180" />
            </summary>
            <div className="mt-3 text-sm text-white/90">
              <p className="mb-2">Solo, end-to-end delivery:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Requirements, design &amp; architecture</li>
                <li>Java (Spring Boot), React, TypeScript</li>
                <li>Docker, CI/CD, Shell, PostgreSQL</li>
                <li>Hosting &amp; deployment (OVH)</li>
              </ul>
            </div>
          </details>

          <details className="group rounded-xl bg-white/5 ring-1 ring-white/10 p-4 open:bg-white/7 transition">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white/75">2023</p>
                <p className="text-base md:text-[17px] font-semibold">
                  IT Specialist — “Być Razem” Association
                </p>
              </div>
              <FiChevronDown className="text-xl transition group-open:rotate-180" />
            </summary>
            <div className="mt-3 text-sm text-white/90">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Resolving IT issues and user support</li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
