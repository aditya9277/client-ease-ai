
import { useState } from "react";
import { Mic, MicOff, Pause, Play, Volume2, Bot, ClipboardList, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import { useToast } from "@/hooks/use-toast";

interface LiveCallCardProps {
  currentSentiment: number;
  callDuration: number;
  formatTime: (seconds: number) => string;
}

const suggestions = [
  "Customer seems frustrated. Consider acknowledging their concerns and offering immediate solutions.",
  "Previous case history indicates preference for email communication.",
  "Similar cases were resolved by offering our premium service package.",
];

export const LiveCallCard = ({ currentSentiment, callDuration, formatTime }: LiveCallCardProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const { toast } = useToast();

  const handleAutofillData = () => {
    toast({
      title: "Success",
      description: "Customer data successfully filled in form",
      duration: 3000,
    });
  };

  return (
    <Card className="border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
      <CardHeader className="border-b border-white/5">
        <CardTitle className="flex items-center justify-between">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
            Live Call Assistance
          </span>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="animate-pulse bg-emerald-500/10 text-emerald-300 border-emerald-500/20">
              Live
            </Badge>
            <span className="text-sm font-normal text-blue-100/80">
              Call Duration: {formatTime(callDuration)}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 mt-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-blue-100">Customer Sentiment</h3>
            <span className={`text-sm font-medium ${
              currentSentiment > 70 ? "text-emerald-300" :
              currentSentiment > 40 ? "text-amber-300" :
              "text-rose-300"
            }`}>
              {currentSentiment}%
            </span>
          </div>
          <Progress 
            value={currentSentiment} 
            className="h-2 bg-white/5"
            style={{
              background: 'linear-gradient(to right, rgba(248,113,113,0.2), rgba(251,191,36,0.2), rgba(52,211,153,0.2))',
            }}
          />
        </div>

        <div className="flex justify-center gap-4">
          <Toggle
            pressed={isMuted}
            onPressedChange={setIsMuted}
            className="data-[state=on]:bg-rose-500/20 hover:bg-white/5 border border-white/10"
          >
            {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Toggle>
          <Toggle
            pressed={isPaused}
            onPressedChange={setIsPaused}
            className="data-[state=on]:bg-amber-500/20 hover:bg-white/5 border border-white/10"
          >
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </Toggle>
          <Toggle className="data-[state=on]:bg-blue-500/20 hover:bg-white/5 border border-white/10">
            <Volume2 className="h-4 w-4" />
          </Toggle>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-blue-100">AI Suggestions</h3>
          <div className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl transition-all cursor-pointer border border-white/10 ${
                  activeSuggestion === index
                    ? "bg-purple-500/10 border-purple-500/20"
                    : "bg-white/5 hover:bg-white/10"
                }`}
                onClick={() => setActiveSuggestion(index)}
              >
                <p className="text-sm text-blue-100/80">{suggestion}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full hover:bg-purple-500/10 border-white/10 text-blue-100" asChild>
            <a href="#">
              <Bot className="mr-2 h-4 w-4 text-purple-300" />
              Launch AI Support
            </a>
          </Button>
          <Button variant="outline" className="w-full hover:bg-blue-500/10 border-white/10 text-blue-100" asChild>
            <a href="#">
              <ClipboardList className="mr-2 h-4 w-4 text-blue-300" />
              View Case History
            </a>
          </Button>
          <Button 
            variant="outline" 
            className="w-full col-span-2 hover:bg-emerald-500/10 border-white/10 text-blue-100"
            onClick={handleAutofillData}
          >
            <UserCheck className="mr-2 h-4 w-4 text-emerald-300" />
            Autofill Customer Data
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
