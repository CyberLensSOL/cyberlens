import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { buttonHover } from "@/lib/animations";

export function VideoDemo() {
  return (
    <div className="space-y-6">
      <div className="relative rounded-lg overflow-hidden border border-primary/30 bg-background/50 shadow-[0_0_20px_rgba(147,51,234,0.15)]">
        <video 
          className="w-full aspect-video"
          controls
          poster="/assets/video-thumbnail.png"
        >
          <source src="/assets/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Button
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/assets/demo.mp4';
            link.download = 'cyberlens-demo.mp4';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="gap-2 shadow-[0_0_10px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-shadow"
        >
          <Download className="w-4 h-4" />
          Download Demo Video
        </Button>
      </motion.div>
    </div>
  );
}
