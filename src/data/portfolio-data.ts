export interface ReelItem {
  id: string;
  title: string;
  brand: string;
  category: "Remotion Video" | "Paid Meta Reel" | "Organic Loop" | "Reach Test";
  videoSrc: string;
  posterSrc: string;
  duration: string;
  aspectRatio: string;
  metrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
  hookLine: string;
  strategyNote: string;
  endingVariants: {
    paid: string;
    organicDirect: string;
    organicFree: string;
  };
}

export interface StoryBeat {
  step: string;
  timecode: string;
  title: string;
  caption: string;
  rationale: string;
  imageSrc: string;
}

export interface FunnelStep {
  id: string;
  code: string;
  shortTitle: string;
  shortMetric: string;
  shortSub: string;
  stage: string;
  name: string;
  price: string;
  conversionRole: string;
  description: string;
  mockupImage: string;
  keyElements: string[];
}

export interface CampaignRecord {
  id: string;
  name: string;
  platform: string;
  format: string;
  targeting: string;
  benchmark: string;
  status: "SCALING (+30%)" | "HOLD / OPTIMIZE" | "CUT / REALLOCATE";
  ruleApplied: string;
}

export interface SwipeCard {
  id: string;
  brand: string;
  category: "meltdown" | "calm" | "autism" | "visual";
  angleName: string;
  longevity: string;
  pricePoint: string;
  hookVerbatim: string;
  ctaCopy: string;
  screenshotSrc: string;
  takeaway: string;
}

export interface LoopScript {
  id: string;
  code: string;
  title: string;
  scene: string;
  headlineOnScreen: string;
  captionSummary: string;
  targetMetric: string;
}

export const HERO_PROFILE = {
  name: "Mark Angelo Bautista",
  role: "Direct-Response Media Buyer, Creative Strategist & Funnel Architect",
  location: "Meta Media Buying · Hook-First Ad Creative · 100+ Funnelish & Shopify Builds",
  headline: "Why Most DTC Ad Accounts Burn Cash — And The 5-Part System That Turns Cold Clicks Into 3.0x+ ROAS.",
  subheadline:
    "If you hire a media buyer who only pushes buttons in Ads Manager, a video editor who doesn't understand unit economics, and a developer who doesn't know direct-response psychology, your CAC will always eat your margin. I handle all three under one roof: scroll-stopping video ads, disciplined Meta scaling, and 100+ high-AOV Funnelish & Shopify builds.",
  funnelPortfolioUrl: "https://markangelobautista.framer.website",
  metrics: [
    { value: 3.0, suffix: "x", decimals: 1, label: "Winner Ad Set ROAS", detail: "Meta Reels Cold Traffic Acquisition" },
    { value: 14, suffix: "x", decimals: 0, label: "Top-of-Funnel Reach Lift", detail: "Hook-First Short-Form Video Cuts" },
    { value: 100, suffix: "+", decimals: 0, label: "Funnels & Advertorials", detail: "Funnelish · Shopify · Custom Builds" },
    { value: 17.5, suffix: "x", decimals: 1, label: "Max Cart Expansion", detail: "$27 Front-End → $475 Full Funnel" },
  ],
};

export interface GrowthPillar {
  num: string;
  tag: string;
  statValue: string;
  statLabel: string;
  title: string;
  trapTitle: string;
  trapDesc: string;
  fixTitle: string;
  fixDesc: string;
  previewMedia: {
    type: "images" | "ladder" | "rules";
    items: string[];
    caption: string;
  };
  proofPoints: string[];
  jumpHref: string;
  jumpLabel: string;
}

export const CLIENT_GROWTH_PILLARS: GrowthPillar[] = [
  {
    num: "01",
    tag: "THE 2-SECOND SCROLL TAX",
    statValue: "14x",
    statLabel: "Reach & Thumbstop Lift",
    title: "Your Media Buying Isn't Broken — Your First 1.8 Seconds Are.",
    trapTitle: "Why Brands Bleed Here",
    trapDesc:
      "Paying agencies to tweak lookalike audiences while running slow, generic intros that lose 82% of viewers before the 2-second mark.",
    fixTitle: "How I Fix It Under One Roof",
    fixDesc:
      "I script and build hook-first 9:16 reels and code-driven React/Remotion video ads where opening hooks and final 2-second CTAs swap in minutes.",
    previewMedia: {
      type: "images",
      items: [
        "/assets/stills/batch2_reel1_poster.png",
        "/assets/stills/batch2_reel3_poster.png",
        "/assets/stills/v2_beat1_hook.png",
      ],
      caption: "0.0s First-Frame Flashpoint Hooks + Modular 2s End-Cards",
    },
    proofPoints: [
      "14x reach breakout by replacing slow intros with 0.0s daily flashpoint hooks",
      "8-second seamless loop reels engineered to force 2x watches (>100% completion)",
      "Modular end-cards routing to Paid Checkouts, ManyChat DMs, or Lead Magnets",
    ],
    jumpHref: "#reels",
    jumpLabel: "Watch The Video Reels ↓",
  },
  {
    num: "02",
    tag: "THE PLACEMENT BOTTLENECK",
    statValue: "4×3",
    statLabel: "Angle × Aspect Matrix",
    title: "Testing One Ad Format Starves Meta's Algorithm of Cheap Inventory.",
    trapTitle: "Why Brands Bleed Here",
    trapDesc:
      "Launching a single 1:1 square image or one angle and forcing Meta into expensive auctions while creative fatigue sets in within days.",
    fixTitle: "How I Fix It Under One Roof",
    fixDesc:
      "Every angle I reverse-engineer from the Meta Ad Library ships as a complete 4:5 Feed, 1:1 Square, and 9:16 Story suite plus tangible bundle mockups.",
    previewMedia: {
      type: "images",
      items: [
        "/assets/static-ads/1.webp",
        "/assets/static-ads/B1-product-1.webp",
        "/assets/static-ads/15.webp",
      ],
      caption: "Native 4:5, 1:1 & 9:16 Multi-Placement Static Creative Matrix",
    },
    proofPoints: [
      "4 distinct psychological angles tested per sprint (Pain, Mechanism, Pattern, Identity)",
      "High-clarity device & bundle mockups that anchor perceived value at first glance",
      "Built on competitor ad patterns proven active for 5–10+ months in Ad Library",
    ],
    jumpHref: "#static-ads",
    jumpLabel: "Explore 28+ Static Ads ↓",
  },
  {
    num: "03",
    tag: "THE $27 AOV DEATH SPIRAL",
    statValue: "$475",
    statLabel: "Max Full-Funnel Cart",
    title: "You Can't Scale Cold Traffic If Your Funnel Stops at the First Purchase.",
    trapTitle: "Why Brands Bleed Here",
    trapDesc:
      "Sending expensive Meta clicks to a standard product page where a $27 buyer checks out and leaves with a $27 cart—crushing your ROAS.",
    fixTitle: "How I Fix It Under One Roof",
    fixDesc:
      "Backed by 100+ Funnelish and Shopify builds, I engineer pre-sell listicles, dual one-checkbox order bumps (+$17 & +$37), and 1-click upsells ($97 & $297).",
    previewMedia: {
      type: "ladder",
      items: [
        "$27 Front-End Kit",
        "+$17 / +$37 Order Bumps",
        "+$97 1-Click Upsell 1",
        "+$297 Flagship Upsell 2",
      ],
      caption: "17.5x Cart Expansion Architecture ($27 Entry → $475 Max Cart)",
    },
    proofPoints: [
      "100+ high-converting Funnelish & Shopify advertorials, listicles, and checkouts shipped",
      "Dual impulse order bumps that lift initial front-end checkout carts from $27 to $64+",
      "Zero-friction one-click post-purchase upsells that expand maximum cart value to $475",
    ],
    jumpHref: "#funnels",
    jumpLabel: "See The Funnel Ladder ↓",
  },
  {
    num: "04",
    tag: "GUT-FEEL MEDIA BUYING",
    statValue: "3.0x",
    statLabel: "Winner Ad Set ROAS",
    title: "Scaling on Emotion Instead of Strict Kill / Hold / +30% Rules.",
    trapTitle: "Why Brands Bleed Here",
    trapDesc:
      "Letting losing ad sets bleed budget because 'the algorithm needs time', or scaling winners too aggressively alongside broken Pixel/CAPI tracking.",
    fixTitle: "How I Fix It Under One Roof",
    fixDesc:
      "I run ad accounts like a software engineer—strict CPA kill gates, +30% vertical scaling on 3.0x ROAS winners, ManyChat/email recovery, and Python automation.",
    previewMedia: {
      type: "rules",
      items: [
        "SCALE (+30% Budget) → Cleared 2.5x–3.0x ROAS Gate",
        "HOLD (Optimize) → Strong Thumbstop & Checkout Initiation",
        "KILL (Reallocate) → Below CPA / ROAS Gate at Threshold",
      ],
      caption: "Algorithmic Decision Gates + Python Ad Library & Reporting Scripts",
    },
    proofPoints: [
      "Disciplined +30% vertical budget scaling only when ROAS & AOV gates are cleared",
      "Automated ManyChat ('Comment Keyword') DM capture + 3-email cart recovery",
      "Custom Python scripts for Meta CSV reporting & Playwright Ad Library scraping",
    ],
    jumpHref: "#war-room",
    jumpLabel: "Inspect Media Buying Rules ↓",
  },
];

export const FUNNEL_PORTFOLIO_URL = "https://markangelobautista.framer.website";

export interface StaticAdCreative {
  id: string;
  title: string;
  angle: "Angle 1: Lunchtime" | "Angle 2: Co-Regulation" | "Angle 3: Not Random" | "Angle 4: Teen Scripts" | "Product Stack";
  format: "4:5 Feed" | "9:16 Story" | "1:1 Square" | "16:9 Landscape";
  hookText: string;
  subText: string;
  imageSrc: string;
}

export const STATIC_AD_CREATIVES: StaticAdCreative[] = [
  {
    id: "static-1",
    title: "The Lunchbox Standoff (Feed)",
    angle: "Angle 1: Lunchtime",
    format: "4:5 Feed",
    hookText: "The lunch box came home full again.",
    subText: "By 4pm it all lands at once. The Calm Kit has the words.",
    imageSrc: "/assets/static-ads/1.webp",
  },
  {
    id: "static-2",
    title: "The Lunchbox Standoff (Story)",
    angle: "Angle 1: Lunchtime",
    format: "9:16 Story",
    hookText: "The lunch box came home full again.",
    subText: "By 4pm it all lands at once. The Calm Kit has the words.",
    imageSrc: "/assets/static-ads/2.webp",
  },
  {
    id: "static-5",
    title: "Kitchen Counter Variant (Feed)",
    angle: "Angle 1: Lunchtime",
    format: "4:5 Feed",
    hookText: "The lunch box came home full again.",
    subText: "By 4pm it all lands at once. The Calm Kit has the words.",
    imageSrc: "/assets/static-ads/5.webp",
  },
  {
    id: "static-10",
    title: "Parent as the Nervous System (Square)",
    angle: "Angle 2: Co-Regulation",
    format: "1:1 Square",
    hookText: "A child cannot calm themselves mid-storm.",
    subText: "In that moment, the parent becomes the nervous system.",
    imageSrc: "/assets/static-ads/10.webp",
  },
  {
    id: "static-9",
    title: "Parent as the Nervous System (Story)",
    angle: "Angle 2: Co-Regulation",
    format: "9:16 Story",
    hookText: "A child cannot calm themselves mid-storm.",
    subText: "In that moment, the parent becomes the nervous system.",
    imageSrc: "/assets/static-ads/9.webp",
  },
  {
    id: "static-12",
    title: "Warm Armchair Script Variant",
    angle: "Angle 2: Co-Regulation",
    format: "1:1 Square",
    hookText: "Your child cannot calm themselves mid-storm.",
    subText: "In that moment, you are the nervous system. The Calm Kit is the script.",
    imageSrc: "/assets/static-ads/12.webp",
  },
  {
    id: "static-15",
    title: "Meltdowns Are Not Random (Feed)",
    angle: "Angle 3: Not Random",
    format: "4:5 Feed",
    hookText: "The meltdowns are not random.",
    subText: "Random is what a pattern looks like to an exhausted parent.",
    imageSrc: "/assets/static-ads/15.webp",
  },
  {
    id: "static-14",
    title: "Hallway Pattern Variant (Square)",
    angle: "Angle 3: Not Random",
    format: "1:1 Square",
    hookText: "The meltdowns are not random.",
    subText: "Random is what a pattern looks like to an exhausted parent.",
    imageSrc: "/assets/static-ads/14.webp",
  },
  {
    id: "static-17",
    title: "Meltdowns Are Not Random (Story)",
    angle: "Angle 3: Not Random",
    format: "9:16 Story",
    hookText: "The meltdowns are not random.",
    subText: "Random is what a pattern looks like to an exhausted parent.",
    imageSrc: "/assets/static-ads/17.webp",
  },
  {
    id: "static-24",
    title: "Teen Scripts Included (Square)",
    angle: "Angle 4: Teen Scripts",
    format: "1:1 Square",
    hookText: "Meltdowns do not stop at twelve.",
    subText: "Teen scripts included. Even the text-message one.",
    imageSrc: "/assets/static-ads/24.webp",
  },
  {
    id: "static-21",
    title: "Teen Scripts Included (Story)",
    angle: "Angle 4: Teen Scripts",
    format: "9:16 Story",
    hookText: "Meltdowns do not stop at twelve.",
    subText: "Teen scripts included. Even the text-message one.",
    imageSrc: "/assets/static-ads/21.webp",
  },
  {
    id: "static-22",
    title: "Bedroom Door Teen Variant (Feed)",
    angle: "Angle 4: Teen Scripts",
    format: "4:5 Feed",
    hookText: "Meltdowns do not stop at twelve.",
    subText: "Teen scripts included. Even the text-message one.",
    imageSrc: "/assets/static-ads/22.webp",
  },
  {
    id: "static-b1-1",
    title: "The Calm Kit Device Mockup Stack",
    angle: "Product Stack",
    format: "4:5 Feed",
    hookText: "27 tools. $27.",
    subText: "Fridge Poster, Trigger Audit, Grounding Techniques, and Wallet Cards across phone, tablet, and laptop.",
    imageSrc: "/assets/static-ads/B1-product-1.webp",
  },
  {
    id: "static-b1-2",
    title: "Everything Inside The Calm Kit (27 Tools)",
    angle: "Product Stack",
    format: "4:5 Feed",
    hookText: "Everything Inside The Calm Kit — 27 tools. $27. Print tonight.",
    subText: "Full 1-to-27 tool checklist + Free Bonus One-Page Master Sheet.",
    imageSrc: "/assets/static-ads/B1-product-2.webp",
  },
];

export const DEFAULT_REEL_ENDINGS = {
  paid: "The Calm Kit. One page of exactly what to say. About a dollar a tool.",
  organicDirect: "Comment CALM and the Calm Kit link is in your DMs. About a dollar a tool.",
  organicFree: "Comment CALM for the free page: what to say mid meltdown, and what never to say.",
};

export const REEL_SHOWCASE: ReelItem[] = [
  {
    id: "reel-batch2-lunchtime",
    title: "Reel 1: The Lunchbox Standoff (Winner Ad)",
    brand: "Paid Acquisition Winner · 3.0x ROAS",
    category: "Paid Meta Reel",
    videoSrc: "/assets/videos/batch2_reel1_lunchtime.mp4",
    posterSrc: "/assets/stills/batch2_reel1_poster.png",
    duration: "0:15",
    aspectRatio: "9:16",
    metrics: [
      { label: "Ad Set ROAS", value: "3.0x", subtext: "Top-performing paid Meta angle" },
      { label: "Scale Action", value: "+30% Rule", subtext: "Vertical budget scaling triggered" },
      { label: "Format", value: "Declarative B-Roll", subtext: "First-second hook + 2s CTA hold" },
    ],
    hookLine: "The lunchbox standoff. Every single day. There is no magic phrase, but there are words that help and words that make it worse.",
    strategyNote:
      "Our highest-performing paid Meta reel. Pairs a warm morning kitchen shot of an untouched lunchbox with a 4-beat declarative script.",
    endingVariants: DEFAULT_REEL_ENDINGS,
  },
  {
    id: "reel-batch2-school-incident",
    title: "Reel 2: The School Incident (Chain of Triggers)",
    brand: "DCT Hook Testing · Broad US 25–55",
    category: "Paid Meta Reel",
    videoSrc: "/assets/videos/batch2_reel2_school_incident.mp4",
    posterSrc: "/assets/stills/batch2_reel2_poster.png",
    duration: "0:15",
    aspectRatio: "9:16",
    metrics: [
      { label: "Campaign", value: "Broad US 25-55", subtext: "Flexible dynamic creative test" },
      { label: "Hook Beat", value: "0.0s – 2.0s", subtext: "'The school called again.'" },
      { label: "Core Angle", value: "Trigger Chain", subtext: "Meltdowns are the end of a chain" },
    ],
    hookLine: "The school called again. The morning rush. The fire drill. The seating change. The skipped snack. Meltdowns are not random.",
    strategyNote:
      "Reframes school incidents from 'random bad behavior' to an accumulated chain of sensory triggers that parents can map and lower.",
    endingVariants: {
      ...DEFAULT_REEL_ENDINGS,
      paid: "The Calm Kit maps the moments and gives you the words. About a dollar a tool.",
    },
  },
  {
    id: "reel-batch2-fine-at-school",
    title: "Reel 3: Fine at School (After-School Collapse)",
    brand: "DCT Hook Testing · Broad US 25–55",
    category: "Paid Meta Reel",
    videoSrc: "/assets/videos/batch2_reel3_fine_at_school.mp4",
    posterSrc: "/assets/stills/batch2_reel3_poster.png",
    duration: "0:15",
    aspectRatio: "9:16",
    metrics: [
      { label: "Reach Lift", value: "14x Lift", subtext: "Immediate top-of-funnel breakout" },
      { label: "Hook Beat", value: "'Fine at school'", subtext: "Addresses restraint collapse" },
      { label: "Visual Scene", value: "Front Door 4PM", subtext: "Small shoes in golden hour light" },
    ],
    hookLine: "But she is fine at school. Then she walks through the door and falls apart over nothing. She held it together until she was safe.",
    strategyNote:
      "Speaks directly to after-school restraint collapse—one of the highest-converting emotional hooks in the neurodivergent parenting space.",
    endingVariants: {
      ...DEFAULT_REEL_ENDINGS,
      paid: "The Calm Kit. Evening tools for the after-school collapse. About a dollar a tool.",
    },
  },
  {
    id: "reel-batch2-assessment",
    title: "Reel 4: Private Assessment (No Diagnosis Needed)",
    brand: "DCT Hook Testing · Broad US 25–55",
    category: "Paid Meta Reel",
    videoSrc: "/assets/videos/batch2_reel4_private_assessment.mp4",
    posterSrc: "/assets/stills/batch2_reel4_poster.png",
    duration: "0:15",
    aspectRatio: "9:16",
    metrics: [
      { label: "Format", value: "Statement Reel", subtext: "Minimalist typography-first layout" },
      { label: "Objection Handled", value: "No Diagnosis", subtext: "Waiting lists take years" },
      { label: "Offer Promise", value: "Use Tonight", subtext: "27 practical tools in hand" },
    ],
    hookLine: "Private assessment is not an option for us. The waiting list is measured in years. And nobody gives you anything to do while you wait.",
    strategyNote:
      "Overcomes the biggest buyer objection ('we don't have an official diagnosis yet') by positioning The Calm Kit as immediate tonight-ready help.",
    endingVariants: {
      ...DEFAULT_REEL_ENDINGS,
      paid: "The Calm Kit. 27 tools you can use tonight. About a dollar a tool.",
    },
  },
  {
    id: "reel-remotion-27",
    title: "27 Things to Say Mid-Meltdown (Remotion Build)",
    brand: "Programmatic React + Remotion Engine",
    category: "Remotion Video",
    videoSrc: "/assets/videos/reel_01_27_things_to_say.mp4",
    posterSrc: "/assets/stills/v2_beat1_hook.png",
    duration: "0:20",
    aspectRatio: "9:16",
    metrics: [
      { label: "Built With", value: "Remotion + React", subtext: "Code-driven video animation" },
      { label: "Hook Timing", value: "0.0s – 1.8s", subtext: "Instant first-frame headline" },
      { label: "Offer Anchor", value: "$1 / Phrase", subtext: "27 phrases for $27" },
    ],
    hookLine: "Bag on the floor. The wrong cup. The shoes. Every sentence you reach for makes it worse.",
    strategyNote:
      "Built in React and Remotion with smooth spring animations and clear typography designed to stop the scroll in the first second.",
    endingVariants: {
      ...DEFAULT_REEL_ENDINGS,
      paid: "The Mid-Storm Kit. 27 things to say, grouped by moment. $27 — a dollar a phrase.",
    },
  },
  {
    id: "reel-style-ref",
    title: "Brand Storybook Reel (Hook → Lesson → CTA)",
    brand: "Visual System & Typography Alignment",
    category: "Remotion Video",
    videoSrc: "/assets/videos/example_reel_storybook.mp4",
    posterSrc: "/assets/brand/mockups/reel_frames_hook_lesson_cta.jpg",
    duration: "0:23",
    aspectRatio: "9:16",
    metrics: [
      { label: "Fonts", value: "Fraunces + Jakarta", subtext: "Consistent from ad to checkout" },
      { label: "Watch Time", value: "6.8s Avg", subtext: "3.5x longer hold vs static posts" },
      { label: "Layout", value: "Say / Not / Do", subtext: "Clear 3-step visual cards" },
    ],
    hookLine: "Say This. Not This. Do This. One page per moment when you need the right words fast.",
    strategyNote:
      "Storybook format matching the exact colors and fonts of the checkout pages and PDF products.",
    endingVariants: DEFAULT_REEL_ENDINGS,
  },
  {
    id: "reel-ambient-loop",
    title: "8-Second Seamless B-Roll Loop",
    brand: "High-Retention Organic Loop Format",
    category: "Organic Loop",
    videoSrc: "/assets/videos/bg_looped.mp4",
    posterSrc: "/assets/stills/v2_beat5_neversay.png",
    duration: "0:20",
    aspectRatio: "9:16",
    metrics: [
      { label: "Watch Goal", value: ">100%", subtext: "Takes 2 loops to finish reading" },
      { label: "Loop Style", value: "Seamless Cut", subtext: "Last frame flows into first frame" },
      { label: "CTA Style", value: "Static Footer", subtext: "Comment CALM for the free script" },
    ],
    hookLine: "The calmer you stay in the middle of the meltdown, the faster their body finds its way back.",
    strategyNote:
      "Short seamless looping B-roll video paired with a longer headline so viewers watch twice to finish reading, boosting completion rate past 100%.",
    endingVariants: {
      paid: "Footer: The Calm Kit — 27 printable scripts for the hardest moments.",
      organicDirect: "Footer: Comment CALM and the Calm Kit link is in your DMs.",
      organicFree: "Footer: Comment CALM for the free script.",
    },
  },
];

export const STORY_BEATS: StoryBeat[] = [
  {
    step: "BEAT 01",
    timecode: "0.0s – 2.5s",
    title: "The First-Second Hook",
    caption: "27 things to say in the middle of a meltdown. And the 9 things never to say.",
    rationale: "Shows the main promise on frame one so parents immediately know what the video is about.",
    imageSrc: "/assets/stills/v2_beat1_hook.png",
  },
  {
    step: "BEAT 02",
    timecode: "2.5s – 6.0s",
    title: "Phase 1: The Build-Up",
    caption: "Six phrases that lower the demand before it tips — because 'calm down' is the phrase that tips it.",
    rationale: "Explains why common phrases like 'calm down' backfire and introduces practical alternatives.",
    imageSrc: "/assets/stills/v2_beat2_rumble.png",
  },
  {
    step: "BEAT 03",
    timecode: "6.0s – 10.0s",
    title: "Phase 2: Peak Meltdown",
    caption: "Five phrases for when reasoning is gone, including a two-word version for a child who has no words left.",
    rationale: "Shows that the toolkit covers every age group, from toddlers to teens.",
    imageSrc: "/assets/stills/v2_beat3_storm.png",
  },
  {
    step: "BEAT 04",
    timecode: "10.0s – 13.5s",
    title: "Phase 3: The Comedown",
    caption: "Five phrases that reconnect before any review — because the review is what restarts the storm.",
    rationale: "Helps parents avoid restarting the meltdown right after their child calms down.",
    imageSrc: "/assets/stills/v2_beat4_landing.png",
  },
  {
    step: "BEAT 05",
    timecode: "13.5s – 16.5s",
    title: "The 9 'Never-Say' Lines",
    caption: "Crossed-out default phrases ('Use your words', 'Look at me', 'You're fine') and why each backfires.",
    rationale: "Side-by-side 'Say This / Not This' visuals drive high saves and shares.",
    imageSrc: "/assets/stills/v2_beat5_neversay.png",
  },
  {
    step: "BEAT 06",
    timecode: "16.5s – 20.0s",
    title: "Simple Offer & 2-Second CTA Hold",
    caption: "The Mid-Storm Kit · $27. A dollar a phrase, plus 12 printable bonuses on your fridge tonight.",
    rationale: "Makes the $27 price feel simple ('a dollar a phrase') and holds the final screen for 2 seconds so viewers can click.",
    imageSrc: "/assets/stills/v2_beat6a_cta.png",
  },
];

export const FUNNEL_STEPS: FunnelStep[] = [
  {
    id: "step-1-midstorm",
    code: "01",
    shortTitle: "Front-End Offer",
    shortMetric: "$27 Kit",
    shortSub: "The Mid-Storm Kit",
    stage: "01 · FRONT-END OFFER ($27)",
    name: "The Mid-Storm Kit (27 Scripts + 12 Printable Tools)",
    price: "$27",
    conversionRole: "Cold Traffic Front-End Offer",
    description:
      "Impulse-priced $27 front-end toolkit ('a dollar a phrase') built for cold Meta Reels traffic, bundling 27 meltdown scripts with 12 printable fridge and wallet tools.",
    mockupImage: "/assets/brand/mockups/calm_kit_updated_tablet.jpg",
    keyElements: [
      "27 word-for-word scripts grouped by Rumbling, Peak, and Recovery",
      "Includes 12 printable bonus tools right on the checkout page",
      "Anchored at $1 per phrase for high cold-traffic conversion",
    ],
  },
  {
    id: "step-2-bumps",
    code: "02",
    shortTitle: "Order Bumps",
    shortMetric: "+$17 & +$37",
    shortSub: "Phrasebook & Library",
    stage: "02 · CHECKOUT ORDER BUMPS",
    name: "Dual One-Checkbox Order Bumps (+$17 & +$37)",
    price: "+$17 / +$37",
    conversionRole: "Immediate Checkout AOV Lift",
    description:
      "Two one-checkbox order bumps right above the checkout button that lift average order value from $27 to $64+ without adding friction.",
    mockupImage: "/assets/static-ads/B1-product-1.webp",
    keyElements: [
      "Order Bump 1 ($17): The Explain My Child Library (scripts for teachers & grandparents)",
      "Order Bump 2 ($37): The Low-Demand Phrasebook (150+ demand-lowering rewrites)",
      "Pushed initial front-end cart value to $64+ on winning ad sets",
    ],
  },
  {
    id: "step-3-upsell1",
    code: "03",
    shortTitle: "Upsell 1",
    shortMetric: "+$97 Upsell",
    shortSub: "Whole House Pack",
    stage: "03 · ONE-CLICK UPSELL 1",
    name: "The Whole House Pack (12 Visual Routine Charts)",
    price: "$97",
    conversionRole: "Post-Purchase One-Click Upsell 1",
    description:
      "Shown immediately after checkout. Helps parents take the words from the kit and put visual routine charts on their walls for mornings, exits, and bedtime.",
    mockupImage: "/assets/brand/mockups/whole_house_pack.jpg",
    keyElements: [
      "Clear next step: 'The Calm Kit is in your hand. This puts it on your walls.'",
      "12 printable routine charts, checklists, and Calm Corner signs",
      "One-click purchase without re-entering card details",
    ],
  },
  {
    id: "step-4-upsell2",
    code: "04",
    shortTitle: "Upsell 2",
    shortMetric: "+$297 System",
    shortSub: "Fewer Storms System",
    stage: "04 · ONE-CLICK UPSELL 2 (FLAGSHIP)",
    name: "Fewer Storms (6-Module Prevention System)",
    price: "$297",
    conversionRole: "High-Ticket Back-End Offer",
    description:
      "Our flagship 6-module system that helps parents track triggers over 14 days, manage daily sensory load, and prevent meltdowns before they start.",
    mockupImage: "/assets/brand/mockups/fewer_storms_flagship.jpg",
    keyElements: [
      "Moves buyers from handling meltdowns to preventing them",
      "Includes the 14-Day Trigger Log, Load Budget, and Transition Method",
      "Takes maximum full-funnel cart value from $27 up to $475",
    ],
  },
  {
    id: "step-5-deliverable",
    code: "05",
    shortTitle: "Free Lead Magnet",
    shortMetric: "'CALM' DM",
    shortSub: "Fridge Poster Script",
    stage: "05 · MANYCHAT 'COMMENT CALM' LEAD CAPTURE",
    name: "The Fridge Poster (Free Script Lead Magnet)",
    price: "FREE DM",
    conversionRole: "Organic Reel Comment-to-DM Funnel",
    description:
      "One-page printable Fridge Poster delivered automatically via ManyChat when viewers comment 'CALM' on organic reels, feeding our Kit email sequence.",
    mockupImage: "/assets/brand/mockups/fridge_poster_preview.jpg",
    keyElements: [
      "Print-ready 8.5x11 page with 'Say This, Not This, Do This' sections",
      "Delivered automatically via ManyChat DM when users comment CALM",
      "Tags subscribers in Kit for our automated email follow-up sequence",
    ],
  },
];

export const CAMPAIGN_RECORDS: CampaignRecord[] = [
  {
    id: "camp-lunchtime",
    name: "Winner Ad Set — Single-Angle Reel (Lunchbox Standoff)",
    platform: "Meta Ads (FB + IG Reels)",
    format: "9:16 Hook-First Video",
    targeting: "Broad US 25–55",
    benchmark: "3.0x ROAS Target Hit",
    status: "SCALING (+30%)",
    ruleApplied: "Cleared 2.5x ROAS scaling gate with strong order-bump take rate → Scaled daily budget vertically by +30%.",
  },
  {
    id: "camp-flexible",
    name: "Creative Testing Ad Set — Multi-Hook Dynamic Reels",
    platform: "Meta Ads (Dynamic Creative)",
    format: "4x 9:16 Video Variations",
    targeting: "Broad US 25–55",
    benchmark: "Strong thumbstop & checkout rate",
    status: "HOLD / OPTIMIZE",
    ruleApplied: "Healthy link CTR and checkout initiation → Held budget steady while isolating top-performing hook variations.",
  },
  {
    id: "camp-batch1-statics",
    name: "Multi-Placement Static Control Suite (4 Angles)",
    platform: "Meta Ads (Feed + Stories)",
    format: "4:5, 1:1 & 9:16 Statics",
    targeting: "Broad US 25–55",
    benchmark: "Below CPA / ROAS gate",
    status: "CUT / REALLOCATE",
    ruleApplied: "Paused underperforming static placements at spend threshold and reallocated budget into winning 9:16 video reels.",
  },
];

export const LOOP_SCRIPTS: LoopScript[] = [
  {
    id: "L1",
    code: "LOOP L1",
    title: "Your Calm Is The Tool",
    scene: "Morning kitchen at golden hour with a kettle gently steaming.",
    headlineOnScreen: "The calmer you stay in the middle of the meltdown, the faster their body finds its way back. Your calm is not doing nothing. Your calm is the tool.",
    captionSummary: "A regulated adult is the safest place a child can land.",
    targetMetric: ">100% Watch Completion (8s Loop)",
  },
  {
    id: "L2",
    code: "LOOP L2",
    title: "The Door (4PM Collapse)",
    scene: "Quiet hallway in late afternoon light with small shoes by the mat.",
    headlineOnScreen: "She holds it together all day at school. The second she walks through that door it all comes out. That is not bad behaviour. That is trust.",
    captionSummary: "Holding it together all day has a cost, and home is where it is safe to let go.",
    targetMetric: "High Saves & Shares + 'CALM' Comments",
  },
  {
    id: "L3",
    code: "LOOP L3",
    title: "Not Random (The Load Chain)",
    scene: "Raindrops running down a window pane at dusk with warm lamp glow.",
    headlineOnScreen: "The meltdowns are not random. Noise since breakfast. Masking since nine. Hunger. One more question. The storm was building for hours before it broke.",
    captionSummary: "When you can see the load building, you can lower it before it breaks.",
    targetMetric: "Leads into Fewer Storms ($297 System)",
  },
  {
    id: "L4",
    code: "LOOP L4",
    title: "We Stopped Saying Calm Down",
    scene: "Calm kitchen corner at dusk with soft lamp glow and a moving curtain.",
    headlineOnScreen: "We stopped saying calm down. It has never once worked. Fewer words. A lower voice. Stay close. Let it pass.",
    captionSummary: "The phrases that feel natural are often the ones that make it worse.",
    targetMetric: "Matches the Free Fridge Poster Offer",
  },
  {
    id: "L5",
    code: "LOOP L5",
    title: "The Nervous System Manual",
    scene: "Cozy evening hallway with a warm lamp and bedroom door slightly open.",
    headlineOnScreen: "You are not walking on eggshells because you are doing it wrong. You are reading a nervous system nobody handed you the manual for.",
    captionSummary: "You are not failing—you just needed a clear manual for the hard moments.",
    targetMetric: "High Comment Engagement",
  },
];

export const SWIPE_CARDS: SwipeCard[] = [
  {
    id: "swipe-big-life",
    brand: "Big Life Journal",
    category: "calm",
    angleName: "Print-At-Home Visual Guides",
    longevity: "8+ Months Active",
    pricePoint: "$24 – $39",
    hookVerbatim: "Help your child manage big feelings with visual printables you can put on the fridge tonight.",
    ctaCopy: "Shop Printable Kits",
    screenshotSrc: "/assets/swipe/brand_Big_Life_Journal.png",
    takeaway: "Showing digital PDFs as physical pages on a fridge converts cold traffic much better than calling them 'ebooks'.",
  },
  {
    id: "swipe-ot-toolbox",
    brand: "The OT Toolbox",
    category: "autism",
    angleName: "Practical Sensory Strategies",
    longevity: "10+ Months Active",
    pricePoint: "$19 – $47",
    hookVerbatim: "Sensory coping strategies that actually work when a child is overstimulated and past the point of reasoning.",
    ctaCopy: "Get the Toolkit",
    screenshotSrc: "/assets/swipe/brand_The_OT_Toolbox.png",
    takeaway: "Parents want simple, in-the-moment tools they can use tonight rather than long theory courses.",
  },
  {
    id: "swipe-big-little",
    brand: "Big Little Feelings",
    category: "meltdown",
    angleName: "Say This / Not This Scripts",
    longevity: "9+ Months Active",
    pricePoint: "$37 – $88",
    hookVerbatim: "When your child is melting down over the wrong color bowl, here is the exact script to de-escalate.",
    ctaCopy: "Learn the Method",
    screenshotSrc: "/assets/swipe/brand_Big_Little_Feelings.png",
    takeaway: "Side-by-side 'Instead of X, Say Y' visuals consistently beat generic stock photos.",
  },
  {
    id: "swipe-harkla",
    brand: "Harkla",
    category: "autism",
    angleName: "After-School Meltdown Routine",
    longevity: "7+ Months Active",
    pricePoint: "$29 – $79",
    hookVerbatim: "Why after-school meltdowns happen and how to build a sensory decompression routine at 4 PM.",
    ctaCopy: "Explore Sensory Tools",
    screenshotSrc: "/assets/swipe/brand_Harkla.png",
    takeaway: "Calling out specific daily flashpoints (like the 4 PM after-school crash) grabs immediate attention.",
  },
  {
    id: "swipe-mightier",
    brand: "Mightier",
    category: "meltdown",
    angleName: "Research-Backed Proof",
    longevity: "10+ Months Active",
    pricePoint: "$40/mo",
    hookVerbatim: "Clinically validated to reduce meltdown intensity and help kids build emotional regulation through practice.",
    ctaCopy: "Start Trial",
    screenshotSrc: "/assets/swipe/brand_Mightier.png",
    takeaway: "Adding real research citations builds instant trust with skeptical buyers on Facebook and Instagram.",
  },
  {
    id: "swipe-goally",
    brand: "Goally",
    category: "visual",
    angleName: "Visual Morning & Bedtime Charts",
    longevity: "8+ Months Active",
    pricePoint: "$97 – $149",
    hookVerbatim: "Stop nagging 15 times every morning. Let a visual schedule carry the routine so you don't have to be the bad guy.",
    ctaCopy: "See How It Works",
    screenshotSrc: "/assets/swipe/brand_Goally.png",
    takeaway: "Validated our $97 Whole House Pack upsell: parents gladly pay to stop repeating morning instructions.",
  },
  {
    id: "swipe-gen-mindful",
    brand: "Generation Mindful",
    category: "calm",
    angleName: "The Calm Corner Setup",
    longevity: "6+ Months Active",
    pricePoint: "$35 – $65",
    hookVerbatim: "Replace punitive time-outs with a Calm Corner your child actually chooses to use before the storm peaks.",
    ctaCopy: "Get the Calm Corner Kit",
    screenshotSrc: "/assets/swipe/brand_Generation_Mindful.png",
    takeaway: "Inspired Bonus #7 (The Calm Corner Blueprint) inside our Mid-Storm Kit checkout bundle.",
  },
  {
    id: "swipe-coping-kids",
    brand: "Coping Skills for Kids",
    category: "visual",
    angleName: "Quick-Reference Cue Cards",
    longevity: "5+ Months Active",
    pricePoint: "$18 – $34",
    hookVerbatim: "Printable cue cards and checklists designed for moments when kids are too overwhelmed to talk.",
    ctaCopy: "Download Now",
    screenshotSrc: "/assets/swipe/brand_Coping_Skills_for_Kids.png",
    takeaway: "Reinforces our 'one page per moment, keep it on the fridge or in the car' offer positioning.",
  },
];

export const CREATOR_ENGINE_DATA = {
  brandsCovered: [
    {
      name: "Zyla Kids",
      niche: "Sensory Parenting, Pediatric OT & Neurodiversity",
      partnerSheetImg: "/assets/partners/Zyla_Partner_Sheet.png",
      highlights: [
        "Designed the custom Zyla Kids Partner Sheet to present the product bundle and affiliate program clearly to parenting and OT creators.",
        "Built organized creator outreach lists with verified contact details and personalized email pitch templates.",
        "Set up product review access and affiliate onboarding workflows for creator partners.",
      ],
    },
    {
      name: "The Candid",
      niche: "Personal Finance, Money Psychology & Intentional Living",
      partnerSheetImg: "/assets/partners/The_Candid_Partner_Sheet.png",
      highlights: [
        "Designed the complete brand identity kit (banners, profile icons, and Partner Pitch Sheet).",
        "Built Python scripts to verify creator handles, remove duplicates, and organize outreach trackers.",
        "Set up UTM bio link tracking across YouTube Shorts, Instagram, and Facebook.",
      ],
    },
  ],
};

export const REMOTION_CODE_SNIPPET = `// ZylaRow01Storybook.tsx — Programmatic Video Ad Engine (Remotion + React)
export const ZylaStorybookReel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Frame-0 Hook Entry with smooth spring animation
  const hookSpring = spring({ frame, fps, config: { damping: 14, stiffness: 120 } });
  const underlineProgress = interpolate(frame, [18, 42], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.cream }}>
      <Sequence from={0} durationInFrames={75}>
        <BeatOneHook progress={hookSpring} underline={underlineProgress} />
      </Sequence>
      <Sequence from={75} durationInFrames={105}>
        <BeatTwoRumble phrases={RUMBLE_PHRASES} />
      </Sequence>
      {/* Swappable 2-second CTA End Card (Paid / Organic Direct / Free) */}
      <Sequence from={495} durationInFrames={105}>
        <ModularEndCard variant="PAID_27_DOLLAR_A_PHRASE" />
      </Sequence>
    </AbsoluteFill>
  );
};`;
