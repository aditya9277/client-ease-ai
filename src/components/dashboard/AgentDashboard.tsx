
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
  Info,
  HelpCircle,
  Pointer,
  Check,
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

const AgentDashboard = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [currentSentiment, setCurrentSentiment] = useState(85);
  const [callDuration, setCallDuration] = useState(0);
  const [lastCallReport, setLastCallReport] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showWalkthrough, setShowWalkthrough] = useState(() => {
    const hasVisited = localStorage.getItem("hasVisitedDashboard");
    return !hasVisited;
  });

  useEffect(() => {
    if (showWalkthrough) {
      localStorage.setItem("hasVisitedDashboard", "true");
    }
  }, [showWalkthrough]);

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
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-purple-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
      
      {/* Content with relative positioning */}
      <div className="relative">
        <div className="flex items-center justify-between bg-[#1E293B]/80 backdrop-blur-md p-6 rounded-xl border border-cyan-500/20 shadow-lg shadow-cyan-500/5">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400">
              AI-Powered Agent Assistance Hub
            </h2>
            <p className="text-slate-400">
              Enhance your customer interactions with AI-driven insights
            </p>
          </div>
          <div className="relative">
            <Button
              variant={isCallActive ? "destructive" : "default"}
              size="lg"
              className={`gap-2 ${
                isCallActive
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              } text-white shadow-lg hover:shadow-xl transition-all duration-300`}
              onClick={() => {
                if (isCallActive) {
                  handleCallToggle();
                } else {
                  setIsDialogOpen(true);
                }
              }}>
              <Phone className="h-4 w-4" />
              {isCallActive ? "End Call" : "Start Call"}
            </Button>
          </div>
        </div>

        {showWalkthrough && !isCallActive && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 max-w-md">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Welcome to the Agent Dashboard!</h3>
                    <p className="text-gray-300 mb-4">
                      Click the "Start Call" button in the top right to test our prototype with a live call. 
                      You'll need to verify your phone number first.
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button 
                    variant="default"
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                    onClick={() => setShowWalkthrough(false)}
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Got it
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dialog for phone number input */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogTitle>Enter Phone Number</DialogTitle>
            <DialogDescription>
              Please enter your phone number to start the call.
            </DialogDescription>
            <Input
              type="tel"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={startCall}>Start Call</Button>
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
              <div className="space-y-6">
                <CallTranscriptCard phoneNumber={phoneNumber} />
                <CustomerInsightsCard />
              </div>
              <div className="space-y-6">
                <ActionRecommendationsCard sentiment={currentSentiment} />
                <QuickResponseCard sentiment={currentSentiment} />
                <LiveKnowledgeBaseCard />
              </div>
            </div>
            <CustomerForm />
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
              {lastCallReport && (
                <div className="mt-6">
                  <LastCallReport phoneNumber={phoneNumber} customerId="CUS-001" />
                </div>
              )}
              <div className="md:col-span-2 lg:col-span-1">
                <SentimentAnalysisCard />
              </div>
              <div className="md:col-span-2 lg:col-span-1">
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
