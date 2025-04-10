
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
          `https://client-ease-ai-bd.azurewebsites.net/logs/escalation_${phoneNumber}.txt`,
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

    const interval = setInterval(fetchEscalations, 500);
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

      toast.success(`Issue escalated to agricultural expert: ${selectedEscalation.reason}`);
      setOpen(false);
    } catch (error) {
      toast.error("Failed to escalate to agricultural expert.");
      console.error("Escalation error:", error);
    }
  };

  return (
    <>
      <Card className="medical-card card-gradient-destructive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <div className="icon-container icon-container-destructive">
              <AlertTriangle className="h-4 w-4" />
            </div>
            Critical Farm Issues
          </CardTitle>
        </CardHeader>
        <CardContent>
          {escalations.length === 0 ? (
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center h-32">
              <p className="text-slate-500">No critical issues at the moment.</p>
            </div>
          ) : (
            <ul className="space-y-3 max-h-60 overflow-y-auto scrollbar-hide">
              {escalations.map((escalation, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-destructive/10 hover:border-destructive/30 transition-all duration-300"
                >
                  <div>
                    <p className="text-slate-700">📞 Issue reported at: {new Date(escalation.timestamp).toLocaleString()}</p>
                    <p className="text-sm text-destructive">Issue: {escalation.reason}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-destructive border-destructive/20 hover:text-destructive hover:bg-destructive/5"
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
        <DialogContent className="bg-white border border-destructive/10 rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-slate-800">Farm Issue Details</DialogTitle>
          </DialogHeader>
          {selectedEscalation && (
            <div className="p-4 bg-slate-50 rounded-lg border border-destructive/10">
              <p className="text-sm text-slate-700">
                <strong className="text-destructive">📞 Farmer:</strong> {selectedEscalation.phoneNumber}
              </p>
              <p className="text-sm text-slate-700">
                <strong className="text-destructive">🕒 Time:</strong> {new Date(selectedEscalation.timestamp).toLocaleString()}
              </p>
              <p className="text-sm text-destructive mt-2">
                <strong>⚠️ Issue:</strong> {selectedEscalation.reason}
              </p>
              <p className="text-sm text-slate-700">
                <strong>🧠 Urgency Level:</strong> {selectedEscalation.sentiment}
              </p>
            </div>
          )}
          <DialogFooter>
            <Button
              size="sm"
              variant="outline"
              className="text-destructive border-destructive/20 hover:text-destructive hover:bg-destructive/5"
              onClick={handleEscalateToManager}
            >
              <Send className="h-4 w-4 mr-1" /> Escalate to Agricultural Expert
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
