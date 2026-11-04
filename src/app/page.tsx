"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Volume2,
  VolumeX,
  ArrowUpRight,
  Code2,
  Layers,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  FileSpreadsheet,
  Users,
  ShieldCheck,
  Filter,
  Eye,
  Image as ImageIcon,
  Terminal,
  ExternalLink,
} from "lucide-react";

import {
  HERO_PROFILE,
  FUNNEL_PORTFOLIO_URL,
  STATIC_AD_CREATIVES,
  REEL_SHOWCASE,
  FUNNEL_STEPS,
  CAMPAIGN_RECORDS,
  LOOP_SCRIPTS,
  SWIPE_CARDS,
  CREATOR_ENGINE_DATA,
  REMOTION_CODE_SNIPPET,
} from "@/data/portfolio-data";

import {
  MetricCounter,
  AnimeFunnelGraph,
} from "@/components/animations/AnimeComponents";
import GsapBeatScrubber from "@/components/animations/GsapBeatScrubber";

const Hero3DStage = dynamic(() => import("@/components/three/Hero3DStage"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[540px] lg:h-[620px] rounded-3xl bg-zinc-100 border border-zinc-200 animate-pulse flex items-center justify-center font-mono text-xs text-zinc-400">
      LOADING 3D PREVIEW...
    </div>
  ),
});

const NAV_LINKS = [
  { href: "#reels", label: "Video Ads" },
  { href: "#static-ads", label: "Static Ads" },
  { href: "#funnels", label: "Funnels" },
  { href: "#war-room", label: "Results" },
  { href: "#swipe-matrix", label: "Swipe File" },
  { href: "#creators", label: "Creators" },
];

const STATIC_AD_FILTERS = [
  { id: "all", label: `All Creatives (${STATIC_AD_CREATIVES.length})` },
  { id: "Angle 1: Lunchtime", label: "Angle 1: Lunchbox" },
  { id: "Angle 2: Co-Regulation", label: "Angle 2: Nervous System" },
  { id: "Angle 3: Not Random", label: "Angle 3: Not Random" },
  { id: "Angle 4: Teen Scripts", label: "Angle 4: Teen Scripts" },
  { id: "Product Stack", label: "Product Mockups" },
] as const;

const SWIPE_FILTERS = [
  { id: "all", label: `All Ads (${SWIPE_CARDS.length})` },
  { id: "meltdown", label: "Meltdown Hooks" },
  { id: "calm", label: "Calm Down Kits" },
  { id: "autism", label: "Sensory / OT" },
  { id: "visual", label: "Visual Charts" },
] as const;

function SectionEyebrow({
  icon: Icon,
  label,
  dark = false,
}: {
  icon: React.ElementType;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
      <Icon className={`w-3.5 h-3.5 ${dark ? "text-emerald-400" : "text-zinc-900"}`} />
      <span>{label}</span>
    </div>
  );
}

export default function PortfolioPage() {
  // Smooth Scroll (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // State: Active Reel in 3D Stage & Video Lab
  const [selectedReelIdx, setSelectedReelIdx] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [endingMode, setEndingMode] = useState<
    "paid" | "organicDirect" | "organicFree"
  >("paid");
  const [showRemotionCode, setShowRemotionCode] = useState(false);

  // State: Active Funnel Step
  const [activeFunnelIdx, setActiveFunnelIdx] = useState(0);

  // State: Swipe File Filter
  const [swipeFilter, setSwipeFilter] = useState<
    "all" | "meltdown" | "calm" | "autism" | "visual"
  >("all");

  // State: Static Ad Creatives Filter
  const [staticAdFilter, setStaticAdFilter] = useState<
    | "all"
    | "Angle 1: Lunchtime"
    | "Angle 2: Co-Regulation"
    | "Angle 3: Not Random"
    | "Angle 4: Teen Scripts"
    | "Product Stack"
  >("all");

  const activeReel = REEL_SHOWCASE[selectedReelIdx] || REEL_SHOWCASE[0];
  const activeFunnel = FUNNEL_STEPS[activeFunnelIdx] || FUNNEL_STEPS[0];

  const filteredSwipes =
    swipeFilter === "all"
      ? SWIPE_CARDS
      : SWIPE_CARDS.filter((c) => c.category === swipeFilter);

  const filteredStaticAds =
    staticAdFilter === "all"
      ? STATIC_AD_CREATIVES
      : STATIC_AD_CREATIVES.filter((ad) => ad.angle === staticAdFilter);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-950 bg-grid-minimal">
      {/* Top Minimalist Floating Pill Navigation */}
      <header className="sticky top-0 z-50 pt-4 pb-2 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="max-w-6xl mx-auto">
          <div className="pointer-events-auto h-14 px-3 sm:px-4 rounded-full bg-white/85 backdrop-blur-xl border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-between gap-4">
            {/* Brand Identity */}
            <a
              href="#"
              className="flex items-center gap-2.5 pl-1 pr-2 py-1 rounded-full hover:opacity-80 transition-opacity"
            >
              <img
                src="/favicon.png"
                alt={HERO_PROFILE.name}
                className="w-8 h-8 rounded-full object-cover ring-1 ring-zinc-200 flex-none"
              />
              <span className="font-semibold text-sm tracking-tight text-zinc-950 whitespace-nowrap">
                {HERO_PROFILE.name}
              </span>
            </a>

            {/* Center Navigation Pills */}
            <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/80 p-1 rounded-full border border-zinc-200/60">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-600 hover:text-zinc-950 hover:bg-white hover:shadow-sm transition-all whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Primary External Portfolio Action */}
            <a
              href={FUNNEL_PORTFOLIO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-zinc-950 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors whitespace-nowrap shadow-sm"
            >
              <span>Funnelish Portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* =========================================================
          HERO SECTION: Minimalist Typography + Three.js 3D Stage
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/90 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-zinc-600 uppercase tracking-wider">
                {HERO_PROFILE.location}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tightest leading-[1.08] text-zinc-950">
              {HERO_PROFILE.headline}
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
              {HERO_PROFILE.subheadline}
            </p>

            {/* Quick Interactive Reel Selector Pills for 3D Phone */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                SWITCH VIDEO ON 3D PHONE:
              </div>
              <div className="flex flex-wrap gap-2">
                {REEL_SHOWCASE.slice(0, 4).map((reel, idx) => (
                  <button
                    key={reel.id}
                    onClick={() => setSelectedReelIdx(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                      selectedReelIdx === idx
                        ? "bg-zinc-950 text-white shadow-sm"
                        : "bg-white text-zinc-700 border border-zinc-200 hover:border-zinc-400"
                    }`}
                  >
                    0{idx + 1} · {reel.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct CTA to Funnelish & Web Development Portfolio + Media Buying Jump */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#reels"
                className="inline-flex items-center gap-2 bg-zinc-950 text-white px-5 py-3 rounded-xl text-xs font-mono hover:bg-zinc-800 transition-colors shadow-sm"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Explore Video Ads & Media Buying</span>
              </a>
              <a
                href={FUNNEL_PORTFOLIO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-zinc-950 hover:text-white text-zinc-900 border border-zinc-300 px-5 py-3 rounded-xl text-xs font-mono transition-colors"
              >
                <span>View 100+ Funnelish Builds (markangelobautista.framer.website)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Three.js 3D Phone & Spatial Cards */}
          <div className="lg:col-span-5">
            <Hero3DStage
              activeVideoSrc={activeReel.videoSrc}
              activeReelTitle={activeReel.title}
            />
          </div>
        </div>

        {/* Anime.js Metric Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {HERO_PROFILE.metrics.map((m) => (
            <MetricCounter
              key={m.label}
              value={m.value}
              suffix={m.suffix}
              decimals={m.decimals || 0}
              label={m.label}
              detail={m.detail}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          01. VIDEO ADS & REELS SHOWCASE
      ========================================================= */}
      <section
        id="reels"
        className="py-24 bg-white border-y border-zinc-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <SectionEyebrow
                icon={Play}
                label="01 · VIDEO ADS & SHORT-FORM REELS"
              />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                Hook-First Video Creatives & Remotion Builds
              </h2>
            </div>

            <button
              onClick={() => setShowRemotionCode(!showRemotionCode)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 bg-zinc-50 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 text-xs font-mono transition-colors self-start md:self-auto"
            >
              <Code2 className="w-4 h-4" />
              <span>
                {showRemotionCode
                  ? "Hide Remotion React Code"
                  : "View Remotion Video Code"}
              </span>
            </button>
          </div>

          {/* Expandable Remotion Code Inspector */}
          <AnimatePresence>
            {showRemotionCode && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-10 overflow-hidden"
              >
                <div className="bg-zinc-950 text-zinc-100 rounded-2xl p-6 border border-zinc-800 font-mono text-xs overflow-x-auto">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800 text-zinc-400">
                    <span>video-engine/src/ZylaRow01Storybook.tsx</span>
                    <span className="text-emerald-400">
                      React + Remotion Video Ad Code
                    </span>
                  </div>
                  <pre className="leading-relaxed text-zinc-300">
                    <code>{REMOTION_CODE_SNIPPET}</code>
                  </pre>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Video Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: 9:16 Video Player */}
            <div className="lg:col-span-5 bg-zinc-950 rounded-3xl p-5 border border-zinc-800 shadow-xl">
              <div className="flex items-center justify-between mb-4 text-xs font-mono text-zinc-400">
                <span className="text-white font-semibold">
                  {activeReel.category}
                </span>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>Unmute Audio</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Audio On</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative aspect-[9/16] max-h-[540px] mx-auto rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
                <video
                  key={activeReel.videoSrc}
                  src={activeReel.videoSrc}
                  poster={activeReel.posterSrc}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Ending Variant Switcher */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  END-CARD CTA VARIANT (FINAL 2 SECONDS):
                </div>
                <div className="grid grid-cols-3 gap-1.5 mb-3">
                  {(
                    [
                      { key: "paid", label: "Paid Ad" },
                      { key: "organicDirect", label: "DM Link" },
                      { key: "organicFree", label: "Free Script" },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setEndingMode(tab.key)}
                      className={`py-1.5 px-2 rounded-lg text-[11px] font-mono transition-colors ${
                        endingMode === tab.key
                          ? "bg-white text-zinc-950 font-semibold"
                          : "bg-white/5 text-zinc-400 hover:bg-white/10"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-200 leading-relaxed">
                  &ldquo;{activeReel.endingVariants[endingMode]}&rdquo;
                </div>
              </div>
            </div>

            {/* Right: 6 Production Reels Selector */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-zinc-50 border border-zinc-200/90 rounded-3xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-zinc-500">
                    {activeReel.brand}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-200/80 text-zinc-800">
                    {activeReel.aspectRatio} · {activeReel.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 mb-3">
                  {activeReel.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                  {activeReel.strategyNote}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeReel.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-white border border-zinc-200/80 rounded-2xl p-3.5"
                    >
                      <div className="text-[11px] font-mono uppercase text-zinc-400">
                        {m.label}
                      </div>
                      <div className="text-lg font-bold font-mono text-zinc-950 my-0.5">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-zinc-500">{m.subtext}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                  SELECT A VIDEO REEL ({REEL_SHOWCASE.length} VIDEOS):
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {REEL_SHOWCASE.map((reel, idx) => {
                    const isSelected = selectedReelIdx === idx;
                    return (
                      <button
                        key={reel.id}
                        onClick={() => setSelectedReelIdx(idx)}
                        className={`flex items-start gap-3.5 p-3.5 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? "bg-zinc-950 text-white border-zinc-950 shadow-md"
                            : "bg-white text-zinc-900 border-zinc-200/80 hover:border-zinc-400"
                        }`}
                      >
                        <img
                          src={reel.posterSrc}
                          alt={reel.title}
                          className="w-14 h-20 rounded-xl object-cover flex-none border border-white/10 bg-zinc-200"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                                isSelected
                                  ? "bg-white/15 text-zinc-200"
                                  : "bg-zinc-100 text-zinc-600"
                              }`}
                            >
                              {reel.category}
                            </span>
                            <span className="text-[11px] font-mono text-zinc-400">
                              {reel.duration}
                            </span>
                          </div>
                          <div className="font-semibold text-sm leading-snug line-clamp-2 mb-1">
                            {reel.title}
                          </div>
                          <div
                            className={`text-xs truncate ${
                              isSelected ? "text-zinc-400" : "text-zinc-500"
                            }`}
                          >
                            {reel.hookLine}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* 6-Beat Storyboard Breakdown */}
          <GsapBeatScrubber />

          {/* L1-L5 Seamless Loop Reels */}
          <div className="mt-16 pt-16 border-t border-zinc-200/80">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-2">
                  ORGANIC REEL FORMAT · L1–L5
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-950">
                  8-Second Seamless Loop Reels
                </h3>
              </div>
              <p className="text-sm text-zinc-600 max-w-md">
                Short 8-second looping videos with a longer headline that takes two
                watches to finish reading, pushing watch completion past 100%.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {LOOP_SCRIPTS.map((loop) => (
                <div
                  key={loop.id}
                  className="bg-zinc-50/80 border border-zinc-200/80 rounded-2xl p-5 flex flex-col justify-between hover:bg-white hover:border-zinc-400 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3">
                      <span className="font-bold text-zinc-950 bg-zinc-200/80 px-2 py-0.5 rounded">
                        {loop.code}
                      </span>
                      <span>8.0s LOOP</span>
                    </div>
                    <h4 className="font-semibold text-base text-zinc-950 mb-2">
                      {loop.title}
                    </h4>
                    <p className="text-xs text-zinc-800 font-medium bg-white p-3 rounded-xl border border-zinc-200/70 mb-3 leading-relaxed">
                      &ldquo;{loop.headlineOnScreen}&rdquo;
                    </p>
                  </div>
                  <div className="pt-3 border-t border-zinc-200/60 text-[11px] font-mono text-zinc-500">
                    {loop.targetMetric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02. STATIC AD CREATIVES (BATCH 1 MULTI-FORMAT SUITE)
      ========================================================= */}
      <section
        id="static-ads"
        className="py-24 bg-[#FAFAFA] border-b border-zinc-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <SectionEyebrow
                icon={ImageIcon}
                label="02 · STATIC AD CREATIVES & MULTI-FORMAT SUITE"
              />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                28 Static Ad Variations Across 4 Angles & Product Stack
              </h2>
              <p className="text-sm text-zinc-600 mt-2 max-w-2xl">
                Designed in 4:5 Feed, 1:1 Square, and 9:16 Story formats for Meta Ads testing—covering the Lunchbox Standoff, Co-Regulation, Trigger Patterns, Teen Scripts, and the 27-Tool Calm Kit stack.
              </p>
            </div>

            {/* Angle Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {STATIC_AD_FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setStaticAdFilter(f.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-mono transition-colors ${
                    staticAdFilter === f.id
                      ? "bg-zinc-950 text-white"
                      : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredStaticAds.map((ad) => (
              <motion.div
                layout
                key={ad.id}
                className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-zinc-400 transition-all shadow-sm group"
              >
                <div>
                  <a
                    href={ad.imageSrc}
                    target="_blank"
                    rel="noreferrer"
                    className="relative aspect-[4/5] bg-zinc-100 border-b border-zinc-200/70 overflow-hidden p-2 flex items-center justify-center"
                  >
                    <img
                      src={ad.imageSrc}
                      alt={ad.title}
                      className="max-w-full max-h-full object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <span className="absolute top-3 right-3 bg-zinc-950/85 backdrop-blur-sm text-white text-[10px] font-mono px-2.5 py-1 rounded-full">
                      {ad.format}
                    </span>
                  </a>

                  <div className="p-4">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-1">
                      <span>{ad.angle}</span>
                      <a
                        href={ad.imageSrc}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-900 hover:underline inline-flex items-center gap-0.5"
                      >
                        <span>Full Size</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                    <h3 className="text-sm font-bold text-zinc-950 mb-2">
                      {ad.title}
                    </h3>
                    <p className="text-xs font-medium text-zinc-800 bg-zinc-50 p-2.5 rounded-xl border border-zinc-200/60">
                      &ldquo;{ad.hookText}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 text-xs text-zinc-500 leading-relaxed">
                  {ad.subText}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          03. FUNNELS & FUNNELISH PORTFOLIO SHOWCASE
      ========================================================= */}
      <section id="funnels" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Highlight Banner for Funnelish Portfolio */}
        <div className="mb-10 bg-zinc-950 text-white rounded-3xl p-6 sm:p-8 border border-zinc-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
              <span>100+ SALES FUNNELS & ADVERTORIALS BUILT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Looking for my full Funnelish & Shopify Funnel Portfolio?
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Explore 100+ live high-converting landing pages, advertorials, and Shopify checkout integrations on my dedicated Funnel Builder portfolio.
            </p>
          </div>
          <a
            href={FUNNEL_PORTFOLIO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-zinc-950 font-mono text-xs font-semibold px-6 py-4 rounded-2xl hover:bg-zinc-200 transition-colors flex-none"
          >
            <span>Open markangelobautista.framer.website</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <SectionEyebrow
              icon={Layers}
              label="03 · DIRECT-RESPONSE FUNNEL ARCHITECTURE"
            />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              $27 Front-End Kit → Order Bumps → One-Click Upsells ($475 Max Cart)
            </h2>
          </div>
          <a
            href={FUNNEL_PORTFOLIO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-950 text-white text-xs font-mono px-4 py-2.5 rounded-xl hover:bg-zinc-800 transition-colors self-start md:self-auto"
          >
            <span>All 100+ Funnelish Builds</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Interactive Funnel Node Graph */}
        <AnimeFunnelGraph
          activeStepIndex={activeFunnelIdx}
          onSelectStep={setActiveFunnelIdx}
        />

        {/* Selected Funnel Step Detail (No Embedded HTML Page Preview) */}
        <div className="mt-8 bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <a
            href={activeFunnel.mockupImage}
            target="_blank"
            rel="noreferrer"
            className="lg:col-span-5 rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 aspect-[4/3] p-3 flex items-center justify-center group"
          >
            <img
              src={activeFunnel.mockupImage}
              alt={activeFunnel.name}
              className="max-w-full max-h-full object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
            />
          </a>

          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                {activeFunnel.stage}
              </span>
              <span className="text-sm font-mono font-bold bg-zinc-950 text-white px-3.5 py-1 rounded-full">
                {activeFunnel.price}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-zinc-950 mb-2">
                {activeFunnel.name}
              </h3>
              <p className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg inline-block mb-3">
                {activeFunnel.conversionRole}
              </p>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {activeFunnel.description}
              </p>
            </div>

            <div className="space-y-2.5 pt-1">
              <div className="text-xs font-mono uppercase text-zinc-400">
                FUNNEL MECHANICS & OFFER BREAKDOWN:
              </div>
              {activeFunnel.keyElements.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-zinc-700 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-zinc-950 flex-none mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={FUNNEL_PORTFOLIO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-950 text-white text-xs font-mono py-3 px-5 rounded-xl hover:bg-zinc-800 transition-colors"
              >
                <span>View Live Funnelish & Shopify Builds at markangelobautista.framer.website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03. PAID MEDIA RESULTS & CAMPAIGN MANAGEMENT
      ========================================================= */}
      <section
        id="war-room"
        className="py-24 bg-zinc-950 text-white bg-grid-dark border-y border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <SectionEyebrow
                icon={TrendingUp}
                label="04 · META ADS PERFORMANCE & TRACKING"
                dark
              />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Campaign Results, Budget Scaling & Funnel Tracking
              </h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-md">
              Clear rules for managing ad spend: scale winning 3.0x ROAS ad sets by
              +30%, and pause underperforming ads early to protect budget.
            </p>
          </div>

          {/* Campaign Ledger Table */}
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl overflow-hidden mb-10">
            <div className="px-6 py-4 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                <span>META ADS & SAMCART CAMPAIGN SUMMARY</span>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                7-Day Click Attribution + UTM Tracking
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800 text-[11px] font-mono uppercase text-zinc-400 bg-zinc-950/50">
                    <th className="py-3.5 px-6">Campaign / Ad Set</th>
                    <th className="py-3.5 px-4">Daily Budget</th>
                    <th className="py-3.5 px-4">Spend</th>
                    <th className="py-3.5 px-4">Orders</th>
                    <th className="py-3.5 px-4">Revenue</th>
                    <th className="py-3.5 px-4">ROAS</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-6">Action Taken</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80 text-sm">
                  {CAMPAIGN_RECORDS.map((row) => (
                    <tr key={row.id} className="hover:bg-white/[0.02]">
                      <td className="py-4 px-6 font-medium text-white">
                        <div>{row.name}</div>
                        <div className="text-xs font-mono text-zinc-400">
                          {row.platform}
                        </div>
                      </td>
                      <td className="py-4 px-4 font-mono text-xs text-zinc-300">
                        {row.budget}
                      </td>
                      <td className="py-4 px-4 font-mono text-xs text-zinc-300">
                        {row.spend}
                      </td>
                      <td className="py-4 px-4 font-mono text-xs text-zinc-300">
                        {row.purchases}
                      </td>
                      <td className="py-4 px-4 font-mono text-xs font-semibold text-white">
                        {row.revenue}
                      </td>
                      <td className="py-4 px-4 font-mono text-sm font-bold text-emerald-400">
                        {row.roas}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-block text-[11px] font-mono px-2.5 py-1 rounded-full ${
                            row.status.includes("SCALING")
                              ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                              : row.status.includes("MONITOR")
                              ? "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                              : "bg-rose-500/15 text-rose-300 border border-rose-500/30"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-xs text-zinc-300 max-w-xs leading-relaxed">
                        {row.ruleApplied}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3-Column Operations Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>5-POINT FUNNEL CHECK</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Weekly Tracking & Checkout QA
              </h3>
              <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                <li>1. Test live ad links to `buy.zylakids.com`</li>
                <li>2. Run test checkout on SamCart payment form</li>
                <li>3. Verify Meta Pixel PageView, Checkout & Purchase</li>
                <li>4. Check UTM tags across all 5 social accounts</li>
                <li>5. Confirm SamCart purchases tag buyers in Kit</li>
              </ul>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-3">
                <Terminal className="w-4 h-4" />
                <span>EMAIL & MANYCHAT FLOWS</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Automated Follow-Up & Cart Recovery
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                Connected ManyChat keyword triggers (`CALM`) with Kit email sequences:
              </p>
              <ul className="space-y-1.5 text-xs text-zinc-400 font-mono">
                <li>• 3-Email Abandoned Cart Recovery Sequence</li>
                <li>• 5-Email Post-Purchase Product Follow-Up</li>
                <li>• 3-Email ManyChat Free Script Welcome Flow</li>
                <li>• 9-Day Broadcast Campaign for Fewer Storms ($297)</li>
              </ul>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-3">
                <Sparkles className="w-4 h-4" />
                <span>PYTHON AUTOMATION SCRIPTS</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Reporting & Ad Research Tools
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                Built Python scripts to speed up daily reporting and competitor research:
              </p>
              <ul className="space-y-1.5 text-xs text-zinc-400 font-mono">
                <li>• Automated Meta CSV to Excel reporting updates</li>
                <li>• Playwright scraper for live Meta Ad Library ads</li>
                <li>• Daily spend & ROAS threshold checker</li>
                <li>• Weekly PDF performance report generator</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04. META AD LIBRARY RESEARCH & SWIPE FILE
      ========================================================= */}
      <section
        id="swipe-matrix"
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <SectionEyebrow
              icon={Filter}
              label="05 · COMPETITOR AD RESEARCH"
            />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              Meta Ad Library Swipe File (Proven 5–10+ Month Winners)
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {SWIPE_FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setSwipeFilter(f.id)}
                className={`px-3.5 py-2 rounded-full text-xs font-mono transition-colors ${
                  swipeFilter === f.id
                    ? "bg-zinc-950 text-white"
                    : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSwipes.map((card) => (
            <motion.div
              layout
              key={card.id}
              className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-zinc-400 transition-colors shadow-sm"
            >
              <div>
                <div className="relative h-48 bg-zinc-100 border-b border-zinc-200/70 overflow-hidden">
                  <img
                    src={card.screenshotSrc}
                    alt={card.brand}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-zinc-950/85 backdrop-blur-sm text-white text-[10px] font-mono px-2.5 py-1 rounded-full">
                    {card.longevity}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1.5">
                    <span className="font-bold text-zinc-900">{card.brand}</span>
                    <span>{card.pricePoint}</span>
                  </div>
                  <div className="text-xs font-semibold text-zinc-700 mb-3">
                    {card.angleName}
                  </div>
                  <p className="text-xs italic text-zinc-700 bg-zinc-50 p-3 rounded-xl border border-zinc-200/60 mb-3">
                    &ldquo;{card.hookVerbatim}&rdquo;
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-zinc-100 text-xs text-zinc-500 leading-relaxed">
                <span className="font-mono text-[10px] uppercase text-zinc-400 block mb-0.5">
                  KEY TAKEAWAY:
                </span>
                {card.takeaway}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================
          05. CREATOR PARTNERSHIPS (300+ VETTED CREATORS)
      ========================================================= */}
      <section
        id="creators"
        className="py-24 bg-white border-t border-zinc-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <SectionEyebrow
                icon={Users}
                label="06 · CREATOR OUTREACH & AFFILIATE PROGRAM"
              />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                Creator Partnership & Affiliate Outreach Systems
              </h2>
            </div>
            <p className="text-sm text-zinc-600 max-w-md">
              Custom partner pitch sheets, automated creator vetting workflows, and affiliate outreach systems built for Zyla Kids and The Candid.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CREATOR_ENGINE_DATA.brandsCovered.map((brand) => (
              <div
                key={brand.name}
                className="bg-zinc-50/70 border border-zinc-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-zinc-950">
                      {brand.name} — Partner Program
                    </h3>
                    <a
                      href={brand.partnerSheetImg}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-zinc-700 hover:text-zinc-950 underline"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Partner Sheet</span>
                    </a>
                  </div>
                  <p className="text-xs font-mono text-zinc-500 mb-6">
                    NICHE: {brand.niche}
                  </p>

                  <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-white mb-6 max-h-80">
                    <img
                      src={brand.partnerSheetImg}
                      alt={`${brand.name} Partner Sheet`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="space-y-3">
                    {brand.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-start gap-2.5 text-sm text-zinc-700 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-zinc-950 flex-none mt-1" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            <span className="text-white font-semibold">{HERO_PROFILE.name}</span> —
            Media Buyer, Creative Strategist & Funnel Builder
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={FUNNEL_PORTFOLIO_URL}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:underline transition-colors"
            >
              Funnelish Portfolio (markangelobautista.framer.website) ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
