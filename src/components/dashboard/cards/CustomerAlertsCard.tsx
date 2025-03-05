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
    <Card className="bg-[#1E293B]/90 backdrop-blur-sm border-red-500/20 hover:border-red-500/40 animate-pulse">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-red-400">
          <AlertTriangle className="h-5 w-5" />
          Customer Alert
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">
          <strong>🚨 Risk Score:</strong> {alertData.riskScore}/10
        </p>
        <p className="text-red-400">
          <strong>⚠️ Warning:</strong> {alertData.agentWarning}
        </p>
        <p className="text-green-300">
          <strong>💡 Suggested Action:</strong> {alertData.agentSuggestion}
        </p>
      </CardContent>
    </Card>
  );
};
