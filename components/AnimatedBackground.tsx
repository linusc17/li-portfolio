"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedBackground({ darkMode }: { darkMode: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      <div
        className="absolute inset-0 dot-grid"
        style={{ opacity: darkMode ? 1 : 0.7 }}
      />

      <div className="absolute inset-x-0 top-0 h-[75vh] hero-glow" />

      {!reduceMotion && (
        <>
          <motion.div
            className="absolute rounded-full blur-3xl"
            style={{
              width: 560,
              height: 560,
              left: "58%",
              top: "18%",
              background:
                "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
              willChange: "transform",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: [0, 38, -26, 0],
              y: [0, -30, 20, 0],
            }}
            transition={{
              opacity: { duration: 1.4, ease: "easeOut" },
              x: { duration: 42, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 38, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute rounded-full blur-3xl"
            style={{
              width: 460,
              height: 460,
              left: "5%",
              top: "55%",
              background:
                "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
              willChange: "transform",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: [0, -28, 22, 0],
              y: [0, 26, -18, 0],
            }}
            transition={{
              opacity: { duration: 1.6, ease: "easeOut" },
              x: { duration: 50, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 46, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </>
      )}
    </div>
  );
}
