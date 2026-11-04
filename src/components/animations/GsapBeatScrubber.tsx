"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STORY_BEATS } from "@/data/portfolio-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GsapBeatScrubber() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeBeat, setActiveBeat] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".beat-step-card");
      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 65%",
          end: "bottom 45%",
          onEnter: () => setActiveBeat(index),
          onEnterBack: () => setActiveBeat(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const current = STORY_BEATS[activeBeat] || STORY_BEATS[0];

  return (
    <div ref={containerRef} className="mt-16 pt-16 border-t border-zinc-200/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-2">
            STORYBOARD BREAKDOWN
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            6-Beat Video Ad Structure
          </h3>
        </div>
        <p className="text-sm text-zinc-600 max-w-md">
          Scroll or click any beat below to see how each section of the 20-second
          reel keeps viewers watching from the opening hook to the final call to action.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sticky Storyboard Frame Inspector */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 bg-zinc-950 text-white rounded-3xl p-6 border border-zinc-800 shadow-lg">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4">
            <span>{current.step}</span>
            <span className="px-2.5 py-1 rounded-full bg-white/10 text-white">
              {current.timecode}
            </span>
          </div>

          <div className="relative aspect-[9/16] max-h-[420px] mx-auto rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 mb-5">
            <img
              src={current.imageSrc}
              alt={current.title}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <div className="text-base font-semibold text-white">
              {current.title}
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-mono bg-white/5 p-3 rounded-xl border border-white/10">
              &ldquo;{current.caption}&rdquo;
            </p>
          </div>
        </div>

        {/* Scrollable Beat Cards */}
        <div className="lg:col-span-7 space-y-4">
          {STORY_BEATS.map((beat, idx) => {
            const isSelected = activeBeat === idx;
            return (
              <div
                key={beat.step}
                onClick={() => setActiveBeat(idx)}
                className={`beat-step-card cursor-pointer rounded-2xl p-6 border transition-all duration-200 ${
                  isSelected
                    ? "bg-white border-zinc-950 shadow-md"
                    : "bg-zinc-50/70 border-zinc-200/80 hover:bg-white hover:border-zinc-400"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${
                        isSelected
                          ? "bg-zinc-950 text-white"
                          : "bg-zinc-200 text-zinc-700"
                      }`}
                    >
                      {beat.step}
                    </span>
                    <h4 className="text-lg font-semibold text-zinc-950">
                      {beat.title}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    {beat.timecode}
                  </span>
                </div>

                <p className="text-sm font-medium text-zinc-900 mb-2 bg-zinc-100/80 px-3.5 py-2.5 rounded-xl border border-zinc-200/60">
                  &ldquo;{beat.caption}&rdquo;
                </p>

                <p className="text-sm text-zinc-600 leading-relaxed">
                  <span className="font-mono text-xs uppercase text-zinc-400 mr-2">
                    Why It Works:
                  </span>
                  {beat.rationale}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
