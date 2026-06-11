"use client";

import { motion } from "framer-motion";
import { courses } from "@/lib/constants";

export default function ComparisonTable() {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile">
        <motion.h2
          className="font-serif text-display-lg-mobile md:text-display-lg text-center mb-16 text-on-surface"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Program Comparison
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="py-6 px-4 font-serif text-headline-md text-on-surface">Program</th>
                <th className="py-6 px-4 font-serif text-headline-md text-on-surface">Duration</th>
                <th className="py-6 px-4 font-serif text-headline-md text-on-surface">Price</th>
                <th className="py-6 px-4 font-serif text-headline-md text-on-surface">Job Support</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              {courses.map((course, i) => (
                <motion.tr
                  key={course.id}
                  className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                    course.highlighted ? "hover:bg-primary/5" : ""
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <td
                    className={`py-6 px-4 font-body-lg text-body-lg ${
                      course.highlighted ? "text-primary font-bold" : "text-on-surface"
                    }`}
                  >
                    {course.title}
                  </td>
                  <td className="py-6 px-4 font-body-lg text-body-lg">{course.duration}</td>
                  <td className="py-6 px-4 font-body-lg text-body-lg">{course.price}</td>
                  <td className="py-6 px-4">
                    {course.jobSupport ? (
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                    ) : (
                      <span className="material-symbols-outlined text-outline">remove_circle</span>
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
