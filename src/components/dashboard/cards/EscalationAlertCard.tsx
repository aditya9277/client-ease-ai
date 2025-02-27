import { AlertTriangle, Eye, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

export const EscalationAlertCard = ({ phoneNumber }) => {
  const [escalations, setEscalations] = useState([]);
  const [selectedEscalation, setSelectedEscalation] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchEscalations = async () => {
      try {
        if (!phoneNumber) return;

        const response = await axios.get(
          `https://twilio-ai-backend-gegfdfd9gnf2g9hg.southindia-01.azurewebsites.net/logs/escalation_${phoneNumber}.txt`,
          { responseType: "text" }
        );

        const escalations = response.data
          .split("\n")
          .filter(Boolean)
          .map((line) => {
            try {
              return JSON.parse(line);
            } catch (error) {
              console.error("❌ JSON Parse Error:", line, error);
              return null;
            }
          })
          .filter(Boolean);

        setEscalations(escalations);
      } catch (error) {
        console.error("❌ Error fetching escalations:", error);
        setEscalations([]);
      }
    };

    const interval = setInterval(fetchEscalations, 3000);
    return () => clearInterval(interval);
  }, [phoneNumber]);

  const handleViewEscalation = (escalation) => {
    setSelectedEscalation(escalation);
    setOpen(true);
  };

  const handleEscalateToManager = async () => {
    try {
      if (!selectedEscalation) return;

      // ✅ Simulating escalation process (Replace with real API)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(`Escalation sent to manager: ${selectedEscalation.reason}`);
      setOpen(false);
    } catch (error) {
      toast.error("Failed to escalate to manager.");
      console.error("Escalation error:", error);
    }
  };

  return (
    <>
      <Card className="bg-[#1E293B]/90 backdrop-blur-sm border-red-500/20 hover:border-red-500/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-400 animate-pulse">
            <AlertTriangle className="h-5 w-5" />
            Critical Escalations
          </CardTitle>
        </CardHeader>
        <CardContent>
          {escalations.length === 0 ? (
            <p className="text-gray-400">No escalations at the moment.</p>
          ) : (
            <ul className="space-y-3 max-h-60 overflow-y-auto scrollbar-hide">
              {escalations.map((escalation, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-3 bg-[#0F172A]/60 rounded-lg border border-red-500/20"
                >
                  <div>
                    <p className="text-gray-300">📞 Escalation at: {new Date(escalation.timestamp).toLocaleString()}</p>
                    <p className="text-sm text-red-300">Reason: {escalation.reason}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-400 border-red-500/20 hover:text-red-300 hover:bg-red-500/10"
                    onClick={() => handleViewEscalation(escalation)}
                  >
                    <Eye className="h-4 w-4 mr-1" /> View
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* 📌 Escalation Details Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#1E293B]/90 border border-red-500/20">
          <DialogHeader>
            <DialogTitle className="text-gray-100">Escalation Details</DialogTitle>
          </DialogHeader>
          {selectedEscalation && (
            <div className="p-4 bg-[#0F172A]/60 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-red-400">📞 Customer:</strong> {selectedEscalation.phoneNumber}
              </p>
              <p className="text-sm text-gray-300">
                <strong className="text-red-400">🕒 Time:</strong> {new Date(selectedEscalation.timestamp).toLocaleString()}
              </p>
              <p className="text-sm text-red-300 mt-2">
                <strong>⚠️ Reason:</strong> {selectedEscalation.reason}
              </p>
              <p className="text-sm text-gray-300">
                <strong>🧠 Sentiment:</strong> {selectedEscalation.sentiment}
              </p>
            </div>
          )}
          <DialogFooter>
            <Button
              size="sm"
              variant="outline"
              className="text-red-400 border-red-500/20 hover:text-red-300 hover:bg-red-500/10"
              onClick={handleEscalateToManager}
            >
              <Send className="h-4 w-4 mr-1" /> Escalate to Manager
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
