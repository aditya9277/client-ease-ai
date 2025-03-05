
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
    <Card className="medical-card card-gradient-warning">
      <CardHeader>
        <CardTitle className="text-md font-medium text-slate-800">
          <div className="flex items-center gap-2">
            <div className="icon-container icon-container-warning">
              <Brain className="h-5 w-5" />
            </div>
            Real-time Customer Insights
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200"
            >
              <div className="flex items-center gap-3">
                <insight.icon className={`h-5 w-5 ${
                  insight.priority === "high" ? "text-destructive" :
                  insight.priority === "medium" ? "text-warning" :
                  "text-info"
                }`} />
                <div>
                  <p className="font-medium text-sm text-slate-800">{insight.type}</p>
                  <p className="text-sm text-slate-600">{insight.detail}</p>
                </div>
              </div>
              <Badge variant={insight.priority === "high" ? "destructive" : "secondary"} className="bg-warning/20 text-warning border-warning/30">
                {insight.priority}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
