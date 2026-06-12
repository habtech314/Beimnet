"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { courses } from "@/lib/constants";
import FilterBar from "@/components/sections/FilterBar";
import CourseCard from "@/components/sections/CourseCard";
import ComparisonTable from "@/components/sections/ComparisonTable";
import FAQ from "@/components/sections/FAQ";

const courseImageStartIndex = 14;

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

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? courses
      : courses.filter((c) => c.category === activeFilter);

  return (
    <>
      {/* Hero — asymmetric split: text left, image right */}
      <section className="relative min-h-[60dvh] md:min-h-[80dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/img_06.jpg"
            alt="Our Programs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
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
                Professional Training
              </motion.p>
              <motion.h1
                className="font-serif text-[36px] md:text-[64px] leading-[0.95] tracking-tight mb-6"
                variants={fadeUp}
              >
                Our{" "}
                <span className="text-primary italic">Programs</span>
              </motion.h1>
              <motion.p
                className="text-on-surface-variant text-[15px] md:text-[18px] leading-[1.7] max-w-[52ch]"
                variants={fadeUp}
              >
                Master the art of beauty with our industry-leading courses designed for the next
                generation of professional artists.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <FilterBar active={activeFilter} onSelect={setActiveFilter} />

      <section className="py-12 md:py-20 max-w-container-max mx-auto px-margin-mobile">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant">
          {filtered.map((course, i) => (
            <CourseCard
              key={course.id}
              course={course}
              index={i}
              imageIndex={courseImageStartIndex + i}
            />
          ))}
        </div>
      </section>

      <ComparisonTable />
      <FAQ />
    </>
  );
}
