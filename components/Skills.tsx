"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Radar,
  KeyRound,
  Network,
  MailCheck,
  Database,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { profileData, type SkillGroup } from "@/data/profile";
import { cn } from "@/lib/utils";

const DOMAIN_ICONS: Record<SkillGroup["iconName"], React.ElementType> = {
  Radar,
  KeyRound,
  Network,
  MailCheck,
  Database,
  Wrench,
};

function DomainRadarChart({
  groups,
  activeDomainId,
  onSelectDomain,
}: {
  groups: SkillGroup[];
  activeDomainId: string;
  onSelectDomain: (id: string) => void;
}) {
  const size = 270;
  const center = size / 2;
  const radius = 88;

  const getCoordinates = (index: number, total: number, r: number) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const polygonPoints = groups
    .map((g, i) => {
      const r = (g.proficiencyScore / 100) * radius;
      const { x, y } = getCoordinates(i, groups.length, r);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="soc-card flex h-full flex-col items-center justify-between p-6">
      <div className="flex w-full items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3.5">
        <span className="font-display text-sm font-bold text-slate-900 dark:text-white">
          Capability Radar
        </span>
        <span className="rounded-full bg-[#F2A516]/15 px-2.5 py-0.5 text-xs font-semibold text-[#d97706] dark:text-[#F2A516]">
          6 Domains
        </span>
      </div>

      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label="Hexagonal capability radar across Security Operations, PAM/IAM, Network & Perimeter, Email Security, Data & Automation, and Tools"
        className="my-4 overflow-visible"
      >
        {[0.33, 0.66, 1].map((scale) => {
          const pts = groups
            .map((_, i) => {
              const { x, y } = getCoordinates(i, groups.length, radius * scale);
              return `${x},${y}`;
            })
            .join(" ");
          return (
            <polygon
              key={scale}
              points={pts}
              fill="none"
              stroke="currentColor"
              className="text-slate-300 dark:text-slate-700/70"
              strokeWidth="1"
            />
          );
        })}

        {groups.map((g, i) => {
          const end = getCoordinates(i, groups.length, radius);
          return (
            <line
              key={g.id}
              x1={center}
              y1={center}
              x2={end.x}
              y2={end.y}
              stroke="currentColor"
              className="text-slate-300 dark:text-slate-700/70"
              strokeWidth="1"
            />
          );
        })}

        <polygon
          points={polygonPoints}
          fill="rgba(242, 165, 22, 0.22)"
          stroke="#F2A516"
          strokeWidth="2.5"
        />

        {groups.map((g, i) => {
          const r = (g.proficiencyScore / 100) * radius;
          const pt = getCoordinates(i, groups.length, r);
          const labelPt = getCoordinates(i, groups.length, radius + 28);
          const isSelected =
            activeDomainId === "all" || activeDomainId === g.id;

          return (
            <g
              key={g.id}
              onClick={() =>
                onSelectDomain(activeDomainId === g.id ? "all" : g.id)
              }
              className="cursor-pointer"
            >
              <circle
                cx={pt.x}
                cy={pt.y}
                r={isSelected ? 5.5 : 4}
                className={cn(
                  "transition-all",
                  activeDomainId === g.id
                    ? "fill-emerald-400 stroke-[#0B1220] stroke-2"
                    : "fill-[#F2A516]"
                )}
              />
              <text
                x={labelPt.x}
                y={labelPt.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className={cn(
                  "font-sans text-[10px] font-semibold transition-colors select-none",
                  activeDomainId === g.id
                    ? "fill-[#d97706] dark:fill-[#F2A516] font-bold"
                    : "fill-slate-600 dark:fill-slate-400"
                )}
              >
                {g.shortName}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="w-full rounded-xl bg-slate-100/80 dark:bg-[#0B1220]/60 px-3 py-2 text-center text-xs text-slate-500 dark:text-slate-400">
        Click any domain tab or radar node to filter capabilities
      </p>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const prefersReducedMotion = useReducedMotion();

  const filteredGroups =
    activeTab === "all"
      ? profileData.skills
      : profileData.skills.filter((group) => group.id === activeTab);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <span className="soc-section-badge">03 • Technical Arsenal</span>
            <h2
              id="skills-heading"
              className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
            >
              Security Domains &amp; Operational Tooling
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter skills by security domain"
            className="flex flex-wrap gap-2"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "all"}
              onClick={() => setActiveTab("all")}
              className={cn(
                "rounded-xl px-4 py-2 text-xs font-bold transition-all",
                activeTab === "all"
                  ? "bg-[#F2A516] text-[#0B1220] shadow-sm"
                  : "border border-slate-300 dark:border-slate-700/80 bg-white/70 dark:bg-[#1B2638]/60 text-slate-700 dark:text-slate-300 hover:border-[#F2A516]/50"
              )}
            >
              All Domains (
              {profileData.skills.reduce((acc, g) => acc + g.skills.length, 0)})
            </button>
            {profileData.skills.map((group) => {
              const isSelected = activeTab === group.id;
              return (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(group.id)}
                  className={cn(
                    "rounded-xl px-3.5 py-2 text-xs font-semibold transition-all",
                    isSelected
                      ? "bg-[#F2A516] text-[#0B1220] font-bold shadow-sm"
                      : "border border-slate-300 dark:border-slate-700/80 bg-white/70 dark:bg-[#1B2638]/60 text-slate-700 dark:text-slate-300 hover:border-[#F2A516]/50"
                  )}
                >
                  {group.shortName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Grid: Radar + Equal-Height Domain Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <DomainRadarChart
              groups={profileData.skills}
              activeDomainId={activeTab}
              onSelectDomain={setActiveTab}
            />
          </div>

          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:col-span-8">
            {filteredGroups.map((group) => {
              const Icon = DOMAIN_ICONS[group.iconName];
              return (
                <motion.div
                  key={group.id}
                  layout={!prefersReducedMotion}
                  initial={
                    prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className={cn(
                    "soc-card soc-card-hover flex h-full flex-col justify-between p-6",
                    filteredGroups.length === 1 && "sm:col-span-2"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F2A516]/15 text-[#d97706] dark:text-[#F2A516]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                          {group.domain}
                        </h3>
                      </div>
                      <span className="rounded-full bg-slate-200/80 dark:bg-[#0B1220] px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-400">
                        {group.skills.length}
                      </span>
                    </div>

                    <ul
                      aria-label={`${group.domain} skills`}
                      className="mt-4 flex flex-wrap gap-2"
                    >
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="group/chip inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-[#0B1220]/80 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-all hover:border-[#F2A516] hover:bg-[#F2A516]/10"
                        >
                          <CheckCircle2
                            className="h-3.5 w-3.5 text-[#F2A516] opacity-85 transition-transform group-hover/chip:scale-110"
                            aria-hidden="true"
                          />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
