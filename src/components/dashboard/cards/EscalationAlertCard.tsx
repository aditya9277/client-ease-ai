import { AlertTriangle, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import axios from "axios";

export const EscalationAlertCard = ({phoneNumber}) => {
  const [escalations, setEscalations] = useState([]);

  useEffect(() => {
    const fetchEscalations = async () => {
      try {
        if (!phoneNumber) return; // ✅ Avoid fetching if phone number is not available

        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logs/escalations/${phoneNumber}`);
        setEscalations(data);
      } catch (error) {
        console.error("Error fetching escalations:", error);
      }
    };

    fetchEscalations();
  }, [phoneNumber]); // ✅ Refetch when phone number changes

  return (
    <Card className="bg-[#1E293B]/90 backdrop-blur-sm border-red-500/20 hover:border-red-500/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-red-400 animate-pulse">
          <AlertTriangle className="h-5 w-5" />
          Critical Escalations
        </CardTitle>
      </CardHeader>
      <CardContent>
        {escalations.length === 0 ? (
          <p className="text-gray-400">No escalations at the moment.</p>
        ) : (
          <ul className="space-y-3 max-h-60 overflow-y-auto">
            {escalations.map((escalation, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 bg-[#0F172A]/60 rounded-lg border border-red-500/20"
              >
                <div>
                  <p className="text-gray-300">📞 Escalation at: {new Date(escalation.timestamp).toLocaleString()}</p>
                  <p className="text-sm text-red-300">Reason: {escalation.reason}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-red-400 border-red-500/20 hover:text-red-300 hover:bg-red-500/10"
                  onClick={() => alert(`Transcript: ${escalation.transcript}`)}
                >
                  <Eye className="h-4 w-4 mr-1" /> View
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};
