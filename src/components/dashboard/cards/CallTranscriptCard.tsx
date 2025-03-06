
import { useState, useEffect } from "react";
import axios from "axios";
import { FileText, MessageSquareText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CallTranscriptCardProps {
  phoneNumber: string;
  isLoading?: boolean;
}

export const CallTranscriptCard = ({ phoneNumber, isLoading = false }: CallTranscriptCardProps) => {
  const [transcriptText, setTranscriptText] = useState("Waiting for call to begin...");
  const [isCardLoading, setIsCardLoading] = useState(true);

  // ✅ Fetch transcript in real-time
  const fetchTranscript = async () => {
    try {
      setIsCardLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/logs/transcript/${phoneNumber}`);
      setTranscriptText(response.data);
      setIsCardLoading(false);
    } catch (error) {
      console.error("❌ Failed to fetch transcript:", error);
      setIsCardLoading(false);
    }
  };

  useEffect(() => {
    // 🔄 Fetch transcript every 1.5 seconds
    const interval = setInterval(fetchTranscript, 1500);
    return () => clearInterval(interval); // ✅ Cleanup interval on unmount
  }, [phoneNumber]);

  return (
    <Card className="medical-card card-gradient-info">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-md font-medium text-slate-800">
          <div className="flex items-center gap-2">
            <div className="icon-container icon-container-info">
              <MessageSquareText className="h-5 w-5" />
            </div>
            Live Call Transcript
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isCardLoading || isLoading ? (
          <div className="h-[300px] w-full rounded-md border border-slate-200 bg-slate-50 p-4 shadow-sm flex flex-col justify-center items-center space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-info rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-info rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-info rounded-full animate-bounce delay-200"></div>
            </div>
            <p className="text-sm text-slate-500 text-center">Loading call transcript...</p>
          </div>
        ) : (
          <ScrollArea className="h-[300px] w-full rounded-md border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <pre className="text-sm whitespace-pre-wrap font-mono text-slate-600 leading-relaxed">
              {transcriptText}
            </pre>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
};
