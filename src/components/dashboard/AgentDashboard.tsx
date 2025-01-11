import { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { LiveCallCard } from "./cards/LiveCallCard";
import { PreCallCard } from "./cards/PreCallCard";
import { ClaimsCard } from "./cards/ClaimsCard";
import { SmartRemindersCard } from "./cards/SmartRemindersCard";
import { AutomationCard } from "./cards/AutomationCard";
import { SentimentAnalysisCard } from "./cards/SentimentAnalysisCard";
import { LastCallReport } from "./LastCallReport";

const AgentDashboard = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [currentSentiment, setCurrentSentiment] = useState(85);
  const [callDuration, setCallDuration] = useState(0);
  const [lastCallReport, setLastCallReport] = useState<string | null>(null);

  const handleCallToggle = () => {
    if (isCallActive) {
      const report = `Call_Report_${new Date().toISOString().split('T')[0]}.pdf`;
      setLastCallReport(report);
      toast.success("Call ended successfully");
    } else {
      setCallDuration(0);
      const timer = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
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
        <h2 className="text-2xl font-bold">Agent Assistance Hub</h2>
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
        <LiveCallCard 
          currentSentiment={currentSentiment}
          callDuration={callDuration}
          formatTime={formatTime}
        />
      ) : (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <PreCallCard />
            <ClaimsCard />
            <SmartRemindersCard />
            <AutomationCard />
            <SentimentAnalysisCard />
          </div>
          {lastCallReport && (
            <LastCallReport 
              reportName={lastCallReport}
              customerId="CUS-001"
            />
          )}
        </>
      )}
    </div>
  );
};

export default AgentDashboard;