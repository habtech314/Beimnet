"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Instructor } from "@/lib/constants";

interface InstructorCardProps {
  instructor: Instructor;
  index: number;
}

export default function InstructorCard({ instructor, index }: InstructorCardProps) {
  return (
    <motion.div
      className="bg-surface-container rounded-xl overflow-hidden group transition-all duration-300 hover:bg-surface-container-high border border-outline-variant"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <Image
          src={`/images/img_${String(instructor.imageIndex).padStart(2, "0")}.jpg`}
          alt={instructor.name}
          width={300}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-serif text-headline-md-mobile text-on-surface">{instructor.name}</h3>
          <span
            className={`px-3 py-1 rounded-full font-label-sm text-label-sm ${instructor.specialtyColor}`}
          >
            {instructor.specialty}
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">{instructor.bio}</p>
        <div className="flex gap-4">
          {instructor.socialIcons.map((s) => (
            <span
              key={s.icon}
              className={`material-symbols-outlined ${s.color} cursor-pointer hover:scale-110 transition-transform`}
              aria-hidden="true"
            >
              {s.icon}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
