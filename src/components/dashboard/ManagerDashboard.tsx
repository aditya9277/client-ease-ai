
import { StatsOverview } from "./manager/StatsOverview";
import { AnalyticsCharts } from "./manager/AnalyticsCharts";
import { AIInsights } from "./manager/AIInsights";
import { RecentClaims } from "./manager/RecentClaims";
import { TeamCommunication } from "./manager/TeamCommunication";

const ManagerDashboard = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0B1121] to-[#090E1D] relative">
    {/* Animated Background Effects */}
    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-purple-500/5" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none opacity-20" />

    <div className="relative space-y-8 p-6">
      <div className="space-y-2 bg-[#1E293B]/90 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/20 shadow-lg shadow-cyan-500/5">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400">
          Call Center Analytics
        </h2>
        <p className="text-slate-400">
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
  </div>
);

export default ManagerDashboard;
