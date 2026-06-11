"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  { icon: "verified", label: "Certified Programs" },
  { icon: "pan_tool_alt", label: "Hands-on Training" },
  { icon: "business_center", label: "Career Support" },
  { icon: "workspace_premium", label: "Elite Mentorship" },
];

export default function AboutPreview() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-primary font-bold tracking-widest font-label-md text-label-md uppercase mb-4 block">
          Our Story
        </span>
        <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg mb-6">
          Empowering the Next Generation of Beauty Artists
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-12">
          At BEIMNET Academy, we don&apos;t just teach techniques; we cultivate talent. Founded on the
          principles of precision and creativity, we provide a hands-on learning environment where
          ambitious artists can hone their craft and build successful businesses in the global beauty
          industry.
        </p>
        <div className="grid grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">{f.icon}</span>
              <span className="font-label-md text-label-md">{f.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="aspect-[4/5] rounded-xl overflow-hidden card-border">
          <Image
            src="/images/img_02.jpg"
            alt="Academy Studio"
            width={500}
            height={625}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="absolute -bottom-8 -left-8 bg-surface-container p-8 rounded-xl border border-outline-variant hidden md:block">
          <p className="font-serif text-display-lg-mobile text-primary leading-none">10</p>
          <p className="font-label-md text-label-md text-on-surface-variant">Years of Excellence</p>
        </div>
      </motion.div>
    </section>
  );
}
