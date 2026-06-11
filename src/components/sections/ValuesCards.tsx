"use client";

import { motion } from "framer-motion";

const values = [
  {
    icon: "verified",
    title: "Excellence",
    desc: "We don't just teach techniques; we pursue perfection in every stroke and every shadow, setting industry benchmarks.",
  },
  {
    icon: "diversity_1",
    title: "Community",
    desc: "Our alumni network is a lifelong support system of creative minds, fostering collaboration over competition.",
  },
  {
    icon: "bolt",
    title: "Empowerment",
    desc: "We equip our students with the business acumen and confidence to launch their own empires in the beauty world.",
  },
];

export default function ValuesCards() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-display-lg-mobile text-on-surface mb-4">
          Core <span className="text-primary">Values</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            className="p-10 bg-surface-container-high rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-background text-4xl">
                {v.icon}
              </span>
            </div>
            <h3 className="font-serif text-headline-md text-on-surface mb-4">{v.title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
