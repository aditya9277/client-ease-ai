import { useState } from "react";
import { Phone, Bot, ClipboardList, HeadphonesIcon, Users, Clock, Mic, MicOff, Pause, Play, Volume2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";

const suggestions = [
  "Customer seems frustrated. Consider acknowledging their concerns and offering immediate solutions.",
  "Previous case history indicates preference for email communication.",
  "Similar cases were resolved by offering our premium service package.",
];

const AgentDashboard = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSentiment, setCurrentSentiment] = useState(85);
  const [callDuration, setCallDuration] = useState(0);
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const handleCallToggle = () => {
    setIsCallActive(!isCallActive);
    if (!isCallActive) {
      setCallDuration(0);
      // Start call timer simulation
      const timer = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Agent Assistance Hub</h2>
        <Button 
          variant={isCallActive ? "destructive" : "default"}
          className="gap-2"
          onClick={handleCallToggle}
        >
          {isCallActive ? (
            <>
              <Phone className="h-4 w-4" />
              End Call
            </>
          ) : (
            <>
              <Phone className="h-4 w-4" />
              Start Call
            </>
          )}
        </Button>
      </div>

      {isCallActive ? (
        <Card className="border-2 border-primary animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Live Call Assistance</span>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="animate-pulse">
                  Live
                </Badge>
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
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeadphonesIcon className="h-5 w-5 text-primary" />
                Pre-Call Assistant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Get instant context and insights before your next call
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Next call in: 2 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>Customer: John Smith</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <a href="#">Prepare for Call</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-primary" />
                Claims Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  AI-powered documentation assistant
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Bot className="h-4 w-4 text-muted-foreground" />
                    <span>Active claims: 3</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>Completion rate: 95%</span>
                  </div>
                </div>
                <Button className="w-full" variant="secondary" asChild>
                  <a href="#">Open Claims Assistant</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                AI Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Real-time AI assistance during calls
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Smart suggestions ready</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>Sentiment tracking active</span>
                  </div>
                </div>
                <Button className="w-full" variant="secondary" asChild>
                  <a href="#">Launch AI Support</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AgentDashboard;