"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  X,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  Layers,
} from "lucide-react";
import type { ProjectItem } from "@/data/profile";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          aria-describedby="modal-project-desc"
        >
          {/* Backdrop */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={
              prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 12 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.96, y: 12 }
            }
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-[#F2A516]/40 bg-white dark:bg-[#111A2E] p-6 shadow-2xl sm:p-8"
          >
            {/* Header Bar */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d97706] dark:text-[#F2A516]">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  <span>{project.category}</span>
                </div>
                <h3
                  id="modal-project-title"
                  className="mt-1 font-display text-2xl font-extrabold text-slate-900 dark:text-white"
                >
                  {project.title}
                </h3>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details modal"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-[#1B2638] text-slate-600 dark:text-slate-300 transition-colors hover:border-[#F2A516] hover:text-[#F2A516]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Impact Banner */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs text-emerald-700 dark:text-emerald-300">
              <span className="font-bold uppercase">Operational Impact:</span>
              <span className="font-semibold">{project.impactMetric}</span>
            </div>

            {/* Full Description */}
            <p
              id="modal-project-desc"
              className="mt-5 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base"
            >
              {project.fullDescription}
            </p>

            {/* Architecture & Workflow Highlights */}
            <div className="mt-6">
              <h4 className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <Layers className="h-4 w-4 text-[#F2A516]" aria-hidden="true" />
                <span>Implementation &amp; Security Controls</span>
              </h4>
              <ul className="mt-3 space-y-2.5">
                {project.architectureHighlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 sm:text-sm"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#F2A516]"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags & Optional GitHub Repo Link */}
            <div className="mt-6 flex flex-col justify-between gap-4 border-t border-slate-200 dark:border-slate-800 pt-5 sm:flex-row sm:items-center">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-[#F2A516]/30 bg-[#F2A516]/10 px-3 py-1 text-xs font-bold text-[#d97706] dark:text-[#F2A516]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#F2A516] px-4 py-2.5 text-xs font-bold text-[#0B1220] transition-colors hover:bg-[#FFBE3D]"
                  >
                    <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>View GitHub Repo</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-[#1B2638] px-4 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-[#F2A516]"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
