import { StatsOverview } from "./manager/StatsOverview";
import { AnalyticsCharts } from "./manager/AnalyticsCharts";
import { AIInsights } from "./manager/AIInsights";
import { RecentClaims } from "./manager/RecentClaims";
import { TeamCommunication } from "./manager/TeamCommunication";

const ManagerDashboard = () => (
  <div className="space-y-6">
    <StatsOverview />
    <AnalyticsCharts />
    <div className="grid gap-6 md:grid-cols-2">
      <AIInsights />
      <RecentClaims />
    </div>
    <TeamCommunication />
  </div>
);

export default ManagerDashboard;