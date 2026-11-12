"use client";

import { motion } from "framer-motion";

export function CableDivider() {
  return <div className="cable-divider" aria-hidden="true">
    <span className="cable-divider-line cable-divider-left"><motion.i animate={{ x: ["0%", "100%"] }} transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }} /></span>
    <span className="cable-divider-node"><b /></span>
    <span className="cable-divider-line cable-divider-right"><motion.i animate={{ x: ["0%", "100%"] }} transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: .8 }} /></span>
  </div>;
}
