
import { TrendingUp, DollarSign, Users, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const PerformanceMetricsCard = () => {
  const metrics = [
    {
      title: "Monthly Recurring Revenue",
      value: "$45K",
      progress: 75,
      icon: DollarSign,
      trend: "+28%",
    },
    {
      title: "Customer Acquisition",
      value: "156",
      progress: 92,
      icon: Users,
      trend: "+12%",
    },
    {
      title: "Product-Market Fit",
      value: "88%",
      progress: 88,
      icon: Target,
      trend: "+15%",
    },
  ];

  return (
    <Card className="medical-card card-gradient-destructive">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <div className="icon-container icon-container-primary">
            <TrendingUp className="h-5 w-5" />
          </div>
          Growth Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {metrics.map((metric) => (
            <div key={metric.title} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <metric.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-slate-700">{metric.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-800">{metric.value}</span>
                  <span className="text-xs text-success">{metric.trend}</span>
                </div>
              </div>
              <Progress value={metric.progress} className="h-2 bg-slate-100" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
