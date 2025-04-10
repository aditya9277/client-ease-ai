
import { History, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import axios from "axios";

export const CallHistoryCard = () => {
  const [callHistory, setCallHistory] = useState<{ phoneNumber: string; filePath: string }[]>([]);
  const [selectedSummary, setSelectedSummary] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchCallHistory = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logs/call-history`);
        setCallHistory(data);
      } catch (error) {
        console.error("Error fetching call history:", error);
      }
    };
    fetchCallHistory();
  }, []);

  const handleViewSummary = async (filePath: string) => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}${filePath}`, { responseType: "text" });
      setSelectedSummary(data);
      setOpen(true);
    } catch (error) {
      console.error("Error fetching call summary:", error);
    }
  };

  return (
    <>
      <Card className="medical-card card-gradient-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <History className="h-5 w-5 text-cyan-400" />
            Past Consultations
          </CardTitle>
        </CardHeader>
        <CardContent>
          {callHistory.length === 0 ? (
            <p className="text-sm text-slate-600">No past consultations found.</p>
          ) : (
            <ul className="max-h-64 overflow-y-auto space-y-3 scrollbar-hide">
              {callHistory.map((call) => (
                <li key={call.phoneNumber} className="flex items-center justify-between p-3 rounded-md bg-slate-50 border border-slate-200 text-slate-800">
                  <span className="text-slate-800">📞 {call.phoneNumber}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-cyan-400 border-cyan-500/20 hover:text-cyan-300 hover:bg-cyan-500/10"
                    onClick={() => handleViewSummary(call.filePath)}
                  >
                    <Eye className="h-4 w-4 mr-1" /> View Summary
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#1E293B]/90 border border-cyan-500/20">
          <DialogHeader>
            <DialogTitle className="text-gray-100">Consultation Summary</DialogTitle>
          </DialogHeader>
          <div className="p-4 bg-[#0F172A]/60 rounded-lg">
            <pre className="text-sm text-gray-300 whitespace-pre-wrap">{selectedSummary || "Loading..."}</pre>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
