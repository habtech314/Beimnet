"use client";

import { motion } from "framer-motion";
import { categories } from "@/lib/constants";

interface FilterBarProps {
  active: string;
  onSelect: (cat: string) => void;
}

export default function FilterBar({ active, onSelect }: FilterBarProps) {
  return (
    <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 overflow-x-auto">
        <div className="flex items-center gap-3 whitespace-nowrap pb-2 md:pb-0" role="tablist" aria-label="Filter courses by category">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-[13px] uppercase tracking-wider transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.95] ${
                active === cat
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-high text-on-surface-variant hover:bg-surface-variant border border-outline-variant"
              }`}
              whileTap={{ scale: 0.95 }}
              role="tab"
              aria-selected={active === cat}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
