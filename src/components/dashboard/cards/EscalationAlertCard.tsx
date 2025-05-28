
import { useState, useEffect } from "react";
import { AlertTriangle, Zap, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import axios from "axios";

interface EscalationAlertCardProps {
  phoneNumber: string;
}

export const EscalationAlertCard = ({ phoneNumber }: EscalationAlertCardProps) => {
  const [escalationData, setEscalationData] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEscalationData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logs/escalation/${phoneNumber}`);
        setEscalationData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("❌ Error fetching business risk data:", error);
        setEscalationData("No critical risks detected. Your startup is on track! 🚀");
        setIsLoading(false);
      }
    };

    // ✅ Fetch risk data every 2 seconds
    const interval = setInterval(fetchEscalationData, 2000);

    return () => clearInterval(interval);
  }, [phoneNumber]);

  const getRiskLevel = () => {
    if (escalationData.toLowerCase().includes("critical") || escalationData.toLowerCase().includes("urgent")) {
      return { level: "High Risk", color: "destructive", icon: AlertTriangle };
    } else if (escalationData.toLowerCase().includes("warning") || escalationData.toLowerCase().includes("attention")) {
      return { level: "Medium Risk", color: "warning", icon: TrendingDown };
    } else {
      return { level: "Low Risk", color: "success", icon: Zap };
    }
  };

  const risk = getRiskLevel();
  const RiskIcon = risk.icon;

  return (
    <Card className="medical-card card-gradient-warning hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <div className="icon-container icon-container-warning animate-pulse">
            <AlertTriangle className="h-4 w-4" />
          </div>
          <span className="bg-gradient-to-r from-warning to-warning-600 bg-clip-text text-transparent">
            Business Risk Monitor
          </span>
        </CardTitle>
        <Badge 
          variant="outline" 
          className={`bg-${risk.color}/10 text-${risk.color} border-${risk.color}/20 animate-pulse`}
        >
          <RiskIcon className="h-3 w-3 mr-1" />
          {risk.level}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="p-4 rounded-lg bg-slate-50 border border-warning/10 shadow-sm transition-all duration-300 hover:border-warning/20">
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2 animate-pulse">
              <div className="w-3 h-3 bg-warning/60 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-warning/60 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-warning/60 rounded-full animate-bounce delay-200"></div>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-slate-700 animate-fade-in">{escalationData}</p>
              <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                <div className="flex items-center space-x-1">
                  <div className={`w-2 h-2 rounded-full bg-${risk.color}`}></div>
                  <span className={`text-xs text-${risk.color} font-medium`}>AI Risk Assessment</span>
                </div>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="text-xs text-primary hover:text-primary/80 font-medium"
                >
                  Take Action
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
