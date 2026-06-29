import { useCallback, useEffect } from "react";
import { useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export function useCursorGlow<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  glowSize = 360
) {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const hover = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 22 });
  const opacity = useSpring(hover, { stiffness: 280, damping: 28 });

  const glowBackground = useMotionTemplate`radial-gradient(${glowSize}px circle at ${springX}px ${springY}px, rgba(255,255,255,0.07), transparent 65%)`;

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [ref, mouseX, mouseY]
  );

  const handleMouseEnter = useCallback(() => hover.set(1), [hover]);
  const handleMouseLeave = useCallback(() => {
    hover.set(0);
    mouseX.set(-1000);
    mouseY.set(-1000);
  }, [hover, mouseX, mouseY]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, handleMouseMove, handleMouseEnter, handleMouseLeave]);

  return { glowBackground, opacity, springX, springY };
}
