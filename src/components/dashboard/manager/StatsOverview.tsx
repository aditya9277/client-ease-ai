
import { FileText, Users, Clock, TrendingUp, ThumbsUp, AlertTriangle, Phone, CheckCircle } from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";

export const StatsOverview = () => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <StatsCard
      title="Total Claims"
      value="1,234"
      icon={<FileText className="h-4 w-4 text-purple-400" />}
      description="+14% from last month"
    />
    <StatsCard
      title="Active Agents"
      value="45"
      icon={<Users className="h-4 w-4 text-blue-400" />}
      description="Currently online"
    />
    <StatsCard
      title="Average Resolution Time"
      value="24m"
      icon={<Clock className="h-4 w-4 text-green-400" />}
      description="-8% from last week"
    />
    <StatsCard
      title="Customer Satisfaction"
      value="92%"
      icon={<TrendingUp className="h-4 w-4 text-indigo-400" />}
      description="+5% this month"
    />
  </div>
);
