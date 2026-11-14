"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ShieldAlert,
  KeyRound,
  Ban,
  FileCheck2,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { profileData, type ImpactStat } from "@/data/profile";

const ICON_MAP: Record<ImpactStat["iconName"], React.ElementType> = {
  ShieldAlert,
  KeyRound,
  Ban,
  FileCheck2,
  CheckCircle2,
  Building2,
};

function AnimatedCounterCard({
  stat,
  index,
}: {
  stat: ImpactStat;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState<number>(
    prefersReducedMotion ? stat.value : 0
  );

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setCount(stat.value);
      return;
    }

    let startTimestamp: number | null = null;
    const duration = 1100;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * stat.value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(stat.value);
      }
    };

    const rafId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(rafId);
  }, [isInView, prefersReducedMotion, stat.value]);

  const IconComponent = ICON_MAP[stat.iconName];

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="soc-card soc-card-hover group relative flex h-full flex-col justify-between overflow-hidden p-6 sm:p-7"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 rounded-full bg-[#F2A516]/10 transition-transform duration-300 group-hover:scale-125"
      />

      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#F2A516]/30 bg-[#F2A516]/10 text-[#d97706] dark:text-[#F2A516]">
            <IconComponent className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Verified
          </span>
        </div>

        <div className="mt-5 flex items-baseline gap-1 font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          <span aria-hidden="true">
            {count}
            <span className="text-[#F2A516]">{stat.suffix}</span>
          </span>
          <span className="sr-only">
            {stat.value}
            {stat.suffix}
          </span>
        </div>

        <h3 className="mt-3 font-display text-lg font-bold text-slate-900 dark:text-slate-100">
          {stat.label}
        </h3>
      </div>

      <p className="mt-2 pt-3 border-t border-slate-200/70 dark:border-slate-800/70 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
        {stat.sublabel}
      </p>
    </motion.div>
  );
}

export default function StatsCounter() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="soc-section-badge">02 • Operational Telemetry</span>
            <h2
              id="impact-heading"
              className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
            >
              Quantified Security &amp; Support Impact
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Production metrics across EDR alert triage, CyberArk PAM administration, perimeter firewall hardening, and enterprise SLA delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profileData.impactStats.map((stat, index) => (
            <AnimatedCounterCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
