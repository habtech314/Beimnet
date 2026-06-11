"use client";

import { motion } from "framer-motion";

const marqueeText = "Makeup · Hair · Nails · Aesthetics · Bridal · Editorial · ";

export default function Marquee() {
  return (
    <div className="bg-primary-container py-4 border-y border-primary/20 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-12 items-center shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <span className="font-label-md text-label-md text-on-primary font-bold uppercase block">
            {marqueeText}
          </span>
          <span className="font-label-md text-label-md text-on-primary font-bold uppercase block">
            {marqueeText}
          </span>
        </motion.div>
        <motion.div
          className="flex gap-12 items-center shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <span className="font-label-md text-label-md text-on-primary font-bold uppercase block">
            {marqueeText}
          </span>
          <span className="font-label-md text-label-md text-on-primary font-bold uppercase block">
            {marqueeText}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
