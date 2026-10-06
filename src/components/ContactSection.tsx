"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle2 } from "lucide-react";

import { company, contactDetails } from "@/lib/data";
import type { InquiryErrors } from "@/lib/types";
import { validateInquiry } from "@/lib/validation";

const icons = { pin: MapPin, mail: Mail, phone: Phone } as const;

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [values, setValues] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const update = (field: keyof typeof values) => (event: { target: { value: string } }) =>
    setValues((current) => ({ ...current, [field]: event.target.value }));

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = validateInquiry(values);
    if (!result.ok) {
      setErrors(result.errors);
      setStatus("idle");
      setFeedback("");
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const payload = await response.json();

      if (!response.ok || !payload.ok) {
        setStatus("error");
        setErrors(payload.errors ?? {});
        setFeedback(payload.errors?.form ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback(
        "Thank you! Your quotation request has been routed to our Hosur office."
      );
      setValues({ name: "", phone: "", message: "" });
      window.setTimeout(() => setFeedback(""), 6000);
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again in a moment.");
    }
  }

  const fieldClass = (field: keyof InquiryErrors) =>
    `w-full rounded-md border bg-white px-4 py-3 text-[0.95rem] text-slate-900 outline-none transition focus:border-accent focus:ring-[3px] focus:ring-accent/15 ${
      errors[field] ? "border-red-500" : "border-slate-200"
    }`;

  return (
    <section id="contact" className="section scroll-mt-24 bg-slate-50">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid overflow-hidden rounded-[20px] bg-primary text-white shadow-xl md:grid-cols-[1fr_1.2fr]"
        >
          {/* ------------------------------------------------------- info */}
          <div className="bg-gradient-to-br from-primary to-[#11284d] p-8 sm:p-10 md:p-16">
            <span className="mb-3 inline-block text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-amber-400">
              Get In Touch
            </span>
            <h2 className="mb-4 text-3xl md:text-[2.2rem]">
              Let&apos;s Discuss Your Project Requirements
            </h2>
            <p className="mb-10 text-slate-400">
              Reach out to our engineering office for technical datasheets, quotations,
              and industrial consultations.
            </p>

            <ul className="flex flex-col gap-6">
              {contactDetails.map((detail) => {
                const Icon = icons[detail.icon];
                const content = (
                  <>
                    <Icon size={20} aria-hidden="true" className="mt-1 shrink-0 text-amber-400" />
                    <span>
                      <strong className="block text-[0.95rem] text-white">
                        {detail.label}
                      </strong>
                      <span className="text-sm text-slate-300">{detail.value}</span>
                    </span>
                  </>
                );

                return (
                  <li key={detail.label} className="flex items-start gap-4">
                    {detail.href ? (
                      <a href={detail.href} className="flex items-start gap-4 transition hover:opacity-80">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ------------------------------------------------------ form */}
          <div className="bg-white p-8 text-slate-900 sm:p-10 md:p-16">
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" className="text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="name"
                  value={values.name}
                  onChange={update("name")}
                  placeholder="Your full name.."
                  className={fieldClass("name")}
                />
                {errors.name ? (
                  <span className="text-xs text-red-500">{errors.name}</span>
                ) : null}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phoneNumber" className="text-sm font-semibold text-slate-700">
                  Ph. No
                </label>
                <input
                  id="phoneNumber"
                  name="phone"
                  inputMode="tel"
                  value={values.phone}
                  onChange={update("phone")}
                  placeholder="9876543210"
                  className={fieldClass("phone")}
                />
                {errors.phone ? (
                  <span className="text-xs text-red-500">{errors.phone}</span>
                ) : null}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                  Required customizations
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={update("message")}
                  placeholder="Brief technical specs or timeline..."
                  className={fieldClass("message")}
                />
                {errors.message ? (
                  <span className="text-xs text-red-500">{errors.message}</span>
                ) : null}
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary btn-block"
              >
                {status === "success" ? "Sent" : status === "loading" ? "Sending…" : "Submit"}
                {status === "success" ? (
                  <CheckCircle2 size={17} aria-hidden="true" />
                ) : (
                  <Send size={17} aria-hidden="true" />
                )}
              </motion.button>

              <div className="min-h-5" role="status" aria-live="polite">
                {feedback ? (
                  <p
                    key={feedback}
                    className={`anim-pop block text-center text-sm font-semibold ${
                      status === "error" ? "text-red-500" : "text-emerald-500"
                    }`}
                  >
                    {feedback}
                  </p>
                ) : null}
              </div>
            </form>

            <p className="mt-4 text-center text-xs text-slate-500">
              Prefer email? Write to{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-accent underline underline-offset-2 hover:text-accent-hover"
              >
                {company.email}
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
