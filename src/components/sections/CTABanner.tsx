"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop">
      <motion.div
        className="max-w-container-max mx-auto bg-primary rounded-3xl p-12 md:p-24 text-center relative overflow-hidden group"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative z-10">
          <h2 className="font-serif text-display-lg-mobile md:text-display-lg text-background mb-8">
            Ready to Start Your Beauty Career?
          </h2>
          <p className="text-background/80 font-body-lg text-body-lg mb-12 max-w-2xl mx-auto">
            Join the next intake and transform your passion into professional excellence. Limited spots
            available for the Spring semester.
          </p>
          <Link
            href="/enroll"
            className="inline-block bg-background text-primary font-bold px-12 py-5 rounded-full text-lg hover:scale-110 transition-transform active:scale-95 shadow-xl"
          >
            Enroll Now
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
