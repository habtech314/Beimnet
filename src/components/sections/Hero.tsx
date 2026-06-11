"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img_01.jpg"
          alt="Hero background"
          fill
          className="object-cover object-center grayscale"
          priority
        />
        <div className="absolute inset-0 editorial-overlay" />
      </div>
      <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
            Transform Your Passion Into a{" "}
            <span className="text-primary">Thriving</span>{" "}
            <span className="text-secondary">Career</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
            Master the art of professional makeup, hairstyling, and nail technology with
            industry-leading mentors at BEIMNET Beauty Academy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/enroll"
              className="bg-primary text-background font-bold px-8 py-4 rounded-lg transition-all neon-glow-primary hover:scale-105"
            >
              Enroll Now
            </Link>
            <Link
              href="/courses"
              className="border-2 border-on-surface text-on-surface font-bold px-8 py-4 rounded-lg hover:bg-on-surface hover:text-background transition-all"
            >
              View Courses
            </Link>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        .editorial-overlay {
          background: linear-gradient(
            to right,
            rgba(19, 19, 19, 0.9) 0%,
            rgba(19, 19, 19, 0.4) 50%,
            rgba(19, 19, 19, 0.1) 100%
          );
        }
      `}</style>
    </section>
  );
}
