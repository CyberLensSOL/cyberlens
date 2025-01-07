import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { buttonHover } from "@/lib/animations";

const twitterBannerSVG = `<svg width="1500" height="500" viewBox="0 0 1500 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="neonGlow">
      <feFlood flood-color="#ffffff" result="flood"/>
      <feComposite operator="in" in="flood" in2="SourceGraphic"/>
      <feGaussianBlur stdDeviation="4"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="3" intercept="0"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad)"/>

  <!-- Background Effects -->
  <g opacity="0.1">
    <line x1="0" y1="250" x2="1500" y2="250" stroke="#ffffff" stroke-width="1"/>
    <line x1="750" y1="0" x2="750" y2="500" stroke="#ffffff" stroke-width="1"/>
  </g>

  <!-- Title with Enhanced Glow -->
  <g transform="translate(750,250)" filter="url(#neonGlow)">
    <text x="0" y="0" fill="#ffffff" font-family="monospace" font-size="120" font-weight="bold" text-anchor="middle" 
          style="letter-spacing: 10px; text-transform: uppercase;">CyberLens</text>
    <text x="0" y="80" fill="#9333ea" font-family="monospace" font-size="40" text-anchor="middle"
          filter="url(#glow)">Neural Pattern Analysis</text>
  </g>

  <!-- Decorative Elements -->
  <path d="M100,250 L400,250" stroke="#9333ea" stroke-width="2" opacity="0.3"/>
  <path d="M1100,250 L1400,250" stroke="#9333ea" stroke-width="2" opacity="0.3"/>
</svg>`;

const twitterLogoSVG = `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
    </linearGradient>
    <filter id="logoNeonGlow">
      <feFlood flood-color="#ffffff" result="flood"/>
      <feComposite operator="in" in="flood" in2="SourceGraphic"/>
      <feGaussianBlur stdDeviation="3"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="3" intercept="0"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#logoGrad)"/>

  <!-- Main Text with Enhanced Glow -->
  <g transform="translate(200,200)">
    <text x="0" y="-20" fill="#ffffff" font-family="monospace" font-size="72" font-weight="bold" text-anchor="middle" 
          filter="url(#logoNeonGlow)" style="letter-spacing: 5px;">CYBER</text>
    <text x="0" y="60" fill="#ffffff" font-family="monospace" font-size="72" font-weight="bold" text-anchor="middle" 
          filter="url(#logoNeonGlow)" style="letter-spacing: 5px;">LENS</text>
  </g>

  <!-- Decorative Lines -->
  <path d="M50,200 L150,200" stroke="#9333ea" stroke-width="2" opacity="0.3"/>
  <path d="M250,200 L350,200" stroke="#9333ea" stroke-width="2" opacity="0.3"/>
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
      <div className="flex gap-4 justify-center">
        <motion.button
          onClick={() => downloadSVG(twitterBannerSVG, "cyberlens-banner.svg")}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 border border-primary/30 text-primary hover:text-primary/80 transition-colors shadow-[0_0_10px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
          initial="initial"
          whileHover="hover"
          variants={buttonHover}
        >
          <Download className="w-4 h-4" />
          Download Banner
        </motion.button>
        <motion.button
          onClick={() => downloadSVG(twitterLogoSVG, "cyberlens-logo.svg")}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 border border-primary/30 text-primary hover:text-primary/80 transition-colors shadow-[0_0_10px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
          initial="initial"
          whileHover="hover"
          variants={buttonHover}
        >
          <Download className="w-4 h-4" />
          Download Logo
        </motion.button>
      </div>
    </div>
  );
}