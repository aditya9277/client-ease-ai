
import { ChartBar, Speech } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";


export const SentimentAnalysisCard = () => {
  const handleButtonClick = () => {
    window.open('https://bpo-sentiment.streamlit.app/', '_blank', 'noopener,noreferrer');
  };
  return (
    <Card className="bg-[#252A3C] border-purple-500/20 hover:border-purple-500/40">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-100">Sentiment Analysis</CardTitle>
        <ChartBar className="h-4 w-4 text-purple-400" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-300">Current Sentiment</span>
              <span className="text-sm text-green-400">85%</span>
            </div>
            <Progress value={85} className="h-2 bg-purple-900/20" />
          </div>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start text-left font-normal border-purple-500/20 text-gray-300 hover:bg-purple-500/10">
              <Speech className="mr-2 h-4 w-4 text-purple-400" />
              <span>View Sentiment History</span>
            </Button>
            <Button onClick={handleButtonClick} variant="outline" className="w-full justify-start text-left font-normal border-purple-500/20 text-gray-300 hover:bg-purple-500/10">
              <ChartBar className="mr-2 h-4 w-4 text-purple-400" />
              <span>Analyze Current Call</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
