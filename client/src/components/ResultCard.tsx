import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, AlertTriangle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface Result {
  score: number;
  confidence: number;
  patterns: string[];
}

interface ResultCardProps {
  result: Result;
}

export function ResultCard({ result }: ResultCardProps) {
  const getStatusColor = (score: number) => {
    if (score > 80) return "text-red-500";
    if (score > 40) return "text-yellow-500";
    return "text-green-500";
  };

  const getStatusIcon = (score: number) => {
    if (score > 80) return <AlertTriangle className="w-6 h-6 text-red-500" />;
    if (score > 40) return <Brain className="w-6 h-6 text-yellow-500" />;
    return <CheckCircle className="w-6 h-6 text-green-500" />;
  };

  return (
    <Card className="border-primary/30 bg-background/50 backdrop-blur shadow-[0_0_20px_rgba(147,51,234,0.15)]">
      <CardHeader>
        <motion.div 
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <motion.div
              animate={{ 
                filter: [
                  "drop-shadow(0 0 2px rgba(147,51,234,0.5))",
                  "drop-shadow(0 0 8px rgba(147,51,234,0.3))",
                  "drop-shadow(0 0 2px rgba(147,51,234,0.5))"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {getStatusIcon(result.score)}
            </motion.div>
            Analysis Results
          </h3>
          <motion.span 
            className={`text-2xl font-bold ${getStatusColor(result.score)} drop-shadow-[0_0_10px_rgba(147,51,234,0.3)]`}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {result.score}%
          </motion.span>
        </motion.div>
      </CardHeader>
      <CardContent className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex justify-between mb-2">
            <span className="text-sm text-muted-foreground">AI Probability</span>
            <span className="text-sm font-medium">{result.score}%</span>
          </div>
          <Progress 
            value={result.score} 
            className="h-2 shadow-[0_0_10px_rgba(147,51,234,0.2)]" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between mb-2">
            <span className="text-sm text-muted-foreground">Confidence</span>
            <span className="text-sm font-medium">{result.confidence}%</span>
          </div>
          <Progress 
            value={result.confidence} 
            className="h-2 shadow-[0_0_10px_rgba(147,51,234,0.2)]" 
          />
        </motion.div>

        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-sm font-medium">Detected Patterns:</h4>
          <ul className="text-sm space-y-1">
            {result.patterns.map((pattern, index) => (
              <motion.li 
                key={index} 
                className="text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                • {pattern}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </CardContent>
    </Card>
  );
}