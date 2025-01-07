import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { buttonHover } from "@/lib/animations";

const twitterBannerSVG = `<svg width="1500" height="500" viewBox="0 0 1500 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad)"/>
  <path d="M0 250 L1500 250" stroke="rgba(147, 51, 234, 0.3)" stroke-width="1"/>
  <g transform="translate(750,250)" filter="url(#glow)">
    <text x="-200" y="0" fill="#9333ea" font-family="monospace" font-size="72" font-weight="bold">CyberLens</text>
    <text x="-150" y="40" fill="#9333ea" font-family="monospace" font-size="24">Neural Pattern Analysis</text>
  </g>
  <circle cx="400" cy="250" r="100" fill="none" stroke="#9333ea" stroke-width="2" opacity="0.3"/>
  <circle cx="1100" cy="250" r="100" fill="none" stroke="#9333ea" stroke-width="2" opacity="0.3"/>
</svg>`;

const twitterLogoSVG = `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
    </linearGradient>
    <filter id="logoGlow">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#logoGrad)"/>
  <g transform="translate(200,200)" filter="url(#logoGlow)">
    <circle r="150" fill="none" stroke="#9333ea" stroke-width="4"/>
    <text x="-70" y="0" fill="#9333ea" font-family="monospace" font-size="36" font-weight="bold">Cyber</text>
    <text x="-50" y="40" fill="#9333ea" font-family="monospace" font-size="36" font-weight="bold">Lens</text>
  </g>
</svg>`;

function downloadSVG(svg: string, filename: string) {
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function DownloadAssets() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Download Brand Assets</h3>
      <div className="flex gap-4">
        <motion.button
          onClick={() => downloadSVG(twitterBannerSVG, "cyberlens-banner.svg")}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 border border-primary/30 text-primary hover:text-primary/80 transition-colors shadow-[0_0_10px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
          initial="initial"
          whileHover="hover"
          variants={buttonHover}
        >
          <Download className="w-4 h-4" />
          Banner
        </motion.button>
        <motion.button
          onClick={() => downloadSVG(twitterLogoSVG, "cyberlens-logo.svg")}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 border border-primary/30 text-primary hover:text-primary/80 transition-colors shadow-[0_0_10px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
          initial="initial"
          whileHover="hover"
          variants={buttonHover}
        >
          <Download className="w-4 h-4" />
          Logo
        </motion.button>
      </div>
    </div>
  );
}
