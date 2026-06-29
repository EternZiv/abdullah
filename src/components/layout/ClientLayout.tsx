"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="noise-overlay" />
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00BFFF] opacity-[0.02] blur-[150px] animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00BFFF] opacity-[0.015] blur-[120px] animate-blob-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#00BFFF] opacity-[0.01] blur-[100px] animate-blob-3" />
        <div className="absolute inset-0 grid-overlay opacity-50" />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
