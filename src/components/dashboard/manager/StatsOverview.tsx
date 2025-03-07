
import { 
  FileText, 
  Users, 
  Clock, 
  TrendingUp, 
  ThumbsUp, 
  AlertTriangle, 
  Phone, 
  CheckCircle 
} from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";

export const StatsOverview = () => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <StatsCard
      title="Total Claims"
      value="377"
      icon={<FileText className="h-4 w-4" />}
      description="+14% from last month"
      variant="success"
    />
    <StatsCard
      title="Active Agents"
      value="45"
      icon={<Users className="h-4 w-4" />}
      description="Currently online"
      variant="primary"
    />
    <StatsCard
      title="Average Resolution Time"
      value="12m"
      icon={<Clock className="h-4 w-4" />}
      description="-8% from last week"
      variant="info"
    />
    <StatsCard
      title="Customer Satisfaction"
      value="95%"
      icon={<TrendingUp className="h-4 w-4" />}
      description="+5% this month"
      variant="warning"
    />
  </div>
);
