"use client";

import { motion } from "framer-motion";
import { Ambient } from "@/components/canvas/Ambient";
import { Hero } from "@/components/hero/Hero";
import { BentoGrid } from "@/components/bento/BentoGrid";
import { MarqueeText } from "@/components/effects/MarqueeText";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { TributeSections, fannyReasons } from "@/components/sections/TributeSections";

export default function Home() {
  return <main className="site">
    <Ambient />
    <nav className="nav">
      <a className="brand" href="#top"><span>F</span> / ASPIRANTS</a>
      <div className="nav-links"><a href="#mood">MOOD</a><a href="#arsenal">ARSENAL</a></div>
      <div className="nav-status"><i /> SYSTEM ONLINE</div>
    </nav>
    <Hero />

    <div className="marquee-divider">
      <MarqueeText text={fannyReasons} speed={600} />
    </div>

    <TributeSections />

    <BentoGrid />

    <footer className="footer section-pad">
      <div className="footer-line">
        <span>FANNY / BLADE OF KIBOU</span>
        <span>© 2024 NATHAN STUDIO</span>
        <span>DESIGNED AT 35° N / 139° E</span>
      </div>
      <div className="footer-main">
        <ScrollReveal>
          <h2>KEEP<br /><i>MOVING.</i></h2>
        </ScrollReveal>
        <motion.a href="#top" className="back-top" whileHover={{ scale: 1.06 }}>BACK TO TOP <span>↑</span></motion.a>
      </div>
    </footer>
  </main>;
}
