"use client";

import { motion } from "framer-motion";

const marqueeText = "Makeup \u00B7 Hair \u00B7 Nails \u00B7 Aesthetics \u00B7 Bridal \u00B7 Editorial \u00B7 ";

export default function Marquee() {
  return (
    <div className="py-5 border-y border-outline-variant overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-12 items-center shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          <span className="text-[12px] uppercase tracking-[0.2em] text-on-surface-variant font-semibold block">
            {marqueeText}
          </span>
          <span className="text-[12px] uppercase tracking-[0.2em] text-on-surface-variant font-semibold block">
            {marqueeText}
          </span>
        </motion.div>
        <motion.div
          className="flex gap-12 items-center shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          <span className="text-[12px] uppercase tracking-[0.2em] text-on-surface-variant font-semibold block">
            {marqueeText}
          </span>
          <span className="text-[12px] uppercase tracking-[0.2em] text-on-surface-variant font-semibold block">
            {marqueeText}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
