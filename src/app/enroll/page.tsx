"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import EnrollmentForm from "@/components/sections/EnrollmentForm";

export default function EnrollPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[353px] md:h-[442px] flex items-center justify-center overflow-hidden px-margin-mobile pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
          <Image
            src="/images/img_24.jpg"
            alt="Start your journey"
            fill
            className="object-cover"
            priority
          />
        </div>
        <motion.div
          className="relative z-20 text-center max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-serif text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
            Start Your <span className="text-primary italic" style={{ textShadow: "0 0 10px rgba(127,212,32,0.4), 0 0 20px rgba(127,212,32,0.2)" }}>Journey</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Enroll today and we&apos;ll be in touch to shape your professional future in beauty.
          </p>
        </motion.div>
      </section>

      {/* Enrollment & Info Bento Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Form */}
          <EnrollmentForm />

          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-gutter">
            {/* Map Placeholder */}
            <motion.div
              className="rounded-xl overflow-hidden h-64 md:h-80 relative group border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <Image
                src="/images/img_25.jpg"
                alt="Location"
                fill
                className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="bg-primary text-on-primary text-[10px] font-bold px-2 py-1 rounded mb-2 inline-block">
                  VISIT US
                </span>
                <h3 className="text-on-surface font-serif text-headline-md-mobile">
                  Addis Ababa, Ethiopia
                </h3>
                <p className="text-on-surface-variant font-body-md text-body-md">
                  Bole Road, Premium Tower 4th Floor
                </p>
              </div>
            </motion.div>

            {/* Contact Channels */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/15550001234"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-surface-container transition-colors text-center group border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface">WhatsApp</span>
              </a>
              <a
                href="#"
                className="rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-surface-container transition-colors text-center group border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-[#E1306C]/20 flex items-center justify-center text-[#E1306C] group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">camera</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface">Instagram</span>
              </a>
            </div>

            {/* Business Hours */}
            <motion.div
              className="rounded-xl p-8 flex-grow border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <h3 className="font-serif text-headline-md-mobile text-on-surface">Business Hours</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
                  { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", time: "Closed", isClosed: true },
                ].map((item) => (
                  <li
                    key={item.day}
                    className="flex justify-between items-center border-b border-white/5 pb-2"
                  >
                    <span className="text-on-surface-variant">{item.day}</span>
                    <span
                      className={`font-semibold ${
                        item.isClosed ? "text-secondary" : "text-on-surface"
                      }`}
                    >
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-surface-container-low py-16">
        <div className="max-w-container-max mx-auto px-margin-mobile text-center">
          <p className="font-label-md text-label-md text-primary mb-8 tracking-widest">
            AS SEEN ON TIKTOK &amp; INSTAGRAM
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
            {["VOGUE", "ELLE", "BAZAAR", "GLAMOUR"].map((brand) => (
              <span
                key={brand}
                className="font-serif text-display-lg-mobile italic"
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
