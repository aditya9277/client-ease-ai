
import { BrainCircuit, HeartPulse, Target, TrendingUp, AlertTriangle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const AIInsights = () => (
  <Card className="medical-card card-gradient-warning h-full">
    <CardHeader>
      <CardTitle className="text-lg font-semibold flex items-center gap-2 text-slate-800">
        <div className="icon-container icon-container-warning">
          <BrainCircuit className="h-5 w-5" />
        </div>
        AI Insights & Predictions
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-6">
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="icon-container icon-container-primary">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-medium text-slate-700">Predicted Peak Hours</h4>
              <p className="text-sm text-slate-500">Expected high call volume between 2-4 PM today</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="icon-container icon-container-destructive">
              <HeartPulse className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-medium text-slate-700">Agent Wellness Alert</h4>
              <p className="text-sm text-slate-500">3 agents showing signs of high stress</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="icon-container icon-container-success">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-medium text-slate-700">Performance Optimization</h4>
              <p className="text-sm text-slate-500">Team efficiency increased by 12% this week</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700">Daily Goal Progress</span>
            <span className="text-sm text-slate-500">78%</span>
          </div>
          <div className="progress-container">
            <div className="progress-bar-primary" style={{ width: "78%" }}></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-slate-700">Average Wait Time</span>
            </div>
            <p className="text-2xl font-bold text-slate-800">3.5m</p>
            <span className="text-xs text-success">-12% from last week</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <span className="text-sm font-medium text-slate-700">Escalations</span>
            </div>
            <p className="text-2xl font-bold text-slate-800">4.2%</p>
            <span className="text-xs text-success">-2.1% from last week</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);
