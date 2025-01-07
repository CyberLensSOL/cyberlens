import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Scanner } from "@/components/Scanner";
import { ResultCard } from "@/components/ResultCard";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Scan, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [url, setUrl] = useState("");
  const { toast } = useToast();

  const scanMutation = useMutation({
    mutationFn: async (url: string) => {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      if (!res.ok) throw new Error("Failed to analyze");
      return res.json();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to analyze the website. Please try again.",
        variant: "destructive",
      });
    },
  });

  return (
    <div className="min-h-screen bg-background/80 text-foreground relative overflow-hidden">
      <ParticleBackground />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <motion.div 
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3">
              <Brain className="w-12 h-12 text-primary animate-pulse drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 drop-shadow-[0_0_10px_rgba(147,51,234,0.3)]">
                AI Content Detective
              </h1>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Analyze websites to detect AI-generated content using advanced pattern recognition
            </p>
          </motion.div>

          <motion.div 
            className="w-full max-w-2xl space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex gap-2">
              <Input
                placeholder="Enter website URL..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="bg-background/50 border-primary/50 focus:border-primary shadow-[0_0_10px_rgba(147,51,234,0.2)] focus:shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-shadow"
              />
              <Button
                onClick={() => scanMutation.mutate(url)}
                disabled={!url || scanMutation.isPending}
                className="gap-2 shadow-[0_0_10px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-shadow"
              >
                <Scan className="w-4 h-4" />
                Analyze
              </Button>
            </div>

            {scanMutation.isPending && <Scanner />}

            {scanMutation.isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ResultCard result={scanMutation.data} />
              </motion.div>
            )}
          </motion.div>

          {/* Contract Address Section */}
          <motion.div 
            className="mt-8 p-4 border border-primary/30 rounded-lg bg-background/50 backdrop-blur text-center shadow-[0_0_15px_rgba(147,51,234,0.15)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-sm text-muted-foreground mb-2">Contract Address (Coming Soon)</p>
            <p className="font-mono text-primary drop-shadow-[0_0_5px_rgba(147,51,234,0.5)]">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}