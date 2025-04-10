
import { Bot, Users, ClipboardList } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ClaimsCard = () => {
  return (
    <Card className="medical-card card-gradient-primary">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <div className="icon-container icon-container-primary">
            <ClipboardList className="h-5 w-5" />
          </div>
          Crop Documentation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            AI-powered crop management assistant
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Bot className="h-4 w-4 text-primary" />
              <span>Active crop types: 3</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Users className="h-4 w-4 text-primary" />
              <span>Growth rate: 95%</span>
            </div>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
            <a href="https://bpo-claimgen.streamlit.app/" target="_blank">Open Crop Assistant</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
