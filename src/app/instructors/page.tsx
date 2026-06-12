"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { instructors } from "@/lib/constants";
import Link from "next/link";

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

export default function InstructorsPage() {
  return (
    <>
      {/* Hero — asymmetric left-aligned */}
      <section className="relative min-h-[50dvh] md:min-h-[70dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-40" />

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
              Expert Mentors
            </motion.p>
            <motion.h1
              className="font-serif text-[36px] md:text-[64px] leading-[0.95] tracking-tight mb-6"
              variants={fadeUp}
            >
              Meet the{" "}
              <span className="text-primary italic">Team</span>
            </motion.h1>
            <motion.p
              className="text-on-surface-variant text-[15px] md:text-[18px] leading-[1.7] max-w-[52ch]"
              variants={fadeUp}
            >
              Learn from certified industry professionals who are shaping the future of African beauty
              and fashion through technical excellence and creative mentorship.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Instructors Grid — asymmetric masonry-like layout */}
      <section className="py-16 md:py-32 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant">
          {instructors.map((instructor, i) => (
            <motion.div
              key={instructor.name}
              className="bg-background group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src={`/images/img_${String(instructor.imageIndex).padStart(2, "0")}.jpg`}
                  alt={instructor.name}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-[20px] text-on-surface tracking-tight">{instructor.name}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-[12px] font-semibold ${instructor.specialtyColor}`}
                  >
                    {instructor.specialty}
                  </span>
                </div>
                <p className="text-[15px] text-on-surface-variant leading-[1.6] mb-6">{instructor.bio}</p>
                <div className="flex gap-4">
                  {instructor.socialIcons.map((s) => (
                    <span
                      key={s.icon}
                      className={`material-symbols-outlined ${s.color} cursor-pointer transition-all duration-200 hover:scale-110`}
                      aria-hidden="true"
                    >
                      {s.icon}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Faculty CTA */}
      <section className="py-16 md:py-32 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-8 md:mb-16">
        <motion.div
          className="bg-surface-container-lowest p-12 md:p-16 text-center relative overflow-hidden border border-outline-variant"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-5 font-semibold">
              Careers
            </p>
            <h2 className="font-serif text-[28px] md:text-[36px] tracking-tight mb-4">
              Join Our Faculty
            </h2>
            <p className="text-on-surface-variant text-[16px] leading-[1.7] max-w-xl mx-auto mb-10">
              Are you an expert in your field? We are always looking for passionate mentors to join
              our world-class team of beauty artists.
            </p>
            <Link
              href="/enroll"
              className="inline-flex bg-primary text-on-primary font-bold px-10 py-4 rounded-lg hover:bg-primary-fixed-dim transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] items-center gap-2"
            >
              Apply Now
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
        </motion.div>
      </section>
    </>
  );
}
