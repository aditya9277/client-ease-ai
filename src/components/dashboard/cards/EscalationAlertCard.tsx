
import { AlertTriangle, ThumbsUp, ThumbsDown, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";

interface EscalationAlertCardProps {
  phoneNumber: string;
  isLoading?: boolean;
}

export const EscalationAlertCard = ({ phoneNumber, isLoading = false }: EscalationAlertCardProps) => {
  const [needsEscalation, setNeedsEscalation] = useState<boolean | null>(null);
  const [reason, setReason] = useState<string>("");
  const [timeRemaining, setTimeRemaining] = useState<number>(180); // 3 minutes in seconds
  const [isCardLoading, setIsCardLoading] = useState(true);

  useEffect(() => {
    const fetchEscalationData = async () => {
      try {
        setIsCardLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/logs/escalation/${phoneNumber}`);
        const data = response.data;
        
        if (data && typeof data.needsEscalation === 'boolean') {
          setNeedsEscalation(data.needsEscalation);
          setReason(data.reason || "");
        }
        setIsCardLoading(false);
      } catch (error) {
        console.error("Error fetching escalation data:", error);
        setIsCardLoading(false);
      }
    };

    const interval = setInterval(fetchEscalationData, 5000);
    return () => clearInterval(interval);
  }, [phoneNumber]);

  useEffect(() => {
    if (needsEscalation) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 0) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [needsEscalation]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleEscalate = () => {
    toast.success("Call escalated to supervisor successfully");
    setNeedsEscalation(false);
  };

  const handleResolve = () => {
    toast.success("Marked as resolved without escalation");
    setNeedsEscalation(false);
  };

  if (isCardLoading || isLoading) {
    return (
      <Card className="medical-card border-orange-400/20 hover:border-orange-400/40 animate-pulse">
        <CardHeader className="bg-orange-500/10">
          <CardTitle className="flex items-center gap-2 text-orange-500">
            <AlertTriangle className="h-5 w-5" />
            Escalation Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex flex-col items-center justify-center space-y-3 py-6">
            <div className="h-4 bg-slate-200 w-3/4 rounded"></div>
            <div className="h-4 bg-slate-200 w-1/2 rounded"></div>
            <div className="flex space-x-3 mt-4">
              <div className="h-8 w-24 bg-slate-200 rounded"></div>
              <div className="h-8 w-24 bg-slate-200 rounded"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (needsEscalation === null || needsEscalation === false) {
    return (
      <Card className="medical-card">
        <CardHeader className="bg-green-500/10">
          <CardTitle className="flex items-center gap-2 text-green-500">
            <ThumbsUp className="h-5 w-5" />
            No Escalation Needed
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-center py-6">
            <p className="text-slate-700">Current call is being handled well.</p>
            <p className="text-sm text-slate-500 mt-2">AI is monitoring the conversation for any issues.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="medical-card border-red-500/20 hover:border-red-500/40 animate-pulse">
      <CardHeader className="bg-red-500/10">
        <CardTitle className="flex items-center gap-2 text-red-500">
          <AlertTriangle className="h-5 w-5" />
          Escalation Alert
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-red-700">Escalation Recommended</p>
                <p className="text-sm text-red-600 mt-1">{reason}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="flex items-center bg-orange-100 px-3 py-1 rounded-full">
              <Clock className="h-4 w-4 text-orange-500 mr-1" />
              <span className="text-sm font-medium text-orange-600">Auto-escalation in: {formatTime(timeRemaining)}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <Button 
              variant="destructive" 
              onClick={handleEscalate}
              className="bg-red-500 hover:bg-red-600 shadow-sm"
            >
              Escalate Now
            </Button>
            <Button 
              variant="outline" 
              onClick={handleResolve}
              className="border-slate-300 text-slate-700 hover:bg-slate-100"
            >
              Resolve Without Escalation
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
