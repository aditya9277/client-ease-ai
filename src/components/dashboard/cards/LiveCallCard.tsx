
import { useState, useEffect } from "react";
import { Brain, TrendingUp, AlertCircle, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { StartupAlertsCard } from "./StartupAlertsCard";
import { AIMarketIntelligenceCard } from "./AIMarketIntelligenceCard";

interface LiveCallCardProps {
  currentSentiment: number;
  callDuration: number;
  phoneNumber: string;
  formatTime: (seconds: number) => string;
}

export const LiveCallCard = ({ currentSentiment, callDuration, formatTime, phoneNumber }: LiveCallCardProps) => {
  const [aiInsights, setAiInsights] = useState<string[]>([]);
  const [activeInsight, setActiveInsight] = useState<number | null>(null);

  // ✅ Fetch AI Business Insights in real-time
  const fetchAiInsights = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/logs/suggestions/${phoneNumber}`);
      const insightText = response.data;

      // ✅ Convert the text file content into an array of business insights
      setAiInsights(insightText.split("\n").filter((s) => s.trim() !== ""));
    } catch (error) {
      console.error("❌ Failed to fetch AI business insights:", error);
    }
  };

  useEffect(() => {
    // 🔄 Fetch AI insights every 3 seconds
    const interval = setInterval(fetchAiInsights, 100);
    return () => clearInterval(interval); // ✅ Cleanup interval on unmount
  }, [phoneNumber]);

  const getBusinessHealthColor = () => {
    if (currentSentiment > 70) return "text-success";
    if (currentSentiment > 40) return "text-warning";
    return "text-destructive";
  };

  const getBusinessHealthProgressColor = () => {
    if (currentSentiment > 70) return "progress-bar-success";
    if (currentSentiment > 40) return "progress-bar-warning";
    return "progress-bar-destructive";
  };

  return (
    <Card className="medical-card card-gradient-success">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <span className="gradient-text text-xl">Live AI Business Consultation</span>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="animate-pulse bg-success/20 text-success border-success/20">
              <Brain className="h-3 w-3 mr-1" />
              AI Active
            </Badge>
            <span className="text-sm font-normal text-slate-600">
              Session Duration: {formatTime(callDuration)}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-slate-700">Business Health Score</h3>
            <span className={`text-sm font-medium ${getBusinessHealthColor()}`}>
              {currentSentiment}%
            </span>
          </div>
          <div className="progress-container">
            <div className={`${getBusinessHealthProgressColor()}`} style={{ width: `${currentSentiment}%` }}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4"> 
          <div className="lg:col-span-2 space-y-3">  
            <h3 className="font-medium text-slate-700">AI Strategic Recommendations</h3>
            <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1 scrollbar-hide">
              {aiInsights.length > 0 ? (
                aiInsights.map((insight, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg transition-all cursor-pointer ${
                      activeInsight === index
                        ? "bg-primary/10 border border-primary/40 shadow-sm"
                        : "bg-slate-50 hover:bg-primary/5 border border-slate-200 hover:border-primary/20"
                    }`}
                    onClick={() => setActiveInsight(index)}
                  >
                    <p className="text-sm text-slate-600">{insight}</p>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-20 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-sm text-slate-500 flex flex-col items-center">
                    <svg className="animate-spin h-5 w-5 text-primary mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing startup metrics...
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-3">
            <StartupAlertsCard phoneNumber={phoneNumber} />
            <AIMarketIntelligenceCard />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
