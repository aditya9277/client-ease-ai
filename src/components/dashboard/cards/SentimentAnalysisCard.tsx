import { ChartBar, Speech } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const SentimentAnalysisCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Sentiment Analysis</CardTitle>
        <ChartBar className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Real-time Analysis</span>
            <Speech className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start text-left font-normal">
              <span>View Sentiment Trends</span>
            </Button>
            <Button variant="outline" className="w-full justify-start text-left font-normal">
              <span>Configure Analysis</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};