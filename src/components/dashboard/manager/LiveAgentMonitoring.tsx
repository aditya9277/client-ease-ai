
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, CheckCircle, Clock, MessageSquare, PhoneCall, User, Users, Zap } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const LiveAgentMonitoring = () => {
  const [agentActivities, setAgentActivities] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock agent data
  const mockAgents = [
    {
      id: 1,
      name: "Nisha Sharma",
      avatar: "https://randomuser.me/api/portraits/women/25.jpg",
      status: "active",
      callDuration: 245,
      sentiment: 85,
      aiAssist: true,
      resolutionProbability: 92,
    },
    {
      id: 2,
      name: "Ajay Patel",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      status: "active",
      callDuration: 123,
      sentiment: 62,
      aiAssist: true,
      resolutionProbability: 78,
    },
    {
      id: 5,
      name: "Ananya Desai",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      status: "active",
      callDuration: 432,
      sentiment: 28,
      aiAssist: true,
      resolutionProbability: 55,
    },
    {
      id: 3,
      name: "Priya Mehta",
      avatar: "https://randomuser.me/api/portraits/women/15.jpg",
      status: "wrap-up",
      callDuration: 0,
      sentiment: 0,
      aiAssist: false,
      resolutionProbability: 0,
    },
    {
      id: 4,
      name: "Raj Singh",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      status: "offline",
      callDuration: 0,
      sentiment: 0,
      aiAssist: false,
      resolutionProbability: 0,
    }
  ];

  // Format time from seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Simulate live updates
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setAgentActivities(mockAgents);
      setIsLoading(false);
    }, 1200);

    // Periodically update agent data to simulate real-time changes
    const interval = setInterval(() => {
      setAgentActivities(prevAgents => 
        prevAgents.map(agent => {
          if (agent.status === "active") {
            // Update call duration
            const newDuration = agent.callDuration + 3;
            
            // Randomly adjust sentiment
            const sentimentChange = Math.random() > 0.7 ? (Math.random() > 0.5 ? 2 : -2) : 0;
            const newSentiment = Math.max(0, Math.min(100, agent.sentiment + sentimentChange));
            
            // Adjust resolution probability based on sentiment
            const newProbability = sentimentChange > 0 
              ? Math.min(100, agent.resolutionProbability + 1) 
              : Math.max(30, agent.resolutionProbability - 1);
            
            return {
              ...agent,
              callDuration: newDuration,
              sentiment: newSentiment,
              resolutionProbability: newProbability
            };
          }
          
          // Randomly change agent status
          if (Math.random() > 0.95) {
            if (agent.status === "wrap-up") {
              return { ...agent, status: "available" };
            } else if (agent.status === "available" && Math.random() > 0.5) {
              return { 
                ...agent, 
                status: "active", 
                callDuration: 0, 
                sentiment: 70 + Math.floor(Math.random() * 20),
                resolutionProbability: 75 + Math.floor(Math.random() * 15),
                aiAssist: true
              };
            } else if (agent.status === "offline" && Math.random() > 0.8) {
              return { ...agent, status: "available" };
            }
          }
          
          return agent;
        })
      );
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-success bg-success/10 border-success/20";
      case "available": return "text-info bg-info/10 border-info/20";
      case "wrap-up": return "text-warning bg-warning/10 border-warning/20";
      case "offline": return "text-slate-400 bg-slate-100 border-slate-200";
      default: return "text-slate-500 bg-slate-100 border-slate-200";
    }
  };

  const getSentimentColor = (sentiment: number) => {
    if (sentiment > 70) return "text-success";
    if (sentiment > 40) return "text-warning";
    return "text-destructive";
  };

  return (
    <Card className="medical-card card-gradient-primary animate-fade-in">
      <CardHeader>
        <CardTitle className="text-slate-800 flex items-center justify-between">
          <div className="flex items-center">
            <div className="icon-container icon-container-primary mr-2">
              <Users className="h-5 w-5" />
            </div>
            Live Agent Monitoring
          </div>
          <Badge variant="outline" className="animate-pulse bg-success/20 text-success border-success/20">
            Live Feed
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center h-[350px]">
            <div className="flex flex-col items-center">
              <div className="relative h-12 w-12">
                <div className="absolute inset-0 rounded-full border-4 border-slate-200 border-t-primary animate-spin"></div>
                <Users className="h-6 w-6 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <p className="mt-4 text-slate-500">Loading agent data...</p>
            </div>
          </div>
        ) : (
          <ScrollArea className="h-[450px] pr-4">
            <div className="space-y-4">
              {agentActivities.map((agent) => (
                <div
                  key={agent.id}
                  className={cn(
                    "p-4 rounded-lg transition-all border",
                    agent.status === "active" 
                      ? "bg-white shadow-sm border-primary/20" 
                      : "bg-slate-50 border-slate-200"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10 border border-slate-200">
                          <AvatarImage src={agent.avatar} alt={agent.name} />
                          <AvatarFallback className="bg-primary text-white">{agent.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <span className={cn(
                          "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white",
                          agent.status === "active" ? "bg-success animate-pulse" : 
                          agent.status === "available" ? "bg-info" : 
                          agent.status === "wrap-up" ? "bg-warning" : "bg-slate-300"
                        )}></span>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800">{agent.name}</h4>
                        <Badge variant="outline" className={cn("font-normal mt-1", getStatusColor(agent.status))}>
                          {agent.status === "active" ? "On Call" : 
                           agent.status === "available" ? "Available" : 
                           agent.status === "wrap-up" ? "Wrapping Up" : "Offline"}
                        </Badge>
                      </div>
                    </div>
                    
                    {agent.status === "active" && (
                      <div className="flex items-center">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex items-center px-2 py-1 bg-primary/10 text-primary rounded-md mr-2">
                                <Clock className="h-3 w-3 mr-1" />
                                <span className="text-xs font-medium">{formatTime(agent.callDuration)}</span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Call duration</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className={cn(
                                "flex items-center px-2 py-1 rounded-md mr-2",
                                agent.sentiment > 70 ? "bg-success/10 text-success" :
                                agent.sentiment > 40 ? "bg-warning/10 text-warning" :
                                "bg-destructive/10 text-destructive"
                              )}>
                                {agent.sentiment > 70 ? <CheckCircle className="h-3 w-3 mr-1" /> :
                                 agent.sentiment > 40 ? <Clock className="h-3 w-3 mr-1" /> :
                                 <AlertTriangle className="h-3 w-3 mr-1" />}
                                <span className="text-xs font-medium">{agent.sentiment}%</span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Customer sentiment</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        
                        {agent.aiAssist && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex items-center px-2 py-1 bg-accent/10 text-accent rounded-md">
                                  <Zap className="h-3 w-3 mr-1" />
                                  <span className="text-xs font-medium">{agent.resolutionProbability}%</span>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>AI-assisted resolution probability</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {agent.status === "active" && (
                    <div className="mt-3 pt-2 border-t border-slate-100">
                      <div className="flex justify-between text-xs text-slate-500 mb-1">
                        <span>Sentiment</span>
                        <span className={getSentimentColor(agent.sentiment)}>{agent.sentiment}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full w-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full rounded-full transition-all duration-500",
                            agent.sentiment > 70 ? "bg-success" :
                            agent.sentiment > 40 ? "bg-warning" : "bg-destructive"
                          )} 
                          style={{ width: `${agent.sentiment}%` }}
                        ></div>
                      </div>
                      
                      {agent.aiAssist && (
                        <>
                          <div className="flex justify-between text-xs text-slate-500 mb-1 mt-2">
                            <span>AI Resolution Probability</span>
                            <span className="text-accent">{agent.resolutionProbability}%</span>
                          </div>
                          <div className="h-1.5 bg-slate-100 rounded-full w-full overflow-hidden">
                            <div 
                              className="h-full bg-accent rounded-full transition-all duration-500" 
                              style={{ width: `${agent.resolutionProbability}%` }}
                            ></div>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
};
