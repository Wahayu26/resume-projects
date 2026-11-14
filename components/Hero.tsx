"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  FileDown,
  Mail,
  Terminal,
  Radar,
  Lock,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const roles = profileData.typingRoles;

  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>(roles[0]);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(roles.join(" • "));
      return;
    }

    const currentFullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayedText(
          currentFullText.substring(
            0,
            displayedText.length + (isDeleting ? -1 : 1)
          )
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles, prefersReducedMotion]);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28"
    >
      {/* Subtle SOC Grid & Radial Glow Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-soc-grid bg-[size:44px_44px] opacity-60 dark:opacity-100" />
        <div className="absolute inset-0 bg-soc-radial" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Hero Split: Left Editorial Pitch + Right Portrait with Angled Backdrop & Floating Badges */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column (7 cols): Greeting, Name, Title, Typing Role, CTAs */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            {/* Status Pill */}
            <div className="mb-5 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span>Available for Security Operations Roles</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="text-[#d97706] dark:text-[#F2A516]">
                {profileData.location}
              </span>
            </div>

            {/* Dynamic Greeting + Name (Inspired by "Hy! I Am..." reference) */}
            <h1
              id="hero-heading"
              className="font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]"
            >
              <span className="block text-slate-600 dark:text-slate-300 text-2xl sm:text-3xl font-bold mb-1">
                Hi! I Am
              </span>
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-[#d97706] dark:from-white dark:via-slate-100 dark:to-[#F2A516] bg-clip-text text-transparent">
                {profileData.name}
              </span>
            </h1>

            {/* Subtitle Role */}
            <p className="mt-3 text-base font-bold tracking-wide text-[#d97706] dark:text-[#F2A516] sm:text-lg">
              {profileData.title}
            </p>

            {/* Smooth Dynamic Typing Pill */}
            <div
              className="mt-5 inline-flex min-h-[3rem] w-full max-w-xl items-center rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white/90 dark:bg-[#111A2E]/90 px-4 py-2.5 text-sm shadow-sm"
              aria-label={`Active focus areas: ${roles.join(", ")}`}
            >
              <span className="mr-2.5 inline-flex items-center gap-1.5 rounded-md bg-[#F2A516]/15 px-2.5 py-1 font-mono text-xs font-semibold text-[#d97706] dark:text-[#F2A516]">
                <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                Focus
              </span>
              <span className="font-medium text-slate-800 dark:text-slate-100 sm:text-base">
                {displayedText}
              </span>
              {!prefersReducedMotion && (
                <span
                  aria-hidden="true"
                  className="ml-1 inline-block h-4 w-0.5 animate-pulse bg-[#F2A516]"
                />
              )}
            </div>

            {/* 10-Second Recruiter Value Proposition */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              Security Operations Engineer with{" "}
              <strong className="font-semibold text-slate-900 dark:text-white">
                5+ years in financial services IT
              </strong>
              , specializing in{" "}
              <strong className="font-semibold text-slate-900 dark:text-white">
                CrowdStrike Falcon EDR
              </strong>{" "}
              threat investigation,{" "}
              <strong className="font-semibold text-slate-900 dark:text-white">
                CyberArk PAM
              </strong>{" "}
              administration, and{" "}
              <strong className="font-semibold text-slate-900 dark:text-white">
                Fortigate &amp; Palo Alto
              </strong>{" "}
              perimeter security.
            </p>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={profileData.contact.cvUrl}
                download="Resume - Wahyu Satria Aji.pdf"
                className="inline-flex items-center gap-2.5 rounded-xl bg-[#F2A516] px-6 py-3.5 text-sm font-bold text-[#0B1220] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFBE3D] hover:shadow-amber-glow"
              >
                <FileDown className="h-4 w-4" aria-hidden="true" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-[#1B2638]/80 px-6 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F2A516] hover:text-[#d97706] dark:hover:text-[#F2A516]"
              >
                <Mail className="h-4 w-4 text-[#F2A516]" aria-hidden="true" />
                <span>Contact me</span>
              </a>

              <a
                href="#console"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 transition-colors hover:text-[#d97706] dark:hover:text-[#F2A516]"
              >
                <Terminal className="h-4 w-4 text-[#F2A516]" aria-hidden="true" />
                <span>Try Interactive Console</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* Tech Platform Strip (Inspired by client/platform strip at bottom of reference hero) */}
            <div className="mt-10 border-t border-slate-200/80 dark:border-slate-800/80 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Core Security &amp; Infrastructure Stack
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2.5">
                {[
                  "CrowdStrike Falcon EDR",
                  "CyberArk Privilege Cloud",
                  "FortiGate & FortiManager",
                  "Palo Alto Networks",
                  "Cloudflare WAF",
                  "SQL & Python",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#111A2E]/80 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2
                      className="h-3.5 w-3.5 text-[#F2A516]"
                      aria-hidden="true"
                    />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (5 cols): Portrait Showcase with Angled Gradient Shape & Floating Achievement Badges */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px]">
              {/* Angled Geometric Gradient Backdrop (Directly inspired by reference image) */}
              <div
                aria-hidden="true"
                className="absolute inset-x-4 bottom-0 top-10 -rotate-3 rounded-[2rem] bg-gradient-to-tr from-[#1B2638] via-[#1e3a5f] to-[#F2A516]/80 opacity-90 shadow-2xl"
              />

              {/* Secondary Subtle Frame */}
              <div
                aria-hidden="true"
                className="absolute inset-x-4 bottom-0 top-10 rotate-2 rounded-[2rem] border-2 border-[#F2A516]/40 bg-[#0B1220]/40 backdrop-blur-sm"
              />

              {/* Main Portrait Image Container */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-[#1B2638] dark:to-[#0B1220] shadow-2xl">
                <img
                  src={profileData.photoUrl}
                  alt={`${profileData.name} — ${profileData.title}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Strip (Directly inspired by the "7+ Years Working Experience" + 3 Pillars bar in your reference image) */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-[#111A2E]/90 shadow-xl backdrop-blur-md lg:grid-cols-12"
        >
          {/* Left Highlight Block: 5+ Years Experience */}
          <div className="flex flex-col justify-center bg-gradient-to-br from-[#F2A516] to-[#d97706] p-7 text-[#0B1220] lg:col-span-3">
            <div className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              5+
            </div>
            <div className="mt-1 font-display text-base font-bold leading-snug">
              Years Working Experience in Financial Services IT
            </div>
          </div>

          {/* 3 Security Specialty Pillars */}
          <div className="grid grid-cols-1 divide-y divide-slate-200 dark:divide-slate-800/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:col-span-9">
            <div className="flex flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2A516]/15 text-[#d97706] dark:text-[#F2A516]">
                  <Radar className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">
                  SOC &amp; EDR Triage
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  100+ CrowdStrike Falcon alerts investigated monthly with custom IOA exclusion tuning.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400">
                  <Lock className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">
                  PAM / IAM Specialist
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  100+ privileged accounts across 15+ CyberArk Safes, PSM monitoring &amp; audit controls.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">
                  Firewall &amp; Perimeter
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Fortigate &amp; Palo Alto policy hardening, 50+ IOC IPs blocked &amp; Cloudflare WAF protection.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
