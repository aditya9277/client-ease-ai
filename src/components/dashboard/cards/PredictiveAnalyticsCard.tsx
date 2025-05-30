
import { Brain, TrendingUp, AlertTriangle, Target, Calendar, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { useState, useEffect } from "react";

export const PredictiveAnalyticsCard = () => {
  const [predictions, setPredictions] = useState({
    revenue: { next30Days: 125000, confidence: 94, trend: 'up' },
    userGrowth: { next30Days: 2340, confidence: 89, trend: 'up' },
    churnRisk: { probability: 12, confidence: 91, trend: 'down' },
    fundingNeeded: { months: 8, confidence: 87, trend: 'stable' }
  });

  const [predictionData, setPredictionData] = useState([
    { month: 'Jan', actual: 45000, predicted: 46000 },
    { month: 'Feb', actual: 52000, predicted: 51000 },
    { month: 'Mar', actual: 48000, predicted: 49000 },
    { month: 'Apr', actual: null, predicted: 58000 },
    { month: 'May', actual: null, predicted: 67000 },
    { month: 'Jun', actual: null, predicted: 75000 }
  ]);

  const [aiInsights, setAiInsights] = useState([
    "Revenue will hit $125K next month (94% confidence)",
    "User acquisition trending 23% above forecast", 
    "Churn risk decreased to 12% - retention strategy working",
    "Recommend raising Series A in Q3 2024"
  ]);

  const [currentInsight, setCurrentInsight] = useState(0);

  useEffect(() => {
    // Simulate real-time prediction updates
    const interval = setInterval(() => {
      setPredictions(prev => ({
        ...prev,
        revenue: {
          ...prev.revenue,
          next30Days: prev.revenue.next30Days + Math.floor(Math.random() * 1000)
        }
      }));
      
      setCurrentInsight(prev => (prev + 1) % aiInsights.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [aiInsights.length]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-3 w-3 text-success" />;
      case 'down': return <AlertTriangle className="h-3 w-3 text-destructive" />;
      default: return <Target className="h-3 w-3 text-warning" />;
    }
  };

  return (
    <Card className="medical-card card-gradient-info">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <div className="icon-container icon-container-info">
            <Brain className="h-5 w-5" />
          </div>
          AI Predictive Analytics
          <Badge variant="outline" className="bg-info/20 text-info border-info/20">
            Next 30 Days
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Current AI Prediction */}
          <div className="p-3 bg-gradient-to-r from-info/10 to-primary/10 rounded-lg border border-info/20">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-4 w-4 text-info animate-pulse" />
              <span className="text-xs font-medium text-info">AI Forecast</span>
            </div>
            <p className="text-sm text-slate-700 font-medium">
              {aiInsights[currentInsight]}
            </p>
          </div>

          {/* Prediction Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-600">Revenue Forecast</span>
                {getTrendIcon(predictions.revenue.trend)}
              </div>
              <div className="text-lg font-bold text-slate-800">
                ${(predictions.revenue.next30Days / 1000).toFixed(0)}K
              </div>
              <div className="text-xs text-slate-500">
                {predictions.revenue.confidence}% confidence
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-600">User Growth</span>
                {getTrendIcon(predictions.userGrowth.trend)}
              </div>
              <div className="text-lg font-bold text-slate-800">
                +{predictions.userGrowth.next30Days}
              </div>
              <div className="text-xs text-slate-500">
                {predictions.userGrowth.confidence}% confidence
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-600">Churn Risk</span>
                {getTrendIcon(predictions.churnRisk.trend)}
              </div>
              <div className="text-lg font-bold text-slate-800">
                {predictions.churnRisk.probability}%
              </div>
              <div className="text-xs text-slate-500">
                {predictions.churnRisk.confidence}% confidence
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-600">Runway</span>
                {getTrendIcon(predictions.fundingNeeded.trend)}
              </div>
              <div className="text-lg font-bold text-slate-800">
                {predictions.fundingNeeded.months}mo
              </div>
              <div className="text-xs text-slate-500">
                {predictions.fundingNeeded.confidence}% confidence
              </div>
            </div>
          </div>

          {/* Prediction Chart */}
          <div className="space-y-2">
            <h4 className="text-xs font-medium text-slate-700">Revenue Prediction Trend</h4>
            <div className="h-[120px] bg-slate-50 rounded-lg border border-slate-200 p-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={predictionData}>
                  <defs>
                    <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0088ff" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0088ff" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" fontSize={10} />
                  <YAxis fontSize={10} />
                  <Area 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="#6366f1" 
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorActual)"
                    connectNulls={false}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke="#0088ff" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    fillOpacity={1}
                    fill="url(#colorPredicted)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-slate-600">Actual</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-info"></div>
                <span className="text-slate-600">AI Predicted</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
