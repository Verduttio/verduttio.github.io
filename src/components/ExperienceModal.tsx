import React, { useEffect, useRef, useState } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Phase = "opening" | "open" | "closing";

const OPEN_MS = 240; 
const CLOSE_MS = 180;

const AccordionItem: React.FC<{
  period: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ period, title, subtitle, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [animating, setAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const el = contentRef.current;
    if (!el || animating) return;

    setAnimating(true);

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const opening = !isOpen;
    const start = el.getBoundingClientRect().height; // actual height (0 or scrollHeight)
    const end = opening ? el.scrollHeight : 0;

    // Always clip content
    el.style.overflow = "hidden";
    el.style.height = `${start}px`;
    // force reflow
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el.offsetHeight;

    if (reduced) {
      // no animation
      el.style.height = "";
      el.style.overflow = "";
      setIsOpen(opening);
      setAnimating(false);
      return;
    }

    el.style.transition = "height 300ms ease";
    requestAnimationFrame(() => {
      el.style.height = `${end}px`;
    });

    const onEnd = () => {
      el.style.transition = "";
      // auto height after opening
      el.style.height = opening ? "auto" : "0";
      // overflow only if open
      setIsOpen(opening);
      setAnimating(false);
      el.removeEventListener("transitionend", onEnd);
    };

    el.addEventListener("transitionend", onEnd);
  };

  return (
    <div className="rounded-xl p-4 transition
            bg-white/8 border border-white/15
            hover:bg-white/12
            [box-shadow:inset_0_1px_0_rgba(255,255,255,.05)]">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        className="
          w-full select-none
          flex items-center justify-between gap-4
          text-left cursor-pointer
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40 rounded-lg
        "
      >
        <div>
          <p className="text-sm text-white/75">{period}</p>
          <p className="text-base md:text-[17px] font-semibold">{title}</p>
          {subtitle && <p className="text-xs text-white/60">{subtitle}</p>}
        </div>
        <FiChevronDown
          className={[
            "text-xl transition-transform duration-300",
            isOpen ? "rotate-180" : "",
          ].join(" ")}
          aria-hidden
        />
      </button>

      {/* animated container */}
      <div
        ref={contentRef}
        style={{
          height: isOpen ? "auto" : 0,
          overflow: "hidden",
          willChange: "height",
        }}
        className={(isOpen || animating) ? "mt-3" : "mt-0"}
      >

        <div className="text-sm text-white/90">
          {children}
        </div>
      </div>
    </div>
  );
};


const ExperienceModal: React.FC<Props> = ({ open, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<Phase>("closing");
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setMounted(true);
      requestAnimationFrame(() => setPhase("opening"));
      const t = setTimeout(() => setPhase("open"), OPEN_MS);
      return () => clearTimeout(t);
    } else if (mounted) {
      setPhase("closing");
      const t = setTimeout(() => setMounted(false), CLOSE_MS);
      return () => clearTimeout(t);
    }
  }, [open, mounted]);

  // lock body scroll + ESC + outside click
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
        "bg-black/35 backdrop-blur-sm",
        overlayAnim,
      ].join(" ")}
    >
      <div
        ref={dialogRef}
        className={[
            "relative w-full max-w-2xl rounded-2xl p-5 md:p-7",
            "backdrop-blur-md backdrop-saturate-150",
            "bg-white/10 border border-white/15",
            "shadow-[0_24px_60px_rgba(0,0,0,.35)]",
            "[box-shadow:inset_0_1px_0_rgba(255,255,255,.06)]",
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

        <div className="mt-5 space-y-4">
          <AccordionItem
            period="Jan 2025 — Present"
            title="Software Developer — Hyland"
          >
            <div className="space-y-4 text-sm text-white/90">
              <div>
                <p className="font-semibold text-white">Developer II</p>
                <p className="text-xs text-white/60">Apr 2026 — Present</p>
              </div>

              <div>
                <p className="font-semibold text-white">Developer I</p>
                <p className="text-xs text-white/60">Jan 2025 — Mar 2026</p>
              </div>

              <div>
                <p className="mb-2 font-semibold text-white">Stack</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Java, Python, Terraform</li>
                  <li>
                    AWS: Lambda, DynamoDB, S3, Amplify, API Gateway, KMS,
                    IAM, Step Functions, EventBridge
                  </li>
                </ul>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem
            period="Nov 2023 — Oct 2024"
            title="Software Developer — Dominican Studentate"
          >
            <p className="mb-2 text-sm text-white/90">End-to-End delivery:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-white/90">
              <li>Requirements, design &amp; architecture</li>
              <li>Java (Spring Boot), React, TypeScript</li>
              <li>Docker, CI/CD, Shell, PostgreSQL</li>
              <li>Hosting &amp; deployment (OVH)</li>
            </ul>
          </AccordionItem>

          <AccordionItem period="Jan 2023 — Dec 2023" title='IT Specialist — “Być Razem” Association'>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-white/90">
              <li>Resolving IT issues and overseeing infrastructure</li>
            </ul>
          </AccordionItem>

          <AccordionItem
            period="During studies"
            title="Academic Projects & Contributions"
          >
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-white/90">
              <li>
                Built a Java Spring Boot backend application for gym
                management under senior Java mentorship.
              </li>
              <li>
                Completed an advanced C# course under senior mentorship,
                culminating in a gym management application.
              </li>
              <li>
                Delivered advanced SQL and database projects, including an
                airport database design.
              </li>
              <li>
                Contributed to an open-source university application and
                conducted a security audit.
              </li>
            </ul>
          </AccordionItem>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
