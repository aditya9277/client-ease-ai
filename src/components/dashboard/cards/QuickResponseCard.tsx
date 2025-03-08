
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
        "I understand your frustration. Let me help resolve this issue immediately.",
        "I apologize for any inconvenience. Let's work together to find a solution.",
        "Your satisfaction is our priority. Here's what I can do to help...",
      ]);
    } else if (sentiment < 70) {
      setSuggestions([
        "Thank you for bringing this to our attention. Let me check that for you.",
        "I'll be happy to assist you with this matter.",
        "Let me guide you through the process step by step.",
      ]);
    } else {
      setSuggestions([
        "I'm glad to hear that! Let me help you further optimize your experience.",
        "That's great! Would you like to learn about our additional services?",
        "Thank you for your positive feedback. Is there anything else I can help with?",
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
            <MessageSquare className="h-4 w-4" /> {/* Reduced from h-5 w-5 to h-4 w-4 */}
          </div>
          Quick Responses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2"> {/* Reduced from space-y-4 to space-y-2 */}
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200" 
              /* Reduced padding from p-3 to p-2 */
            >
              <p className="text-xs text-slate-700">{suggestion}</p> {/* Reduced from text-sm to text-xs */}
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleSendResponse(suggestion)}
                className="text-primary hover:text-primary hover:bg-primary/10"
              >
                <Send className="h-3 w-3" /> {/* Reduced from h-4 w-4 to h-3 w-3 */}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
