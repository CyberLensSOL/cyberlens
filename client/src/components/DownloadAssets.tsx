import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { buttonHover } from "@/lib/animations";

const twitterBannerSVG = `<svg width="1500" height="500" viewBox="0 0 1500 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="neonGlow">
      <feFlood flood-color="#ffffff" result="flood"/>
      <feComposite operator="in" in="flood" in2="SourceGraphic"/>
      <feGaussianBlur stdDeviation="8"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="3" intercept="0"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="purpleGlow">
      <feGaussianBlur stdDeviation="15" result="blur"/>
      <feFlood flood-color="#9333ea"/>
      <feComposite operator="in" in2="blur"/>
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
  <rect width="100%" height="100%" fill="#000000"/>

  <!-- Title with Enhanced Double Glow -->
  <g transform="translate(750,250)">
    <text x="0" y="0" fill="#ffffff" font-family="monospace" font-size="150" font-weight="bold" text-anchor="middle" 
          style="letter-spacing: 20px; text-transform: uppercase;" filter="url(#neonGlow)">
      CYBERLENS
    </text>
    <text x="0" y="100" fill="#9333ea" font-family="monospace" font-size="50" text-anchor="middle"
          filter="url(#purpleGlow)">
      NEURAL PATTERN ANALYSIS
    </text>
  </g>
</svg>`;

const twitterLogoSVG = `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="intense-glow">
      <feFlood flood-color="#ffffff" result="flood"/>
      <feComposite operator="in" in="flood" in2="SourceGraphic"/>
      <feGaussianBlur stdDeviation="10"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="5" intercept="0"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#000000"/>

  <!-- Main Text with Maximum Glow -->
  <g transform="translate(200,200)">
    <text x="0" y="-20" fill="#ffffff" font-family="monospace" font-size="80" font-weight="bold" text-anchor="middle" 
          filter="url(#intense-glow)" style="letter-spacing: 8px;">
      CYBER
    </text>
    <text x="0" y="60" fill="#ffffff" font-family="monospace" font-size="80" font-weight="bold" text-anchor="middle" 
          filter="url(#intense-glow)" style="letter-spacing: 8px;">
      LENS
    </text>
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