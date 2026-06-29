"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import GlowButton from "@/components/ui/GlowButton";

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-14 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="glass-card-strong rounded-2xl p-8 md:p-10"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-label">NEWSLETTER</span>
            <h2 className="section-heading text-2xl md:text-3xl mt-3">
              Stay Updated
            </h2>
            <p className="body-text mt-3 max-w-md mx-auto">
              Get the latest articles, projects, and insights delivered straight to your inbox.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-2.5 mt-6 max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const email = data.get("newsletter-email") as string;
                if (email) {
                  window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Newsletter Subscription&body=${encodeURIComponent(`Subscribe this email: ${email}`)}`;
                }
              }}
            >
              <input
                type="text"
                name="newsletter-name"
                placeholder="Your Name"
                className="flex-1 px-4 py-2.5 bg-bg-card border border-border rounded-xl text-sm text-heading placeholder:text-muted-dark focus:outline-none focus:border-accent/50 transition-colors"
                aria-label="Your Name"
              />
              <input
                type="email"
                name="newsletter-email"
                placeholder="Your Email"
                className="flex-1 px-4 py-2.5 bg-bg-card border border-border rounded-xl text-sm text-heading placeholder:text-muted-dark focus:outline-none focus:border-accent/50 transition-colors"
                aria-label="Your Email"
                required
              />
              <GlowButton
                variant="primary"
                type="submit"
                className="!px-5 !py-2.5 !text-sm flex-1 sm:flex-initial"
              >
                Subscribe
                <Send size={14} />
              </GlowButton>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
