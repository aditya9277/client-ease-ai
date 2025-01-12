import { Brain, TrendingUp, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CustomerInsightsCard = () => {
  const insights = [
    {
      type: "Behavior Pattern",
      detail: "Prefers email communication for follow-ups",
      priority: "medium",
      icon: Brain,
    },
    {
      type: "Purchase History",
      detail: "Premium subscriber for 2+ years",
      priority: "high",
      icon: TrendingUp,
    },
    {
      type: "Risk Alert",
      detail: "Recent negative experience with billing",
      priority: "high",
      icon: AlertCircle,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Real-time Customer Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <insight.icon className={`h-5 w-5 ${
                  insight.priority === "high" ? "text-red-500" :
                  insight.priority === "medium" ? "text-yellow-500" :
                  "text-blue-500"
                }`} />
                <div>
                  <p className="font-medium text-sm">{insight.type}</p>
                  <p className="text-sm text-muted-foreground">{insight.detail}</p>
                </div>
              </div>
              <Badge variant={insight.priority === "high" ? "destructive" : "secondary"}>
                {insight.priority}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};