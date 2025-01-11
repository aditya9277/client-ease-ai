import { useState } from "react";
import { Mic, MicOff, Pause, Play, Volume2, Bot, ClipboardList, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import { useToast } from "@/hooks/use-toast";
import CustomerForm from "./CustomerFormCard";

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
    <>
    <Card className="border-2 border-primary animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Live Call Assistance</span>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="animate-pulse">Live</Badge>
            <span className="text-sm font-normal">
              Call Duration: {formatTime(callDuration)}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Customer Sentiment</h3>
              <span className={`text-sm ${
                currentSentiment > 70 ? "text-green-600" :
                currentSentiment > 40 ? "text-yellow-600" :
                "text-red-600"
              }`}>
                {currentSentiment}%
              </span>
            </div>
            <Progress value={currentSentiment} className="h-2" />
          </div>

          <div className="flex justify-center gap-4">
            <Toggle
              pressed={isMuted}
              onPressedChange={setIsMuted}
              className="data-[state=on]:bg-red-100"
            >
              {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Toggle>
            <Toggle
              pressed={isPaused}
              onPressedChange={setIsPaused}
              className="data-[state=on]:bg-yellow-100"
            >
              {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </Toggle>
            <Toggle className="data-[state=on]:bg-blue-100">
              <Volume2 className="h-4 w-4" />
            </Toggle>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">AI Suggestions</h3>
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg transition-all cursor-pointer ${
                    activeSuggestion === index
                      ? "bg-primary/10 border border-primary"
                      : "bg-muted hover:bg-primary/5"
                  }`}
                  onClick={() => setActiveSuggestion(index)}
                >
                  <p className="text-sm">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full" asChild>
              <a href="#">
                <Bot className="mr-2 h-4 w-4" />
                Launch AI Support
              </a>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <a href="#">
                <ClipboardList className="mr-2 h-4 w-4" />
                View Case History
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="w-full col-span-2"
              onClick={handleAutofillData}
            >
              <UserCheck className="mr-2 h-4 w-4" />
              Autofill Customer Data
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
    <CustomerForm/>
    </>
  );
};