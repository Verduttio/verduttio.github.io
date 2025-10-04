import React from "react";
import { TbBrandAws } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";

type Cert = {
  title: string;
  provider: "AWS";
  level: "cp" | "saa";   
  credentialUrl?: string; 
};

const certs: Cert[] = [
  { title: "AWS Certified Cloud Practitioner", provider: "AWS", credentialUrl: "https://www.credly.com/badges/cbd447c5-fcc1-45e4-a3ca-4cdad1f9daa8", level: "cp" },
  { title: "AWS Certified Solutions Architect – Associate", provider: "AWS", credentialUrl: "https://www.credly.com/badges/09d96de3-7708-433e-a1a7-f10dbe385f21", level: "saa" },
];
    
const Certifications: React.FC = () => {
  return (
    <section id="certs" className="text-center section-offset">
      <h2 className="text-xl font-semibold">Certifications</h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {certs.map((c, i) => (
          <article
            key={i}
            className="
              hover-pop shine
              rounded-2xl bg-[#243b55]/95 p-4 text-left
              ring-1 ring-white/10
              shadow-[0_10px_20px_rgba(0,0,0,.25)]
              flex items-center gap-4
            "
          >
            {/* Logo badge */}
            <div
                className={[
                    "flex h-12 w-12 items-center justify-center rounded-xl",
                    c.level === "saa"
                    ? "glow-aws-blue bg-[linear-gradient(135deg,#1e3a8a_0%,#3b82f6_100%)]"
                    : "glow-aws bg-[#232F3E]"
                ].join(" ")}
                title="Amazon Web Services"
            >
                <TbBrandAws className="text-white text-2xl" aria-hidden />
            </div>



            {/* Texts */}
            <div className="flex-1">
              <h3 className="text-base font-semibold leading-tight">
                {c.title}
              </h3>
              <p className="text-xs text-white/70">Amazon Web Services</p>
            </div>

            {c.credentialUrl ? (
                <a
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    inline-flex items-center gap-2 rounded-lg
                    bg-emerald-500/10 px-3 py-1.5 text-sm font-medium
                    hover:bg-emerald-500/15
                    "
                    aria-label={`View ${c.title} credential`}
                >
                    <BsCheckCircleFill aria-hidden className="text-emerald-400" />
                    <span>Verified</span>
                </a>
            ) : (
                <span
                    className="
                    inline-flex items-center gap-2 rounded-lg
                    bg-emerald-500/10 px-3 py-1.5 text-sm font-medium
                    text-emerald-300/90
                    "
                    title="Add your Credly/verification link here"
                >
                    <BsCheckCircleFill aria-hidden className="text-emerald-400" />
                    <span>Verified</span>
                </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
