
import { Phone, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface LiveCallCardProps {
  currentSentiment: number;
  callDuration: number;
  formatTime: (seconds: number) => string;
}

export const LiveCallCard = ({ currentSentiment, callDuration, formatTime }: LiveCallCardProps) => {
  return (
    <Card className="bg-[#252A3C] border-purple-500/20 hover:border-purple-500/40">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="flex items-center gap-2 text-gray-100">
          <Phone className="h-5 w-5 text-purple-400 animate-pulse" />
          Live Call Status
        </CardTitle>
        <div className="text-sm text-gray-300">{formatTime(callDuration)}</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-300">Current Sentiment</span>
              <span className="text-sm text-gray-300">{currentSentiment}%</span>
            </div>
            <Progress 
              value={currentSentiment} 
              className="h-2 bg-purple-900/20"
              style={{
                backgroundImage: 'linear-gradient(to right, #ef4444, #eab308, #22c55e)',
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-[#1A1F2C]/60 rounded-lg border border-purple-500/20">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <span className="text-sm font-medium text-gray-300">Call Quality</span>
              </div>
              <p className="text-lg font-bold text-gray-200 mt-1">96%</p>
            </div>
            <div className="p-3 bg-[#1A1F2C]/60 rounded-lg border border-purple-500/20">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-gray-300">Connection</span>
              </div>
              <p className="text-lg font-bold text-gray-200 mt-1">Stable</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
