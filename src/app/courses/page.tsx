"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { courses } from "@/lib/constants";
import FilterBar from "@/components/sections/FilterBar";
import CourseCard from "@/components/sections/CourseCard";
import ComparisonTable from "@/components/sections/ComparisonTable";
import FAQ from "@/components/sections/FAQ";

const courseImageStartIndex = 14;

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? courses
      : courses.filter((c) => c.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[442px] min-h-[400px] flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/img_06.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
        <motion.div
          className="relative text-center px-margin-mobile"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-serif text-display-lg-mobile md:text-display-lg mb-4 text-on-surface">
            Our Programs
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Master the art of beauty with our industry-leading courses designed for the next
            generation of professional artists.
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <FilterBar active={activeFilter} onSelect={setActiveFilter} />

      {/* Course Grid */}
      <section className="py-20 max-w-container-max mx-auto px-margin-mobile">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
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

      {/* Comparison */}
      <ComparisonTable />

      {/* FAQ */}
      <FAQ />
    </>
  );
}
