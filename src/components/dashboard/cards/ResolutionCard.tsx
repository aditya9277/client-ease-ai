
import { ClipboardList, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";

export const ResolutionCard = () => {
  const [resolution, setResolution] = useState("Waiting for live call data...");

  useEffect(() => {
    const fetchResolution = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logs/live-resolution`);
        setResolution(data.resolution);
      } catch (error) {
        console.error("❌ Error fetching live resolution:", error);
      }
    };

    // ✅ Fetch AI resolution every 2 seconds
    const interval = setInterval(fetchResolution, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="medical-card card-gradient-success">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <div className="icon-container icon-container-success">
            <ClipboardList className="h-4 w-4" />
          </div>
          AI-Powered Resolutions
        </CardTitle>
        <RefreshCw className="h-4 w-4 animate-spin text-success/70" />
      </CardHeader>
      <CardContent>
        <div className="p-4 rounded-lg bg-slate-50 border border-success/10 shadow-sm">
          <p className="text-slate-700">{resolution}</p>
        </div>
      </CardContent>
    </Card>
  );
};
