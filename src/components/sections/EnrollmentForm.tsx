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
    <div className="lg:col-span-7 bg-surface-container-lowest p-6 md:p-12 border border-outline-variant">
      <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-5 font-semibold">
        Enroll
      </p>
      <h2 className="font-serif text-[24px] tracking-tight mb-10 text-on-surface">
        Enrollment Request
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[13px] font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              className="w-full bg-background border border-outline-variant rounded-lg py-3 px-4 text-on-surface text-[15px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
              placeholder="John Doe"
              type="text"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              autoComplete="name"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
            />
            {errors.fullName && (
              <p id="fullName-error" className="text-error text-[13px] mt-1" role="alert">
                {errors.fullName}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              className="w-full bg-background border border-outline-variant rounded-lg py-3 px-4 text-on-surface text-[15px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
              placeholder="+251 ..."
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="text-error text-[13px] mt-1" role="alert">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[13px] font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="course">
              Select Course
            </label>
            <select
              id="course"
              className="w-full bg-background border border-outline-variant rounded-lg py-3 px-4 text-on-surface text-[15px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200 appearance-none"
              value={form.course}
              onChange={(e) => update("course", e.target.value)}
              autoComplete="off"
            >
              {courses.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="startDate">
              Preferred Start Date
            </label>
            <input
              id="startDate"
              className="w-full bg-background border border-outline-variant rounded-lg py-3 px-4 text-on-surface text-[15px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
              type="date"
              value={form.startDate}
              onChange={(e) => update("startDate", e.target.value)}
              aria-invalid={!!errors.startDate}
              aria-describedby={errors.startDate ? "startDate-error" : undefined}
            />
            {errors.startDate && (
              <p id="startDate-error" className="text-error text-[13px] mt-1" role="alert">
                {errors.startDate}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[13px] font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            className="w-full bg-background border border-outline-variant rounded-lg py-3 px-4 text-on-surface text-[15px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
            placeholder="Tell us about your goals..."
            rows={4}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </div>

        <motion.button
          className="w-full bg-primary text-on-primary font-bold py-4 rounded-lg transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] flex items-center justify-center gap-2 disabled:opacity-60"
          type="submit"
          disabled={status === "loading"}
          whileTap={{ scale: 0.97 }}
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
