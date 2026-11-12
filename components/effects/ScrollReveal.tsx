"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

/** Scroll-reveal wrapper — animasi muncul saat elemen masuk viewport */
export function ScrollReveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
      transition={{ duration: .7, delay, ease: [.22, 1, .36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Magnetic hover effect — elemen mengikuti cursor saat hover */
export function MagneticHover({ children, strength = 0.3, className = "" }: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const handleLeave = () => {
      el.style.transform = "translate(0, 0)";
      el.style.transition = "transform .4s cubic-bezier(.22, 1, .36, 1)";
    };
    const handleEnter = () => {
      el.style.transition = "transform .15s ease-out";
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return <div ref={ref} className={className}>{children}</div>;
}

