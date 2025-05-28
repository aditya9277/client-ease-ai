
import { useState, useEffect } from "react";
import { AlertTriangle, TrendingUp, DollarSign, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import axios from "axios";

interface StartupAlertsCardProps {
  phoneNumber: string;
}

export const StartupAlertsCard = ({ phoneNumber }: StartupAlertsCardProps) => {
  const [alerts, setAlerts] = useState<string[]>([]);

  const fetchStartupAlerts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/logs/customer-alerts/${phoneNumber}`);
      const alertsText = response.data;
      setAlerts(alertsText.split("\n").filter((alert: string) => alert.trim() !== ""));
    } catch (error) {
      console.error("❌ Failed to fetch startup alerts:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchStartupAlerts, 2000);
    return () => clearInterval(interval);
  }, [phoneNumber]);

  const getAlertIcon = (index: number) => {
    const icons = [TrendingUp, DollarSign, Users, AlertTriangle];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="h-4 w-4" />;
  };

  const getAlertType = (index: number) => {
    const types = ["Growth", "Revenue", "Team", "Risk"];
    return types[index % types.length];
  };

  const getAlertColor = (index: number) => {
    const colors = ["success", "primary", "info", "warning"];
    return colors[index % colors.length];
  };

  return (
    <Card className="medical-card card-gradient-warning h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <AlertTriangle className="h-5 w-5 text-warning" />
          Startup Health Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        {alerts.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-success text-2xl mb-2">✅</div>
            <p className="text-sm text-slate-600">All systems operational</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-[250px] overflow-y-auto scrollbar-hide">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-white/60 border border-warning/20 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-2">
                  <div className={`p-1 rounded-full bg-${getAlertColor(index)}/10`}>
                    {getAlertIcon(index)}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className={`text-xs bg-${getAlertColor(index)}/10 text-${getAlertColor(index)} border-${getAlertColor(index)}/20`}>
                        {getAlertType(index)}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">{alert}</p>
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
