
import { MessageSquare, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TeamCommunication = () => (
  <Card className="bg-[#1E293B]/90 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40">
    <CardHeader>
      <CardTitle className="text-gray-100">Team Communication</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2 p-4 bg-[#0F172A]/60 rounded-lg border border-cyan-500/20">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-cyan-400" />
            <h4 className="font-medium text-gray-200">Active Discussions</h4>
          </div>
          <p className="text-2xl font-bold text-gray-100">8</p>
          <p className="text-sm text-gray-400">Team threads</p>
        </div>
        <div className="space-y-2 p-4 bg-[#0F172A]/60 rounded-lg border border-cyan-500/20">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-teal-400" />
            <h4 className="font-medium text-gray-200">Team Collaboration</h4>
          </div>
          <p className="text-2xl font-bold text-gray-100">92%</p>
          <p className="text-sm text-gray-400">Response rate</p>
        </div>
        <div className="space-y-2 p-4 bg-[#0F172A]/60 rounded-lg border border-cyan-500/20">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-400" />
            <h4 className="font-medium text-gray-200">Average Response</h4>
          </div>
          <p className="text-2xl font-bold text-gray-100">14m</p>
          <p className="text-sm text-gray-400">Response time</p>
        </div>
      </div>
    </CardContent>
  </Card>
);
