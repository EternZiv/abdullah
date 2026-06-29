"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const total = testimonials.length;

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const next = useCallback(() => goTo((current + 1) % total), [current, total, goTo]);
  const prev = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo]);

  useEffect(() => {
    if (isPaused || !isInView) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(next, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, isInView, next]);

  const t = testimonials[current];

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-24 px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="section-heading text-3xl md:text-4xl lg:text-[2.5rem] mt-3">
            What Clients Say
          </h2>
        </motion.div>

        <div
          className="relative mt-10 max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-label="Client testimonials"
        >
          <div className="relative overflow-hidden rounded-[32px] glass-card-strong border border-accent/10">
            <div className="min-h-[380px] md:min-h-[360px] flex items-center justify-center p-8 md:p-10 lg:p-12">
              <div className="w-full">
                <AnimatePresence mode="popLayout" custom={current}>
                  <motion.div
                    key={current}
                    custom={current}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex flex-col items-center text-center"
                    aria-live="polite"
                  >
                    <Quote
                      size={40}
                      className="text-accent/15 mb-6"
                      strokeWidth={1.5}
                    />

                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          size={18}
                          className={
                            j < t.rating
                              ? "text-accent fill-accent"
                              : "text-accent/20"
                          }
                        />
                      ))}
                    </div>

                    <p className="text-[17px] md:text-lg text-heading leading-relaxed max-w-2xl font-[450]">
                      &ldquo;{t.content}&rdquo;
                    </p>

                    <div className="flex flex-col items-center mt-7">
                      <div className="w-14 h-14 rounded-full overflow-hidden border border-accent/10 mb-3">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                      <p className="text-sm font-semibold text-heading">
                        {t.name}
                      </p>
                      <p className="text-sm text-muted">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all duration-300 bg-bg-card/50"
              aria-label="Previous"
            >
              <ChevronLeft size={17} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-400 ${
                    i === current
                      ? "bg-accent w-8 h-2"
                      : "bg-accent/20 w-2 h-2 hover:bg-accent/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all duration-300 bg-bg-card/50"
              aria-label="Next"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
