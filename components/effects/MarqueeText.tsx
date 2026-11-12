"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/** Marquee text — teks berjalan horizontal untuk section divider */
export function MarqueeText({ text, speed = 30, className = "" }: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const repeated = Array(6).fill(text).join(" ★ ");

  return (
    <div className={`marquee-container ${className}`}>
      <motion.div
        className="marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        <span className="marquee-text">{repeated}</span>
        <span className="marquee-text">{repeated}</span>
      </motion.div>
    </div>
  );
}

/** Counting stat — angka yang naik saat muncul di viewport */
export function CountingStat({ value, suffix = "", duration = 2 }: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, (duration * 1000) / steps);
    return () => clearInterval(timer);
  }, [started, value, duration]);

  return (
    <motion.span
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
    >
      {count}{suffix}
    </motion.span>
  );
}

