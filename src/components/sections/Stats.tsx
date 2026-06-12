"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Graduates" },
  { value: "12", label: "Programs" },
  { value: "8+", label: "Instructors" },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 border-y border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-3 gap-4 md:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-serif text-[32px] md:text-[48px] text-primary leading-none tracking-tight">
              {stat.value}
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mt-2 font-semibold">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
