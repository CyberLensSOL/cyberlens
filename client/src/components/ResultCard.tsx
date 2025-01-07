import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, AlertTriangle, CheckCircle } from "lucide-react";

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
    <Card className="border-primary/30 bg-background/50 backdrop-blur">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            {getStatusIcon(result.score)}
            Analysis Results
          </h3>
          <span className={`text-2xl font-bold ${getStatusColor(result.score)}`}>
            {result.score}%
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-muted-foreground">AI Probability</span>
            <span className="text-sm font-medium">{result.score}%</span>
          </div>
          <Progress value={result.score} className="h-2" />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-muted-foreground">Confidence</span>
            <span className="text-sm font-medium">{result.confidence}%</span>
          </div>
          <Progress value={result.confidence} className="h-2" />
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Detected Patterns:</h4>
          <ul className="text-sm space-y-1">
            {result.patterns.map((pattern, index) => (
              <li key={index} className="text-muted-foreground">
                • {pattern}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
