"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Graduates", color: "text-primary" },
  { value: "12", label: "Programs", color: "text-secondary" },
  { value: "8+", label: "Instructors", color: "text-tertiary-container" },
];

export default function Stats() {
  return (
    <section className="bg-surface-container-lowest py-16 border-y border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-3 gap-4 md:gap-12 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <p className={`font-serif text-display-lg-mobile ${stat.color} font-bold`}>
              {stat.value}
            </p>
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
