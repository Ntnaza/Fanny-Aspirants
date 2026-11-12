"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export const fannyReasons = "tampilan manis tetap tegas, tingkah laku imut, karakter kuat, rambut lembut berantakan, muka imut lucu, gerakan indah, mata tajam memikat, senyum tipis langka, postur tubuh atletis, aura badas natural, gaya tomboi menawan, hidung mancung pas, garis rahang tegas, bibir tipis manis, poni depan rapi, rambut pirang bersinar, kulit bersih bercahaya, pundak tegas proporsional, lengan kencang estetis, kaki jenjang lincah, cara jalan percaya diri, pandangan mata dalam, sorot mata berbinar, lekuk tubuh ideal, proporsi badan sempurna, gaya rambut praktis, penampilan simpel berkelas, wajah tanpa cela, paras rupawan alami, kecantikan luar biasa, aura dominan memikat, tatapan dingin, raut wajah fokus, gaya berdiri gagah, gerakan tubuh luwes, langkah kaki ringan, ekspresi kaget, pipi merona, leher jenjang anggun, rambut berkibar, sikap mandiri, sifat keras kepala, cara bicara blak-blakan, ketegasan sikap, kebiasaan merapikan rambut, gerakan tangan cepat, cara menoleh, ekspresi cemberut, tawa kecil, sikap cuek, cara duduk santai, ketenangan diri, gaya berpakaian, wibawa alami, sikap pantang menyerah, gerakan melompat, kelakuan polos, sifat jujur, ekspresi lelah, raut wajah diam, gerakan refleks, sikap dingin, kelakuan aktif, tatapan lembut, pesona alami, gaya santai, sorot mata tegas, postur tegap, ekspresi datar, gerak-gerik lincah, pembawaan tenang, cara tersenyum, gaya bicara, tatapan tajam, perangai tegas, tingkah natural, pembawaan anggun, gaya kasual, ekspresi serius, gerak tubuh cepat, sorot mata tenang, sikap tegas, pembawaan santai, gaya elegan, ekspresi ceria, gerak-gerik luwes, tatapan hangat, sikap terbuka, pembawaan cerdas, gaya simpel, ekspresi malu, gerak tubuh aktif, sorot mata tajam, sikap ramah, pembawaan tenang, gaya dinamis, ekspresi fokus, gerak-gerik lincah, tatapan teduh, sikap mandiri, pembawaan tegas, gaya natural";
// Extra rows intentionally overflow the viewport so the typographic background never runs out.
const reasonRows = Array.from({ length: 80 }, (_, index) => `${index % 2 ? "" : "FANNY — "}${fannyReasons} · ${fannyReasons}`);
const moodCards = [
  { image: 4, label: "SOFT", note: "RARE SOFT SIGNAL", copy: "Even the sharpest blade has a soft side.", accent: "#cbd9ec" },
  { image: 7, label: "PLAYFUL", note: "HIGH ENERGY", copy: "The smile that makes every impossible angle worth it.", accent: "#ffd7c9" },
  { image: 5, label: "CONFUSED", note: "UNEXPECTED SIGNAL", copy: "A tiny question mark, an entire personality.", accent: "#dce7c4" },
  { image: 8, label: "DEFIANT", note: "DO NOT TEST", copy: "The look that says she already won.", accent: "#d9d3ec" },
];

export function TributeSections() {
  const [activeMood, setActiveMood] = useState(7);
  const activeMoodData = moodCards.find((mood) => mood.image === activeMood) ?? moodCards[1];

  return <>
    <section className="quote-wall section-pad">
      <ScrollReveal>
        <div className="reasons-screen">
          <div className="reasons-wall" aria-hidden="true">
            <p>{reasonRows.join(" · ")}</p>
          </div>
          <div className="reasons-title">
            {/* <span>THE FANNY ARCHIVE</span> */}
            <h2>1000 REASONS<br /><i>TO LOVE FANNY</i></h2>
            {/* <small>AN UNFINISHED LIST OF EVERYTHING I LOVE ABOUT HER</small> */}
          </div>
        </div>
      </ScrollReveal>
    </section>

    <section className="memory-gallery mood-deck section-pad" style={{ "--mood-accent": activeMoodData.accent } as React.CSSProperties}>
      <ScrollReveal>
        <div className="tribute-kicker">04 / MEMORY BOARD</div>
        <div className="memory-heading"><h2>Fanny, in<br /><i>every mood.</i></h2><p>A small archive of the expressions that made this website happen.</p></div>
        <div className="memory-grid">
          {moodCards.map((mood, index) => <motion.button type="button" className={`memory-card memory-card-${index + 1} ${activeMood === mood.image ? "is-active" : ""}`} key={mood.image} onClick={() => setActiveMood(mood.image)} whileHover={{ y: -10, rotate: 0 }} whileTap={{ scale: .97 }} aria-label={`Select ${mood.label} mood`}>
            <Image src={`/assets/${mood.image}.png`} alt={`Fanny ${mood.label.toLowerCase()} mood`} fill sizes="(max-width: 700px) 44vw, 220px" />
            <span>MOOD / {String(mood.image).padStart(2, "0")}</span>
            <b>{mood.label}</b>
            <small>{mood.note}</small>
          </motion.button>)}
        </div>
        <div className="mood-deck-caption"><span>ACTIVE MOOD</span><strong>{activeMoodData.label}</strong><p>{activeMoodData.copy}</p></div>
      </ScrollReveal>
    </section>
  </>;
}
