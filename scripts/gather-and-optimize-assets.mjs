import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const SRC_ROOT = '/Users/markangelo/Desktop/Media Buying';
const DEST_ROOT = '/Users/markangelo/Desktop/media_buying_portfolio/public/assets';
const FFMPEG_BIN = path.join(SRC_ROOT, 'video-engine/node_modules/@remotion/compositor-darwin-arm64/ffmpeg');

const dirs = [
  'fonts',
  'videos',
  'stills',
  'static-ads',
  'brand/illustrations',
  'brand/backgrounds',
  'brand/mockups',
  'swipe',
  'partners',
  'prototypes',
];

for (const d of dirs) {
  fs.mkdirSync(path.join(DEST_ROOT, d), { recursive: true });
}

function copyIfExists(srcRel, destRel) {
  const src = path.join(SRC_ROOT, srcRel);
  const dest = path.join(DEST_ROOT, destRel);
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied: ${destRel}`);
  } else {
    console.warn(`⚠ Missing: ${srcRel}`);
  }
}

console.log('--- 1. Copying Custom Brand Fonts ---');
const fonts = [
  'Fraunces.ttf',
  'Fraunces-Italic.ttf',
  'Jakarta-400.ttf',
  'Jakarta-500.ttf',
  'Jakarta-700.ttf',
  'DMMono-Medium.ttf',
  'Caveat.ttf',
];
for (const f of fonts) {
  copyIfExists(`Zyla Brand Kit v1/fonts/${f}`, `fonts/${f}`);
}

console.log('--- 2. Copying Active Prototype & Portfolio Mockup Assets ---');
const illustrations = [
  'mascot_sleepy_cloud.png',
  'icon_say_this.png',
  'icon_not_this.png',
  'icon_do_this.png',
];
for (const ill of illustrations) {
  copyIfExists(`Zyla Brand Kit v1/illustrations/${ill}`, `brand/illustrations/${ill}`);
}

copyIfExists('Zyla Brand Kit v1/backgrounds/letter_page.jpg', 'brand/backgrounds/letter_page.jpg');

// Product mockups & previews
copyIfExists('calm_kit_updated_tablet.jpg', 'brand/mockups/calm_kit_updated_tablet.jpg');
copyIfExists('fewer_storms_hero_mockup.jpg', 'brand/mockups/fewer_storms_hero_mockup.jpg');
copyIfExists('generated images/upsells/THE WHOLE HOUSE PACK 4.jpg', 'brand/mockups/whole_house_pack.jpg');
copyIfExists('generated images/upsells/THE PREVENTION FLAGSHIP 1.jpg', 'brand/mockups/fewer_storms_flagship.jpg');
copyIfExists('p1_preview.png', 'brand/mockups/p1_preview.png');
copyIfExists('Zyla Brand Kit v1/reel-style-reference/reel_frames_hook_lesson_cta.jpg', 'brand/mockups/reel_frames_hook_lesson_cta.jpg');

// Creator Partner Sheets
copyIfExists('Creator_Partnership_Engine/Zyla_Partner_Sheet.png', 'partners/Zyla_Partner_Sheet.png');
copyIfExists('Creator_Partnership_Engine/The_Candid_Partner_Sheet.png', 'partners/The_Candid_Partner_Sheet.png');

console.log('--- 3. Copying Storyboard Stills ---');
const stills = [
  'v2_beat1_hook.png',
  'v2_beat2_rumble.png',
  'v2_beat3_storm.png',
  'v2_beat4_landing.png',
  'v2_beat5_neversay.png',
  'v2_beat6a_cta.png',
];
for (const s of stills) {
  copyIfExists(`reel_test_output/${s}`, `stills/${s}`);
}

console.log('--- 4. Copying Competitor Ad Swipe Screenshots ---');
const usedSwipes = [
  'brand_Big_Life_Journal.png',
  'brand_The_OT_Toolbox.png',
  'brand_Big_Little_Feelings.png',
  'brand_Harkla.png',
  'brand_Mightier.png',
  'brand_Goally.png',
  'brand_Generation_Mindful.png',
  'brand_Coping_Skills_for_Kids.png',
];
for (const file of usedSwipes) {
  copyIfExists(`meta_ad_swipe_file/screenshots/${file}`, `swipe/${file}`);
}

console.log('--- 5. Optimizing & Copying Video Reels via macOS avconvert ---');
const videos = [
  { src: '/Users/markangelo/Downloads/0926.mp4', dest: 'videos/batch2_reel1_lunchtime.mp4', abs: true },
  { src: '/Users/markangelo/Downloads/0926-copy.mp4', dest: 'videos/batch2_reel2_school_incident.mp4', abs: true },
  { src: '/Users/markangelo/Downloads/0926-copy-copy.mp4', dest: 'videos/batch2_reel3_fine_at_school.mp4', abs: true },
  { src: '/Users/markangelo/Downloads/0926-copy-copy-copy.mp4', dest: 'videos/batch2_reel4_private_assessment.mp4', abs: true },
  { src: 'Zyla Brand Kit v1/reel-style-reference/example_reel_storybook.mp4', dest: 'videos/example_reel_storybook.mp4' },
  { src: 'reel_test_output/bg_looped.mp4', dest: 'videos/bg_looped.mp4' },
  { src: 'video-engine/out/reel_01_27_things_to_say.mp4', dest: 'videos/reel_01_27_things_to_say.mp4' },
];

for (const v of videos) {
  const inputPath = v.abs ? v.src : path.join(SRC_ROOT, v.src);
  const outputPath = path.join(DEST_ROOT, v.dest);
  if (fs.existsSync(inputPath)) {
    try {
      console.log(`Compressing ${v.dest} via macOS avconvert...`);
      execSync(
        `/usr/bin/avconvert --source "${inputPath}" --output "${outputPath}" --preset Preset960x540 --replace`,
        { stdio: 'ignore' }
      );
      const origSize = (fs.statSync(inputPath).size / 1024 / 1024).toFixed(1);
      const newSize = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(1);
      console.log(`✓ Optimized ${v.dest}: ${origSize} MB -> ${newSize} MB`);
    } catch (e) {
      console.warn(`Fallback copy for ${v.dest}:`, e.message);
      fs.copyFileSync(inputPath, outputPath);
    }
  }
}

console.log('--- 5B. Copying Batch 1 Static Ad Creatives (WebP) & Video Posters ---');
const headingDir = '/Users/markangelo/Downloads/Heading';
if (fs.existsSync(headingDir)) {
  for (const file of fs.readdirSync(headingDir)) {
    if (file.endsWith('.webp') || file.endsWith('.png') || file.endsWith('.jpg')) {
      const safeName = file.replace(/\s+/g, '_').replace(/[()]/g, '');
      fs.copyFileSync(
        path.join(headingDir, file),
        path.join(DEST_ROOT, `static-ads/${safeName}`)
      );
      console.log(`✓ Copied static ad: static-ads/${safeName}`);
    }
  }
}
// Copy extracted thumbnails for the 4 Batch 2 reels if available in /tmp
const thumbMap = [
  { tmp: '/tmp/0926.mp4.png', dest: 'stills/batch2_reel1_poster.png' },
  { tmp: '/tmp/0926-copy.mp4.png', dest: 'stills/batch2_reel2_poster.png' },
  { tmp: '/tmp/0926-copy-copy.mp4.png', dest: 'stills/batch2_reel3_poster.png' },
  { tmp: '/tmp/0926-copy-copy-copy.mp4.png', dest: 'stills/batch2_reel4_poster.png' },
];
for (const tm of thumbMap) {
  if (fs.existsSync(tm.tmp)) {
    fs.copyFileSync(tm.tmp, path.join(DEST_ROOT, tm.dest));
    console.log(`✓ Copied video poster: ${tm.dest}`);
  }
}

console.log('--- 6. Sanitizing & Copying Standalone HTML Funnel Prototypes ---');
// 1. Fewer Storms Storybook Checkout
copyIfExists('fewer_storms_checkout_blocks.html', 'prototypes/fewer_storms_checkout.html');

// 3. Mid-Storm Kit Checkout
{
  let html = fs.readFileSync(path.join(SRC_ROOT, 'midstorm_kit_checkout.html'), 'utf8');
  html = html.replace('src="/assets/midstorm-hero.png"', 'src="/assets/brand/mockups/calm_kit_updated_tablet.jpg"');
  fs.writeFileSync(path.join(DEST_ROOT, 'prototypes/midstorm_kit_checkout.html'), html);
}

// 4. Upsell 1: Whole House Pack
{
  let html = fs.readFileSync(path.join(SRC_ROOT, 'upsell_1_prototype.html'), 'utf8');
  html = html.replace('src="generated images/upsells/THE WHOLE HOUSE PACK 4.jpg"', 'src="/assets/brand/mockups/whole_house_pack.jpg"');
  fs.writeFileSync(path.join(DEST_ROOT, 'prototypes/upsell_1_whole_house.html'), html);
}

// 5. Upsell 2: Fewer Storms Flagship
{
  let html = fs.readFileSync(path.join(SRC_ROOT, 'upsell_2_prototype.html'), 'utf8');
  html = html.replace('src="generated images/upsells/THE PREVENTION FLAGSHIP 1.jpg"', 'src="/assets/brand/mockups/fewer_storms_flagship.jpg"');
  fs.writeFileSync(path.join(DEST_ROOT, 'prototypes/upsell_2_fewer_storms.html'), html);
}

// 6. Fridge Poster Printable HTML
{
  let html = fs.readFileSync(path.join(SRC_ROOT, 'Zyla_Mid_Storm_Kit_source/fridge_poster.html'), 'utf8');
  html = html
    .replace(/url\(assets\//g, 'url(/assets/fonts/')
    .replace('src="assets/bg_letter.jpg"', 'src="/assets/brand/backgrounds/letter_page.jpg"')
    .replace('src="assets/icon_say.png"', 'src="/assets/brand/illustrations/icon_say_this.png"')
    .replace('src="assets/icon_not.png"', 'src="/assets/brand/illustrations/icon_not_this.png"')
    .replace('src="assets/icon_do.png"', 'src="/assets/brand/illustrations/icon_do_this.png"')
    .replace('src="assets/cloud.png"', 'src="/assets/brand/illustrations/mascot_sleepy_cloud.png"');
  fs.writeFileSync(path.join(DEST_ROOT, 'prototypes/fridge_poster.html'), html);
}

console.log('=== Asset Gathering & Optimization Complete! ===');
