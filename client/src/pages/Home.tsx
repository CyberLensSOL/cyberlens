import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Scanner } from "@/components/Scanner";
import { ResultCard } from "@/components/ResultCard";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Scan, Brain } from "lucide-react";

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
    <div className="min-h-screen bg-background/80 text-foreground relative">
      <ParticleBackground />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Brain className="w-12 h-12 text-primary animate-pulse" />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                AI Content Detective
              </h1>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Analyze websites to detect AI-generated content using advanced pattern recognition
            </p>
          </div>

          <div className="w-full max-w-2xl space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Enter website URL..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="bg-background/50 border-primary/50 focus:border-primary"
              />
              <Button
                onClick={() => scanMutation.mutate(url)}
                disabled={!url || scanMutation.isPending}
                className="gap-2"
              >
                <Scan className="w-4 h-4" />
                Analyze
              </Button>
            </div>

            {scanMutation.isPending && <Scanner />}

            {scanMutation.isSuccess && (
              <ResultCard result={scanMutation.data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}