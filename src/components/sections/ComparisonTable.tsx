"use client";

import { motion } from "framer-motion";
import { courses } from "@/lib/constants";

export default function ComparisonTable() {
  return (
    <section className="py-16 md:py-32 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-5 font-semibold">
            Compare
          </p>
          <h2 className="font-serif text-[24px] md:text-[36px] tracking-tight">
            Program Comparison
          </h2>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="py-5 px-4 text-[13px] uppercase tracking-[0.15em] text-on-surface-variant font-semibold">Program</th>
                <th className="py-5 px-4 text-[13px] uppercase tracking-[0.15em] text-on-surface-variant font-semibold">Duration</th>
                <th className="py-5 px-4 text-[13px] uppercase tracking-[0.15em] text-on-surface-variant font-semibold">Price</th>
                <th className="py-5 px-4 text-[13px] uppercase tracking-[0.15em] text-on-surface-variant font-semibold">Job Support</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, i) => (
                <motion.tr
                  key={course.id}
                  className={`border-b border-outline-variant/30 transition-colors ${
                    course.highlighted ? "bg-primary/5" : "hover:bg-surface-container"
                  }`}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  <td className="py-5 px-4">
                    <span className={`text-[16px] ${course.highlighted ? "text-primary font-semibold" : "text-on-surface"}`}>
                      {course.title}
                    </span>
                  </td>
                  <td className="py-5 px-4 text-[16px] text-on-surface-variant">{course.duration}</td>
                  <td className="py-5 px-4 text-[16px] text-on-surface-variant">{course.price}</td>
                  <td className="py-5 px-4">
                    {course.jobSupport ? (
                      <span className="material-symbols-outlined text-primary text-[20px]" aria-label="Job support available">check_circle</span>
                    ) : (
                      <span className="material-symbols-outlined text-on-surface-variant/40 text-[20px]" aria-label="No job support">remove_circle</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
