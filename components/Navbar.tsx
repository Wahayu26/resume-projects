"use client";

import React, { useState, useEffect } from "react";
import { Shield, Terminal, Menu, X, Sun, Moon, FileDown } from "lucide-react";
import { profileData } from "@/data/profile";
import { cn } from "@/lib/utils";

const NAV_ITEMS: { id: string; label: string; isHighlight?: boolean }[] = [
  { id: "about", label: "About" },
  { id: "impact", label: "Impact" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "console", label: "SOC Console", isHighlight: true },
  { id: "education", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("soc-theme");
    if (savedTheme === "light") {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("soc-theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("soc-theme", "dark");
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const sectionIds = ["hero", ...NAV_ITEMS.map((item) => item.id)];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-25% 0px -60% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0B1220]/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#F2A516] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#0B1220]"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Clean Editorial Brand Identity (inspired by Harry. reference) */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Wahyu Satria Aji — Security Operations Home"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#F2A516]/40 bg-[#1B2638] text-[#F2A516] shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Shield className="h-5 w-5" aria-hidden="true" />
            <span
              className="absolute -right-1 -top-1 flex h-2.5 w-2.5"
              title="Status: Operational"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
          </div>
          <span className="font-display text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Wahyu<span className="text-[#F2A516]">.</span>
          </span>
        </a>

        {/* Smooth Sans Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-1.5 lg:flex"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200",
                  item.isHighlight
                    ? isActive
                      ? "bg-[#F2A516] text-[#0B1220] font-semibold shadow-sm"
                      : "border border-[#F2A516]/40 bg-[#F2A516]/10 text-[#d97706] dark:text-[#F2A516] hover:bg-[#F2A516]/20"
                    : isActive
                    ? "text-[#d97706] dark:text-[#F2A516] font-semibold bg-slate-200/70 dark:bg-[#1B2638]"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-[#1B2638]/60 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                {item.isHighlight && (
                  <Terminal
                    className="mr-1.5 inline-block h-3.5 w-3.5"
                    aria-hidden="true"
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions: Theme Toggle + Outlined Contact / Solid CV */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700/80 bg-slate-100 dark:bg-[#1B2638]/80 text-slate-700 dark:text-slate-300 transition-colors hover:border-[#F2A516]/60 hover:text-[#F2A516]"
            aria-label={isDark ? "Switch to clean light mode" : "Switch to SOC dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-[#F2A516]" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4 text-slate-700" aria-hidden="true" />
            )}
          </button>

          <a
            href={profileData.contact.cvUrl}
            download="Resume - Wahyu Satria Aji.pdf"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#F2A516] bg-[#F2A516]/10 px-4 py-2 text-sm font-bold text-slate-900 dark:text-white transition-all hover:bg-[#F2A516] hover:text-[#0B1220] hover:shadow-amber-glow"
          >
            <FileDown className="h-4 w-4 text-[#F2A516] group-hover:text-[#0B1220]" aria-hidden="true" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700/80 bg-slate-100 dark:bg-[#1B2638]/80 text-slate-700 dark:text-slate-300"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-[#F2A516]" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4 text-slate-700" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700/80 bg-slate-100 dark:bg-[#1B2638]/80 text-slate-700 dark:text-slate-200"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile Navigation"
          className="border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0B1220]/95 px-4 pb-6 pt-2 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium",
                      isActive
                        ? "bg-[#F2A516]/15 text-[#d97706] dark:text-[#F2A516] font-bold"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1B2638]"
                    )}
                  >
                    <span>{item.label}</span>
                    {item.isHighlight && (
                      <span className="rounded-full bg-[#F2A516]/20 px-2.5 py-0.5 text-[11px] font-semibold text-[#F2A516]">
                        Interactive
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800">
            <a
              href={profileData.contact.cvUrl}
              download="Resume - Wahyu Satria Aji.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F2A516] px-4 py-3 text-sm font-bold text-[#0B1220]"
            >
              <FileDown className="h-4 w-4" aria-hidden="true" />
              <span>Download CV (/cv.pdf)</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
