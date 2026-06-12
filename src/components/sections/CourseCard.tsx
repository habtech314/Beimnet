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
      className={`bg-background flex flex-col h-full group ${
        course.highlighted ? "ring-1 ring-primary/30" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={`/images/img_${String(imageIndex).padStart(2, "0")}.jpg`}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-label-sm font-label-sm ${course.tagColor}`}>
            {course.tag}
          </span>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-serif text-[20px] mb-1 text-on-surface tracking-tight">{course.title}</h3>
            <p className="text-[13px] text-on-surface-variant">Level: {course.level}</p>
          </div>
          <div className="text-right">
            {course.originalPrice && (
              <span className="block text-on-surface-variant line-through text-[13px]">{course.originalPrice}</span>
            )}
            <span className="text-primary font-bold text-[20px]">{course.price}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-8 text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            <span className="text-[13px]">{course.duration}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">{course.featureIcon}</span>
            <span className="text-[13px]">{course.feature}</span>
          </span>
        </div>
        <button
          className={`mt-auto w-full py-3 font-bold rounded-lg transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] ${
            course.highlighted
              ? "bg-primary text-on-primary"
              : "border border-primary text-primary hover:bg-primary/10"
          }`}
        >
          {course.highlighted ? "Get Bundle Discount" : "Enroll Now"}
        </button>
      </div>
    </motion.article>
  );
}
