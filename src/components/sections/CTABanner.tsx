"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop">
      <motion.div
        className="max-w-container-max mx-auto relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="bg-primary-container px-8 py-16 md:px-16 md:py-24 relative">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-serif text-[28px] md:text-[40px] text-on-primary-container mb-6 tracking-tight leading-[1.1]">
              Ready to Start Your Beauty Career?
            </h2>
            <p className="text-on-primary-container/80 text-[16px] md:text-[18px] mb-10 leading-[1.7] max-w-[48ch]">
              Join the next intake and transform your passion into professional excellence. Limited spots
              available for the Spring semester.
            </p>
            <Link
              href="/enroll"
              className="inline-flex items-center gap-2 bg-on-primary-container text-primary-container font-semibold px-8 py-4 text-[15px] hover:opacity-90 transition-opacity"
            >
              Enroll Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
