"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { buildSafeMailto, isValidEmail, sanitizeInput } from "@/lib/utils";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedMailto, setSubmittedMailto] = useState<string | null>(null);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    const cleanName = sanitizeInput(name, 100);
    const cleanEmail = sanitizeInput(email, 150);
    const cleanMessage = sanitizeInput(message, 2000);

    if (cleanName.length < 2) {
      nextErrors.name = "Please enter your name (at least 2 characters).";
    }
    if (!isValidEmail(cleanEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (cleanMessage.length < 10) {
      nextErrors.message =
        "Please enter a brief message (at least 10 characters).";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const mailtoUri = buildSafeMailto(profileData.contact.email, {
      name,
      email,
      subject,
      message,
    });

    setSubmittedMailto(mailtoUri);
    window.location.href = mailtoUri;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <span className="soc-section-badge">08 • Initiate Comms</span>
          <h2
            id="contact-heading"
            className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Connect for IT Security, SOC Analyst &amp; PAM / IAM Roles
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Left: Direct Channels & Recruiter Quick Actions (5 cols) */}
          <div className="lg:col-span-5">
            <div className="soc-card flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  Direct Communication Channels
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                  Available for immediate interviews and technical discussions regarding Security Operations, Endpoint Detection &amp; Response (CrowdStrike), CyberArk PAM, and Firewall Administration.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B1220]/70 p-4 transition-all hover:border-[#F2A516] hover:shadow-amber-glow"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2A516]/15 text-[#d97706] dark:text-[#F2A516]">
                        <Mail className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          Email
                        </div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          {profileData.contact.email}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  </a>

                  <a
                    href={profileData.contact.phoneHref}
                    className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B1220]/70 p-4 transition-all hover:border-[#F2A516] hover:shadow-amber-glow"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2A516]/15 text-[#d97706] dark:text-[#F2A516]">
                        <Phone className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          Phone / WhatsApp
                        </div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          {profileData.contact.phone}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  </a>

                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B1220]/70 p-4 transition-all hover:border-[#F2A516] hover:shadow-amber-glow"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2A516]/15 text-[#d97706] dark:text-[#F2A516]">
                        <Linkedin className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          LinkedIn Profile
                        </div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          {profileData.contact.linkedinHandle}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  </a>

                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B1220]/70 p-4 transition-all hover:border-[#F2A516] hover:shadow-amber-glow"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2A516]/15 text-[#d97706] dark:text-[#F2A516]">
                        <Github className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          GitHub Portfolio
                        </div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          {profileData.contact.githubHandle}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B1220]/70 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-500">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Base Location
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {profileData.contact.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Sanitized Client-Side Contact Form -> mailto: (7 cols) */}
          <div className="lg:col-span-7">
            <div className="soc-card flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                      Send Direct Message
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Client-side validated &amp; sanitized • Zero tracking • Opens your default email client via{" "}
                      <code className="font-mono text-[#d97706] dark:text-[#F2A516]">
                        mailto:
                      </code>
                    </p>
                  </div>
                  <ShieldCheck
                    className="h-7 w-7 text-emerald-500 shrink-0"
                    aria-hidden="true"
                  />
                </div>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-6 space-y-5"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-bold text-slate-700 dark:text-slate-200"
                      >
                        Your Name <span className="text-[#F2A516]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        maxLength={100}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "err-name" : undefined}
                        placeholder="e.g. Hiring Manager / Recruiter"
                        className="mt-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0B1220] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#F2A516]"
                      />
                      {errors.name && (
                        <p
                          id="err-name"
                          role="alert"
                          className="mt-1.5 flex items-center gap-1 text-xs font-medium text-rose-500"
                        >
                          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-bold text-slate-700 dark:text-slate-200"
                      >
                        Your Email <span className="text-[#F2A516]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        maxLength={150}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "err-email" : undefined
                        }
                        placeholder="name@company.com"
                        className="mt-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0B1220] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#F2A516]"
                      />
                      {errors.email && (
                        <p
                          id="err-email"
                          role="alert"
                          className="mt-1.5 flex items-center gap-1 text-xs font-medium text-rose-500"
                        >
                          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-200"
                    >
                      Subject / Role
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      maxLength={150}
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. SOC Analyst / PAM Engineer Opportunity"
                      className="mt-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0B1220] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#F2A516]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-200"
                    >
                      Message <span className="text-[#F2A516]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      maxLength={2000}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "err-message" : undefined
                      }
                      placeholder="Hello Wahyu, we would like to discuss an IT Security / SOC / PAM role with you..."
                      className="mt-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0B1220] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#F2A516]"
                    />
                    {errors.message && (
                      <p
                        id="err-message"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1 text-xs font-medium text-rose-500"
                      >
                        <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#F2A516] px-6 py-3.5 text-sm font-bold text-[#0B1220] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#FFBE3D] hover:shadow-amber-glow"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>Prepare &amp; Launch Email</span>
                    </button>

                    {submittedMailto && (
                      <a
                        href={submittedMailto}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 underline"
                      >
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        <span>
                          Click here if your mail client didn&apos;t open automatically
                        </span>
                      </a>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
