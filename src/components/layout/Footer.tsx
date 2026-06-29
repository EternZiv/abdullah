"use client";

import { motion } from "framer-motion";
import { ArrowUp, GitBranch, Link, AtSign, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import GlowButton from "@/components/ui/GlowButton";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#projects" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Blog", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "AI Solutions",
  "UI/UX Design",
  "API Integration",
  "Consulting",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-bg">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="#hero" className="text-lg font-bold font-heading tracking-tight text-heading">
              Portfolio
            </a>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-xs">
              Building premium modern web applications and AI-powered solutions for businesses worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-muted hover:text-heading transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-muted">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-muted">
              <li className="hover:text-heading transition-colors">
                <a href={`mailto:${SITE_CONFIG.links.email}`}>{SITE_CONFIG.links.email}</a>
              </li>
              <li>Remote · Worldwide</li>
              <li>Available for projects</li>
            </ul>
            <div className="flex gap-2.5 mt-4">
              {[
                { icon: GitBranch, href: SITE_CONFIG.links.github, label: "GitHub" },
                { icon: Link, href: SITE_CONFIG.links.linkedin, label: "LinkedIn" },
                { icon: AtSign, href: SITE_CONFIG.links.twitter, label: "Twitter" },
                { icon: Mail, href: `mailto:${SITE_CONFIG.links.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-dark">
            © {new Date().getFullYear()} Hafiz Abdullah. All rights reserved.
          </p>
          <GlowButton
            variant="ghost"
            onClick={scrollToTop}
            className="!p-2 !rounded-lg !border !border-border text-muted hover:text-accent hover:border-accent/30"
            glowSize={200}
            aria-label="Back to top"
          >
            <ArrowUp size={15} />
          </GlowButton>
        </div>
      </div>
    </footer>
  );
}
