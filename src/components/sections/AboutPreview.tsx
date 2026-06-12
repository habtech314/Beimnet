"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  { number: "01", label: "Certified Programs" },
  { number: "02", label: "Hands-on Training" },
  { number: "03", label: "Career Support" },
  { number: "04", label: "Elite Mentorship" },
];

export default function AboutPreview() {
  return (
    <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Large editorial image */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="aspect-[3/4] overflow-hidden">
            <Image
              src="/images/img_02.jpg"
              alt="Academy Studio"
              width={500}
              height={667}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 md:-right-10 bg-surface-container-low border border-outline-variant px-6 py-5">
            <p className="font-serif text-[56px] md:text-[72px] text-primary leading-none tracking-tight">10</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mt-1">Years of Excellence</p>
          </div>
        </motion.div>

        {/* Right: Text + features */}
        <motion.div
          className="lg:col-span-7 lg:pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-5 font-semibold">
            Our Story
          </p>
          <h2 className="font-serif text-[28px] md:text-[36px] leading-[1.15] mb-6 tracking-tight">
            Empowering the Next Generation of Beauty Artists
          </h2>
          <p className="text-on-surface-variant text-[16px] leading-[1.7] mb-12 max-w-[52ch]">
            At BEIMNET Academy, we don&apos;t just teach techniques. We cultivate talent. Founded on the
            principles of precision and creativity, we provide a hands-on learning environment where
            ambitious artists build successful careers in the global beauty industry.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                className="flex items-start gap-4 py-4 border-t border-outline-variant"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-[11px] text-primary font-semibold tracking-widest mt-0.5">{f.number}</span>
                <span className="text-[15px] text-on-surface font-medium">{f.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
