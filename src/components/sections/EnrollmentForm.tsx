"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

interface FormData {
  fullName: string;
  phone: string;
  course: string;
  startDate: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  course?: string;
  startDate?: string;
}

const courses = [
  "Professional Makeup Artistry",
  "Advanced Hair Styling",
  "Skin Care Specialist",
  "Nail Art Masterclass",
];

export default function EnrollmentForm() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    phone: "",
    course: courses[0],
    startDate: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone))
      e.phone = "Enter a valid phone number";
    if (!form.startDate) e.startDate = "Please select a start date";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({ fullName: "", phone: "", course: courses[0], startDate: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const update = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  return (
    <div className="lg:col-span-7 surface-card rounded-xl p-8 md:p-12 border border-white/10">
      <h2 className="font-serif text-headline-md text-on-surface mb-8">Enrollment Request</h2>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-label-md text-label-md text-on-surface-variant">FULL NAME</label>
            <input
              className="w-full bg-[#111111] border border-white/10 rounded-lg py-3 px-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
              placeholder="John Doe"
              type="text"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
            />
            {errors.fullName && (
              <p className="text-error text-label-sm mt-1">{errors.fullName}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="font-label-md text-label-md text-on-surface-variant">
              PHONE NUMBER
            </label>
            <input
              className="w-full bg-[#111111] border border-white/10 rounded-lg py-3 px-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
              placeholder="+251 ..."
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
            {errors.phone && <p className="text-error text-label-sm mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-label-md text-label-md text-on-surface-variant">
              SELECT COURSE
            </label>
            <select
              className="w-full bg-[#111111] border border-white/10 rounded-lg py-3 px-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all appearance-none"
              value={form.course}
              onChange={(e) => update("course", e.target.value)}
            >
              {courses.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="font-label-md text-label-md text-on-surface-variant">
              PREFERRED START DATE
            </label>
            <input
              className="w-full bg-[#111111] border border-white/10 rounded-lg py-3 px-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
              type="date"
              value={form.startDate}
              onChange={(e) => update("startDate", e.target.value)}
            />
            {errors.startDate && (
              <p className="text-error text-label-sm mt-1">{errors.startDate}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-label-md text-label-md text-on-surface-variant">
            YOUR MESSAGE
          </label>
          <textarea
            className="w-full bg-[#111111] border border-white/10 rounded-lg py-3 px-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
            placeholder="Tell us about your goals..."
            rows={4}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </div>

        <motion.button
          className="w-full bg-primary-container text-on-primary font-bold py-4 rounded-lg hover:scale-[1.01] active:scale-[0.98] transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-60"
          type="submit"
          disabled={status === "loading"}
          whileTap={{ scale: 0.98 }}
        >
          {status === "loading" ? (
            <>
              <span className="material-symbols-outlined animate-spin">sync</span>
              Sending...
            </>
          ) : status === "success" ? (
            <>
              <span className="material-symbols-outlined">check_circle</span>
              Sent Successfully
            </>
          ) : (
            <>
              <span>Send Enrollment Request</span>
              <span className="material-symbols-outlined">send</span>
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
}
