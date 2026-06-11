"use client";

import { motion } from "framer-motion";

const certs = [
  { icon: "workspace_premium", label: "Elite Artist Guild" },
  { icon: "military_tech", label: "Global Beauty Cert" },
  { icon: "verified_user", label: "Cosmetic Pro Assc." },
  { icon: "new_releases", label: "Industry Innovator" },
];

export default function Certifications() {
  return (
    <section className="py-12 border-y border-outline-variant bg-surface-container-lowest/50">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <motion.div
          className="flex items-center justify-between gap-12 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all flex-wrap md:flex-nowrap"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.4, x: 0 }}
          viewport={{ once: true }}
        >
          {certs.map((c) => (
            <div key={c.label} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-4xl">{c.icon}</span>
              <span className="font-bold tracking-widest uppercase">{c.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
