"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { EASE } from "@/lib/motion";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "number" | "textarea" | "select";
  required?: boolean;
  span?: "full" | "half";
  options?: string[];
  placeholder?: string;
  autoComplete?: string;
};

const FIELDS: Field[] = [
  { name: "school", label: "School / Institution name", required: true, span: "full", autoComplete: "organization" },
  { name: "name", label: "Your name", required: true, autoComplete: "name" },
  { name: "designation", label: "Designation", required: true, placeholder: "Principal, Coordinator, Head of Department", autoComplete: "organization-title" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" },
  { name: "city", label: "City", required: true, autoComplete: "address-level2" },
  { name: "students", label: "Number of students", type: "number" },
  { name: "grades", label: "Classes / grades", placeholder: "e.g. Grades 11–12" },
  {
    name: "programme",
    label: "Preferred programme",
    type: "select",
    options: [
      "Arviona Edu Tour 2026",
      "Platform pilot conversation",
      "Research collaboration",
      "Not sure yet",
    ],
  },
  { name: "message", label: "Anything we should know", type: "textarea", span: "full" },
];

const inputClass =
  "w-full rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3.5 text-[0.95rem] text-white placeholder:text-white/50 transition-colors duration-300 focus:border-accent-soft/70 focus:bg-white/[0.06] focus:outline-none";

export function SchoolPartnershipForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [school, setSchool] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    // No backend is configured — the request is not transmitted anywhere.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-[#0A0C12] p-7 sm:p-10">
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <m.div
            key="done"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="py-10 text-center"
            role="status"
            aria-live="polite"
          >
            <m.span
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15"
            >
              <Check aria-hidden className="h-6 w-6 text-accent-soft" />
            </m.span>
            <h3 className="mt-8 text-title font-medium text-white balance">
              Request received{school ? `, ${school}` : ""}.
            </h3>
            <p className="mx-auto mt-4 max-w-md text-[1rem] leading-relaxed text-white/65">
              Someone from Arviona will be in touch about the Edu Tour and what
              hosting a session in your school would involve.
            </p>
            <p className="mx-auto mt-8 max-w-md text-[0.85rem] leading-relaxed text-white/65">
              Demonstration form — no backend is connected, so nothing was
              transmitted or stored.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 text-[0.88rem] text-white/55 underline underline-offset-4 transition-colors hover:text-white"
            >
              Submit another request
            </button>
          </m.div>
        ) : (
          <m.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="grid gap-5 sm:grid-cols-2"
            noValidate={false}
          >
            {FIELDS.map((f) => (
              <div
                key={f.name}
                className={f.span === "full" ? "sm:col-span-2" : undefined}
              >
                <label
                  htmlFor={f.name}
                  className="mb-2.5 block font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white/50"
                >
                  {f.label}
                  {f.required ? (
                    <span className="ml-1 text-accent-soft" aria-hidden>
                      *
                    </span>
                  ) : null}
                </label>

                {f.type === "textarea" ? (
                  <textarea
                    id={f.name}
                    name={f.name}
                    rows={4}
                    className={`${inputClass} resize-y`}
                    placeholder={f.placeholder}
                  />
                ) : f.type === "select" ? (
                  <select
                    id={f.name}
                    name={f.name}
                    defaultValue={f.options?.[0]}
                    className={`${inputClass} appearance-none`}
                  >
                    {f.options?.map((o) => (
                      <option key={o} value={o} className="bg-ink text-white">
                        {o}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type ?? "text"}
                    required={f.required}
                    autoComplete={f.autoComplete}
                    placeholder={f.placeholder}
                    onChange={
                      f.name === "school"
                        ? (e) => setSchool(e.target.value)
                        : undefined
                    }
                    className={inputClass}
                  />
                )}
              </div>
            ))}

            <div className="sm:col-span-2 sm:flex sm:items-center sm:justify-between sm:gap-6">
              <p className="order-2 mt-5 text-[0.82rem] leading-relaxed text-white/65 sm:mt-0 sm:max-w-xs">
                Demonstration form. No backend is connected, so nothing is
                transmitted or stored.
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="order-1 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 text-[0.95rem] font-medium text-ink transition-all duration-500 ease-arv hover:bg-white/90 disabled:opacity-70 sm:w-auto"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 aria-hidden className="h-4 w-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  "Request a School Partnership"
                )}
              </button>
            </div>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}
