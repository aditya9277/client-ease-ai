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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">AI-Powered Agent Assistance Hub</h2>
        <Button 
          variant={isCallActive ? "destructive" : "default"}
          className="gap-2"
          onClick={handleCallToggle}
        >
          <Phone className="h-4 w-4" />
          {isCallActive ? "End Call" : "Start Call"}
        </Button>
      </div>

      {isCallActive ? (
        <div className="space-y-6">
          <LiveCallCard 
            currentSentiment={currentSentiment}
            callDuration={callDuration}
            formatTime={formatTime}
          />
          
          <div className="grid gap-6 md:grid-cols-2">
            <CallTranscriptCard transcriptText={transcriptText} />
            <ActionRecommendationsCard sentiment={currentSentiment} />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <CustomerInsightsCard />
            <QuickResponseCard sentiment={currentSentiment} />
          </div>
          <CustomerForm/>
        </div>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PreCallCard />
            <ClaimsCard />
            <SmartRemindersCard />
            <AutomationCard />
            <SentimentAnalysisCard />
            <KnowledgeBaseCard />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <PerformanceMetricsCard />
            {lastCallReport && (
              <LastCallReport 
                reportName={lastCallReport}
                customerId="CUS-001"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AgentDashboard;