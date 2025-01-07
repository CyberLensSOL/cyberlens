import { SiGithub, SiTelegram, SiX } from "react-icons/si";
import { motion } from "framer-motion";
import { buttonHover } from "@/lib/animations";

const socialLinks = [
  { icon: SiX, href: "https://x.com/CyberLensAI", label: "X (Twitter)" },
  { icon: SiGithub, href: "https://github.com/CyberLensSOL/cyberlens", label: "GitHub" },
  { icon: SiTelegram, href: "https://t.me/CyberLensAI", label: "Telegram" }
];

export function SocialButtons() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-background/50 border border-primary/30 text-primary hover:text-primary/80 transition-colors"
          initial="initial"
          whileHover="hover"
          variants={buttonHover}
        >
          <Icon className="w-5 h-5" />
          <span className="sr-only">{label}</span>
        </motion.a>
      ))}
    </div>
  );
}