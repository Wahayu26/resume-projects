"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FolderGit2,
  ArrowUpRight,
  GitBranch,
  ExternalLink,
  Shield,
  Terminal,
} from "lucide-react";
import { profileData, type ProjectItem } from "@/data/profile";
import ProjectModal from "@/components/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="soc-section-badge">
              05 • Security Engineering &amp; Automation
            </span>
            <h2
              id="projects-heading"
              className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
            >
              Featured Security Projects
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Click any project card to inspect full architecture, workflow controls, and operational impact metrics.
          </p>
        </div>

        {/* 4 Equal-Height Featured Project Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          {profileData.projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="soc-card soc-card-hover group flex h-full flex-col justify-between p-6 sm:p-7"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d97706] dark:text-[#F2A516]">
                    <Shield className="h-4 w-4" aria-hidden="true" />
                    {project.category}
                  </span>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                    {project.impactMetric}
                  </span>
                </div>

                <h3 className="mt-3.5 font-display text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#d97706] dark:group-hover:text-[#F2A516] sm:text-2xl">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-left focus:outline-none"
                    aria-label={`Open full details for ${project.title}`}
                  >
                    {project.title}
                  </button>
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                  {project.shortDescription}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 dark:border-slate-800/80 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-[#0B1220] px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex shrink-0 items-center gap-2 self-start sm:self-auto">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View GitHub repository for ${project.title}`}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-[#0B1220] px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:border-[#F2A516] hover:text-[#F2A516]"
                    >
                      <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Repo</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#F2A516]/15 px-3.5 py-2 text-xs font-bold text-[#d97706] dark:text-[#F2A516] transition-colors hover:bg-[#F2A516] hover:text-[#0B1220]"
                  >
                    <span>Inspect Case</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Open-Source & GitHub Repositories Showcase (Equal-Height 4-Column Grid) */}
        <div className="mt-16">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2A516]/15 text-[#d97706] dark:text-[#F2A516]">
                <FolderGit2 className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                  GitHub Repositories &amp; Engineering Builds
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Direct links to repositories built across Security Operations, Full-Stack Platforms &amp; Backend Systems
                </p>
              </div>
            </div>

            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-[#1B2638] px-4 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-[#F2A516] hover:text-[#d97706] dark:hover:text-[#F2A516] sm:self-auto"
            >
              <Terminal className="h-4 w-4 text-[#F2A516]" aria-hidden="true" />
              <span>{profileData.contact.githubHandle}</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {profileData.githubRepos.map((repo) => (
              <a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="soc-card soc-card-hover group flex h-full flex-col justify-between p-5 sm:p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F2A516]/15 px-2.5 py-0.5 text-[11px] font-semibold text-[#d97706] dark:text-[#F2A516]">
                      {repo.category}
                    </span>
                    <ExternalLink
                      className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F2A516]"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-3.5 flex items-center gap-2 font-display text-base font-bold text-slate-900 dark:text-white group-hover:text-[#d97706] dark:group-hover:text-[#F2A516]">
                    <GitBranch className="h-4 w-4 shrink-0 text-[#F2A516]" aria-hidden="true" />
                    <span className="truncate">{repo.name}</span>
                  </div>

                  <p className="mt-0.5 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                    {repo.fullName}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {repo.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-200 dark:border-slate-800/80 pt-3.5">
                  {repo.techStack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-200/70 dark:bg-[#0B1220] px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
