import { useState, useEffect } from "react";
import { Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ActionRecommendationsCardProps {
  sentiment: number;
}

export const ActionRecommendationsCard = ({ sentiment }: ActionRecommendationsCardProps) => {
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    // Update recommendations based on sentiment
    if (sentiment < 40) {
      setRecommendations([
        "Acknowledge customer frustration",
        "Offer immediate escalation to supervisor",
        "Provide compensation options",
      ]);
    } else if (sentiment < 70) {
      setRecommendations([
        "Explain process step-by-step",
        "Offer additional resources",
        "Schedule follow-up call",
      ]);
    } else {
      setRecommendations([
        "Present upgrade opportunities",
        "Ask for testimonial",
        "Offer loyalty rewards",
      ]);
    }
  }, [sentiment]);

  const handleActionClick = (action: string) => {
    toast.success(`Action taken: ${action}`);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">AI Recommendations</CardTitle>
        <Lightbulb className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-start text-left"
              onClick={() => handleActionClick(action)}
            >
              <Lightbulb className="mr-2 h-4 w-4" />
              {action}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};