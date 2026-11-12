"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { moods } from "@/config/theme";

type Mood = keyof typeof moods;
export function MoodSwitcher({ mood, setMood }: { mood: Mood; setMood: (mood: Mood) => void }) {
  const current = moods[mood];
  return <section className="mood-section section-pad" id="mood">
    <div className="section-head"><div><div className="section-label">01 / MOOD SYNCHRONIZER</div><h2>Pick a <i>frequency.</i></h2></div><p>Every cable pull starts with a feeling. Switch Fanny&apos;s signal and watch the profile respond.</p></div>
    <div className="mood-layout">
      <div className="mood-copy"><h3>Small signal,<br />big energy.</h3><p>Three sticker states from the Aspirants archive. Choose the one that sounds like you today.</p></div>
      <div className="mood-widget">
        <div className="widget-head"><span>ACTIVE PERSONA</span><b>{current.label}</b></div>
        <div className="sticker-grid">
          {(Object.keys(moods) as Mood[]).map((key) => <motion.button key={key} className={`sticker-card ${mood === key ? "active" : ""}`} onClick={() => setMood(key)} whileHover={{ y: -8, rotate: key === "focused" ? -2 : 2 }} whileTap={{ scale: .96 }}>
            <Image src={moods[key].image} alt={`${moods[key].label} Fanny mood`} width={240} height={240} />
            <span>{moods[key].label}</span><small>{key === "focused" ? "PEACE SIGNAL" : "OVERDRIVE"}</small>
          </motion.button>)}
        </div>
        <AnimatePresence mode="wait"><motion.div className="mood-caption" key={mood} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }}><b>“</b>{current.sub}</motion.div></AnimatePresence>
      </div>
    </div>
  </section>;
}
