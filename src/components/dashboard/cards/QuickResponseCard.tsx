
import { MessageSquare, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState, useEffect } from "react";

interface QuickResponseCardProps {
  sentiment: number;
}

export const QuickResponseCard = ({ sentiment }: QuickResponseCardProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    // Update suggestions based on sentiment
    if (sentiment < 40) {
      setSuggestions([
        "Refund terms and policy documents",
        "Company TV Troubleshoot guide",
        "Preferred time for our service agent's visit.",
      ]);
    } else if (sentiment < 70) {
      setSuggestions([
        "Refund terms and policy documents",
        "Company TV Troubleshoot guide",
        "Preferred time for our service agent's visit.",
      ]);
    } else {
      setSuggestions([
        "Refund terms and policy documents",
        "Company TV Troubleshoot guide",
        "Preferred time for our service agent's visit.",
      ]);
    }
  }, [sentiment]);

  const handleSendResponse = (response: string) => {
    toast.success("Response sent to customer");
  };

  return (
    <Card className="medical-card card-gradient-primary">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <div className="icon-container icon-container-primary">
            <MessageSquare className="h-5 w-5" />
          </div>
          Quick Responses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200"
            >
              <p className="text-sm text-slate-700">{suggestion}</p>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleSendResponse(suggestion)}
                className="text-primary hover:text-primary hover:bg-primary/10"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
