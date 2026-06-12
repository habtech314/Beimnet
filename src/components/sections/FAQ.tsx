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
    <section className="py-16 md:py-32 max-w-3xl mx-auto px-margin-mobile">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-5 font-semibold">
          Questions
        </p>
        <h2 className="font-serif text-[24px] md:text-[36px] tracking-tight">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <div className="divide-y divide-outline-variant">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
          >
            <button
              className="flex justify-between items-center w-full py-6 text-left cursor-pointer group"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
            >
              <span className="font-serif text-[18px] md:text-[20px] text-on-surface group-hover:text-primary transition-colors duration-200">
                {faq.q}
              </span>
              <motion.span
                className="material-symbols-outlined text-primary shrink-0 ml-4"
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                expand_more
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  id={`faq-answer-${i}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 text-on-surface-variant text-[15px] leading-[1.7] max-w-[60ch]">
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
