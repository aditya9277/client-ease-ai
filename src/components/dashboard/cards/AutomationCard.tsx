
import { Bot, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const AutomationCard = () => {
  const handleButtonClick = () => {
    window.open('http://localhost:8501/', '_blank', 'noopener,noreferrer');
  };
  return (
    <Card className="bg-[#252A3C] border-purple-500/20 hover:border-purple-500/40">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-100">Workflow Automation</CardTitle>
        <Bot className="h-4 w-4 text-purple-400" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-300">Active Automations</span>
            <Database className="h-4 w-4 text-purple-400" />
          </div>
          <div className="space-y-2">
            <Button onClick={handleButtonClick} variant="outline" className="w-full justify-start text-left font-normal border-purple-500/20 text-gray-300 hover:bg-purple-500/10">
              <span>Data Entry Assistant</span>
            </Button>
            <Button variant="outline" className="w-full justify-start text-left font-normal border-purple-500/20 text-gray-300 hover:bg-purple-500/10">
              <span>Form Auto-Fill</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
