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
      className="glass-card rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-[0_0_15px_rgba(127,212,32,0.4)] hover:border-primary/60"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <Image
          src={`/images/img_${String(instructor.imageIndex).padStart(2, "0")}.jpg`}
          alt={instructor.name}
          width={300}
          height={400}
          className="w-full h-full object-cover saturate-0 group-hover:saturate-100 transition-all duration-500"
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
            >
              {s.icon}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
