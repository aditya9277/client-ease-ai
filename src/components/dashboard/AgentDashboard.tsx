
import { useState, useEffect, useRef } from "react";
import { Phone, FileText, Brain, Lightbulb, AlertCircle, BookOpen, BarChart2, MessageSquare } from "lucide-react";
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

const AgentDashboard = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [currentSentiment, setCurrentSentiment] = useState(85);
  const [callDuration, setCallDuration] = useState(0);
  const [lastCallReport, setLastCallReport] = useState<string | null>(null);
  const [transcriptText, setTranscriptText] = useState<string>("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Simulate real-time sentiment analysis
  useEffect(() => {
    if (isCallActive) {
      const sentimentInterval = setInterval(() => {
        setCurrentSentiment(prev => {
          const change = Math.random() * 10 - 5;
          return Math.max(0, Math.min(100, prev + change));
        });
      }, 3000);

      return () => clearInterval(sentimentInterval);
    }
  }, [isCallActive]);

  // Call duration timer
  useEffect(() => {
    if (isCallActive) {
      timerRef.current = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isCallActive]);

  // Simulate real-time transcription
  useEffect(() => {
    if (isCallActive) {
      const phrases = [
        "Customer: I've been having issues with my recent claim...",
        "Agent: I understand your concern, let me look into that for you...",
        "Customer: Thank you, I appreciate your help...",
      ];
      let phraseIndex = 0;

      const transcriptInterval = setInterval(() => {
        if (phraseIndex < phrases.length) {
          setTranscriptText(prev => prev + "\n" + phrases[phraseIndex]);
          phraseIndex++;
        }
      }, 5000);

      return () => clearInterval(transcriptInterval);
    }
  }, [isCallActive]);

  const handleCallToggle = () => {
    if (isCallActive) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      const report = `Call_Report_${new Date().toISOString().split('T')[0]}.pdf`;
      setLastCallReport(report);
      setCallDuration(0);
      setTranscriptText("");
      toast.success("Call ended successfully");
    } else {
      toast.success("Call started - AI assistance activated");
    }
    setIsCallActive(!isCallActive);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="relative">
        {/* Glassmorphism container */}
        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl rounded-3xl" />
        
        {/* Header */}
        <div className="relative flex items-center justify-between p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
              AI-Powered Agent Hub
            </h2>
            <p className="text-blue-100/80">
              Elevating customer interactions with intelligent insights
            </p>
          </div>
          <Button 
            variant={isCallActive ? "destructive" : "default"}
            size="lg"
            className={`gap-2 ${
              isCallActive 
                ? "bg-red-500/90 hover:bg-red-600/90 shadow-red-500/20" 
                : "bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90 hover:from-blue-600/90 hover:via-purple-600/90 hover:to-pink-600/90"
            } text-white shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-md border border-white/10`}
            onClick={handleCallToggle}
          >
            <Phone className="h-4 w-4" />
            {isCallActive ? "End Call" : "Start Call"}
          </Button>
        </div>

        {/* Main Content */}
        <div className="mt-6">
          {isCallActive ? (
            <div className="space-y-6 animate-fade-in">
              <LiveCallCard 
                currentSentiment={currentSentiment}
                callDuration={callDuration}
                formatTime={formatTime}
              />
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-6">
                  <CallTranscriptCard transcriptText={transcriptText} />
                  <CustomerInsightsCard />
                </div>
                <div className="space-y-6">
                  <ActionRecommendationsCard sentiment={currentSentiment} />
                  <QuickResponseCard sentiment={currentSentiment} />
                </div>
              </div>
              <CustomerForm />
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="col-span-full lg:col-span-2">
                  <div className="grid gap-6 md:grid-cols-2">
                    <PreCallCard />
                    <ClaimsCard />
                  </div>
                </div>
                <div className="lg:row-span-2">
                  <PerformanceMetricsCard />
                </div>
                <SmartRemindersCard />
                <AutomationCard />
                <div className="md:col-span-2 lg:col-span-1">
                  <SentimentAnalysisCard />
                </div>
                <div className="md:col-span-2 lg:col-span-2">
                  <KnowledgeBaseCard />
                </div>
              </div>
              {lastCallReport && (
                <div className="mt-6">
                  <LastCallReport 
                    reportName={lastCallReport}
                    customerId="CUS-001"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
