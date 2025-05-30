
import { AlertTriangle, TrendingDown, DollarSign, Users, Target, Zap, Brain, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import axios from "axios";

interface StartupAlertsCardProps {
  phoneNumber: string;
}

export const StartupAlertsCard = ({ phoneNumber }: StartupAlertsCardProps) => {
  const [alerts, setAlerts] = useState<any[]>([]);
  const [criticalAlerts, setCriticalAlerts] = useState(0);

  // ✅ Fetch real-time startup risk alerts
  const fetchStartupAlerts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/logs/startup-alerts/${phoneNumber}`);
      const alertsData = Array.isArray(response.data) ? response.data : [];
      setAlerts(alertsData);
      setCriticalAlerts(alertsData.filter(alert => alert.severity === 'critical').length);
    } catch (error) {
      console.error("❌ Failed to fetch startup alerts:", error);
      // Generate dynamic mock alerts for demo
      const mockAlerts = [
        {
          type: "funding",
          severity: "critical",
          message: "Cash runway below 3 months - immediate funding needed",
          icon: DollarSign,
          color: "destructive",
          action: "Schedule investor meetings"
        },
        {
          type: "market",
          severity: "warning", 
          message: "Competitor launched similar feature - pivot required",
          icon: Target,
          color: "warning",
          action: "Analyze competitor strategy"
        },
        {
          type: "team",
          severity: "info",
          message: "Key developer showing signs of burnout",
          icon: Users,
          color: "info",
          action: "Schedule team wellness check"
        },
        {
          type: "growth",
          severity: "warning",
          message: "User acquisition cost exceeding LTV by 40%",
          icon: TrendingDown,
          color: "warning",
          action: "Optimize marketing channels"
        },
        {
          type: "legal",
          severity: "critical",
          message: "Patent filing deadline in 5 days",
          icon: Shield,
          color: "destructive",
          action: "Contact IP attorney"
        }
      ];
      setAlerts(mockAlerts);
      setCriticalAlerts(mockAlerts.filter(alert => alert.severity === 'critical').length);
    }
  };

  useEffect(() => {
    fetchStartupAlerts();
    const interval = setInterval(fetchStartupAlerts, 2000);
    return () => clearInterval(interval);
  }, [phoneNumber]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500/10 text-red-600 border-red-200';
      case 'warning': return 'bg-yellow-500/10 text-yellow-600 border-yellow-200';
      default: return 'bg-blue-500/10 text-blue-600 border-blue-200';
    }
  };

  return (
    <Card className="medical-card card-gradient-destructive h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-slate-800">
          <div className="flex items-center gap-2">
            <div className="icon-container icon-container-destructive">
              <Brain className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium">AI Risk Monitor</span>
          </div>
          {criticalAlerts > 0 && (
            <Badge variant="destructive" className="animate-pulse">
              {criticalAlerts} Critical
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {alerts.length === 0 ? (
          <div className="flex items-center justify-center h-32 text-xs text-slate-500">
            <div className="text-center">
              <Zap className="h-6 w-6 mx-auto mb-2 text-success" />
              All systems optimal
            </div>
          </div>
        ) : (
          <div className="space-y-2 max-h-[200px] overflow-y-auto scrollbar-hide">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg border ${getSeverityColor(alert.severity)} transition-all hover:shadow-sm`}
              >
                <div className="flex items-start gap-2">
                  <alert.icon className="h-3 w-3 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium truncate">{alert.message}</p>
                    <p className="text-xs opacity-70 mt-1">{alert.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
