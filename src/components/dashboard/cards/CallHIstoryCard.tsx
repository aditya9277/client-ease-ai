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

  // ✅ Fetch Call Summaries
  useEffect(() => {
    const fetchCallHistory = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logs/call-history`);
        setCallHistory(data);
      } catch (error) {
        console.error("❌ Error fetching call history:", error);
      }
    };
    fetchCallHistory();
  }, []);

  // ✅ Fetch & Display Selected Summary
  const handleViewSummary = async (filePath: string) => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}${filePath}`, { responseType: "text" });
      setSelectedSummary(data);
      setOpen(true);
    } catch (error) {
      console.error("❌ Error fetching call summary:", error);
    }
  };

  return (
    <>
      <Card className="bg-[#252A3C] border-purple-500/20 hover:border-purple-500/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-100">
            <History className="h-5 w-5 text-purple-400" />
            Call History
          </CardTitle>
        </CardHeader>
        <CardContent>
          {callHistory.length === 0 ? (
            <p className="text-gray-400">No past calls found.</p>
          ) : (
            <ul className="space-y-3">
              {callHistory.map((call) => (
                <li key={call.phoneNumber} className="flex items-center justify-between p-3 rounded-md bg-[#1A1F2C]">
                  <span className="text-gray-300">📞 {call.phoneNumber}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-purple-400 border-purple-500/20 hover:text-purple-300"
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

      {/* 🔍 Call Summary Popup */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#252A3C] border border-purple-500/20">
          <DialogHeader>
            <DialogTitle className="text-gray-100">Call Summary</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <pre className="text-sm text-gray-300 whitespace-pre-wrap">{selectedSummary || "Loading..."}</pre>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
