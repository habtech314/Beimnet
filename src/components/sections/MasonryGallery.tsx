"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { galleryItems } from "@/lib/constants";

export default function MasonryGallery() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-32">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-gutter space-y-gutter">
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.title}
            className="glass-card rounded-xl overflow-hidden group break-inside-avoid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <Image
              src={`/images/img_${String(item.imageIndex).padStart(2, "0")}.jpg`}
              alt={item.title}
              width={400}
              height={500}
              className="w-full hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-label-md text-primary">{item.title}</h3>
                {item.badge && (
                  <span className={`font-label-sm text-label-sm ${item.badgeColor} px-2 py-1 rounded`}>
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-on-surface-variant font-label-sm text-label-sm">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
