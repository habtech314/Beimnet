"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Course } from "@/lib/constants";

interface CourseCardProps {
  course: Course;
  index: number;
  imageIndex: number;
}

export default function CourseCard({ course, index, imageIndex }: CourseCardProps) {
  return (
    <motion.article
      className={`group rounded-xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:-translate-y-2 ${
        course.highlighted
          ? "glass-card border-2 border-primary/40 bg-primary/5"
          : "glass-card"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={`/images/img_${String(imageIndex).padStart(2, "0")}.jpg`}
          alt={course.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 saturate-0 group-hover:saturate-100"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-label-sm font-label-sm ${course.tagColor}`}>
            {course.tag}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-serif text-headline-md mb-1 text-on-surface">{course.title}</h3>
            <p className="text-label-sm font-label-sm text-outline">Level: {course.level}</p>
          </div>
          <div className="text-right">
            {course.originalPrice && (
              <span className="block text-outline line-through text-label-sm">{course.originalPrice}</span>
            )}
            <span className="text-primary font-bold text-headline-md">{course.price}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-6 text-on-surface-variant">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">schedule</span>
            <span className="text-label-md font-label-md">{course.duration}</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">{course.featureIcon}</span>
            <span className="text-label-md font-label-md">{course.feature}</span>
          </span>
        </div>
        <button
          className={`mt-auto w-full py-3 font-bold rounded-lg transition-all active:scale-95 ${
            course.highlighted
              ? "bg-primary text-background neon-glow-primary"
              : "border-2 border-primary text-primary hover:bg-primary/10"
          }`}
        >
          {course.highlighted ? "Get Bundle Discount" : "Enroll Now"}
        </button>
      </div>
    </motion.article>
  );
}
