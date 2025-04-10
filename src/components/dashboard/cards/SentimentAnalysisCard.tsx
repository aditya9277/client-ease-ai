
import { BarChart2, Speech } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const SentimentAnalysisCard = () => {
  return (
    <Card className="medical-card card-gradient-info">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-800">
          <div className="flex items-center gap-2">
            <div className="icon-container icon-container-info">
              <BarChart2 className="h-4 w-4" />
            </div>
            Farmer Satisfaction Analysis
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700">Current Satisfaction</span>
              <span className="text-sm text-success">85%</span>
            </div>
            <Progress value={85} className="h-2 bg-slate-100" />
          </div>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start text-left font-normal border-info/20 text-slate-700 hover:bg-info/5">
              <Speech className="mr-2 h-4 w-4 text-info" />
              <span>View Satisfaction History</span>
            </Button>
            <Button variant="outline" className="w-full justify-start text-left font-normal border-info/20 text-slate-700 hover:bg-info/5">
              <BarChart2 className="mr-2 h-4 w-4 text-info" />
              <span>Analyze Current Consultation</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
