
import { Phone, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import axios from "axios";

interface LiveCallCardProps {
  currentSentiment: number;
  callDuration: number;
  phoneNumber: string;
  formatTime: (seconds: number) => string;
}

export const LiveCallCard = ({ currentSentiment, callDuration, formatTime, phoneNumber }: LiveCallCardProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const { toast } = useToast();

  const handleAutofillData = () => {
    toast({
      title: "Success",
      description: "Customer data successfully filled in form",
      duration: 3000,
    });
  };
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeSuggestion, setActiveSuggestion] = useState<number | null>(null);

  // ✅ Fetch AI Suggestions in real-time
  const fetchSuggestions = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/logs/suggestions/${phoneNumber}`);
      const suggestionText = response.data;

      // ✅ Convert the text file content into an array of suggestions
      setSuggestions(suggestionText.split("\n").filter((s) => s.trim() !== ""));
    } catch (error) {
      console.error("❌ Failed to fetch AI suggestions:", error);
    }
  };

  useEffect(() => {
    // 🔄 Fetch AI suggestions every 3 seconds
    const interval = setInterval(fetchSuggestions, 500);
    return () => clearInterval(interval); // ✅ Cleanup interval on unmount
  }, [phoneNumber]);

  return (
    <Card className="border-2 border-indigo-500/30 shadow-lg shadow-indigo-500/5 hover:shadow-indigo-500/10 transition-all duration-300 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-lg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">Live Call Assistance</span>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="animate-pulse bg-emerald-900/30 text-emerald-400 border-emerald-500/30">Live</Badge>
            <span className="text-sm font-normal text-slate-300">
              Call Duration: {formatTime(callDuration)}
            </span>
          </div>
        </CardTitle>
        
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-slate-200">Customer Sentiment</h3>
              <span className={`text-sm font-medium ${
                currentSentiment > 70 ? "text-emerald-400" :
                currentSentiment > 40 ? "text-amber-400" :
                "text-red-400"
              }`}>
                {currentSentiment}%
              </span>
            </div>
            <Progress 
              value={currentSentiment} 
              className="h-2.5 rounded-full bg-slate-700/50"
              style={{
                backgroundImage: 'linear-gradient(to right, rgb(220, 38, 38), rgb(251, 191, 36), rgb(34, 197, 94))',
              }}
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-slate-200">AI Suggestions</h3>
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1 scrollbar-hide">
              {suggestions.length > 0 ? (
                suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg transition-all cursor-pointer ${
                      activeSuggestion === index
                        ? "bg-indigo-900/30 border border-indigo-500/40 shadow-md"
                        : "bg-slate-800/40 hover:bg-indigo-900/20 border border-slate-700/40 hover:border-indigo-500/30"
                    }`}
                    onClick={() => setActiveSuggestion(index)}
                  >
                    <p className="text-sm text-slate-300">{suggestion}</p>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-32 bg-slate-800/40 rounded-lg border border-slate-700/40">
                  <div className="text-sm text-slate-400 flex flex-col items-center">
                    <svg className="animate-spin h-6 w-6 text-indigo-400 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Waiting for AI suggestions...
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
