"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      <div className="absolute inset-0 lg:hidden z-0">
        <Image
          src="/images/img_01.jpg"
          alt="BEIMNET Beauty Academy"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.div
          className="lg:hidden flex flex-col justify-center min-h-screen py-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="font-label-md text-label-sm text-on-surface-variant uppercase tracking-[0.2em] mb-5"
            variants={itemVariants}
          >
            Est. 2019 · Beimnet Academy
          </motion.p>

          <motion.h1
            className="font-serif text-[42px] leading-[1.05] mb-5"
            variants={itemVariants}
          >
            Transform Your Passion Into a{" "}
            <span className="text-primary block mt-1">Thriving</span>{" "}
            <span className="text-secondary block mt-1 italic">Career</span>
          </motion.h1>

          <motion.div
            className="w-14 h-[2px] bg-primary mb-5"
            variants={itemVariants}
          />

          <motion.p
            className="font-body-md text-body-md text-on-surface-variant mb-7 max-w-md leading-relaxed"
            variants={itemVariants}
          >
            Master the art of professional makeup, hairstyling, and nail
            technology with industry-leading mentors.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 mb-8"
            variants={itemVariants}
          >
            {["Beauty", "Makeup", "Hair", "Nails"].map((item) => (
              <span
                key={item}
                className="font-label-md text-label-sm text-on-surface-variant uppercase tracking-widest"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            variants={itemVariants}
          >
            <Link
              href="/enroll"
              className="bg-primary text-on-primary font-bold px-7 py-3.5 transition-all hover:opacity-90 text-[15px] rounded-lg"
            >
              Enroll Now
            </Link>
            <Link
              href="/courses"
              className="group flex items-center gap-2 font-bold text-on-surface hover:text-primary transition-colors text-[15px]"
            >
              View Courses
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </motion.div>

          <div className="absolute top-6 right-6 border border-on-surface/20 px-3 py-1.5">
            <span className="font-label-md text-label-sm text-on-surface/60 uppercase tracking-[0.15em]">
              Vol. 01
            </span>
          </div>
        </motion.div>

        <div className="hidden lg:grid lg:grid-cols-[1fr_0.8fr] gap-12 items-center min-h-[calc(100vh-120px)] py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="font-label-md text-label-md text-on-surface-variant uppercase tracking-[0.2em] mb-6"
              variants={itemVariants}
            >
              Est. 2019 · Beimnet Academy
            </motion.p>

            <motion.h1
              className="font-serif text-display-lg mb-6 leading-[0.95]"
              variants={itemVariants}
            >
              Transform Your Passion Into a{" "}
              <span className="text-primary block mt-1">Thriving</span>{" "}
              <span className="text-secondary block mt-1 italic">Career</span>
            </motion.h1>

            <motion.div
              className="w-16 h-[2px] bg-primary mb-6"
              variants={itemVariants}
            />

            <motion.p
              className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg leading-relaxed"
              variants={itemVariants}
            >
              Master the art of professional makeup, hairstyling, and nail
              technology with industry-leading mentors.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-6 mb-10"
              variants={itemVariants}
            >
              {["Beauty", "Makeup", "Hair", "Nails"].map((item) => (
                <span
                  key={item}
                  className="font-label-md text-label-sm text-on-surface-variant uppercase tracking-widest"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-5"
              variants={itemVariants}
            >
              <Link
                href="/enroll"
                className="bg-primary text-on-primary font-bold px-8 py-4 transition-all hover:opacity-90 text-body-md rounded-lg"
              >
                Enroll Now
              </Link>
              <Link
                href="/courses"
                className="group flex items-center gap-2 font-bold text-on-surface hover:text-primary transition-colors text-body-md"
              >
                View Courses
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={scaleVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/images/img_01.jpg"
                alt="BEIMNET Beauty Academy"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              <div className="absolute top-6 left-6 border border-on-surface/20 px-3 py-1.5">
                <span className="font-label-md text-label-sm text-on-surface/60 uppercase tracking-[0.15em]">
                  Vol. 01
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
