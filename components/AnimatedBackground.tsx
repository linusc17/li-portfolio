"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    size: 650,
    xRange: ["-5vw", "12vw", "-8vw", "18vw", "-5vw"],
    yRange: ["-5vh", "18vh", "-12vh", "8vh", "-5vh"],
    startX: "10%",
    startY: "15%",
    color: { dark: "hsla(210, 25%, 55%, 0.08)", light: "hsla(210, 20%, 50%, 0.10)" },
    duration: 30,
    blur: 80,
  },
  {
    size: 550,
    xRange: ["8vw", "-12vw", "6vw", "-16vw", "8vw"],
    yRange: ["8vh", "-12vh", "14vh", "-6vh", "8vh"],
    startX: "70%",
    startY: "60%",
    color: { dark: "hsla(250, 20%, 60%, 0.06)", light: "hsla(260, 15%, 55%, 0.08)" },
    duration: 34,
    blur: 75,
  },
  {
    size: 450,
    xRange: ["-6vw", "10vw", "-14vw", "6vw", "-6vw"],
    yRange: ["12vh", "-16vh", "4vh", "-10vh", "12vh"],
    startX: "45%",
    startY: "40%",
    color: { dark: "hsla(190, 20%, 50%, 0.05)", light: "hsla(180, 15%, 45%, 0.07)" },
    duration: 26,
    blur: 85,
  },
  {
    size: 350,
    xRange: ["12vw", "-8vw", "16vw", "-4vw", "12vw"],
    yRange: ["-8vh", "10vh", "-4vh", "16vh", "-8vh"],
    startX: "85%",
    startY: "15%",
    color: { dark: "hsla(230, 18%, 55%, 0.05)", light: "hsla(240, 12%, 55%, 0.06)" },
    duration: 36,
    blur: 70,
  },
];

export default function AnimatedBackground({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Grain overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.02]" style={{ mixBlendMode: "overlay" }}>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {orbs.map((orb, i) => (
        <motion.div
          key={`${i}-${darkMode}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [1, 1.08, 0.96, 1.04, 1],
            x: orb.xRange,
            y: orb.yRange,
          }}
          transition={{
            opacity: { duration: 1.5, ease: "easeOut" },
            scale: {
              duration: orb.duration * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: {
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: orb.duration * 1.1,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            position: "absolute",
            left: orb.startX,
            top: orb.startY,
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${darkMode ? orb.color.dark : orb.color.light} 0%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
