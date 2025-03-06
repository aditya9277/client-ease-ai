
import { AlertTriangle, AlertCircle, Shield, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CustomerAlertsCardProps {
  phoneNumber: string;
}

export const CustomerAlertsCard = ({ phoneNumber }: CustomerAlertsCardProps) => {
  const [alertData, setAlertData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCustomerAlerts = async () => {
      try {
        if (!phoneNumber) return;
        setIsLoading(true);

        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/logs/customer_history.json`
        );

        if (data[phoneNumber] && data[phoneNumber].riskScore > 5) {
          setAlertData(data[phoneNumber]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching customer history:", error);
        setIsLoading(false);
      }
    };

    const interval = setInterval(fetchCustomerAlerts, 2000);
    return () => clearInterval(interval);
  }, [phoneNumber]);

  if (!alertData && !isLoading) return null;

  return (
    <Card className="medical-card overflow-hidden border-red-400/20 shadow-md hover:shadow-lg transition-all duration-300 hover:border-red-400/40 h-[300px]">
      <CardHeader className="bg-gradient-to-r from-red-500 to-red-400 text-white">
        <CardTitle className="flex items-center gap-2 text-white">
          <AlertTriangle className="h-5 w-5" />
          Customer Alert
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {isLoading ? (
          <div className="p-4 flex items-center justify-center h-[240px]">
            <div className="flex items-center justify-center space-x-2 animate-pulse py-6">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-red-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-red-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        ) : (
          <ScrollArea className="h-[240px]">
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-slate-700">Risk Assessment</span>
                <Badge variant="destructive" className="bg-red-500">
                  High Risk: {alertData.riskScore}/10
                </Badge>
              </div>
              
              <div className="rounded-lg bg-red-50 p-3 border border-red-200">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-700">
                    <span className="font-semibold">Warning:</span> {alertData.agentWarning}
                  </p>
                </div>
              </div>
              
              <div className="rounded-lg bg-emerald-50 p-3 border border-emerald-200">
                <div className="flex items-start gap-2">
                  <Shield className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" /> 
                  <p className="text-sm text-emerald-700">
                    <span className="font-semibold">Recommended Action:</span> {alertData.agentSuggestion}
                  </p>
                </div>
              </div>
              
              <div className="rounded-lg bg-slate-50 p-3 border border-slate-200">
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-slate-700">
                    <p className="font-semibold mb-1">Customer History:</p>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>Previous escalations: 2 times in last 30 days</li>
                      <li>Frequent complaint topics: Billing, Service Delays</li>
                      <li>Customer tenure: 3+ years</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
};
