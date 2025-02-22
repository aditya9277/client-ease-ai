
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
    <div className="space-y-8 p-4 min-h-screen relative overflow-hidden bg-[#030711]">
      {/* Modern Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0f1829] via-[#0f172a] to-[#0c1222] -z-10" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10" />
      
      {/* Ambient background effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/10 via-transparent to-purple-400/10 animate-gradient" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px] bg-[0_0] dark:[mask-image:linear-gradient(to_bottom,transparent,black)]" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Header Card */}
        <div className="glass-card rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  AI-Powered Agent Assistance Hub
                </span>
              </h2>
              <p className="text-zinc-400">
                Enhance your customer interactions with AI-driven insights
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center">
                <span className="text-zinc-300 font-medium mr-3">Test our prototype!</span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 flex items-center justify-center animate-bounce">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              <Button
                variant={isCallActive ? "destructive" : "default"}
                size="lg"
                className={`relative overflow-hidden group ${
                  isCallActive
                    ? "bg-red-500/90 hover:bg-red-600/90"
                    : "bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
                } text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                onClick={() => {
                  if (isCallActive) {
                    handleCallToggle();
                  } else {
                    setIsDialogOpen(true);
                  }
                }}>
                <span className="absolute inset-0 w-full h-full animate-shimmer" />
                <span className="relative flex items-center gap-2">
                  <Phone className={`h-4 w-4 ${isCallActive ? 'animate-pulse' : ''}`} />
                  {isCallActive ? "End Call" : "Start Call"}
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Dialog styling */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="glass-card border-none bg-gradient-to-b from-zinc-900/95 to-black/95">
            <DialogTitle className="text-zinc-200">Enter Phone Number</DialogTitle>
            <DialogDescription>
              <div className="flex items-start gap-3 bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-red-400">Important Note</p>
                  <p className="text-zinc-400 leading-relaxed">
                    Due to Twilio free-tier limitations, only verified numbers can receive calls. 
                    Email <span className="text-teal-400">adisamarth20@gmail.com</span> to get your number verified for testing.
                  </p>
                </div>
              </div>
            </DialogDescription>

            <Input
              type="tel"
              placeholder="91XXXXXXXXXX"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-white/5 border-white/10 text-zinc-200 placeholder:text-zinc-600"
            />

            <DialogFooter>
              <Button 
                onClick={startCall}
                className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white transition-all duration-300 hover:scale-105"
              >
                Start Call
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Main content area with modern card styling */}
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
                <div className="hover-card glass-card rounded-xl">
                  <CallTranscriptCard phoneNumber={phoneNumber} />
                </div>
                <div className="hover-card glass-card rounded-xl">
                  <CustomerInsightsCard />
                </div>
              </div>
              <div className="space-y-6">
                <div className="hover-card glass-card rounded-xl">
                  <EscalationAlertCard phoneNumber={phoneNumber} />
                </div>
                <div className="hover-card glass-card rounded-xl">
                  <ActionRecommendationsCard sentiment={currentSentiment} />
                </div>
                <div className="hover-card glass-card rounded-xl">
                  <QuickResponseCard sentiment={currentSentiment} />
                </div>
                <div className="hover-card glass-card rounded-xl">
                  <LiveKnowledgeBaseCard />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="hover-card glass-card rounded-xl">
                <PerformanceMetricsCard />
              </div>
              <div className="hover-card glass-card rounded-xl">
                <SmartRemindersCard />
              </div>
              <div className="hover-card glass-card rounded-xl">
                <CallHistoryCard />
              </div>
              <div className="hover-card glass-card rounded-xl">
                <KnowledgeBaseCard />
              </div>
              {lastCallReport && (
                <div className="hover-card glass-card rounded-xl">
                  <LastCallReport phoneNumber={phoneNumber} customerId="CUS-001" />
                </div>
              )}
              <div className="md:col-span-2 lg:col-span-1 hover-card glass-card rounded-xl">
                <ClaimDocumentsCard />
              </div>
              <div className="md:col-span-2 lg:col-span-1 hover-card glass-card rounded-xl">
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
