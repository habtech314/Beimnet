"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "When does the next session start?",
    a: "New sessions begin on the first Monday of every month. We recommend enrolling at least two weeks in advance to secure your spot as classes fill up quickly.",
  },
  {
    q: "Do I need to bring my own equipment?",
    a: "Basic practice materials are provided. However, for courses like Makeup and Nail Tech, we offer professional-grade kits for purchase at a student discount.",
  },
  {
    q: "Are the certificates internationally recognized?",
    a: "Yes, BEIMNET Academy certificates are accredited and recognized by major beauty industry bodies and salons across East Africa and beyond.",
  },
  {
    q: "Can I pay in installments?",
    a: "We offer flexible payment plans for the 6-month Beauty Pro Bundle. Short-term courses generally require full payment upon registration.",
  },
  {
    q: "Is there job assistance after graduation?",
    a: "Absolutely. We have partnerships with leading salons and fashion houses. Graduates from our advanced programs receive priority placement services.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 max-w-3xl mx-auto px-margin-mobile">
      <motion.h2
        className="font-serif text-display-lg-mobile md:text-headline-lg text-center mb-12 text-on-surface"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="glass-card rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <button
              className="flex justify-between items-center w-full p-6 text-left cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-serif text-headline-md text-on-surface">{faq.q}</span>
              <motion.span
                className="material-symbols-outlined text-primary shrink-0"
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                expand_more
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
