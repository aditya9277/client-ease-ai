
import { ClipboardList, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";

export const ResolutionCard = () => {
  const [resolution, setResolution] = useState("Waiting for live consultation data...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResolution = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logs/live-resolution`);
        setResolution(data.resolution);
        setIsLoading(false);
      } catch (error) {
        console.error("❌ Error fetching live resolution:", error);
        setIsLoading(false);
      }
    };

    // ✅ Fetch AI resolution every 2 seconds
    const interval = setInterval(fetchResolution, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="medical-card card-gradient-success hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <div className="icon-container icon-container-success animate-pulse">
            <ClipboardList className="h-4 w-4" />
          </div>
          <span className="bg-gradient-to-r from-success to-success-600 bg-clip-text text-transparent">
            AI-Powered Farm Solutions
          </span>
        </CardTitle>
        <RefreshCw className="h-4 w-4 animate-spin text-success/70" />
      </CardHeader>
      <CardContent>
        <div className="p-4 rounded-lg bg-slate-50 border border-success/10 shadow-sm transition-all duration-300 hover:border-success/20">
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2 animate-pulse">
              <div className="w-3 h-3 bg-success/60 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-success/60 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-success/60 rounded-full animate-bounce delay-200"></div>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-slate-700 animate-fade-in">{resolution}</p>
              <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span className="text-xs text-success font-medium">AI confidence: 92%</span>
                </div>
                <button className="text-xs text-primary hover:text-primary/80 font-medium transition-colors">
                  Send to farmer
                </button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
