"use client";

import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import MasonryGallery from "@/components/sections/MasonryGallery";

const sliders = [
  { before: "/images/img_18.jpg", after: "/images/img_19.jpg", label: "Bridal High-Glam" },
  { before: "/images/img_20.jpg", after: "/images/img_21.jpg", label: "Avant-Garde Sculpting" },
  { before: "/images/img_22.jpg", after: "/images/img_35.jpg", label: "Architectural Nail Art" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-margin-mobile md:px-margin-desktop mb-20 relative pt-28">
        <div className="max-w-container-max mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 rounded-full border border-primary/30 text-primary font-label-md text-label-md mb-6 uppercase tracking-widest">
              Mastery in Motion
            </div>
            <h1 className="font-serif text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
              Student Work
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
              Real results from real students. Witness the evolution of technique and the birth of
              professional artistry within our neon-lit studios.
            </p>
          </motion.div>
        </div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* Before & After Sliders */}
      <section className="px-margin-mobile md:px-margin-desktop mb-24 max-w-container-max mx-auto">
        <motion.h2
          className="font-serif text-headline-lg-mobile md:text-headline-lg mb-12 border-l-4 border-primary pl-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          The Transformation
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {sliders.map((s, i) => (
            <BeforeAfterSlider key={s.label} beforeImage={s.before} afterImage={s.after} label={s.label} index={i} />
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <MasonryGallery />
    </>
  );
}
