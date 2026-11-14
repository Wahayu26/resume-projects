"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Award, Languages, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Education() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <span className="soc-section-badge">
            07 • Academic &amp; Training Credentials
          </span>
          <h2
            id="education-heading"
            className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Education, Certifications &amp; Languages
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Left Column: Education + Languages (5 cols, Equal Stretch) */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            {/* Academic Degree Card */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35 }}
              className="soc-card soc-card-hover flex-1 flex flex-col justify-between p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F2A516]/30 bg-[#F2A516]/10 text-[#d97706] dark:text-[#F2A516]">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#d97706] dark:text-[#F2A516]">
                    University Education
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-slate-900 dark:text-white">
                    {profileData.education.degree}
                  </h3>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 dark:border-slate-800 pt-4 text-sm">
                <span className="font-bold text-slate-700 dark:text-slate-200">
                  {profileData.education.institution}
                </span>
                <span className="rounded-lg bg-slate-200/80 dark:bg-[#0B1220] px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
                  {profileData.education.period}
                </span>
              </div>
            </motion.div>

            {/* Languages Card */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: 0.06 }}
              className="soc-card flex-1 flex flex-col justify-between p-6 sm:p-7"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#F2A516]/30 bg-[#F2A516]/10 text-[#d97706] dark:text-[#F2A516]">
                  <Languages className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#d97706] dark:text-[#F2A516]">
                    Communication
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    Languages
                  </h3>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {profileData.languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0B1220]/60 p-3.5"
                  >
                    <div className="font-display text-sm font-bold text-slate-900 dark:text-white">
                      {lang.language}
                    </div>
                    <div className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      {lang.proficiency}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Compact Certification Cards (7 cols) */}
          <div className="lg:col-span-7">
            <div className="soc-card flex h-full flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="mb-5 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <Award className="h-5 w-5 text-[#F2A516]" aria-hidden="true" />
                    <h3 className="font-display text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                      Certifications &amp; Specialized Courses
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#F2A516]/15 px-3 py-0.5 text-xs font-bold text-[#d97706] dark:text-[#F2A516]">
                    {profileData.certifications.length} Completed
                  </span>
                </div>

                <div className="grid grid-cols-1 items-stretch gap-3.5 sm:grid-cols-2">
                  {profileData.certifications.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={
                        prefersReducedMotion ? false : { opacity: 0, y: 10 }
                      }
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.25, delay: index * 0.04 }}
                      className={
                        index === profileData.certifications.length - 1 &&
                        profileData.certifications.length % 2 !== 0
                          ? "sm:col-span-2 flex flex-col justify-between rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-[#0B1220]/70 p-4 transition-colors hover:border-[#F2A516]/50"
                          : "flex flex-col justify-between rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-[#0B1220]/70 p-4 transition-colors hover:border-[#F2A516]/50"
                      }
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="rounded-md bg-[#F2A516]/15 px-2.5 py-0.5 text-xs font-bold text-[#d97706] dark:text-[#F2A516]">
                            {cert.issuer}
                          </span>
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                            {cert.year}
                          </span>
                        </div>
                        <h4 className="mt-2.5 font-display text-sm font-bold text-slate-900 dark:text-slate-100 sm:text-base">
                          {cert.title}
                        </h4>
                      </div>

                      <div className="mt-3 flex items-center gap-1.5 border-t border-slate-200/60 dark:border-slate-800/60 pt-2.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{cert.category}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
