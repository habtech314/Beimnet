"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-serif text-[28px] md:text-[36px] tracking-tight">
          Why BEIMNET?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant">
        {whyChooseUs.map((item, i) => (
          <motion.div
            key={item.title}
            className="bg-background p-8 md:p-10 group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6">
              <span className="text-[11px] text-primary font-semibold tracking-widest">
                0{i + 1}
              </span>
            </div>
            <h4 className="text-[18px] font-semibold mb-3 text-on-surface tracking-tight">
              {item.title}
            </h4>
            <p className="text-[15px] text-on-surface-variant leading-[1.6]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
