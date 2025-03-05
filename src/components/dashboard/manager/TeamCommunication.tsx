
import { MessageSquare, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TeamCommunication = () => (
  <Card className="medical-card card-gradient-info">
    <CardHeader>
      <CardTitle className="text-slate-800 flex items-center">
        <div className="icon-container icon-container-info mr-2">
          <MessageSquare className="h-5 w-5" />
        </div>
        Team Communication
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-info" />
            <h4 className="font-medium text-slate-700">Active Discussions</h4>
          </div>
          <p className="text-2xl font-bold text-slate-800">8</p>
          <p className="text-sm text-slate-500">Team threads</p>
        </div>
        <div className="space-y-2 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-success" />
            <h4 className="font-medium text-slate-700">Team Collaboration</h4>
          </div>
          <p className="text-2xl font-bold text-slate-800">92%</p>
          <p className="text-sm text-slate-500">Response rate</p>
        </div>
        <div className="space-y-2 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <h4 className="font-medium text-slate-700">Average Response</h4>
          </div>
          <p className="text-2xl font-bold text-slate-800">14m</p>
          <p className="text-sm text-slate-500">Response time</p>
        </div>
      </div>
    </CardContent>
  </Card>
);
