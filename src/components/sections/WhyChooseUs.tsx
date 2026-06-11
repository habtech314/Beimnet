"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg">Why BEIMNET?</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {whyChooseUs.map((item, i) => (
          <motion.div
            key={item.title}
            className="bg-surface p-8 rounded-xl card-border text-center group transition-all hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div
              className={`w-16 h-16 rounded-full ${item.iconBg} flex items-center justify-center mx-auto mb-6 ${item.iconHoverBg} group-hover:text-background transition-colors`}
            >
              <span className="material-symbols-outlined text-3xl">{item.icon}</span>
            </div>
            <h4 className="font-serif text-[20px] mb-3">{item.title}</h4>
            <p className="font-body-md text-body-md text-on-surface-variant">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
