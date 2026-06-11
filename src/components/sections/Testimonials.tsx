"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/lib/constants";

const testimonialImages = [11, 12, 13];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-container-lowest overflow-hidden">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.h2
          className="font-serif text-headline-lg-mobile md:text-headline-lg mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Student Success Stories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="p-8 rounded-xl bg-surface-container-high border border-white/5 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="flex text-primary mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="material-symbols-outlined">
                    star
                  </span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={`/images/img_${testimonialImages[i]}.jpg`}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-label-md text-label-md font-bold">{t.name}</p>
                  <p className="text-[12px] text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
