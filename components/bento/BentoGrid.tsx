"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const stats = [
  ["AGILITY", "100", "MAXIMUM MOBILITY"],
  ["PRECISION", "100", "CABLE CONTROL"],
  ["MOMENTUM", "∞", "NO SAFE ANGLE"],
];

export function BentoGrid() {
  return <section className="arsenal combat-archive section-pad" id="arsenal">
    <ScrollReveal>
      <div className="combat-archive-kicker">01 / COMBAT &amp; OBSESSION ARCHIVE</div>
      <div className="combat-archive-heading">
        <h2>Built for<br /><i>the gap.</i></h2>
        <p>Mobility is not just how she fights.<br />It is how Fanny exists.</p>
      </div>
    </ScrollReveal>

    <div className="combat-archive-grid">
      <ScrollReveal delay={.1}>
        <article className="combat-stats">
          <div className="combat-panel-label">FANNY / COMBAT PROFILE</div>
          <div className="combat-stat-list">
            {stats.map(([label, value, note]) => <div className="combat-stat" key={label}>
              <div><span>{label}</span><small>{note}</small></div>
              <strong>{value}</strong>
            </div>)}
          </div>
          <div className="combat-status"><i /> CABLE SYSTEM / FULLY ACTIVE</div>
        </article>
      </ScrollReveal>

      <ScrollReveal delay={.18}>
        <article className="combat-weapon">
          <div className="combat-panel-label">SIGNATURE WEAPON / KIBOU BLADE</div>
          <div className="combat-weapon-art"><Image src="/assets/sword.png" alt="Fanny signature sword" fill sizes="(max-width: 700px) 90vw, 42vw" /></div>
          <div className="combat-weapon-caption"><strong>BLADE OF KIBOU</strong><span>PRECISION / VELOCITY / LIGHT</span></div>
          <motion.div className="weapon-signal" animate={{ opacity: [0.35, 1, .35] }} transition={{ duration: 2.4, repeat: Infinity }} />
        </article>
      </ScrollReveal>

      <ScrollReveal delay={.26}>
        <article className="combat-obsession">
          <div className="combat-panel-label">WHY SHE STAYS</div>
          <blockquote>Every impossible angle looks beautiful when <i>she</i> makes it.</blockquote>
          <div className="obsession-list">
            <span><b>01</b> THE MOVEMENT</span>
            <span><b>02</b> THE ATTITUDE</span>
            <span><b>03</b> THE UNFAIR BEAUTY</span>
          </div>
          <div className="obsession-signature">FANNY / MY WIFE</div>
        </article>
      </ScrollReveal>
    </div>

    <ScrollReveal delay={.32}>
      <div className="combat-footer-line"><span>NO WALLS / NO LIMITS</span><span>THE FIRST MOVE IS ALWAYS HERS</span><span>ASPIRANTS / ACTIVE</span></div>
    </ScrollReveal>
  </section>;
}
