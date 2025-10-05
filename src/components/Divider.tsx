import React from "react";

type Props = {
  className?: string;
  variant?: "line" | "dots";
};

const Divider: React.FC<Props> = ({ className = "", variant = "line" }) => {
  if (variant === "dots") {
    return (
      <div
        aria-hidden
        className={`my-8 h-px w-full opacity-80 ${className}`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,.14) 0 6px, transparent 6px 14px)",
        }}
      />
    );
  }
  // soft gradient line
  return (
    <div
      aria-hidden
      className={`my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent ${className}`}
    />
  );
};

export default Divider;
