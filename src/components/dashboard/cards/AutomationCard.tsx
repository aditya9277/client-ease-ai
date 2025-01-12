import { Bot, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const AutomationCard = () => {
  const handleButtonClick = () => {
    window.open('http://localhost:8501/', '_blank', 'noopener,noreferrer');
  };
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Workflow Automation</CardTitle>
        <Bot className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Active Automations</span>
            <Database className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <Button onClick={handleButtonClick} variant="outline" className="w-full justify-start text-left font-normal">
              <span>Data Entry Assistant</span>
            </Button>
            <Button variant="outline" className="w-full justify-start text-left font-normal">
              <span>Form Auto-Fill</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};