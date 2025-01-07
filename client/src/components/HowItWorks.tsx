import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { buttonHover } from "@/lib/animations";
import { HelpCircle } from "lucide-react";

export function HowItWorks() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 border border-primary/30 text-primary hover:text-primary/80 transition-colors shadow-[0_0_10px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
          initial="initial"
          whileHover="hover"
          variants={buttonHover}
        >
          <HelpCircle className="w-4 h-4" />
          How It Works
        </motion.button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl bg-background/95 backdrop-blur border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">How It Works</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <img 
            src="/attached_assets/image_1736217418153.png" 
            alt="How It Works" 
            className="w-full rounded-lg border border-primary/30 shadow-[0_0_20px_rgba(147,51,234,0.2)]"
          />
          <div className="text-muted-foreground space-y-2">
            <p>Our AI Content Detective analyzes websites using advanced pattern recognition to identify AI-generated content:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Scans for AI generation markers and signatures</li>
              <li>Analyzes text patterns and structure</li>
              <li>Detects repetitive phrases and unusual consistency</li>
              <li>Examines metadata for AI tool traces</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
