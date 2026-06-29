"use client";

import { useRef } from "react";
import { motion, type TargetAndTransition } from "framer-motion";
import { useCursorGlow } from "@/hooks/useCursorGlow";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "glass" | "ghost";

interface GlowButtonProps {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  children: React.ReactNode;
  className?: string;
  glowSize?: number;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white font-semibold px-6 py-3 text-sm",
  secondary:
    "border border-accent/20 text-white font-semibold px-6 py-3 text-sm hover:border-accent/40 hover:bg-accent/5",
  glass:
    "btn-glass",
  ghost:
    "text-muted hover:text-white font-medium transition-colors duration-300",
};

const hoverStyles: Record<ButtonVariant, TargetAndTransition> = {
  primary: {
    scale: 1.04,
    boxShadow:
      "0 0 40px rgba(0,191,255,0.35), 0 0 80px rgba(0,191,255,0.12)",
  },
  secondary: {
    scale: 1.04,
    boxShadow:
      "0 0 35px rgba(0,191,255,0.15), 0 0 60px rgba(0,191,255,0.06)",
    borderColor: "rgba(0,191,255,0.5)",
  },
  glass: {
    scale: 1.04,
    boxShadow:
      "0 0 40px rgba(0,191,255,0.18), 0 0 70px rgba(0,191,255,0.08)",
  },
  ghost: {
    scale: 1.04,
    color: "#F8FAFC",
  },
};

export default function GlowButton({
  variant = "primary",
  href,
  onClick,
  type = "button",
  children,
  className,
  glowSize = 360,
}: GlowButtonProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const { glowBackground, opacity } = useCursorGlow(glowRef, glowSize);

  const classes = cn(
    "relative overflow-hidden rounded-full transition-colors duration-300 inline-flex items-center justify-center cursor-pointer select-none",
    variantStyles[variant],
    className
  );

  const glowEl = (
    <div
      ref={glowRef}
      className="absolute inset-0 z-0 rounded-[inherit]"
      aria-hidden
    >
      <motion.div
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{
          background: glowBackground,
          opacity,
          willChange: "transform, opacity",
        }}
      />
    </div>
  );

  const content = (
    <span className="relative z-10 flex items-center gap-2.5">{children}</span>
  );

  const shared = {
    whileHover: hoverStyles[variant],
    whileTap: { scale: 0.96 },
    transition: { type: "spring" as const, stiffness: 400, damping: 22 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...shared}
      >
        {glowEl}
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      type={type}
      className={classes}
        {...shared}
    >
      {glowEl}
      {content}
    </motion.button>
  );
}
