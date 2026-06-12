"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import EnrollmentForm from "@/components/sections/EnrollmentForm";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function EnrollPage() {
  return (
    <>
      {/* Hero — asymmetric split: text left, image right */}
      <section className="relative min-h-[60dvh] md:min-h-[80dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/img_24.jpg"
            alt="Start your journey"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        </div>

        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-7"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-5"
                variants={fadeUp}
              >
                Begin Now
              </motion.p>
              <motion.h1
                className="font-serif text-[36px] md:text-[64px] leading-[0.95] tracking-tight mb-6"
                variants={fadeUp}
              >
                Start Your{" "}
                <span className="text-primary italic">Journey</span>
              </motion.h1>
              <motion.p
                className="text-on-surface-variant text-[15px] md:text-[18px] leading-[1.7] max-w-[52ch]"
                variants={fadeUp}
              >
                Enroll today and we will be in touch to shape your professional future in beauty.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enrollment Area — 7/5 asymmetric split */}
      <section className="py-16 md:py-32 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <EnrollmentForm />

          <div className="lg:col-span-5 flex flex-col gap-12">
            {/* Locations */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-5 font-semibold">
                Visit Us
              </p>
              <h3 className="font-serif text-[24px] tracking-tight mb-6 text-on-surface">
                Our Locations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-outline-variant">
                {[
                  { name: "Tulludimtu", query: "Tulludimtu, Addis Ababa, Ethiopia" },
                  { name: "Koye", query: "Koye, Addis Ababa, Ethiopia" },
                  { name: "Ayat", query: "Ayat, Addis Ababa, Ethiopia" },
                ].map((location, i) => (
                  <motion.div
                    key={location.name}
                    className="bg-background group"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="relative h-48 w-full">
                      <iframe
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(location.query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${location.name}`}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-on-surface font-semibold text-[15px]">
                        {location.name}
                      </h4>
                      <p className="text-on-surface-variant text-[13px]">
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social + Hours — divider grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline-variant">
              <a
                href="https://wa.me/15550001234"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background p-8 flex flex-col items-center justify-center gap-3 hover:bg-surface-container transition-colors duration-200 text-center group"
                aria-label="Contact us on WhatsApp"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-200">
                  <span className="material-symbols-outlined" aria-hidden="true">chat</span>
                </div>
                <span className="text-[14px] font-semibold text-on-surface">WhatsApp</span>
              </a>
              <a
                href="#"
                className="bg-background p-8 flex flex-col items-center justify-center gap-3 hover:bg-surface-container transition-colors duration-200 text-center group"
                aria-label="Follow us on Instagram"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-200">
                  <span className="material-symbols-outlined" aria-hidden="true">camera</span>
                </div>
                <span className="text-[14px] font-semibold text-on-surface">Instagram</span>
              </a>
            </div>

            {/* Business Hours */}
            <motion.div
              className="bg-surface-container-lowest p-8 border border-outline-variant"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <h3 className="font-serif text-[20px] tracking-tight text-on-surface">Business Hours</h3>
              </div>
              <div className="divide-y divide-outline-variant/30">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
                  { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", time: "Closed", isClosed: true },
                ].map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-3"
                  >
                    <span className="text-on-surface-variant text-[15px]">{item.day}</span>
                    <span
                      className={`font-semibold text-[15px] ${
                        item.isClosed ? "text-secondary" : "text-on-surface"
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* As Seen On — editorial brand strip */}
      <section className="py-16 md:py-32 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-12 font-semibold">
            As Seen On TikTok &amp; Instagram
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40">
            {["VOGUE", "ELLE", "BAZAAR", "GLAMOUR"].map((brand) => (
              <span
                key={brand}
                className="font-serif text-[32px] md:text-[48px] italic text-on-surface-variant tracking-tight"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
