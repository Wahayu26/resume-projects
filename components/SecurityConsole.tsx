"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, CornerDownLeft, Sparkles, Trash2, Info } from "lucide-react";
import { profileData } from "@/data/profile";
import { sanitizeInput } from "@/lib/utils";
import AlertFeed from "@/components/AlertFeed";

const SUGGESTED_COMMANDS = [
  "whoami",
  "skills",
  "experience",
  "projects",
  "repos",
  "certs",
  "contact",
  "help",
  "clear",
] as const;

interface HistoryEntry {
  id: string;
  command: string;
  output: React.ReactNode;
}

export default function SecurityConsole() {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<HistoryEntry[]>(() => [
    {
      id: "init-welcome",
      command: "whoami",
      output: renderCommandOutput("whoami"),
    },
  ]);

  const outputContainerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const el = outputContainerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [history]);

  function renderCommandOutput(rawCmd: string): React.ReactNode {
    const cmd = sanitizeInput(rawCmd, 64).toLowerCase();

    switch (cmd) {
      case "whoami":
        return (
          <div className="space-y-1.5 text-slate-200">
            <div className="font-bold text-[#F2A516]">
              {profileData.name} — {profileData.title}
            </div>
            <div className="text-xs text-emerald-400">
              Location: {profileData.location} | Open to:{" "}
              {profileData.openToRoles}
            </div>
            <p className="leading-relaxed text-slate-300">
              {profileData.summary}
            </p>
          </div>
        );

      case "skills":
        return (
          <div className="space-y-2">
            {profileData.skills.map((group) => (
              <div key={group.id}>
                <span className="font-bold text-[#F2A516]">
                  [{group.domain}]:
                </span>{" "}
                <span className="text-slate-300">
                  {group.skills.join(" • ")}
                </span>
              </div>
            ))}
          </div>
        );

      case "experience":
        return (
          <div className="space-y-3">
            {profileData.experience.map((exp, idx) => (
              <div
                key={exp.id}
                className="border-l-2 border-[#F2A516]/60 pl-3"
              >
                <div className="font-bold text-white">
                  {idx + 1}. {exp.role} @ {exp.company}
                </div>
                <div className="text-xs text-emerald-400">{exp.period}</div>
                <ul className="mt-1 list-inside list-disc space-y-0.5 text-slate-300">
                  {exp.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="text-xs">
                      {h}
                    </li>
                  ))}
                  {exp.highlights.length > 2 && (
                    <li className="text-xs text-[#F2A516]">
                      ...and {exp.highlights.length - 2} more operational achievements (see Experience section above).
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        );

      case "projects":
        return (
          <div className="space-y-2.5">
            {profileData.projects.map((proj) => (
              <div key={proj.id}>
                <span className="font-bold text-[#F2A516]">{proj.title}</span>{" "}
                <span className="text-xs text-emerald-400">
                  [{proj.techStack.join(", ")}]
                </span>
                <p className="text-xs text-slate-300">
                  → {proj.shortDescription}
                </p>
              </div>
            ))}
          </div>
        );

      case "repos":
        return (
          <div className="space-y-2">
            <div className="text-xs font-semibold text-emerald-400">
              GitHub Repositories ({profileData.contact.github}):
            </div>
            {profileData.githubRepos.map((repo) => (
              <div key={repo.id} className="text-xs">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#F2A516] underline hover:text-amber-300"
                >
                  {repo.fullName}
                </a>{" "}
                — <span className="text-slate-300">{repo.description}</span>
              </div>
            ))}
          </div>
        );

      case "certs":
        return (
          <div className="space-y-2">
            <div className="font-bold text-[#F2A516]">
              Education: {profileData.education.degree},{" "}
              {profileData.education.institution} ({profileData.education.period})
            </div>
            <div className="text-xs text-slate-300">
              <strong className="text-emerald-400">Certifications:</strong>{" "}
              {profileData.certifications
                .map(
                  (c) =>
                    `${c.title} (${c.issuer}${
                      c.year !== "Verified" ? `, ${c.year}` : ""
                    })`
                )
                .join(" | ")}
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="space-y-1 text-xs">
            <div>
              <span className="font-bold text-[#F2A516]">Location:</span>{" "}
              <span className="text-slate-200">
                {profileData.contact.location}
              </span>
            </div>
            <div>
              <span className="font-bold text-[#F2A516]">Email:</span>{" "}
              <a
                href={`mailto:${profileData.contact.email}`}
                className="text-emerald-400 underline"
              >
                {profileData.contact.email}
              </a>
            </div>
            <div>
              <span className="font-bold text-[#F2A516]">Phone / WA:</span>{" "}
              <a
                href={profileData.contact.phoneHref}
                className="text-slate-200 underline"
              >
                {profileData.contact.phone}
              </a>
            </div>
            <div>
              <span className="font-bold text-[#F2A516]">LinkedIn:</span>{" "}
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline"
              >
                {profileData.contact.linkedin}
              </a>
            </div>
            <div>
              <span className="font-bold text-[#F2A516]">GitHub:</span>{" "}
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline"
              >
                {profileData.contact.github}
              </a>
            </div>
          </div>
        );

      case "help":
        return (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="font-bold text-[#F2A516]">
              Available SOC Console Commands:
            </div>
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              <li>
                <code className="text-emerald-400">whoami</code> — Operator identity &amp; summary
              </li>
              <li>
                <code className="text-emerald-400">skills</code> — Security domains &amp; tools
              </li>
              <li>
                <code className="text-emerald-400">experience</code> — Career log highlights
              </li>
              <li>
                <code className="text-emerald-400">projects</code> — Featured security builds
              </li>
              <li>
                <code className="text-emerald-400">repos</code> — GitHub repository links
              </li>
              <li>
                <code className="text-emerald-400">certs</code> — Education &amp; certifications
              </li>
              <li>
                <code className="text-emerald-400">contact</code> — Direct contact channels
              </li>
              <li>
                <code className="text-emerald-400">clear</code> — Clear terminal history
              </li>
            </ul>
          </div>
        );

      default:
        return (
          <div className="text-xs text-rose-400">
            Command not recognized: <code className="font-bold">{cmd}</code>. Type{" "}
            <code className="text-[#F2A516]">help</code> or click a suggested command chip above.
          </div>
        );
    }
  }

  const executeCommand = (rawCommand: string) => {
    const clean = sanitizeInput(rawCommand, 64).trim();
    if (!clean) return;

    if (clean.toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const newEntry: HistoryEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      command: clean,
      output: renderCommandOutput(clean),
    };

    setHistory((prev) => [...prev, newEntry]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <section
      id="console"
      aria-labelledby="console-heading"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="soc-section-badge">
              06 • Interactive Security Console
            </span>
            <h2
              id="console-heading"
              className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
            >
              Interactive SOC Terminal &amp; Simulated Telemetry
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-[#1B2638] px-3.5 py-2 text-xs font-medium text-slate-600 dark:text-slate-300">
            <Info className="h-4 w-4 text-[#F2A516]" aria-hidden="true" />
            <span>Simulated data for demonstration.</span>
          </div>
        </div>

        {/* Equal-Height Console + Live Alert Feed Grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Left: Interactive Terminal Widget (7 cols) */}
          <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-700 bg-[#0B1220] shadow-2xl lg:col-span-7">
            <div>
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 bg-[#111A2E] px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-300">
                    <Terminal
                      className="h-3.5 w-3.5 text-[#F2A516]"
                      aria-hidden="true"
                    />
                    <span>wahyu@soc-console: ~/profile</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setHistory([])}
                  aria-label="Clear terminal output"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-[#1B2638] px-2.5 py-1 text-xs font-semibold text-slate-300 hover:border-[#F2A516] hover:text-[#F2A516]"
                >
                  <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Clear</span>
                </button>
              </div>

              {/* Suggested Quick Command Chips */}
              <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-800/80 bg-[#0B1220] px-5 py-3">
                <span className="mr-1 inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
                  <Sparkles
                    className="h-3.5 w-3.5 text-[#F2A516]"
                    aria-hidden="true"
                  />
                  Quick run:
                </span>
                {SUGGESTED_COMMANDS.map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    onClick={() => executeCommand(cmd)}
                    className="rounded-lg border border-slate-700/80 bg-[#1B2638]/80 px-2.5 py-1 font-mono text-xs text-slate-200 transition-colors hover:border-[#F2A516] hover:bg-[#F2A516]/20 hover:text-[#F2A516]"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Output Log */}
            <div
              ref={outputContainerRef}
              role="log"
              aria-live="polite"
              aria-label="Security console command output"
              onClick={() => inputRef.current?.focus()}
              className="terminal-scroll h-[380px] flex-1 cursor-text space-y-4 overflow-y-auto p-5 font-mono text-xs sm:text-sm"
            >
              <div className="text-xs text-slate-400">
                SOC Interactive Shell v2.6 — Type{" "}
                <code className="text-[#F2A516]">help</code> or click any command chip above.
              </div>

              {history.map((item) => (
                <div key={item.id} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-emerald-400">
                      wahyu@soc:~$
                    </span>
                    <span className="font-bold text-white">{item.command}</span>
                  </div>
                  <div className="border-l-2 border-slate-800 pl-3.5">
                    {item.output}
                  </div>
                </div>
              ))}
            </div>

            {/* Command Input Form */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center border-t border-slate-800 bg-[#111A2E] px-5 py-3"
            >
              <label htmlFor="soc-terminal-input" className="sr-only">
                Enter terminal command
              </label>
              <span
                aria-hidden="true"
                className="mr-2.5 font-mono text-xs font-bold text-emerald-400 sm:text-sm"
              >
                wahyu@soc:~$
              </span>
              <input
                ref={inputRef}
                id="soc-terminal-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a command (whoami, skills, experience, projects, repos, certs, contact)..."
                autoComplete="off"
                spellCheck={false}
                className="w-full bg-transparent font-mono text-xs text-white placeholder-slate-500 focus:outline-none sm:text-sm"
              />
              <button
                type="submit"
                aria-label="Execute command"
                className="ml-2 inline-flex items-center gap-1.5 rounded-lg bg-[#F2A516] px-3 py-1.5 text-xs font-bold text-[#0B1220] hover:bg-[#FFBE3D]"
              >
                <span>Run</span>
                <CornerDownLeft className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </form>
          </div>

          {/* Right: Simulated Live Alert Feed Panel (5 cols) */}
          <div className="lg:col-span-5">
            <AlertFeed />
          </div>
        </div>
      </div>
    </section>
  );
}

