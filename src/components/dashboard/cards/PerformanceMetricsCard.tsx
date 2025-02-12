
import { BarChart2, TrendingUp, Clock, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const PerformanceMetricsCard = () => {
  const metrics = [
    {
      title: "Average Call Duration",
      value: "4:30",
      progress: 75,
      icon: Clock,
      trend: "+5%",
    },
    {
      title: "Customer Satisfaction",
      value: "92%",
      progress: 92,
      icon: ThumbsUp,
      trend: "+2%",
    },
    {
      title: "Resolution Rate",
      value: "88%",
      progress: 88,
      icon: TrendingUp,
      trend: "+3%",
    },
  ];

  return (
    <Card className="bg-[#252A3C] border-purple-500/20 hover:border-purple-500/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-100">
          <BarChart2 className="h-5 w-5 text-purple-400" />
          Performance Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {metrics.map((metric) => (
            <div key={metric.title} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <metric.icon className="h-4 w-4 text-purple-400" />
                  <span className="text-sm font-medium text-gray-300">{metric.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-200">{metric.value}</span>
                  <span className="text-xs text-green-400">{metric.trend}</span>
                </div>
              </div>
              <Progress value={metric.progress} className="h-2 bg-purple-900/20" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
