"use client";

import { motion } from "framer-motion";
import { categories } from "@/lib/constants";

interface FilterBarProps {
  active: string;
  onSelect: (cat: string) => void;
}

export default function FilterBar({ active, onSelect }: FilterBarProps) {
  return (
    <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md py-6 border-b border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile overflow-x-auto">
        <div className="flex items-center gap-3 whitespace-nowrap pb-2 md:pb-0">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`px-6 py-2 rounded-full font-bold font-label-md text-label-md transition-all active:scale-90 ${
                active === cat
                  ? "bg-primary text-background"
                  : "bg-surface-container-high text-on-surface-variant hover:bg-surface-variant border border-outline-variant"
              }`}
              whileTap={{ scale: 0.9 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
