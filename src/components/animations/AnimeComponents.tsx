"use client";

import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { FUNNEL_STEPS } from "@/data/portfolio-data";

interface MetricCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  detail: string;
}

export function MetricCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  label,
  detail,
}: MetricCounterProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const obj = { count: 0 };
    const anim = anime({
      targets: obj,
      count: value,
      duration: 2000,
      easing: "easeOutExpo",
      update: () => {
        if (el) {
          el.textContent = `${prefix}${obj.count.toFixed(decimals)}${suffix}`;
        }
      },
    });

    return () => anim.pause();
  }, [value, suffix, prefix, decimals]);

  return (
    <div
      ref={cardRef}
      className="group bg-white border border-zinc-200/80 rounded-2xl p-6 transition-all duration-300 hover:border-zinc-900 hover:shadow-sm"
    >
      <div className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-2">
        <span ref={numRef}>
          {prefix}0{suffix}
        </span>
      </div>
      <div className="text-sm font-semibold text-zinc-900 mb-1">{label}</div>
      <div className="text-xs font-mono text-zinc-500">{detail}</div>
    </div>
  );
}

interface AnimeFunnelGraphProps {
  activeStepIndex: number;
  onSelectStep: (idx: number) => void;
}

export function AnimeFunnelGraph({
  activeStepIndex,
  onSelectStep,
}: AnimeFunnelGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const lines = svgRef.current.querySelectorAll(".funnel-connector");
    const pulses = svgRef.current.querySelectorAll(".funnel-pulse");

    anime({
      targets: lines,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1200,
      delay: anime.stagger(140),
    });

    const pulseAnim = anime({
      targets: pulses,
      translateX: [0, 118],
      opacity: [
        { value: 1, duration: 200 },
        { value: 1, duration: 900 },
        { value: 0, duration: 300 },
      ],
      easing: "linear",
      duration: 1400,
      delay: anime.stagger(220),
      loop: true,
    });

    return () => {
      pulseAnim.pause();
    };
  }, []);

  return (
    <div className="w-full bg-white border border-zinc-200/80 rounded-3xl p-6 lg:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-zinc-100">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
            DIRECT-RESPONSE FUNNEL ARCHITECTURE
          </span>
          <h3 className="text-lg font-semibold text-zinc-950">
            Customer Journey & Value Ladder ($27 Front-End → $475 Full Funnel)
          </h3>
        </div>
        <span className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 bg-zinc-100 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-zinc-900 animate-ping" />
          Select a step below to interact with the live page build
        </span>
      </div>

      {/* Desktop SVG Animated Connector Line */}
      <div className="hidden lg:block relative mb-3 px-12">
        <svg
          ref={svgRef}
          viewBox="0 0 1000 36"
          className="w-full h-9 overflow-visible"
        >
          {[0, 1, 2, 3].map((idx) => {
            const x1 = idx * 245 + 40;
            const x2 = (idx + 1) * 245 - 10;
            return (
              <g key={idx}>
                <line
                  x1={x1}
                  y1={18}
                  x2={x2}
                  y2={18}
                  stroke="#E4E4E7"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <line
                  className="funnel-connector"
                  x1={x1}
                  y1={18}
                  x2={x2}
                  y2={18}
                  stroke="#18181B"
                  strokeWidth="2"
                />
                <circle
                  className="funnel-pulse"
                  cx={x1}
                  cy={18}
                  r="4"
                  fill="#18181B"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Interactive Node Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {FUNNEL_STEPS.map((step, i) => {
          const isActive = activeStepIndex === i;
          return (
            <button
              key={step.id}
              onClick={() => onSelectStep(i)}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 ${
                isActive
                  ? "bg-zinc-950 text-white border-zinc-950 shadow-md scale-[1.02]"
                  : "bg-zinc-50/70 text-zinc-900 border-zinc-200/80 hover:bg-white hover:border-zinc-400"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                    isActive
                      ? "bg-white/15 text-zinc-200"
                      : "bg-zinc-200/70 text-zinc-600"
                  }`}
                >
                  STEP {step.code}
                </span>
                <span
                  className={`text-xs font-mono font-semibold ${
                    isActive ? "text-emerald-400" : "text-zinc-900"
                  }`}
                >
                  {step.shortMetric}
                </span>
              </div>
              <div className="font-semibold text-sm mb-0.5">{step.shortTitle}</div>
              <div
                className={`text-xs truncate ${
                  isActive ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                {step.shortSub}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
