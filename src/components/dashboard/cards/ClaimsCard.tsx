
import { Bot, Users, ClipboardList } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ClaimsCard = () => {
  return (
    <Card className="bg-[#252A3C] border-purple-500/20 hover:border-purple-500/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-100">
          <ClipboardList className="h-5 w-5 text-purple-400" />
          Claims Documentation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-gray-400">
            AI-powered documentation assistant
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Bot className="h-4 w-4 text-purple-400" />
              <span>Active claims: 3</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Users className="h-4 w-4 text-purple-400" />
              <span>Completion rate: 95%</span>
            </div>
          </div>
          <Button className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300" asChild>
            <a href="https://bpo-claimgen.streamlit.app/" target="_blank">Open Claims Assistant</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
