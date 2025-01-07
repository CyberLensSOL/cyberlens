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
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad)"/>

  <!-- Brain Icon -->
  <g transform="translate(600,250) scale(1.5)" filter="url(#glow)">
    <path d="M20 12H4M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12ZM4 12C4 13.1046 3.10457 14 2 14C0.895431 14 0 13.1046 0 12C0 10.8954 0.895431 10 2 10C3.10457 10 4 10.8954 4 12ZM12 20L12 4M12 4C13.1046 4 14 3.10457 14 2C14 0.895431 13.1046 0 12 0C10.8954 0 10 0.895431 10 2C10 3.10457 10.8954 4 12 4ZM12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z" 
          fill="none" stroke="#9333ea" stroke-width="2"/>
  </g>

  <!-- Title -->
  <g transform="translate(750,250)" filter="url(#glow)">
    <text x="-180" y="0" fill="#9333ea" font-family="monospace" font-size="80" font-weight="bold" text-anchor="middle">CyberLens</text>
    <text x="-180" y="50" fill="#9333ea" font-family="monospace" font-size="30" text-anchor="middle">Neural Pattern Analysis</text>
  </g>

  <!-- Decorative Elements -->
  <circle cx="400" cy="250" r="150" fill="none" stroke="#9333ea" stroke-width="2" opacity="0.2"/>
  <circle cx="1100" cy="250" r="150" fill="none" stroke="#9333ea" stroke-width="2" opacity="0.2"/>
  <path d="M0 250 L1500 250" stroke="#9333ea" stroke-width="1" opacity="0.1"/>
</svg>`;

const twitterLogoSVG = `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
    </linearGradient>
    <filter id="logoGlow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#logoGrad)"/>

  <!-- Center Circle -->
  <circle cx="200" cy="200" r="150" fill="none" stroke="#9333ea" stroke-width="3" filter="url(#logoGlow)"/>

  <!-- Brain Icon -->
  <g transform="translate(200,160) scale(2)" filter="url(#logoGlow)">
    <path d="M20 12H4M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12ZM4 12C4 13.1046 3.10457 14 2 14C0.895431 14 0 13.1046 0 12C0 10.8954 0.895431 10 2 10C3.10457 10 4 10.8954 4 12ZM12 20L12 4M12 4C13.1046 4 14 3.10457 14 2C14 0.895431 13.1046 0 12 0C10.8954 0 10 0.895431 10 2C10 3.10457 10.8954 4 12 4ZM12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z" 
          fill="none" stroke="#9333ea" stroke-width="2"/>
  </g>

  <!-- Text -->
  <text x="200" y="250" fill="#9333ea" font-family="monospace" font-size="36" font-weight="bold" text-anchor="middle" filter="url(#logoGlow)">CyberLens</text>
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