
import { BrainCircuit, HeartPulse, Target, TrendingUp, AlertTriangle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const AIInsights = () => (
  <Card className="bg-[#1E293B]/90 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40">
    <CardHeader>
      <CardTitle className="text-lg font-semibold flex items-center gap-2 text-gray-100">
        <BrainCircuit className="h-5 w-5 text-cyan-500" />
        AI Insights & Predictions
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-6">
        <div className="p-4 bg-[#0F172A]/60 rounded-lg border border-cyan-500/20">
          <div className="flex items-center gap-4">
            <TrendingUp className="h-8 w-8 text-cyan-500" />
            <div>
              <h4 className="font-medium text-gray-200">Predicted Peak Hours</h4>
              <p className="text-sm text-gray-400">Expected high call volume between 2-4 PM today</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-[#0F172A]/60 rounded-lg border border-cyan-500/20">
          <div className="flex items-center gap-4">
            <HeartPulse className="h-8 w-8 text-cyan-500" />
            <div>
              <h4 className="font-medium text-gray-200">Agent Wellness Alert</h4>
              <p className="text-sm text-gray-400">3 agents showing signs of high stress</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-[#0F172A]/60 rounded-lg border border-cyan-500/20">
          <div className="flex items-center gap-4">
            <Target className="h-8 w-8 text-cyan-500" />
            <div>
              <h4 className="font-medium text-gray-200">Performance Optimization</h4>
              <p className="text-sm text-gray-400">Team efficiency increased by 12% this week</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-300">Daily Goal Progress</span>
            <span className="text-sm text-gray-400">78%</span>
          </div>
          <Progress value={78} className="h-2 bg-slate-800/20" />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-cyan-500/20">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">Average Wait Time</span>
            </div>
            <p className="text-2xl font-bold text-gray-200">3.5m</p>
            <span className="text-xs text-green-400">-12% from last week</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-400" />
              <span className="text-sm font-medium text-gray-300">Escalations</span>
            </div>
            <p className="text-2xl font-bold text-gray-200">4.2%</p>
            <span className="text-xs text-green-400">-2.1% from last week</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);
