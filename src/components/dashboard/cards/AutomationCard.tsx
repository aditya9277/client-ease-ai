
import { Bot, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const AutomationCard = () => {
  const handleButtonClick = () => {
    window.open('http://localhost:8501/', '_blank', 'noopener,noreferrer');
  };
  return (
    <Card className="medical-card card-gradient-warning">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-800">
          <div className="flex items-center gap-2">
            <div className="icon-container icon-container-warning">
              <Bot className="h-4 w-4" />
            </div>
            Farm Automation
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700">Active Automations</span>
            <Database className="h-4 w-4 text-warning" />
          </div>
          <div className="space-y-2">
            <Button onClick={handleButtonClick} variant="outline" className="w-full justify-start text-left font-normal border-warning/20 text-slate-700 hover:bg-warning/5">
              <span>Irrigation Controller</span>
            </Button>
            <Button variant="outline" className="w-full justify-start text-left font-normal border-warning/20 text-slate-700 hover:bg-warning/5">
              <span>Soil Monitoring System</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
