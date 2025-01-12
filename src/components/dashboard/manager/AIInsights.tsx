import { BrainCircuit, HeartPulse, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AIInsights = () => (
  <Card>
    <CardHeader>
      <CardTitle>AI Insights</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
          <BrainCircuit className="h-8 w-8 text-purple-500" />
          <div>
            <h4 className="font-medium">Pattern Detection</h4>
            <p className="text-sm text-muted-foreground">Common customer issues identified in last 24h</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
          <HeartPulse className="h-8 w-8 text-red-500" />
          <div>
            <h4 className="font-medium">Sentiment Alerts</h4>
            <p className="text-sm text-muted-foreground">3 agents need support with challenging calls</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
          <Target className="h-8 w-8 text-blue-500" />
          <div>
            <h4 className="font-medium">Performance Optimization</h4>
            <p className="text-sm text-muted-foreground">Team efficiency increased by 12%</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);