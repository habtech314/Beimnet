"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { featuredCourses } from "@/lib/constants";

const cardImages = [3, 4, 5];

export default function FeaturedCourses() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-lowest">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-[28px] md:text-[36px] tracking-tight mb-3">
            Featured Programs
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-on-surface-variant text-[16px]">
              Choose your path to excellence.
            </p>
            <Link
              href="/courses"
              className="text-[13px] uppercase tracking-[0.1em] text-primary hover:text-primary-fixed transition-colors font-semibold"
            >
              See all courses
            </Link>
          </div>
        </motion.div>

        {/* Editorial layout: 1 large + 2 stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large featured card */}
          <motion.div
            className="relative group overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={`/images/img_0${cardImages[0]}.jpg`}
                alt={featuredCourses[0].title}
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 text-on-primary">
                  {featuredCourses[0].badge}
                </span>
                <span className="text-white/60 text-[13px]">{featuredCourses[0].duration}</span>
              </div>
              <h3 className="font-serif text-[24px] md:text-[28px] text-white mb-2 tracking-tight">
                {featuredCourses[0].title}
              </h3>
              <p className="text-primary font-semibold text-[18px]">{featuredCourses[0].price}</p>
            </div>
          </motion.div>

          {/* Two stacked cards */}
          <div className="grid grid-rows-2 gap-6">
            {featuredCourses.slice(1).map((course, i) => (
              <motion.div
                key={course.title}
                className="relative group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="h-full overflow-hidden">
                  <Image
                    src={`/images/img_0${cardImages[i + 1]}.jpg`}
                    alt={course.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-primary text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 text-on-primary">
                      {course.badge}
                    </span>
                    <span className="text-white/60 text-[13px]">{course.duration}</span>
                  </div>
                  <h3 className="font-serif text-[20px] md:text-[22px] text-white mb-1 tracking-tight">
                    {course.title}
                  </h3>
                  <p className="text-primary font-semibold text-[16px]">{course.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
