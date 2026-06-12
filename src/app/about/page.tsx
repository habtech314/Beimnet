"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ValuesCards from "@/components/sections/ValuesCards";
import Certifications from "@/components/sections/Certifications";

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

export default function AboutPage() {
  return (
    <>
      {/* Hero — asymmetric split: image right, text left */}
      <section className="relative min-h-[70dvh] md:min-h-[100dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/img_23.jpg"
            alt="Our Story"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        </div>

        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-7"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-5"
                variants={fadeUp}
              >
                Est. 2019
              </motion.p>
              <motion.h1
                className="font-serif text-[36px] md:text-[64px] leading-[0.95] tracking-tight mb-6"
                variants={fadeUp}
              >
                Our{" "}
                <span className="text-primary italic">Story</span>
              </motion.h1>
              <motion.p
                className="text-on-surface-variant text-[15px] md:text-[18px] leading-[1.7] max-w-[52ch]"
                variants={fadeUp}
              >
                Founded at the intersection of technical precision and artistic expression,
                BEIMNET is where the next generation of beauty icons is forged.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founding Story — 5/7 asymmetric split */}
      <section className="py-16 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <Image
                src="/images/img_03.jpg"
                alt="Founding Story"
                width={500}
                height={667}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-surface-container-low border border-outline-variant px-6 py-5">
              <p className="font-serif text-[56px] md:text-[72px] text-primary leading-none tracking-tight">2019</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mt-1">Year Founded</p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 lg:pt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-5 font-semibold">
              The Beginning
            </p>
            <h2 className="font-serif text-[28px] md:text-[36px] leading-[1.15] mb-6 tracking-tight">
              Mastering the Art of Beauty
            </h2>
            <p className="text-on-surface-variant text-[16px] leading-[1.7] mb-8 max-w-[52ch]">
              BEIMNET Academy was born from a simple observation: the beauty industry was evolving
              faster than the training available. Our founder, a visionary in high-fashion makeup and
              dermatological science, envisioned a space where professional standards met creative
              liberation.
            </p>
            <p className="text-on-surface-variant text-[16px] leading-[1.7] mb-12 max-w-[52ch]">
              Since 2019, we have served as a sanctuary for ambitious artists. Our mission is to
              empower professionals with not just the how, but the why, fostering a deep understanding
              of facial architecture, color theory, and the psychology of beauty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { number: "01", label: "500+ Graduates" },
                { number: "02", label: "100% Dedication" },
                { number: "03", label: "12 Programs" },
                { number: "04", label: "8 Instructors" },
              ].map((f, i) => (
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

      {/* Stats — 1px divider grid */}
      <section className="py-16 md:py-32 bg-surface-container-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <motion.h2
            className="font-serif text-[28px] md:text-[36px] tracking-tight mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            By the Numbers
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant">
            {[
              { value: "500+", label: "Graduates" },
              { value: "5 Yrs", label: "Experience" },
              { value: "12", label: "Programs" },
              { value: "8", label: "Instructors" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-surface-container-lowest p-8 md:p-10"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-serif text-[40px] md:text-[56px] text-primary leading-none tracking-tight mb-3">
                  {stat.value}
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-on-surface-variant font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ValuesCards />
      <Certifications />
    </>
  );
}
