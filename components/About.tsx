"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Briefcase, Globe2, Shield, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-2">
          <div>
            <span className="soc-section-badge">01 • Operator Profile</span>
          </div>
          <h2
            id="about-heading"
            className="mt-1 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Defensive Security &amp; Operational Root Cause Analysis
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Left: Summary Text Card (Equal height with flex-col justify-between) */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4 }}
            className="soc-card flex h-full flex-col justify-between p-7 sm:p-8 lg:col-span-7"
          >
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-xl bg-[#F2A516]/10 px-3.5 py-1.5 text-xs font-bold text-[#d97706] dark:text-[#F2A516]">
                <Shield className="h-4 w-4" aria-hidden="true" />
                <span>Executive Summary</span>
              </div>

              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200 sm:text-lg sm:leading-8">
                {profileData.summary}
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-slate-200 dark:border-slate-800/80 pt-6 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl bg-slate-50/80 dark:bg-[#0B1220]/50 p-3.5">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                  aria-hidden="true"
                />
                <span className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  <strong className="block font-semibold text-slate-900 dark:text-white">
                    End-to-End Triage
                  </strong>
                  EDR detection validation, containment, custom IOA tuning &amp; firewall IOC blocking.
                </span>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-slate-50/80 dark:bg-[#0B1220]/50 p-3.5">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                  aria-hidden="true"
                />
                <span className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  <strong className="block font-semibold text-slate-900 dark:text-white">
                    SQL &amp; App Support Edge
                  </strong>
                  5+ years tracing production logs and SQL anomalies in regulated financial services.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Operator Status Card */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="soc-card flex h-full flex-col justify-between border-[#F2A516]/30 p-7 sm:p-8 lg:col-span-5"
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <span className="font-display text-sm font-bold text-slate-800 dark:text-slate-200">
                Status &amp; Availability
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Active
              </span>
            </div>

            <dl className="mt-5 flex-1 space-y-3.5 flex flex-col justify-center">
              <div className="flex items-start gap-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#0B1220]/60 p-4">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#F2A516]"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Location
                  </dt>
                  <dd className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
                    {profileData.location}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#0B1220]/60 p-4">
                <Briefcase
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#F2A516]"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Open to
                  </dt>
                  <dd className="mt-0.5 text-sm font-bold text-[#d97706] dark:text-[#F2A516]">
                    {profileData.openToRoles}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#0B1220]/60 p-4">
                <Globe2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#F2A516]"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Languages
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap gap-2">
                    {profileData.languages.map((lang) => (
                      <span
                        key={lang.language}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1B2638] px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-200"
                      >
                        <strong className="font-bold text-[#d97706] dark:text-[#F2A516]">
                          {lang.code}:
                        </strong>{" "}
                        {lang.language} ({lang.proficiency})
                      </span>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
