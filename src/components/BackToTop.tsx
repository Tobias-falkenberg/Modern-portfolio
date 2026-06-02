"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [launch, setLaunch] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setLaunch(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setLaunch(false), 1400);
  };

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-8 right-8 z-50 flex items-end justify-center">
          {/* Launch Trail */}
          {launch && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 h-[350px] w-1 border-l-2 border-dashed border-cyan-400/40"
            />
          )}

          {/* Rocket */}
          <motion.div
            onClick={handleClick}
            initial={{ y: 0 }}
            whileHover={{ scale: 1.15 }}
            animate={
              launch
                ? { y: -1200 }
                : { y: [0, -6, 0] }
            }
            transition={
              launch
                ? { duration: 1.4, ease: "easeInOut" }
                : { repeat: Infinity, duration: 2.4 }
            }
            className="relative cursor-pointer select-none"
          >
            {/* Glow behind rocket */}
            <div className="absolute inset-0 scale-125 rounded-full bg-cyan-500/20 blur-xl" />

            {/* Rocket SVG */}
            <div className="relative flex items-center justify-center">
              <svg width="56" height="56" viewBox="0 0 64 64">
                <defs>
                  <linearGradient id="rocketBody" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                  <radialGradient id="windowGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#a5f3fc" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Body */}
                <path
                  d="M32 4 C42 12 46 24 46 36 L46 42 L18 42 L18 36 C18 24 22 12 32 4Z"
                  fill="url(#rocketBody)"
                />

                {/* Window */}
                <circle cx="32" cy="24" r="5" fill="url(#windowGlow)" />

                {/* Fins */}
                <path d="M18 36 L10 48 L20 44Z" fill="#7c3aed" />
                <path d="M46 36 L54 48 L44 44Z" fill="#7c3aed" />

                {/* Flame */}
                {launch && (
                  <>
                    <motion.path
                      d="M32 42 C38 50 36 58 32 62 C28 58 26 50 32 42Z"
                      fill="#fb923c"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 0.2 }}
                    />
                    <motion.path
                      d="M32 46 C35 52 34 57 32 59 C30 57 29 52 32 46Z"
                      fill="#fde047"
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ repeat: Infinity, duration: 0.15 }}
                    />
                    <motion.circle
                      cx="32"
                      cy="60"
                      r="2"
                      fill="#f87171"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 0.1 }}
                    />
                  </>
                )}
              </svg>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}