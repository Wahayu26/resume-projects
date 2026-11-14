import React from "react";
import { Shield, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-[#0B1220] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F2A516]/40 bg-[#1B2638] text-[#F2A516]">
              <Shield className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-slate-900 dark:text-white">
                {profileData.name} — {profileData.title}
              </p>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                © {currentYear} {profileData.name}. No third-party trackers. Console &amp; alert streams use 100% simulated data.
              </p>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profileData.contact.email}`}
              aria-label="Email Wahyu Satria Aji"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-[#1B2638] text-slate-600 dark:text-slate-300 transition-colors hover:border-[#F2A516] hover:text-[#F2A516]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Wahyu Satria Aji LinkedIn Profile"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-[#1B2638] text-slate-600 dark:text-slate-300 transition-colors hover:border-[#F2A516] hover:text-[#F2A516]"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Wahyu Satria Aji GitHub Repositories"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-[#1B2638] text-slate-600 dark:text-slate-300 transition-colors hover:border-[#F2A516] hover:text-[#F2A516]"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#hero"
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-[#1B2638] px-3.5 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors hover:border-[#F2A516] hover:text-[#F2A516]"
            >
              <span>Top</span>
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
