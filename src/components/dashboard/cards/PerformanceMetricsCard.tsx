
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
    <Card className="bg-[#1E293B]/90 backdrop-blur-xl border-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300 group">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-100">
          <BarChart2 className="h-5 w-5 text-cyan-400" />
          Performance Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {metrics.map((metric) => (
            <div key={metric.title} className="space-y-2 p-3 rounded-lg bg-slate-800/50 border border-cyan-500/10 group-hover:border-cyan-500/20 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <metric.icon className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm font-medium text-gray-300">{metric.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-200">{metric.value}</span>
                  <span className="text-xs text-green-400">{metric.trend}</span>
                </div>
              </div>
              <Progress 
                value={metric.progress} 
                className="h-2 bg-slate-900/50" 
                indicatorClassName="bg-gradient-to-r from-cyan-500 to-blue-500"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
