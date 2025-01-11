import { ChartBar, Speech } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const SentimentAnalysisCard = () => {
  const handleButtonClick = () => {
    window.open('https://bpo-sentiment.streamlit.app/', '_blank', 'noopener,noreferrer');
  };
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Sentiment Analysis</CardTitle>
        <ChartBar className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Current Sentiment</span>
              <span className="text-sm text-green-600">85%</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start text-left font-normal">
              <Speech className="mr-2 h-4 w-4" />
              <span>View Sentiment History</span>
            </Button>
            <Button onClick={handleButtonClick} variant="outline" className="w-full justify-start text-left font-normal">
              <ChartBar className="mr-2 h-4 w-4" />
              <span >Analyze Current Call</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};