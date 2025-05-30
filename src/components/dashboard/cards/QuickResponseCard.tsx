
import { Rocket, Send, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState, useEffect } from "react";

interface QuickResponseCardProps {
  sentiment: number;
}

export const QuickResponseCard = ({ sentiment }: QuickResponseCardProps) => {
  const [businessActions, setBusinessActions] = useState<string[]>([]);

  useEffect(() => {
    // Update business actions based on business health score
    if (sentiment < 40) {
      setBusinessActions([
        "Critical: Review cash flow and cut non-essential expenses",
        "Urgent: Contact investors for bridge funding options",
        "Emergency: Pivot strategy discussion needed",
      ]);
    } else if (sentiment < 70) {
      setBusinessActions([
        "Optimize: Review operational efficiency metrics",
        "Improve: Customer acquisition cost analysis",
        "Focus: Product-market fit validation needed",
      ]);
    } else {
      setBusinessActions([
        "Scale: Prepare for Series A fundraising",
        "Expand: Market expansion opportunity analysis",
        "Accelerate: Team hiring and growth planning",
      ]);
    }
  }, [sentiment]);

  const handleExecuteAction = (action: string) => {
    toast.success("Business action queued for execution");
  };

  return (
    <Card className="medical-card card-gradient-primary">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <div className="icon-container icon-container-primary">
            <TrendingUp className="h-5 w-5" />
          </div>
          Smart Business Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {businessActions.map((action, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200"
            >
              <p className="text-sm text-slate-700">{action}</p>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleExecuteAction(action)}
                className="text-primary hover:text-primary hover:bg-primary/10"
              >
                <Rocket className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
