"use client";

import { motion } from "framer-motion";

export function Ambient() {
  return <div className="ambient" aria-hidden="true">
    <motion.div className="ambient-orb orb-one" animate={{ x: [0, 22, 0], y: [0, -18, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
    <motion.div className="ambient-orb orb-two" animate={{ x: [0, -18, 0], y: [0, 24, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} />
    <div className="grain" />
  </div>;
}
