"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { featuredCourses } from "@/lib/constants";

const cardImages = [3, 4, 5];

export default function FeaturedCourses() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.div
          className="flex justify-between items-end mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg mb-2">
              Featured Programs
            </h2>
            <p className="text-on-surface-variant font-body-md text-body-md">
              Choose your path to excellence.
            </p>
          </div>
          <Link href="/courses" className="text-primary font-bold hover:underline">
            See all courses
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {featuredCourses.map((course, i) => (
            <motion.div
              key={course.title}
              className="bg-surface-container-highest rounded-xl overflow-hidden card-border group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={`/images/img_0${cardImages[i]}.jpg`}
                  alt={course.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`${course.badgeColor} text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded`}
                  >
                    {course.badge}
                  </span>
                  <span className="text-primary font-bold font-body-md text-body-md">
                    {course.price}
                  </span>
                </div>
                <h3 className="font-serif text-headline-md mb-2">{course.title}</h3>
                <div className="flex items-center gap-4 text-on-surface-variant font-label-sm text-label-sm">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">group</span>
                    {course.seats}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
