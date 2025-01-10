import { FileText, MessageSquare, BarChart2, Zap, Phone, HeadphonesIcon, ClipboardList, Bot, Users, TrendingUp, Clock, Mic, MicOff, Pause, Play, Volume2 } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const sentimentData = [
  { name: "Jan", positive: 65, negative: 35 },
  { name: "Feb", positive: 59, negative: 41 },
  { name: "Mar", positive: 80, negative: 20 },
  { name: "Apr", positive: 71, negative: 29 },
  { name: "May", positive: 56, negative: 44 },
  { name: "Jun", positive: 89, negative: 11 },
];

const recentClaims = [
  { id: "CLM001", customer: "John Doe", type: "Insurance", status: "Pending", sentiment: "Positive" },
  { id: "CLM002", customer: "Jane Smith", type: "Warranty", status: "Processing", sentiment: "Neutral" },
  { id: "CLM003", customer: "Mike Johnson", type: "Refund", status: "Resolved", sentiment: "Negative" },
  { id: "CLM004", customer: "Sarah Williams", type: "Insurance", status: "Pending", sentiment: "Positive" },
];

const ManagerDashboard = () => (
  <div className="space-y-6">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Claims"
        value="1,234"
        icon={<FileText className="h-4 w-4 text-muted-foreground" />}
        description="+14% from last month"
      />
      <StatsCard
        title="Active Agents"
        value="45"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
        description="Currently online"
      />
      <StatsCard
        title="Avg. Resolution Time"
        value="24m"
        icon={<Clock className="h-4 w-4 text-muted-foreground" />}
        description="-8% from last week"
      />
      <StatsCard
        title="Customer Satisfaction"
        value="92%"
        icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
        description="+5% this month"
      />
    </div>
    
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Sentiment Analysis Trends</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sentimentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="positive" stroke="#10B981" name="Positive" />
              <Line type="monotone" dataKey="negative" stroke="#EF4444" name="Negative" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Claims</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentClaims.map((claim) => (
              <div
                key={claim.id}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium">{claim.customer}</p>
                  <p className="text-xs text-muted-foreground">
                    {claim.id} - {claim.type}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    claim.sentiment === "Positive" ? "bg-green-100 text-green-700" :
                    claim.sentiment === "Negative" ? "bg-red-100 text-red-700" :
                    "bg-yellow-100 text-yellow-700"
                  }`}>
                    {claim.sentiment}
                  </span>
                  <span className="text-xs text-muted-foreground">{claim.status}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

const AgentDashboard = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSentiment, setCurrentSentiment] = useState(85);
  const [callDuration, setCallDuration] = useState(0);
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const suggestions = [
    "Customer seems frustrated. Consider acknowledging their concerns and offering immediate solutions.",
    "Previous case history indicates preference for email communication.",
    "Similar cases were resolved by offering our premium service package.",
  ];

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
              {/* Real-time Sentiment Analysis */}
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

              {/* Call Controls */}
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

              {/* AI Suggestions */}
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

              {/* Quick Actions */}
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
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>Active claims: 3</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
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
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <span>Smart suggestions ready</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BarChart2 className="h-4 w-4 text-muted-foreground" />
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

const Index = () => {
  return (
    <DashboardLayout>
      {({ isAgent }) => (
        isAgent ? <AgentDashboard /> : <ManagerDashboard />
      )}
    </DashboardLayout>
  );
};

export default Index;
