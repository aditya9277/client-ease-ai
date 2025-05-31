
import { useState, useEffect, useRef } from "react";
import {
  Phone,
  FileText,
  Brain,
  Lightbulb,
  AlertCircle,
  BookOpen,
  BarChart2,
  MessageSquare,
  Clock,
  PieChart,
  Activity,
  RefreshCw,
  User,
  CalendarDays,
  Bell,
  Crown,
  Star,
  Sparkles,
  Target,
  TrendingUp,
  DollarSign
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { LiveCallCard } from "./cards/LiveCallCard";
import { PreCallCard } from "./cards/PreCallCard";
import { ClaimsCard } from "./cards/ClaimsCard";
import { SmartRemindersCard } from "./cards/SmartRemindersCard";
import { AutomationCard } from "./cards/AutomationCard";
import { SentimentAnalysisCard } from "./cards/SentimentAnalysisCard";
import { LastCallReport } from "./LastCallReport";
import { CallTranscriptCard } from "./cards/CallTranscriptCard";
import { ActionRecommendationsCard } from "./cards/ActionRecommendationsCard";
import { CustomerInsightsCard } from "./cards/CustomerInsightsCard";
import { KnowledgeBaseCard } from "./cards/KnowledgeBaseCard";
import { PerformanceMetricsCard } from "./cards/PerformanceMetricsCard";
import { QuickResponseCard } from "./cards/QuickResponseCard";
import CustomerForm from "./cards/CustomerFormCard";
import { CallbackSchedulerCard } from "./cards/CallbackSchedulerCard";
import { LiveKnowledgeBaseCard } from "./cards/LiveKnowledgeBaseCard";
import { CallHistoryCard } from "./cards/CallHistoryCard";
import { ClaimDocumentsCard } from "./cards/ClaimDocumentsCard";
import { EscalationAlertCard } from "./cards/EscalationAlertCard";
import { ResolutionCard } from "./cards/ResolutionCard";
import { CustomerAlertsCard } from "./cards/CustomerAlertsCard";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfileCard } from "./cards/ProfileCard";

const AgentDashboard = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [currentSentiment, setCurrentSentiment] = useState(85);
  const [callDuration, setCallDuration] = useState(0);
  const [lastCallReport, setLastCallReport] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const startCall = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/call`,
        { to: phoneNumber },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setIsCallActive(!isCallActive);
      setIsDialogOpen(!isDialogOpen);

      toast.success("StartupOS AI Business Advisor connected!");
    } catch (error) {
      console.error("Connection failed:", error);
      toast.error("Connection failed! Check console.");
    }
  };

  useEffect(() => {
    if (isCallActive) {
      timerRef.current = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isCallActive]);

  const handleCallToggle = () => {
    if (isCallActive) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      setLastCallReport(!lastCallReport);
      setCallDuration(0);
    }
    setIsCallActive(!isCallActive);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="space-y-8 p-4 min-h-screen bg-gradient-to-b from-slate-100 to-slate-50">
      <div className="flex items-center justify-between p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            StartupOS AI Platform Dashboard
          </h2>
          <p className="text-slate-500">
            Your intelligent business partner for startup success
          </p>
        </div>

        <div className="flex items-center">
          <div className="mr-4 flex items-center">
            <span className="text-slate-700 font-medium mr-2">Experience AI-powered business intelligence!</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>  

          <Button
            variant={isCallActive ? "destructive" : "default"}
            size="lg"
            className={`gap-2 transition-all duration-300 shadow-md hover:shadow-lg ${
              isCallActive
                ? "bg-destructive hover:bg-destructive/90 animate-pulse"
                : "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 animate-float"
            } text-white font-medium rounded-full`}
            onClick={() => {
              if (isCallActive) {
                handleCallToggle();
              } else {
                setIsDialogOpen(true);
              }
            }}>
            <Brain className="h-4 w-4" />
            {isCallActive ? "End AI Consultation" : "Start AI Consultation"}
            {!isCallActive && <Sparkles className="h-3 w-3 ml-1 text-yellow-200" />}
          </Button>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-white border border-slate-200 shadow-lg rounded-xl">
            <DialogTitle className="text-slate-800">Connect to StartupOS AI Platform</DialogTitle>
            <DialogDescription className="text-md text-slate-500">
              <div className="flex items-start gap-2">
                <span className="text-primary">
                  🚀
                </span>
                <span>
                  <strong>Welcome to StartupOS AI Platform!</strong> Enter your startup ID to connect with our AI business advisor.  
                  <br />
                  Get real-time strategic guidance, cost optimization insights, and revenue intelligence.
                </span>
              </div>
            </DialogDescription>

            <Input
              type="tel"
              placeholder="STARTUP-ID-001"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-slate-50 border-slate-200 text-slate-800 rounded-lg focus:ring-2 focus:ring-primary/20 transition-all"
            />

            <DialogFooter>
              <Button 
                onClick={startCall}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-lg transition-all duration-300 hover:shadow-md"
              >
                <Brain className="h-4 w-4 mr-2" />
                Connect to AI Advisor
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Startup Profile Header */}
      {!isCallActive && (
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <Avatar className="h-14 w-14 border-2 border-primary shadow-lg ring-2 ring-white transition-all duration-300 group-hover:scale-105">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex Chen" />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">AC</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-success border-2 border-white animate-pulse"></span>
              </div>
              <div>
                <div className="flex items-center">
                  <h3 className="text-lg font-semibold text-slate-800">Alex Chen</h3>
                  <Badge className="ml-2 bg-gradient-to-r from-primary to-accent text-white animate-pulse">
                    <Crown className="h-3 w-3 mr-1" /> Founder
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-slate-500 mt-1">
                  <div className="flex items-center mr-3">
                    <Clock className="h-3 w-3 mr-1" /> 
                    <span>Building since 6 months</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1">TechFlow AI - Series A Ready</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="bg-success/10 px-3 py-1 rounded-full flex items-center">
                  <div className="h-2 w-2 bg-success rounded-full animate-pulse mr-2"></div>
                  <span className="text-sm font-medium text-success">Growing</span>
                </div>
                <div className="bg-primary/10 px-3 py-1 rounded-full flex items-center">
                  <TrendingUp className="h-3 w-3 text-primary mr-1" />
                  <span className="text-sm font-medium text-primary">3.2x Revenue Growth</span>
                </div>
                <div className="bg-accent/10 px-3 py-1 rounded-full flex items-center">
                  <DollarSign className="h-3 w-3 text-accent mr-1" />
                  <span className="text-sm font-medium text-accent">$50K MRR</span>
                </div>
              </div>
              <div className="h-2 bg-slate-100 rounded-full w-full">
                <div className="h-2 bg-gradient-to-r from-success to-primary rounded-full w-[78%]"></div>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Funding Goal: $2M</span>
                <span>$1.56M Raised</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {isCallActive ? (
        <div className="space-y-6 animate-fade-in">
          <LiveCallCard
            currentSentiment={currentSentiment}
            callDuration={callDuration}
            formatTime={formatTime}
            phoneNumber={phoneNumber}
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <CallTranscriptCard phoneNumber={phoneNumber} />
            </div>
            <div className="space-y-6">
              <LiveKnowledgeBaseCard />              
              <QuickResponseCard sentiment={currentSentiment} />              
            </div>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="lg:row-span-1">
              <PerformanceMetricsCard />
            </div>
            <SmartRemindersCard />
            <CallHistoryCard />
            <KnowledgeBaseCard />
            
            <div className="md:col-span-2 lg:col-span-1">
              <ClaimDocumentsCard/>
            </div>
            
            <div className="md:col-span-2 lg:col-span-1">
              <CallbackSchedulerCard />
            </div>
            {lastCallReport && (
              <div className="mt-6">
                <LastCallReport phoneNumber={phoneNumber} customerId="STARTUP-001" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentDashboard;
