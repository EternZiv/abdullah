"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useCursorGlow } from "@/hooks/useCursorGlow";
import { useActiveSection } from "@/hooks/useActiveSection";
import GlowButton from "@/components/ui/GlowButton";

const sectionIds = ["hero", "projects", "about", "articles", "testimonials", "contact"];
const navLinks = [
  { label: "About", href: "#about", section: "about" },
  { label: "Portfolio", href: "#projects", section: "projects" },
  { label: "Reviews", href: "#testimonials", section: "testimonials" },
  { label: "Blog", href: "#articles", section: "articles" },
  { label: "Contact", href: "#contact", section: "contact" },
];

function Logo() {
  const ref = useRef<HTMLAnchorElement>(null);
  const { glowBackground, opacity } = useCursorGlow(ref, 200);
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <motion.a
      ref={ref}
      href="/"
      onClick={handleClick}
      className="relative text-lg font-bold font-heading tracking-tight text-heading flex items-center gap-2 cursor-pointer group shrink-0"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{ background: glowBackground, opacity }}
      />
      <span className="w-2 h-2 rounded-full bg-accent relative z-10" />
      <span className="relative z-10 transition-colors duration-300 group-hover:text-accent">
        Hafiz Abdullah
      </span>
    </motion.a>
  );
}

function NavLink({
  label,
  isActive,
  onClick,
}: {
  label: string;
  href: string;
  section: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const { glowBackground, opacity } = useCursorGlow(ref, 200);

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      className={cn(
        "relative text-[15px] font-medium nav-link px-1 whitespace-nowrap",
        isActive ? "text-heading" : "text-muted"
      )}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{ background: glowBackground, opacity }}
      />
      <span className="relative z-10">{label}</span>
      {isActive && (
        <motion.span
          layoutId="activeNav"
          className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-accent rounded-full"
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        />
      )}
    </motion.button>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const { scrollY } = useScroll();
  const floatProgress = useTransform(scrollY, [80, 100], [0, 1]);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed z-50"
      style={{
        width: useTransform(floatProgress, [0, 1], ["100%", "80%"]),
        left: useTransform(floatProgress, [0, 1], ["0%", "10%"]),
        right: useTransform(floatProgress, [0, 1], ["0%", "10%"]),
        top: useTransform(floatProgress, [0, 1], [0, 20]),
        borderRadius: useTransform(floatProgress, [0, 1], ["0px", "9999px"]),
        backgroundColor: useTransform(floatProgress, [0, 1], [
          "rgba(11,16,24,0)",
          "rgba(11,16,24,0.85)",
        ]),
        boxShadow: useTransform(floatProgress, [0, 1], [
          "0 0 0 transparent",
          "0 8px 32px rgba(0,0,0,0.12)",
        ]),
        backdropFilter: useTransform(floatProgress, [0, 1], [
          "blur(0px)",
          "blur(20px)",
        ]),
        WebkitBackdropFilter: useTransform(floatProgress, [0, 1], [
          "blur(0px)",
          "blur(20px)",
        ]),
        border: useTransform(floatProgress, [0, 1], [
          "1px solid transparent",
          "1px solid rgba(255,255,255,0.10)",
        ]),
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          <Logo />

          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.section}
                label={link.label}
                href={link.href}
                section={link.section}
                isActive={activeSection === link.section}
                  onClick={() => handleClick(link.href)}
              />
            ))}
            <GlowButton
              variant="primary"
              onClick={() => handleClick("#contact")}
              className="!px-5 !py-2.5 !text-sm shrink-0"
            >
              Hire Me
            </GlowButton>
          </div>

          <button
            className="lg:hidden p-2 text-heading"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden border-t border-border bg-bg-secondary/95 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 py-5 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                onClick={() => handleClick(link.href)}
                  className={cn(
                    "block w-full text-left px-4 py-2.5 rounded-lg transition-colors duration-300 text-sm",
                    activeSection === link.section
                      ? "text-heading bg-bg-card"
                      : "text-muted hover:text-heading hover:bg-bg-card"
                  )}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleClick("#contact")}
                className="block w-full mt-3 px-5 py-2.5 text-center font-medium rounded-full bg-gradient-to-r from-[#00BFFF] to-[#0099CC] text-white text-sm"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
