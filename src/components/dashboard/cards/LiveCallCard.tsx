
import { useState, useEffect } from "react";
import { Phone, TrendingUp, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { CustomerAlertsCard } from "./CustomerAlertsCard";

interface LiveCallCardProps {
  currentSentiment: number;
  callDuration: number;
  phoneNumber: string;
  formatTime: (seconds: number) => string;
}

export const LiveCallCard = ({ currentSentiment, callDuration, formatTime, phoneNumber }: LiveCallCardProps) => {
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

  const getSentimentColor = () => {
    if (currentSentiment > 70) return "text-success";
    if (currentSentiment > 40) return "text-warning";
    return "text-destructive";
  };

  const getSentimentProgressColor = () => {
    if (currentSentiment > 70) return "progress-bar-success";
    if (currentSentiment > 40) return "progress-bar-warning";
    return "progress-bar-destructive";
  };

  return (
    <Card className="medical-card card-gradient-primary">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="gradient-text text-md">Live Call Assistance</span>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="animate-pulse bg-success/20 text-success border-success/20">Live</Badge>
            <span className="text-xs font-normal text-slate-600">
              Call Duration: {formatTime(callDuration)}
            </span>
          </div>
        </CardTitle>
        
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-1"> {/* Reduced from space-y-2 */}
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sm text-slate-700">Customer Sentiment</h3> {/* Reduced from default to text-sm */}
              <span className={`text-xs font-medium ${getSentimentColor()}`}> {/* Reduced from text-sm to text-xs */}
                {currentSentiment}%
              </span>
            </div>
            <div className="progress-container">
              <div className={`${getSentimentProgressColor()}`} style={{ width: `${currentSentiment}%` }}></div>
            </div>
          </div>

          <div className="flex space-x-3"> {/* Reduced from space-x-4 */}
            <div className="w-2/3 space-y-2"> {/* Reduced from space-y-4 */}
              <h3 className="font-medium text-sm text-slate-700">AI Suggestions</h3> {/* Reduced from default to text-sm */}
              <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1 scrollbar-hide"> {/* Reduced height from 300px to 200px */}
                {suggestions.length > 0 ? (
                  suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className={`p-2 rounded-lg transition-all cursor-pointer ${
                        activeSuggestion === index
                          ? "bg-primary/10 border border-primary/40 shadow-sm"
                          : "bg-slate-50 hover:bg-primary/5 border border-slate-200 hover:border-primary/20"
                      }`}
                    >
                      <p className="text-xs text-slate-600">{suggestion}</p> {/* Reduced from text-sm to text-xs */}
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center h-20 bg-slate-50 rounded-lg border border-slate-200"> {/* Reduced height from h-32 to h-20 */}
                    <div className="text-xs text-slate-500 flex flex-col items-center"> {/* Reduced from text-sm to text-xs */}
                      <svg className="animate-spin h-5 w-5 text-primary mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> {/* Reduced height, width from h-6 w-6 to h-5 w-5; mb-2 to mb-1 */}
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Waiting for AI suggestions...
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/3">
              <CustomerAlertsCard phoneNumber={phoneNumber} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
