
import { AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";

export const CustomerAlertsCard = ({ phoneNumber }) => {
  const [alertData, setAlertData] = useState(null);

  useEffect(() => {
    const fetchCustomerAlerts = async () => {
      try {
        if (!phoneNumber) return;

        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/logs/customer_history.json`
        );

        if (data[phoneNumber] && data[phoneNumber].riskScore > 5) {
          setAlertData(data[phoneNumber]);
        }
      } catch (error) {
        console.error("Error fetching customer history:", error);
      }
    };

    const interval = setInterval(fetchCustomerAlerts, 2000);
    return () => clearInterval(interval);
  }, [phoneNumber]);

  if (!alertData) return null;

  return (
    <Card className="medical-card border-orange-400/20 hover:border-orange-400/40 animate-float">
      <CardHeader className="bg-orange-500/10">
        <CardTitle className="flex items-center gap-2 text-orange-500">
          <AlertTriangle className="h-5 w-5" />
          Farmer Alert
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-800">
          <strong>🚨 Priority Level:</strong> {alertData.riskScore}/10
        </p>
        <p className="text-red-400">
          <strong>⚠️ Warning:</strong> {alertData.agentWarning}
        </p>
        <p className="text-green-600">
          <strong>💡 Recommended Action:</strong> {alertData.agentSuggestion}
        </p>
      </CardContent>
    </Card>
  );
};
