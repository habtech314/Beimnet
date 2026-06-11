"use client";

import { motion } from "framer-motion";
import { instructors } from "@/lib/constants";
import InstructorCard from "@/components/sections/InstructorCard";
import Link from "next/link";

export default function InstructorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[530px] flex flex-col items-center justify-center text-center px-margin-mobile py-24 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-40" />
        <motion.div
          className="relative z-10 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-serif text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
            Meet the Team
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Learn from certified industry professionals who are shaping the future of African beauty
            and fashion through technical excellence and creative mentorship.
          </p>
        </motion.div>
      </section>

      {/* Instructor Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {instructors.map((instructor, i) => (
            <InstructorCard key={instructor.name} instructor={instructor} index={i} />
          ))}
        </div>
      </section>

      {/* Join Faculty CTA */}
      <section className="max-w-container-max mx-auto px-margin-mobile py-24 mb-24">
        <motion.div
          className="glass-card rounded-xl p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
          <div className="relative z-10">
            <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg mb-4">
              Join our faculty
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
              Are you an expert in your field? We are always looking for passionate mentors to join
              our world-class team of beauty artists.
            </p>
            <Link
              href="/enroll"
              className="inline-flex bg-primary text-on-primary font-bold px-10 py-4 rounded-lg hover:bg-primary-fixed-dim transition-all active:scale-95 items-center gap-2"
            >
              Apply Now
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
        </motion.div>
      </section>
    </>
  );
}
