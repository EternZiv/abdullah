"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Brain, LayoutDashboard, AppWindow, ArrowRight } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

const servicesList = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description: "High-performance websites built with Next.js and React. Optimized for speed, SEO, and conversion.",
  },
  {
    icon: Brain,
    title: "AI-Powered Web Solutions",
    description: "Integrate intelligent features like chatbots, content generation, and predictive analytics.",
  },
  {
    icon: LayoutDashboard,
    title: "Business Dashboards",
    description: "Beautiful data-rich dashboards with real-time updates, interactive charts, and actionable insights.",
  },
  {
    icon: AppWindow,
    title: "API Integration",
    description: "Seamless third-party integrations and custom API development to connect your tools and automate workflows.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-20 md:py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">SERVICES</span>
            <h2 className="section-heading text-3xl md:text-4xl lg:text-[2.5rem] mt-3">
              What I Do
            </h2>
            <p className="body-text mt-4 max-w-md">
              I craft premium digital experiences that blend cutting-edge AI capabilities with modern web technologies. Each project is built with attention to detail, performance, and user experience.
            </p>
            <GlowButton
              variant="ghost"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="!px-6 !py-2.5 !text-sm mt-6"
              glowSize={300}
            >
              View All Services
              <ArrowRight size={15} />
            </GlowButton>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicesList.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="glass-card-strong p-5 group cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="p-3 rounded-xl bg-[#00BFFF]/8 w-fit mb-3 group-hover:bg-[#00BFFF]/15 group-hover:shadow-[0_0_20px_rgba(0,191,255,0.1)] transition-all duration-300">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-heading mb-2">{service.title}</h3>
                  <p className="text-[13px] text-muted leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
