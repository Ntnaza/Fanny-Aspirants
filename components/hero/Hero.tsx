"use client";

import Image from "next/image";
import { AnimatePresence, motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [sticker, setSticker] = useState<number | null>(null);
  const stickerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 900], [0, -180]);

  useEffect(() => () => {
    if (stickerTimer.current) clearTimeout(stickerTimer.current);
  }, []);

  const showRandomSticker = () => {
    if (stickerTimer.current) clearTimeout(stickerTimer.current);
    setSticker(Math.floor(Math.random() * 5) + 4);
    stickerTimer.current = setTimeout(() => setSticker(null), 1150);
  };

  return <section className="hero section-pad" id="top">
    <div className="hero-copy">
      <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}>MILLENNIUM / ASPIRANTS / 04</motion.p>
      <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>
        A high-speed hopeful with a soft spot for impossible angles. The Blade of Kibou moves first — and makes the world catch up.
      </motion.p>
      <div className="hero-actions"><a className="primary-link" href="#arsenal">VIEW PROFILE <span>↗</span></a><a className="ghost-link" href="#mood">SWITCH MOOD</a></div>
    </div>
    <div className="hero-stage">
      <div className="hero-beam" />

      <div className="hero-ui hero-ui-brand">
        <span className="hero-ui-mark">F</span>
        <span>FANNY / MY WIFE</span>
      </div>
      <div className="hero-ui hero-ui-status"><i /> SYSTEM ONLINE</div>
      <div className="hero-ui hero-ui-file"><strong>01</strong><span>WIFE</span></div>
      <div className="hero-ui hero-ui-name"><strong>FANNY</strong><span>ASPIRANTS</span></div>
      <div className="hero-ui hero-ui-scroll"><span>SCROLL TO EXPLORE</span><b>↓</b></div>

      <span className="hero-spark hero-spark-one" aria-hidden="true" />
      <span className="hero-spark hero-spark-two" aria-hidden="true" />
      <span className="hero-spark hero-spark-three" aria-hidden="true" />

      <AnimatePresence>
        {sticker !== null && (
          <motion.div
            className="hero-sticker-popup"
            initial={{ opacity: 0, scale: .55, x: 12, y: 10, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 5 }}
            exit={{ opacity: 0, scale: .72, y: -8, transition: { duration: .18 } }}
            transition={{ type: "spring", stiffness: 380, damping: 18 }}
          >
            <Image src={`/assets/${sticker}.png`} alt={`Fanny sticker ${sticker}`} fill sizes="96px" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating particles for depth */}
      <motion.div
        className="particle"
        style={{ width: 6, height: 6, background: 'var(--lavender)', left: '30%', top: '20%' }}
        animate={{ y: [0, -30, 0], opacity: [0, .5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="particle"
        style={{ width: 4, height: 4, background: 'var(--coral)', right: '25%', top: '35%', opacity: .4 }}
        animate={{ y: [0, -25, 0], opacity: [0, .4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="particle"
        style={{ width: 8, height: 8, background: 'var(--lavender)', left: '65%', bottom: '25%', opacity: .3 }}
        animate={{ y: [0, -20, 0], opacity: [0, .35, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Title text */}
      <motion.div className="hero-title" style={{ y: titleY }} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9 }}>
        <span className="title-blade">BLADE</span><span className="title-kibou">KIBOU</span>
      </motion.div>
      <motion.div className="hero-title-of" style={{ y: titleY }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: .25 }}>OF</motion.div>

      {/* Swords with parallax */}
      <motion.div
        className="sword sword-left"
        animate={{ y: [0, -15, 0], rotate: [-136, -132, -136] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/assets/sword.png" alt="" fill sizes="(max-width: 560px) 240px, 420px" />
      </motion.div>
      <motion.div
        className="sword sword-right"
        animate={{ y: [0, 15, 0], rotate: [142, 146, 142] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: .3 }}
      >
        <Image src="/assets/sword.png" alt="" fill sizes="(max-width: 560px) 240px, 420px" />
      </motion.div>

      {/* Character art */}
      <motion.div
        className="hero-art"
        onClick={showRandomSticker}
        whileHover={{ scale: 1.045 }}
        initial={{ opacity: 0, scale: .94 }}
        animate={{ opacity: 1, y: [0, -16, 0], scale: 1 }}
        transition={{
          opacity: { duration: .8, delay: .25 },
          y: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
          scale: { type: "spring", stiffness: 360, damping: 20 },
        }}
      >
        <Image src="/assets/full-2.png" alt="Fanny in her Blade of Kibou outfit" fill priority sizes="(max-width: 800px) 90vw, 52vw" />
      </motion.div>

      {/* Decorations */}
      <Image className="star star-hero" src="/assets/starburst.png" alt="" width={86} height={86} priority />
      <div className="hud hud-top"><span>LAT 35.6762° N</span><span>LNG 139.6503° E</span></div>
      <div className="hero-badge"><strong>04</strong><br />ASPIRANTS<br />CHARACTER FILE</div>
      <div className="hero-name"><strong>FANNY</strong><span>BLADE OF KIBOU</span></div>
      <div className="hero-index">KIBOU / CHARACTER STUDY / 2024</div>
    </div>
  </section>;
}
