import { motion } from "framer-motion";

export function Scanner() {
  return (
    <div className="relative h-32 bg-background/20 rounded-lg border border-primary/30 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{
          x: [-500, 500],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary font-mono"
          >
            SCANNING...
          </motion.div>
          <div className="text-sm text-muted-foreground">
            Analyzing website content
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.1),transparent)]" />
    </div>
  );
}
