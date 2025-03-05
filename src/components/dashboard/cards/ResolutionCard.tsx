
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
    const interval = setInterval(fetchResolution, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="modern-card border-primary/10 hover:border-primary/30">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-primary">
          <ClipboardList className="h-5 w-5" />
          AI-Powered Resolutions
        </CardTitle>
        <RefreshCw className="h-4 w-4 animate-spin text-primary/70" />
      </CardHeader>
      <CardContent>
        <div className="p-4 rounded-lg bg-secondary border border-primary/5 shadow-soft">
          <p className="text-slate-600">{resolution}</p>
        </div>
      </CardContent>
    </Card>
  );
};
