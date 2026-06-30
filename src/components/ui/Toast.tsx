"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, X } from "lucide-react";

interface ToastProps {
  type: "success" | "error";
  message: string;
  visible: boolean;
  onDismiss: () => void;
}

export default function Toast({ type, message, visible, onDismiss }: ToastProps) {
  const Icon = type === "success" ? CheckCircle2 : XCircle;
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] pointer-events-none">
      <div className="pointer-events-auto">
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl border backdrop-blur-sm ${
                type === "success"
                  ? "bg-emerald-900/40 border-emerald-500/30 text-emerald-200"
                  : "bg-red-900/40 border-red-500/30 text-red-200"
              }`}
              role="alert"
            >
              <Icon size={18} className="shrink-0" />
              <span className="text-sm font-medium">{message}</span>
              <button
                onClick={onDismiss}
                className="ml-2 p-0.5 rounded hover:bg-white/10 transition-colors"
                aria-label="Dismiss notification"
              >
                <X size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
