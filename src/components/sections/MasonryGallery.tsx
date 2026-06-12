"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { galleryItems } from "@/lib/constants";

export default function MasonryGallery() {
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
          Portfolio
        </p>
        <h2 className="font-serif text-[24px] md:text-[36px] tracking-tight">
          Gallery
        </h2>
      </motion.div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-gutter space-y-gutter">
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.title}
            className="break-inside-avoid group"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="overflow-hidden">
              <Image
                src={`/images/img_${String(item.imageIndex).padStart(2, "0")}.jpg`}
                alt={item.title}
                width={400}
                height={500}
                className="w-full transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
              />
            </div>
            <div className="pt-4 flex justify-between items-start">
              <div>
                <h3 className="text-[15px] font-semibold text-on-surface tracking-tight">{item.title}</h3>
                <p className="text-[13px] text-on-surface-variant mt-0.5">{item.subtitle}</p>
              </div>
              {item.badge && (
                <span className={`text-[11px] font-semibold uppercase tracking-wider ${item.badgeColor} px-2 py-1`}>
                  {item.badge}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
