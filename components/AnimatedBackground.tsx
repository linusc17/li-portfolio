"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    size: 600,
    xRange: ["-5vw", "15vw", "-10vw", "20vw", "-5vw"],
    yRange: ["-5vh", "20vh", "-15vh", "10vh", "-5vh"],
    startX: "15%",
    startY: "20%",
    color: { dark: "hsla(195, 85%, 55%, 0.12)", light: "hsla(200, 80%, 60%, 0.2)" },
    duration: 28,
    blur: 80,
  },
  {
    size: 500,
    xRange: ["10vw", "-15vw", "5vw", "-20vw", "10vw"],
    yRange: ["10vh", "-10vh", "15vh", "-5vh", "10vh"],
    startX: "75%",
    startY: "65%",
    color: { dark: "hsla(195, 90%, 60%, 0.09)", light: "hsla(260, 70%, 65%, 0.15)" },
    duration: 32,
    blur: 70,
  },
  {
    size: 420,
    xRange: ["-8vw", "12vw", "-18vw", "8vw", "-8vw"],
    yRange: ["15vh", "-20vh", "5vh", "-12vh", "15vh"],
    startX: "50%",
    startY: "45%",
    color: { dark: "hsla(220, 80%, 55%, 0.08)", light: "hsla(170, 70%, 50%, 0.16)" },
    duration: 24,
    blur: 90,
  },
];

export default function AnimatedBackground({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
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
