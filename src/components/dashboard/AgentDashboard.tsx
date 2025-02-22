
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
    <div className="space-y-8 p-4 min-h-screen bg-gradient-to-br from-slate-900 via-[#0B1121] to-[#090E1D] relative">
      {/* Gradient Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-purple-500/5 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
      
      {/* Content with relative positioning */}
      <div className="relative">
        <div className="flex items-center justify-between bg-[#1E293B]/80 backdrop-blur-md p-6 rounded-xl border border-cyan-500/20 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/10 transition-all duration-500">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 animate-gradient">
              AI-Powered Agent Assistance Hub
            </h2>
            <p className="text-slate-400">
              Enhance your customer interactions with AI-driven insights
            </p>
          </div>

          <div className="flex items-center">
            <div className="mr-4 flex items-center">
              <span className="text-white font-medium mr-2">Click here to test our prototype!</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>  

            <Button
              variant={isCallActive ? "destructive" : "default"}
              size="lg"
              className={`gap-2 transform hover:scale-105 transition-all duration-300 ${
                isCallActive
                  ? "bg-red-500 hover:bg-red-600 animate-pulse"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              } text-white shadow-lg hover:shadow-xl`}
              onClick={() => {
                if (isCallActive) {
                  handleCallToggle();
                } else {
                  setIsDialogOpen(true);
                }
              }}>
              <Phone className={`h-4 w-4 ${isCallActive ? 'animate-pulse' : 'animate-bounce'}`} />
              {isCallActive ? "End Call" : "Start Call"}
            </Button>
          </div>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-gradient-to-br from-slate-800 to-slate-900 border-cyan-500/20">
            <DialogTitle>Enter Phone Number</DialogTitle>
            <DialogDescription className="text-md text-gray-500">
              <div className="flex items-start gap-2">
                <span className="text-red-500">⚠️</span>
                <span>
                  <strong>NOTE:</strong> As we are using Twilio for call functionality, free-tier limitations prevent direct calls to unverified numbers.  
                  <br />
                  To test our prototype, please <strong>email at adisamarth20@gmail.com, with your phone number</strong>, so we can add it to our verified list for the trial period and ensure your successful testing.
                </span>
              </div>
            </DialogDescription>

            <Input
              type="tel"
              placeholder="91XXXXXXXXXX"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-slate-800/50 border-cyan-500/20"
            />

            <DialogFooter>
              <Button 
                onClick={startCall}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
              >
                Start Call
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {isCallActive ? (
          <div className="space-y-6 animate-fade-in">
            <LiveCallCard
              currentSentiment={currentSentiment}
              callDuration={callDuration}
              formatTime={formatTime}
              phoneNumber={phoneNumber}
            />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6 transform hover:scale-[1.02] transition-all duration-500">
                <CallTranscriptCard phoneNumber={phoneNumber} />
                <CustomerInsightsCard />
              </div>
              <div className="space-y-6 transform hover:scale-[1.02] transition-all duration-500">
                <EscalationAlertCard phoneNumber={phoneNumber} />
                <ActionRecommendationsCard sentiment={currentSentiment} />
                <QuickResponseCard sentiment={currentSentiment} />
                <LiveKnowledgeBaseCard />
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="lg:row-span-1 transform hover:scale-[1.02] transition-all duration-500">
                <PerformanceMetricsCard />
              </div>
              <div className="transform hover:scale-[1.02] transition-all duration-500">
                <SmartRemindersCard />
              </div>
              <div className="transform hover:scale-[1.02] transition-all duration-500">
                <CallHistoryCard />
              </div>
              <div className="transform hover:scale-[1.02] transition-all duration-500">
                <KnowledgeBaseCard />
              </div>
              {lastCallReport && (
                <div className="mt-6 transform hover:scale-[1.02] transition-all duration-500">
                  <LastCallReport phoneNumber={phoneNumber} customerId="CUS-001" />
                </div>
              )}
              <div className="md:col-span-2 lg:col-span-1 transform hover:scale-[1.02] transition-all duration-500">
                <ClaimDocumentsCard/>
              </div>
              <div className="md:col-span-2 lg:col-span-1 transform hover:scale-[1.02] transition-all duration-500">
                <CallbackSchedulerCard />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentDashboard;
