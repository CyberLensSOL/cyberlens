import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function VideoDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 450;

    let frame = 0;
    let animationFrameId: number;

    const drawDemo = () => {
      // Clear canvas
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw website interface
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(50, 50, canvas.width - 100, canvas.height - 100);

      // Simulate scanning animation
      const scanLineY = (frame % 100) * 4;
      ctx.fillStyle = "rgba(147, 51, 234, 0.2)";
      ctx.fillRect(50, scanLineY, canvas.width - 100, 4);

      // Draw some UI elements
      ctx.fillStyle = "#333";
      ctx.fillRect(100, 100, 400, 40); // URL input
      ctx.fillRect(520, 100, 100, 40); // Scan button

      // Add some text
      ctx.fillStyle = "#fff";
      ctx.font = "20px monospace";
      ctx.fillText("CyberLens Demo", 100, 80);

      // Animate scan progress
      if (frame > 100 && frame < 200) {
        const progress = ((frame - 100) / 100) * 100;
        ctx.fillStyle = "rgba(147, 51, 234, 0.5)";
        ctx.fillRect(100, 200, (400 * progress) / 100, 20);
      }

      // Show results
      if (frame >= 200) {
        ctx.fillStyle = "#2a2a2a";
        ctx.fillRect(100, 250, 400, 150);
        ctx.fillStyle = "#fff";
        ctx.fillText("Analysis Results", 120, 280);
        ctx.fillText("AI Probability: 85%", 120, 310);
        ctx.fillText("Confidence: 92%", 120, 340);
        ctx.fillText("Patterns Detected: 3", 120, 370);
      }

      frame++;
      if (frame < 300) {
        animationFrameId = requestAnimationFrame(drawDemo);
      } else {
        frame = 0;
        if (isRecording && mediaRecorderRef.current?.state === "recording") {
          mediaRecorderRef.current.stop();
          setIsRecording(false);
        }
      }
    };

    // Start demo loop
    drawDemo();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isRecording]);

  const startRecording = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const stream = canvas.captureStream(30);
    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: "video/webm;codecs=vp9",
    });

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunksRef.current.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      setVideoUrl(url);
      chunksRef.current = [];
    };

    chunksRef.current = [];
    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();
    setIsRecording(true);
  };

  return (
    <div className="space-y-6">
      <div className="relative rounded-lg overflow-hidden border border-primary/30 bg-background/50 shadow-[0_0_20px_rgba(147,51,234,0.15)]">
        {videoUrl ? (
          <video 
            className="w-full aspect-video"
            controls
            src={videoUrl}
          />
        ) : (
          <canvas 
            ref={canvasRef}
            className="w-full aspect-video bg-black"
          />
        )}
      </div>

      <motion.div 
        className="flex justify-center gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {!videoUrl && (
          <Button
            onClick={startRecording}
            disabled={isRecording}
            className="gap-2 shadow-[0_0_10px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-shadow"
          >
            {isRecording ? "Recording..." : "Record Demo"}
          </Button>
        )}
        {videoUrl && (
          <Button
            onClick={() => {
              const a = document.createElement("a");
              a.href = videoUrl;
              a.download = "cyberlens-demo.webm";
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            }}
            className="gap-2 shadow-[0_0_10px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-shadow"
          >
            <Download className="w-4 h-4" />
            Download Demo Video
          </Button>
        )}
      </motion.div>
    </div>
  );
}