"use client";

import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import MasonryGallery from "@/components/sections/MasonryGallery";

const sliders = [
  { before: "/images/img_18.jpg", after: "/images/img_19.jpg", label: "Bridal High-Glam" },
  { before: "/images/img_20.jpg", after: "/images/img_21.jpg", label: "Avant-Garde Sculpting" },
  { before: "/images/img_22.jpg", after: "/images/img_35.jpg", label: "Architectural Nail Art" },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero — asymmetric left-aligned */}
      <section className="relative min-h-[50dvh] md:min-h-[70dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-40" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div
            className="max-w-3xl"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-5"
              variants={fadeUp}
            >
              Mastery in Motion
            </motion.p>
            <motion.h1
              className="font-serif text-[36px] md:text-[64px] leading-[0.95] tracking-tight mb-6"
              variants={fadeUp}
            >
              Student{" "}
              <span className="text-primary italic">Work</span>
            </motion.h1>
            <motion.p
              className="text-on-surface-variant text-[15px] md:text-[18px] leading-[1.7] max-w-[52ch]"
              variants={fadeUp}
            >
              Real results from real students. Witness the evolution of technique and the birth of
              professional artistry within our studios.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Before/After Transforms */}
      <section className="py-16 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-5 font-semibold">
            Transformations
          </p>
          <h2 className="font-serif text-[24px] md:text-[36px] tracking-tight">
            The Transformation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-outline-variant">
          {sliders.map((s, i) => (
            <div key={s.label} className="bg-background">
              <BeforeAfterSlider beforeImage={s.before} afterImage={s.after} label={s.label} index={i} />
            </div>
          ))}
        </div>
      </section>

      <MasonryGallery />
    </>
  );
}
