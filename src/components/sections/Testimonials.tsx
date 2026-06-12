"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/lib/constants";

const testimonialImages = [11, 12, 13];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-lowest overflow-hidden">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.h2
          className="font-serif text-[28px] md:text-[36px] tracking-tight mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Student Success Stories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-surface-container-lowest p-8 md:p-10 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-on-surface text-[16px] leading-[1.7] mb-8 flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-outline-variant">
                <div className="w-11 h-11 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={`/images/img_${testimonialImages[i]}.jpg`}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-on-surface">{t.name}</p>
                  <p className="text-[13px] text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
