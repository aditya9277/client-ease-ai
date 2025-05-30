
import { Rocket, Clock, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";

export const CallbackSchedulerCard = () => {
  const [followUps, setFollowUps] = useState([]);

  useEffect(() => {
    const fetchFollowUps = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/callbacks`);
        // Ensure data is always an array
        const followUpsArray = Array.isArray(response.data) ? response.data : [];
        setFollowUps(followUpsArray);
      } catch (error) {
        console.error("Failed to fetch follow-ups:", error);
        // Set empty array on error to prevent map errors
        setFollowUps([]);
      }
    };

    fetchFollowUps();
    const interval = setInterval(fetchFollowUps, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="medical-card card-gradient-info">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <div className="icon-container icon-container-info">
            <Rocket className="h-5 w-5" />
          </div>
          Scheduled Business Reviews
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!Array.isArray(followUps) || followUps.length === 0 ? (
          <p className="text-sm text-slate-600">No business reviews scheduled</p>
        ) : (
          <div className="max-h-64 overflow-y-auto space-y-3 scrollbar-hide">
            {followUps.map((followUp, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800">
                <p className="text-sm">
                  🚀 <strong>Startup ID: {followUp.phoneNumber}</strong>
                </p>
                <p className="text-xs text-slate-600">
                  <Clock className="inline-block h-4 w-4 text-info mr-1" />
                  Business Review at:{" "}
                  {new Date(followUp.callbackTime).toLocaleString()}
                </p>
                <p className="text-xs text-slate-600">
                  <Target className="inline-block h-4 w-4 text-info mr-1" />
                  Focus Area: <strong>{followUp.priority}</strong>
                </p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
