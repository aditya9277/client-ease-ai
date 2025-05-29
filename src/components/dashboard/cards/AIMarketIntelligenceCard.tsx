
import { Brain, TrendingUp, Zap, Target, Globe, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export const AIMarketIntelligenceCard = () => {
  const [marketData, setMarketData] = useState({
    marketGrowth: 156,
    competitorMoves: 7,
    opportunities: 12,
    threats: 3,
    marketSentiment: 78,
    demandScore: 92
  });

  const [insights, setInsights] = useState([
    "🚀 Your target market showing 156% growth - scale NOW",
    "⚡ Competitor raised $50M - differentiate urgently", 
    "💎 Untapped market segment identified in healthcare AI",
    "🔥 Product-market fit score increased to 94%"
  ]);

  const [currentInsight, setCurrentInsight] = useState(0);

  useEffect(() => {
    // Simulate real-time market intelligence updates
    const interval = setInterval(() => {
      setMarketData(prev => ({
        ...prev,
        marketGrowth: prev.marketGrowth + Math.floor(Math.random() * 5),
        marketSentiment: Math.max(70, Math.min(95, prev.marketSentiment + (Math.random() - 0.5) * 4)),
        demandScore: Math.max(85, Math.min(98, prev.demandScore + (Math.random() - 0.5) * 2))
      }));
      
      setCurrentInsight(prev => (prev + 1) % insights.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [insights.length]);

  return (
    <Card className="medical-card card-gradient-accent">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <div className="icon-container icon-container-accent">
            <Globe className="h-5 w-5" />
          </div>
          AI Market Intelligence
          <Badge variant="outline" className="bg-accent/20 text-accent border-accent/20 animate-pulse">
            Live
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Live Market Insight */}
          <div className="p-3 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-4 w-4 text-accent animate-pulse" />
              <span className="text-xs font-medium text-accent">Live Market Signal</span>
            </div>
            <p className="text-sm text-slate-700 font-medium">
              {insights[currentInsight]}
            </p>
          </div>

          {/* Market Metrics Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-600">Market Growth</span>
                <span className="text-xs font-bold text-success">+{marketData.marketGrowth}%</span>
              </div>
              <Progress value={Math.min(100, marketData.marketGrowth / 2)} className="h-1" />
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-600">Demand Score</span>
                <span className="text-xs font-bold text-primary">{marketData.demandScore}/100</span>
              </div>
              <Progress value={marketData.demandScore} className="h-1" />
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-600">Market Sentiment</span>
                <span className="text-xs font-bold text-accent">{marketData.marketSentiment}%</span>
              </div>
              <Progress value={marketData.marketSentiment} className="h-1" />
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-600">Opportunities</span>
                <span className="text-xs font-bold text-warning">{marketData.opportunities}</span>
              </div>
              <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-warning animate-pulse" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* Intelligence Alerts */}
          <div className="space-y-2">
            <h4 className="text-xs font-medium text-slate-700">Today's Intelligence</h4>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <TrendingUp className="h-3 w-3 text-success" />
                <span>7 competitor moves detected</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Zap className="h-3 w-3 text-accent" />
                <span>12 market opportunities identified</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Target className="h-3 w-3 text-primary" />
                <span>3 strategic threats monitored</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
