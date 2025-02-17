
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
    const interval = setInterval(fetchSuggestions, 1000);
    return () => clearInterval(interval); // ✅ Cleanup interval on unmount
  }, [phoneNumber]);

  return (
    <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 bg-[#252A3C]/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Live Call Assistance</span>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="animate-pulse bg-green-50 text-green-700 border-green-200">Live</Badge>
            <span className="text-sm font-normal">
              Call Duration: {formatTime(callDuration)}
            </span>
          </div>
        </CardTitle>
        <div className="text-sm text-gray-300">{formatTime(callDuration)}</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-white">Customer Sentiment</h3>
              <span className={`text-sm font-medium ${
                currentSentiment > 70 ? "text-green-600" :
                currentSentiment > 40 ? "text-yellow-600" :
                "text-red-600"
              }`}>
                {currentSentiment}%
              </span>
            </div>
            <Progress 
              value={currentSentiment} 
              className="h-2 bg-slate-800/50"
              style={{
                backgroundImage: 'linear-gradient(to right, #ef4444, #eab308, #22c55e)',
              }}
            />
          </div>

          

          <div className="space-y-4">
            <h3 className="font-medium text-gray-700">AI Suggestions</h3>
            <div className="space-y-2">
              {suggestions.length > 0 ? (
                suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg transition-all cursor-pointer ${
                      activeSuggestion === index
                        ? "bg-purple-50 border border-purple-200"
                        : "bg-gray-50 hover:bg-purple-50/50"
                    }`}
                    onClick={() => setActiveSuggestion(index)}
                  >
                    <p className="text-sm text-gray-600">{suggestion}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">Waiting for AI suggestions...</p>
              )}
            </div>
          </div>

          {/* <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full hover:bg-purple-50" asChild>
              <a href="#">
                <Bot className="mr-2 h-4 w-4 text-purple-600" />
                Launch AI Support
              </a>
            </Button>
            <Button variant="outline" className="w-full hover:bg-blue-50" asChild>
              <a href="#">
                <ClipboardList className="mr-2 h-4 w-4 text-blue-600" />
                View Case History
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="w-full col-span-2 hover:bg-green-50"
              onClick={handleAutofillData}
            >
              <UserCheck className="mr-2 h-4 w-4 text-green-600" />
              Autofill Customer Data
            </Button>
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
};
