"use client";

import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Excellence",
    desc: "We pursue perfection in every stroke and every shadow, setting industry benchmarks.",
  },
  {
    number: "02",
    title: "Community",
    desc: "Our alumni network is a lifelong support system of creative minds, fostering collaboration over competition.",
  },
  {
    number: "03",
    title: "Empowerment",
    desc: "We equip our students with the business acumen and confidence to launch their own empires in the beauty world.",
  },
];

export default function ValuesCards() {
  return (
    <section className="py-16 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.h2
        className="font-serif text-[24px] md:text-[36px] tracking-tight mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Core Values
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            className="bg-background p-8 md:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[11px] text-primary font-semibold tracking-widest">
              {v.number}
            </span>
            <h3 className="text-[18px] font-semibold mt-4 mb-3 text-on-surface tracking-tight">
              {v.title}
            </h3>
            <p className="text-[15px] text-on-surface-variant leading-[1.6]">
              {v.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
