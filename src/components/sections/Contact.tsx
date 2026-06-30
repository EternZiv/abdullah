"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Send, Mail, MapPin, Clock, GitBranch, Link, Loader2 } from "lucide-react";
import { PERSONAL_INFO, SITE_CONFIG } from "@/lib/constants";
import GlowButton from "@/components/ui/GlowButton";
import Toast from "@/components/ui/Toast";
import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion() ?? false;
  const formRef = useRef<HTMLFormElement>(null);
  const initRef = useRef(false);

  useEffect(() => {
    if (!initRef.current && EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      initRef.current = true;
    }
  }, []);

  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (t: { type: "success" | "error"; message: string }) => {
    setToast(t);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5000);
  };

  const dismissToast = () => setToastVisible(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = (data.get("name") as string).trim();
    const email = (data.get("email") as string).trim();
    const phone = (data.get("phone") as string).trim();
    const message = (data.get("message") as string).trim();

    if (!name) {
      showToast({ type: "error", message: "Please enter your name." });
      return;
    }
    if (!email || !isValidEmail(email)) {
      showToast({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    if (!message) {
      showToast({ type: "error", message: "Please enter your message." });
      return;
    }

    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      showToast({ type: "error", message: "Email service is not configured. Please contact me directly." });
      return;
    }

    setSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          phone: phone || "Not provided",
          message,
        },
      );
      showToast({ type: "success", message: "Thank you! Your message has been sent successfully." });
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      const ejErr = err as { status?: number; text?: string } | null;
      if (ejErr?.status) console.error("EmailJS status:", ejErr.status);
      if (ejErr?.text) console.error("EmailJS text:", ejErr.text);
      showToast({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Toast
        type={toast?.type ?? "success"}
        message={toast?.message ?? ""}
        visible={toastVisible}
        onDismiss={dismissToast}
      />
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
                    { icon: GitBranch, label: "GitHub", value: "github.com/EternZiv", href: SITE_CONFIG.links.github },
                    { icon: Link, label: "LinkedIn", value: "linkedin.com/in/abdullah", href: SITE_CONFIG.links.linkedin },
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
                          <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-heading hover:text-accent transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-heading">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted mt-6 leading-relaxed">
                  Available for Freelance, Remote, Full-Time Opportunities, and AI Projects.
                </p>
                <form
                  ref={formRef}
                  className="mt-4 space-y-4"
                  onSubmit={handleSubmit}
                  noValidate
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
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone (optional)"
                    className="w-full px-4 py-2.5 bg-bg-card border border-border rounded-xl text-sm text-heading placeholder:text-muted-dark focus:outline-none focus:border-accent/50 transition-colors"
                    aria-label="Your Phone"
                  />
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
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={15} />
                      </>
                    )}
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
    </>
  );
}
