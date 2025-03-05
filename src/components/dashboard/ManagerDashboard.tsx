
import { StatsOverview } from "./manager/StatsOverview";
import { AnalyticsCharts } from "./manager/AnalyticsCharts";
import { AIInsights } from "./manager/AIInsights";
import { RecentClaims } from "./manager/RecentClaims";
import { TeamCommunication } from "./manager/TeamCommunication";

const ManagerDashboard = () => (
  <div className="space-y-8 p-6 bg-gradient-to-b from-slate-100 to-slate-50 min-h-screen">
    <div className="space-y-2">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-info to-accent">
        Call Center Analytics
      </h2>
      <p className="text-slate-500">
        Real-time insights and performance metrics
      </p>
    </div>

    <StatsOverview />
    
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <AnalyticsCharts />
      </div>
      <div className="space-y-6">
        <AIInsights />
      </div>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      <RecentClaims />
      <TeamCommunication />
    </div>
  </div>
);

export default ManagerDashboard;
