import { PhoneIncoming, Clock, ListChecks } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";

export const CallbackSchedulerCard = () => {
  const [callbacks, setCallbacks] = useState([]);

  useEffect(() => {
    const fetchCallbacks = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/callbacks`);
        setCallbacks(response.data);
      } catch (error) {
        console.error("Failed to fetch callbacks:", error);
      }
    };

    fetchCallbacks();
    const interval = setInterval(fetchCallbacks, 60000); // Refresh every 60 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-[#252A3C] border-purple-500/20 hover:border-purple-500/40 transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-100">
          <PhoneIncoming className="h-5 w-5 text-purple-400" />
          Scheduled Callbacks
        </CardTitle>
      </CardHeader>
      <CardContent>
        {callbacks.length === 0 ? (
          <p className="text-sm text-gray-400">No callbacks scheduled</p>
        ) : (
          <div className="space-y-3">
            {callbacks.map((callback, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-gray-900 text-gray-200">
                <p className="text-sm">
                  📞 <strong>{callback.phoneNumber}</strong>
                </p>
                <p className="text-xs text-gray-400">
                  <Clock className="inline-block h-4 w-4 text-purple-400 mr-1" />
                  Scheduled at:{" "}
                  {new Date(callback.callbackTime).toLocaleString()}
                </p>
                <p className="text-xs text-gray-400">
                  <ListChecks className="inline-block h-4 w-4 text-purple-400 mr-1" />
                  Priority: <strong>{callback.priority}</strong>
                </p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
