"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Globe, BarChart3, MessageSquare, Database, Smartphone, Zap } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 53 + 17) % 100}%`,
  size: 1.5 + ((i * 23 + 7) % 10) * 0.25,
  duration: 14 + ((i * 31 + 11) % 20),
  delay: ((i * 37 + 5) % 16),
  opacity: 0.15 + ((i * 29 + 3) % 10) * 0.025,
}));

const TRUST_ITEMS = [
  "Responsive Websites",
  "AI Solutions",
  "Fast Delivery",
  "Modern UI",
];

function FloatingCard({
  className,
  children,
  parallaxX,
  parallaxY,
  floatClass,
  delay,
  prefersReducedMotion,
}: {
  className?: string;
  children: React.ReactNode;
  parallaxX: number;
  parallaxY: number;
  floatClass: string;
  delay: number;
  prefersReducedMotion: boolean;
}) {
  return (
    <motion.div
      className={`absolute ${className} ${floatClass}`}
      style={{ willChange: "transform" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 + delay }}
    >
      <motion.div
        className="glass-card rounded-xl p-3 cursor-default"
        style={{
          x: parallaxX * 0.6,
          y: parallaxY * 0.6,
          willChange: "transform",
        }}
        whileHover={prefersReducedMotion ? {} : { scale: 1.04, borderColor: "rgba(0,191,255,0.4)" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const prefersReducedMotion = useReducedMotion() ?? false;

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const px = (mousePos.x - 0.5) * 28;
  const py = (mousePos.y - 0.5) * 28;

  const scrollTo = (sel: string) =>
    document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ─── Background Layers ─── */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-secondary/40 to-bg" />
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-accent opacity-[0.04] blur-[180px] animate-pulse-glow-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent opacity-[0.025] blur-[140px] animate-pulse-glow-soft" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent opacity-[0.015] blur-[200px]" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-accent"
            style={{
              left: p.left,
              bottom: "-10px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
              willChange: "transform",
            }}
          />
        ))}
      </div>

      {/* ─── Content ─── */}
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8 w-full pt-28 md:pt-32 pb-16">
        <motion.div
          className="grid lg:grid-cols-[4fr_6fr] gap-10 lg:gap-14 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* ═══ LEFT COLUMN ═══ */}
          <div className="relative z-10">
            <motion.div variants={itemVariants}>
              <span className="section-label text-[11px] md:text-xs tracking-[0.18em]">
                Full-Stack Developer • AI Architect • Frontend Engineer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-2 md:mt-3 font-heading font-bold tracking-tight leading-[1.08]"
            >
              <span className="block text-heading text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.06]">
                Building
                <br />
                Premium
              </span>
              <span className="block text-heading text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.06] mt-1">
                Digital
              </span>
              <span className="block text-accent text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.06] mt-1">
                Experiences.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 md:mt-6 text-base md:text-[16px] lg:text-[17px] text-muted leading-relaxed max-w-lg"
            >
              I build premium web applications, AI-powered solutions,
              and scalable digital experiences that drive growth and deliver
              measurable results for modern businesses.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-8"
            >
              <GlowButton
                variant="primary"
                onClick={() => scrollTo("#contact")}
                className="!px-7 !py-3.5 !text-[15px]"
              >
                Hire Me
                  <motion.span
                    className="inline-flex"
                    animate={prefersReducedMotion ? {} : { x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                  <ArrowRight size={17} />
                </motion.span>
              </GlowButton>
              <GlowButton
                variant="glass"
                onClick={() => scrollTo("#projects")}
                className="!px-7 !py-3.5 !text-[15px]"
              >
                View My Work
              </GlowButton>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-x-6 gap-y-2.5 mt-10"
            >
              {TRUST_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check size={10} className="text-accent" />
                  </div>
                  <span className="text-[13px] text-muted-dark font-medium tracking-wide">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ═══ RIGHT COLUMN ═══ */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[520px] md:h-[560px] flex items-center justify-center">
              {/* Background glow behind laptop */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-accent opacity-[0.07] blur-[130px] animate-pulse-glow-soft" />

              {/* ─── Laptop Mockup ─── */}
              <motion.div
                className="relative z-10"
                style={{
                  x: px * 0.25,
                  y: py * 0.25,
                  willChange: "transform",
                }}
              >
                <div className="w-[380px] md:w-[420px]">
                  {/* Screen lid */}
                  <div className="bg-gradient-to-b from-[#1A1A2E] to-[#10101E] rounded-t-xl border border-white/[0.06] shadow-2xl shadow-accent/5">
                    <div className="m-[5px] rounded-[10px] overflow-hidden bg-[#080816]">
                      <div className="aspect-[16/10] bg-gradient-to-br from-[#0B1628] via-[#13233D] to-[#0D1A2E] p-[10px]">
                        {/* Screen content: SaaS Dashboard */}
                        <div className="flex gap-[6px] mb-[10px]">
                          <div className="w-[6px] h-[6px] rounded-full bg-red-500/40" />
                          <div className="w-[6px] h-[6px] rounded-full bg-yellow-500/40" />
                          <div className="w-[6px] h-[6px] rounded-full bg-green-500/40" />
                        </div>
                        <div className="flex gap-2.5 h-[calc(100%-20px)]">
                          {/* Sidebar */}
                          <div className="w-[22%] flex flex-col gap-[6px] pt-1">
                            <div className="h-[5px] w-[70%] bg-white/[0.06] rounded" />
                            <div className="h-[5px] w-[85%] bg-white/[0.04] rounded" />
                            <div className="h-[5px] w-[60%] bg-accent/10 rounded" />
                            <div className="h-[5px] w-[75%] bg-white/[0.04] rounded" />
                            <div className="h-[5px] w-[50%] bg-white/[0.04] rounded" />
                          </div>
                          {/* Main content */}
                          <div className="flex-1 space-y-[6px]">
                            <div className="flex justify-between items-center">
                              <div className="h-[6px] w-[45%] bg-white/[0.06] rounded" />
                              <div className="h-[6px] w-[20%] bg-accent/15 rounded-full" />
                            </div>
                            <div className="flex gap-1.5 mt-[6px]">
                              <div className="flex-1 h-[50px] bg-gradient-to-t from-accent/12 to-transparent rounded-md" />
                              <div className="flex-1 h-[35px] bg-gradient-to-t from-accent/8 to-transparent rounded-md" />
                              <div className="flex-1 h-[55px] bg-gradient-to-t from-accent-light/10 to-transparent rounded-md" />
                              <div className="flex-1 h-[28px] bg-gradient-to-t from-accent/6 to-transparent rounded-md" />
                              <div className="flex-1 h-[42px] bg-gradient-to-t from-accent-light/12 to-transparent rounded-md" />
                            </div>
                            <div className="flex gap-2 mt-[6px]">
                              <div className="flex-1 h-[18px] bg-white/[0.03] rounded-md" />
                              <div className="flex-1 h-[18px] bg-white/[0.05] rounded-md" />
                            </div>
                            <div className="flex gap-1.5 mt-[4px]">
                              <div className="w-[30%] h-[30px] rounded-lg bg-white/[0.02] border border-white/[0.04] p-1.5 flex flex-col gap-1">
                                <div className="h-[4px] w-[60%] bg-accent/20 rounded" />
                                <div className="h-[4px] w-[40%] bg-white/[0.04] rounded" />
                              </div>
                              <div className="w-[30%] h-[30px] rounded-lg bg-white/[0.02] border border-white/[0.04] p-1.5 flex flex-col gap-1">
                                <div className="h-[4px] w-[70%] bg-accent-light/15 rounded" />
                                <div className="h-[4px] w-[30%] bg-white/[0.04] rounded" />
                              </div>
                              <div className="w-[30%] h-[30px] rounded-lg bg-white/[0.02] border border-white/[0.04] p-1.5 flex flex-col gap-1">
                                <div className="h-[4px] w-[50%] bg-accent/15 rounded" />
                                <div className="h-[4px] w-[45%] bg-white/[0.04] rounded" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Keyboard deck */}
                  <div className="h-[12px] bg-gradient-to-b from-[#1A1A2E] to-[#0C0C18] rounded-b-lg border-x border-b border-white/[0.04]" />
                  {/* Stand */}
                  <div className="mx-auto w-[110px] h-[5px] bg-[#0C0C18] rounded-b-full" />
                </div>
              </motion.div>

              {/* ─── Floating Card: Browser Window ─── */}
              <FloatingCard
                className="top-[3%] right-[3%] w-[150px]"
                parallaxX={px}
                parallaxY={py}
                floatClass="animate-float-fast"
                delay={0}
                prefersReducedMotion={prefersReducedMotion}
              >
                <div className="flex gap-1 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400/50" />
                </div>
                <div className="h-[5px] w-3/4 bg-white/[0.06] rounded mb-1.5" />
                <div className="flex gap-1">
                  <div className="flex-1 h-[28px] rounded bg-gradient-to-t from-accent/8 to-transparent" />
                  <div className="flex-1 h-[20px] rounded bg-gradient-to-t from-accent-light/6 to-transparent" />
                </div>
              </FloatingCard>

              {/* ─── Floating Card: Code Editor ─── */}
              <FloatingCard
                className="bottom-[18%] -left-[2%] w-[145px]"
                parallaxX={px}
                parallaxY={py}
                floatClass="animate-float"
                delay={0.6}
                prefersReducedMotion={prefersReducedMotion}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <Globe size={11} className="text-accent/60" />
                  <span className="text-[10px] font-medium text-muted-dark tracking-wide">Editor</span>
                </div>
                <div className="space-y-1.5 font-mono text-[9px] leading-relaxed">
                  <div>
                    <span className="text-pink-400/50">import</span>{" "}
                    <span className="text-blue-300/50">{`{`}</span>
                  </div>
                  <div className="pl-2">
                    <span className="text-blue-300/50">App</span>
                    <span className="text-white/30">,</span>
                  </div>
                  <div className="pl-2">
                    <span className="text-blue-300/50">Data</span>
                  </div>
                  <div>
                    <span className="text-blue-300/50">{`}`}</span>
                    <span className="text-white/30"> from</span>
                  </div>
                  <div>
                    <span className="text-green-400/50">{`"../core"`}</span>
                  </div>
                </div>
              </FloatingCard>

              {/* ─── Floating Card: Analytics Dashboard ─── */}
              <FloatingCard
                className="top-[22%] -right-[5%] w-[135px]"
                parallaxX={px}
                parallaxY={py}
                floatClass="animate-float-slow"
                delay={1.2}
                prefersReducedMotion={prefersReducedMotion}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <BarChart3 size={11} className="text-accent/60" />
                  <span className="text-[10px] font-medium text-muted-dark tracking-wide">Analytics</span>
                </div>
                <div className="flex items-end gap-1.5 h-[34px]">
                  <div className="flex-1 h-[60%] rounded-t-sm bg-accent/15" />
                  <div className="flex-1 h-[90%] rounded-t-sm bg-accent/25" />
                  <div className="flex-1 h-[45%] rounded-t-sm bg-accent/10" />
                  <div className="flex-1 h-[75%] rounded-t-sm bg-accent-light/20" />
                  <div className="flex-1 h-[50%] rounded-t-sm bg-accent/12" />
                </div>
              </FloatingCard>

              {/* ─── Floating Card: AI Assistant ─── */}
              <FloatingCard
                className="bottom-[28%] -right-[3%] w-[125px]"
                parallaxX={px}
                parallaxY={py}
                floatClass="animate-float-fast"
                delay={0.4}
                prefersReducedMotion={prefersReducedMotion}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <MessageSquare size={11} className="text-accent/60" />
                  <span className="text-[10px] font-medium text-muted-dark tracking-wide">AI Chat</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex gap-1.5">
                    <div className="w-[3px] h-[3px] rounded-full bg-accent/40 mt-[3px]" />
                    <div className="h-[5px] flex-1 bg-accent/10 rounded" />
                  </div>
                  <div className="flex gap-1.5 ml-2">
                    <div className="h-[5px] flex-1 bg-accent/15 rounded" />
                    <div className="w-[3px] h-[3px] rounded-full bg-accent-light/40 mt-[3px]" />
                  </div>
                  <div className="h-[5px] w-2/3 bg-accent/8 rounded ml-auto" />
                </div>
              </FloatingCard>

              {/* ─── Floating Card: API Workflow ─── */}
              <FloatingCard
                className="top-[6%] left-[4%] w-[120px]"
                parallaxX={px}
                parallaxY={py}
                floatClass="animate-float-slow"
                delay={0.9}
                prefersReducedMotion={prefersReducedMotion}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <Database size={11} className="text-accent/60" />
                  <span className="text-[10px] font-medium text-muted-dark tracking-wide">API</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[14px] h-[14px] rounded-full border border-accent/20 flex items-center justify-center">
                    <div className="w-[4px] h-[4px] rounded-full bg-accent/40" />
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/20 to-accent/5" />
                  <div className="w-[14px] h-[14px] rounded-full border border-accent-light/20 flex items-center justify-center">
                    <div className="w-[4px] h-[4px] rounded-full bg-accent-light/40" />
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-accent-light/20 to-accent/5" />
                  <div className="w-[14px] h-[14px] rounded-full border border-accent/20 flex items-center justify-center">
                    <div className="w-[4px] h-[4px] rounded-full bg-accent/40" />
                  </div>
                </div>
                <div className="text-[9px] text-muted-dark text-center mt-1">3 endpoints&rdquo;</div>
              </FloatingCard>

              {/* ─── Floating Card: Phone Mockup ─── */}
              <FloatingCard
                className="bottom-[2%] right-[0%]"
                parallaxX={px}
                parallaxY={py}
                floatClass="animate-float"
                delay={1.8}
                prefersReducedMotion={prefersReducedMotion}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <Smartphone size={11} className="text-accent/60" />
                  <span className="text-[10px] font-medium text-muted-dark tracking-wide">Mobile</span>
                </div>
                <div className="w-[36px] h-[60px] mx-auto rounded-lg border border-accent/10 bg-gradient-to-b from-bg-card to-bg-secondary p-1.5 flex flex-col items-center gap-1">
                  <div className="w-[12px] h-[2px] rounded bg-white/[0.06]" />
                  <div className="flex-1 w-full rounded-[2px] bg-accent/8" />
                  <div className="w-[8px] h-[2px] rounded bg-white/[0.04]" />
                </div>
              </FloatingCard>

              {/* ─── Floating Card: Fast Performance ─── */}
              <FloatingCard
                className="top-[44%] -left-[3%] w-[95px]"
                parallaxX={px}
                parallaxY={py}
                floatClass="animate-float-fast"
                delay={1.5}
                prefersReducedMotion={prefersReducedMotion}
              >
                <div className="flex items-center gap-1.5">
                  <Zap size={14} className="text-accent" />
                  <div>
                    <div className="text-[11px] font-semibold text-heading leading-tight">Fast</div>
                    <div className="text-[9px] text-muted-dark">Performance</div>
                  </div>
                </div>
              </FloatingCard>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
