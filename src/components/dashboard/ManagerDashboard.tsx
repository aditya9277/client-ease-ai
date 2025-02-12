
import { StatsOverview } from "./manager/StatsOverview";
import { AnalyticsCharts } from "./manager/AnalyticsCharts";
import { AIInsights } from "./manager/AIInsights";
import { RecentClaims } from "./manager/RecentClaims";
import { TeamCommunication } from "./manager/TeamCommunication";

const ManagerDashboard = () => (
  <div className="space-y-8 p-6 bg-[#1A1F2C] min-h-screen">
    <div className="space-y-2">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
        Call Center Analytics
      </h2>
      <p className="text-gray-400">
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
