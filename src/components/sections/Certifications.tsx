"use client";

import { motion } from "framer-motion";

const certs = [
  { number: "01", label: "Elite Artist Guild" },
  { number: "02", label: "Global Beauty Cert" },
  { number: "03", label: "Cosmetic Pro Assc." },
  { number: "04", label: "Industry Innovator" },
];

export default function Certifications() {
  return (
    <section className="py-16 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-5 font-semibold">
          Accredited
        </p>
        <h2 className="font-serif text-[24px] md:text-[36px] tracking-tight">
          Certifications & Partnerships
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant">
        {certs.map((c, i) => (
          <motion.div
            key={c.label}
            className="bg-background p-8 md:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[11px] text-primary font-semibold tracking-widest">
              {c.number}
            </span>
            <h3 className="text-[18px] font-semibold mt-4 mb-3 text-on-surface tracking-tight">
              {c.label}
            </h3>
            <p className="text-[15px] text-on-surface-variant leading-[1.6]">
              Accredited certification recognized by major beauty industry bodies across East Africa.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
