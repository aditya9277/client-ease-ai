import { MessageSquare, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TeamCommunication = () => (
  <Card>
    <CardHeader>
      <CardTitle>Team Communication</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-500" />
            <h4 className="font-medium">Active Discussions</h4>
          </div>
          <p className="text-2xl font-bold">8</p>
          <p className="text-sm text-muted-foreground">Team threads</p>
        </div>
        <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-green-500" />
            <h4 className="font-medium">Team Collaboration</h4>
          </div>
          <p className="text-2xl font-bold">92%</p>
          <p className="text-sm text-muted-foreground">Response rate</p>
        </div>
        <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-purple-500" />
            <h4 className="font-medium">Average Response</h4>
          </div>
          <p className="text-2xl font-bold">14m</p>
          <p className="text-sm text-muted-foreground">Response time</p>
        </div>
      </div>
    </CardContent>
  </Card>
);