
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
  Sparkles
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

      toast.success("Call initiated successfully!");
    } catch (error) {
      console.error("Call failed:", error);
      toast.error("Call failed! Check console.");
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
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-info to-accent">
            AI-Powered Farmer Assistance Hub
          </h2>
          <p className="text-slate-500">
            Enhance your farming with AI-driven insights and solutions
          </p>
        </div>

        <div className="flex items-center">
          <div className="mr-4 flex items-center">
            <span className="text-slate-700 font-medium mr-2">Click here to test our prototype!</span>
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
                : "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 animate-float"
            } text-white font-medium rounded-full`}
            onClick={() => {
              if (isCallActive) {
                handleCallToggle();
              } else {
                setIsDialogOpen(true);
              }
            }}>
            <Phone className="h-4 w-4" />
            {isCallActive ? "End Call" : "Start Call"}
            {!isCallActive && <Sparkles className="h-3 w-3 ml-1 text-yellow-200" />}
          </Button>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-white border border-slate-200 shadow-lg rounded-xl">
            <DialogTitle className="text-slate-800">Enter Farmer's Mobile Number</DialogTitle>
            <DialogDescription className="text-md text-slate-500">
              <div className="flex items-start gap-2">
                <span className="text-destructive">
                  ⚠️
                </span>
                <span>
                  <strong>NOTE:</strong> As we are using Twilio for call functionality, free-tier limitations prevent direct calls to unverified numbers.  
                  <br />
                  To test our prototype, please email us, so we can add it to our verified list for the trial period and ensure your successful testing.
                </span>
              </div>
            </DialogDescription>

            <Input
              type="tel"
              placeholder="91XXXXXXXXXX"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-slate-50 border-slate-200 text-slate-800 rounded-lg focus:ring-2 focus:ring-primary/20 transition-all"
            />

            <DialogFooter>
              <Button 
                onClick={startCall}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-lg transition-all duration-300 hover:shadow-md"
              >
                <Phone className="h-4 w-4 mr-2" />
                Start Call
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      {/* Agent Profile Header */}
      {!isCallActive && <ProfileCard/> }
      
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
              <EscalationAlertCard phoneNumber={phoneNumber} />
            </div>
            <div className="space-y-6">
              <CustomerInsightsCard />
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
                <LastCallReport phoneNumber={phoneNumber} customerId="FRM-001" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentDashboard;
