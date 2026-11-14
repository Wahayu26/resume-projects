"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { cn } from "@/lib/utils";

export default function ExperienceTimeline() {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    profileData.experience.forEach((exp) => {
      initial[exp.id] = exp.isCurrent;
    });
    return initial;
  });

  const prefersReducedMotion = useReducedMotion();

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    profileData.experience.forEach((exp) => {
      allOpen[exp.id] = true;
    });
    setExpandedIds(allOpen);
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="soc-section-badge">04 • Career Logs</span>
            <h2
              id="experience-heading"
              className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
            >
              Experience Timeline
            </h2>
          </div>

          <button
            type="button"
            onClick={expandAll}
            className="self-start rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-[#1B2638]/70 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors hover:border-[#F2A516] hover:text-[#d97706] dark:hover:text-[#F2A516] sm:self-auto"
          >
            Expand All Roles
          </button>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative ml-3 space-y-6 border-l-2 border-slate-300 dark:border-slate-800 sm:ml-6">
          {profileData.experience.map((item) => {
            const isExpanded = !!expandedIds[item.id];
            const panelId = `exp-panel-${item.id}`;
            const buttonId = `exp-btn-${item.id}`;

            return (
              <div key={item.id} className="relative pl-6 sm:pl-9">
                {/* Timeline Node Indicator */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -left-[11px] top-7 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors",
                    item.isCurrent
                      ? "border-[#F2A516] bg-[#0B1220] shadow-amber-glow"
                      : isExpanded
                      ? "border-[#F2A516] bg-[#1B2638]"
                      : "border-slate-400 dark:border-slate-600 bg-slate-200 dark:bg-[#0B1220]"
                  )}
                >
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full",
                      item.isCurrent
                        ? "bg-emerald-400 animate-pulse"
                        : isExpanded
                        ? "bg-[#F2A516]"
                        : "bg-slate-400 dark:bg-slate-600"
                    )}
                  />
                </span>

                {/* Accordion Card */}
                <div
                  className={cn(
                    "soc-card overflow-hidden transition-all",
                    item.isCurrent
                      ? "border-[#F2A516]/50 shadow-amber-glow"
                      : "hover:border-slate-400 dark:hover:border-slate-700"
                  )}
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() => toggleExpand(item.id)}
                    className="flex w-full flex-col gap-4 p-6 text-left sm:flex-row sm:items-start sm:justify-between sm:p-7 focus:outline-none"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        {item.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                            Current Role
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                          <Calendar className="h-3.5 w-3.5 text-[#F2A516]" aria-hidden="true" />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                        {item.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#d97706] dark:text-[#F2A516]">
                        <Briefcase className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>{item.company}</span>
                        <span className="text-slate-400 dark:text-slate-600">•</span>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {item.location}
                        </span>
                      </div>

                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-[#0B1220]/70 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-1.5 self-start rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-[#0B1220] px-3.5 py-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                      <span>{isExpanded ? "Hide details" : "Show more"}</span>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 text-[#F2A516]" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-[#F2A516]" aria-hidden="true" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={
                          prefersReducedMotion
                            ? { opacity: 1 }
                            : { height: 0, opacity: 0 }
                        }
                        animate={
                          prefersReducedMotion
                            ? { opacity: 1 }
                            : { height: "auto", opacity: 1 }
                        }
                        exit={
                          prefersReducedMotion
                            ? { opacity: 0 }
                            : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0B1220]/40 px-6 pb-7 pt-5 sm:px-7">
                          <ul className="space-y-3.5">
                            {item.highlights.map((bullet, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base"
                              >
                                <CheckCircle2
                                  className="mt-1 h-4 w-4 shrink-0 text-[#F2A516]"
                                  aria-hidden="true"
                                />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
