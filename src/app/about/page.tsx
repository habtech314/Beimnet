"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ValuesCards from "@/components/sections/ValuesCards";
import Certifications from "@/components/sections/Certifications";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[618px] flex items-center justify-center overflow-hidden pt-16">
        <Image
          src="/images/img_23.jpg"
          alt="Our Story"
          fill
          className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <motion.div
          className="relative z-10 text-center px-margin-mobile max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-serif text-display-lg md:text-[80px] text-on-surface mb-6 leading-tight">
            Our <span className="text-primary italic">Story</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Founded at the intersection of technical precision and artistic expression, BEIMNET is
            where the next generation of beauty icons is forged.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -inset-4 border border-primary/20 rounded-xl group-hover:border-primary/40 transition-colors" />
            <Image
              src="/images/img_03.jpg"
              alt="Founding Story"
              width={500}
              height={600}
              className="relative rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-serif text-headline-lg text-primary">Mastering the Art of Beauty</h2>
            <div className="space-y-4">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                BEIMNET Academy was born from a simple observation: the beauty industry was evolving
                faster than the training available. Our founder, a visionary in high-fashion makeup and
                dermatological science, envisioned a space where professional standards met creative
                liberation.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Since 2019, we have served as a sanctuary for ambitious artists. Our mission is to
                empower professionals with not just the &ldquo;how,&rdquo; but the
                &ldquo;why&rdquo;&mdash;fostering a deep understanding of facial architecture, color
                theory, and the psychology of beauty.
              </p>
            </div>
            <div className="pt-8 border-t border-outline-variant flex gap-8">
              <div>
                <p className="text-primary font-bold font-serif text-display-lg-mobile">2019</p>
                <p className="text-label-md text-on-surface-variant">Founded</p>
              </div>
              <div>
                <p className="text-primary font-bold font-serif text-display-lg-mobile">100%</p>
                <p className="text-label-md text-on-surface-variant">Dedication</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {[
              { value: "500+", label: "Graduates" },
              { value: "5 Yrs", label: "Experience" },
              { value: "12", label: "Programs" },
              { value: "8", label: "Instructors" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="p-8 bg-surface rounded-xl border border-white/5 text-center hover:bg-surface-container transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <p className="text-primary font-serif text-display-lg-mobile mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </p>
                <p className="font-label-md text-label-md text-on-surface-variant">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <ValuesCards />

      {/* Certifications */}
      <Certifications />
    </>
  );
}
