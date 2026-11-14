"use client";

import React, { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Activity, Pause, Play, ShieldAlert, Info } from "lucide-react";
import { profileData, type SimulatedAlert } from "@/data/profile";
import { cn } from "@/lib/utils";

export default function AlertFeed() {
  const prefersReducedMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<SimulatedAlert[]>(() =>
    profileData.simulatedAlerts.slice(0, 4)
  );
  const [cursor, setCursor] = useState<number>(4);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;

    const interval = setInterval(() => {
      setAlerts((prev) => {
        const nextAlert =
          profileData.simulatedAlerts[
            cursor % profileData.simulatedAlerts.length
          ];
        const now = new Date();
        const timeStr = now.toISOString().slice(11, 19) + " UTC";
        const entry: SimulatedAlert = {
          ...nextAlert,
          id: `${nextAlert.id}-${now.getTime().toString().slice(-3)}`,
          timestamp: timeStr,
        };
        return [entry, ...prev.slice(0, 3)];
      });
      setCursor((c) => c + 1);
    }, 3600);

    return () => clearInterval(interval);
  }, [cursor, isPaused, prefersReducedMotion]);

  const getSeverityBadge = (severity: SimulatedAlert["severity"]) => {
    switch (severity) {
      case "HIGH":
        return "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30";
      case "MEDIUM":
        return "bg-amber-500/15 text-amber-700 dark:text-[#F2A516] border-amber-500/30";
      case "LOW":
        return "bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border-cyan-500/30";
      case "INFO":
      default:
        return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30";
    }
  };

  return (
    <div
      className="soc-card flex h-full flex-col justify-between overflow-hidden border-slate-300 dark:border-slate-700/80 bg-white/95 dark:bg-[#111A2E]/95"
      aria-label="Decorative simulated security alert feed"
    >
      <div>
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-[#0B1220]/80 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <Activity
              className={cn(
                "h-4 w-4 text-[#F2A516]",
                !isPaused && !prefersReducedMotion && "animate-pulse"
              )}
              aria-hidden="true"
            />
            <span className="font-display text-sm font-bold text-slate-900 dark:text-slate-100">
              Live SIEM / EDR Telemetry
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsPaused((p) => !p)}
            aria-label={
              isPaused
                ? "Resume simulated alert stream"
                : "Pause simulated alert stream"
            }
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1B2638] px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-[#F2A516]"
          >
            {isPaused ? (
              <>
                <Play className="h-3 w-3 text-emerald-500" aria-hidden="true" />
                <span>Resume</span>
              </>
            ) : (
              <>
                <Pause className="h-3 w-3 text-[#F2A516]" aria-hidden="true" />
                <span>Pause</span>
              </>
            )}
          </button>
        </div>

        {/* Mandatory Visible Privacy / Fake-Data Notice */}
        <div className="flex items-center gap-2 border-b border-amber-500/20 bg-amber-500/10 px-5 py-2.5 text-xs text-amber-800 dark:text-[#F2A516]">
          <Info className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            <strong>Simulated data for demonstration.</strong> Uses RFC 5737 reserved ranges (192.0.2.0/24, 198.51.100.0/24, 203.0.113.0/24).
          </span>
        </div>

        <div className="space-y-3 p-4" aria-live="off">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="rounded-xl border border-slate-200/80 dark:border-slate-800/90 bg-slate-50/90 dark:bg-[#0B1220]/75 p-3.5 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-1.5">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "rounded-md border px-2 py-0.5 font-mono text-[10px] font-bold",
                      getSeverityBadge(alert.severity)
                    )}
                  >
                    {alert.severity}
                  </span>
                  <span className="font-display text-xs font-bold text-slate-800 dark:text-slate-200">
                    {alert.source}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                  {alert.timestamp}
                </span>
              </div>

              <p className="mt-1.5 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                {alert.message}
              </p>

              <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/60 dark:border-slate-800/60 pt-2 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                <span>
                  {alert.srcIp} → {alert.host}
                </span>
                <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                  <ShieldAlert className="h-3 w-3" aria-hidden="true" />
                  {alert.action}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-[#0B1220]/80 px-5 py-3 text-xs text-slate-500 dark:text-slate-400">
        <span className="font-medium">Sensors: EDR • PAM • FW • WAF</span>
        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
          ● Streaming (Demo)
        </span>
      </div>
    </div>
  );
}

