
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
    <Card className="bg-[#1E293B]/90 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-100">
          <MessageSquare className="h-5 w-5 text-cyan-400" />
          Quick Responses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2 p-3 bg-[#0F172A]/60 rounded-lg"
            >
              <p className="text-sm text-gray-300">{suggestion}</p>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleSendResponse(suggestion)}
                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
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
