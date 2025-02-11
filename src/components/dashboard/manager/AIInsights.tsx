
import { BrainCircuit, HeartPulse, Target, TrendingUp, AlertTriangle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const AIInsights = () => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      <CardTitle className="text-lg font-semibold flex items-center gap-2">
        <BrainCircuit className="h-5 w-5 text-purple-500" />
        AI Insights & Predictions
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-6">
        <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
          <div className="flex items-center gap-4">
            <TrendingUp className="h-8 w-8 text-purple-500" />
            <div>
              <h4 className="font-medium text-purple-900">Predicted Peak Hours</h4>
              <p className="text-sm text-purple-700">Expected high call volume between 2-4 PM today</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex items-center gap-4">
            <HeartPulse className="h-8 w-8 text-blue-500" />
            <div>
              <h4 className="font-medium text-blue-900">Agent Wellness Alert</h4>
              <p className="text-sm text-blue-700">3 agents showing signs of high stress</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
          <div className="flex items-center gap-4">
            <Target className="h-8 w-8 text-green-500" />
            <div>
              <h4 className="font-medium text-green-900">Performance Optimization</h4>
              <p className="text-sm text-green-700">Team efficiency increased by 12% this week</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Daily Goal Progress</span>
            <span className="text-sm text-muted-foreground">78%</span>
          </div>
          <Progress value={78} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-medium">Average Wait Time</span>
            </div>
            <p className="text-2xl font-bold">3.5m</p>
            <span className="text-xs text-green-600">-12% from last week</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium">Escalations</span>
            </div>
            <p className="text-2xl font-bold">4.2%</p>
            <span className="text-xs text-green-600">-2.1% from last week</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);
