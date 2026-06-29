"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import { PERSONAL_INFO, SITE_CONFIG } from "@/lib/constants";
import GlowButton from "@/components/ui/GlowButton";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <section id="contact" className="relative py-20 md:py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="section-label">CONTACT</span>
          <h2 className="section-heading text-3xl md:text-4xl lg:text-[2.5rem] mt-3">
            Let&apos;s Work Together
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-card-strong rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 text-xs rounded-full bg-[#00BFFF]/10 text-accent border border-[#00BFFF]/15">
                  {PERSONAL_INFO.availability}
                </span>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
                  { icon: MapPin, label: "Location", value: PERSONAL_INFO.location },
                  { icon: Clock, label: "Availability", value: PERSONAL_INFO.availability },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-[#00BFFF]/8">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-heading hover:text-accent transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-heading">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const name = data.get("name") as string;
                  const email = data.get("email") as string;
                  const message = data.get("message") as string;
                  if (name && email && message) {
                    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                  }
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 bg-bg-card border border-border rounded-xl text-sm text-heading placeholder:text-muted-dark focus:outline-none focus:border-accent/50 transition-colors"
                    aria-label="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2.5 bg-bg-card border border-border rounded-xl text-sm text-heading placeholder:text-muted-dark focus:outline-none focus:border-accent/50 transition-colors"
                    aria-label="Your Email"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={3}
                  className="w-full px-4 py-2.5 bg-bg-card border border-border rounded-xl text-sm text-heading placeholder:text-muted-dark focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  aria-label="Your Message"
                  required
                />
                <GlowButton
                  variant="primary"
                  type="submit"
                  className="!w-full !px-6 !py-3 !text-sm"
                >
                  Send Message
                  <Send size={15} />
                </GlowButton>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 15 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="glass-card-strong rounded-2xl p-8 md:p-10 text-center flex-1 flex flex-col items-center justify-center">
              <motion.div
                className="w-20 h-20 mx-auto rounded-full bg-[#00BFFF]/8 flex items-center justify-center mb-5 border border-[#00BFFF]/10"
                animate={prefersReducedMotion ? {} : { scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Send size={30} className="text-accent" />
              </motion.div>
              <h3 className="text-xl font-bold font-heading text-heading mb-2">
                Let&apos;s Build Something Great
              </h3>
              <p className="text-sm text-muted leading-relaxed max-w-xs mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex justify-center gap-3">
                {[
                  { label: "GitHub", href: SITE_CONFIG.links.github },
                  { label: "LinkedIn", href: SITE_CONFIG.links.linkedin },
                  { label: "Twitter", href: SITE_CONFIG.links.twitter },
                ].map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-sm rounded-full border border-border text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
