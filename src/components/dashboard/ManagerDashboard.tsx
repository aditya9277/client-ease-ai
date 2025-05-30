
import { useState, useEffect } from "react";
import { StatsOverview } from "./manager/StatsOverview";
import { AnalyticsCharts } from "./manager/AnalyticsCharts";
import { AIInsights } from "./manager/AIInsights";
import { RecentClaims } from "./manager/RecentClaims";
import { TeamCommunication } from "./manager/TeamCommunication";
import { LiveAgentMonitoring } from "./manager/LiveAgentMonitoring";
import { GenAIImpactMetrics } from "./manager/GenAIImpactMetrics";
import { 
  FileText, 
  Users, 
  Calendar, 
  Clock, 
  ChartPie, 
  ArrowUpRight, 
  TrendingUp,
  Filter,
  RefreshCcw,
  ListFilter,
  Brain,
  Target,
  Rocket,
  DollarSign
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { CustomerInsightsCard } from "./cards/CustomerInsightsCard";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const ManagerDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState("all");
  const [viewMode, setViewMode] = useState("standard");
  const [performanceData, setPerformanceData] = useState([
    { name: "Scaling Fast", value: 18, color: "#00cc88" },
    { name: "Growing Steady", value: 15, color: "#0088ff" },
    { name: "Early Stage", value: 8, color: "#ffc107" },
    { name: "Ideation", value: 4, color: "#ff3366" },
  ]);

  const dailyData = [
    { name: "Scaling Fast", value: 7, color: "#00cc88" },
    { name: "Growing Steady", value: 5, color: "#0088ff" },
    { name: "Early Stage", value: 3, color: "#ffc107" },
    { name: "Ideation", value: 1, color: "#ff3366" },
  ];
  
  const weeklyData = [
    { name: "Scaling Fast", value: 18, color: "#00cc88" },
    { name: "Growing Steady", value: 15, color: "#0088ff" },
    { name: "Early Stage", value: 8, color: "#ffc107" },
    { name: "Ideation", value: 4, color: "#ff3366" },
  ];
  
  const monthlyData = [
    { name: "Scaling Fast", value: 45, color: "#00cc88" },
    { name: "Growing Steady", value: 38, color: "#0088ff" },
    { name: "Early Stage", value: 20, color: "#ffc107" },
    { name: "Ideation", value: 12, color: "#ff3366" },
  ];

  useEffect(() => {
    if (selectedPeriod === "day") {
      setPerformanceData(dailyData);
    } else if (selectedPeriod === "week") {
      setPerformanceData(weeklyData);
    } else {
      setPerformanceData(monthlyData);
    }
  }, [selectedPeriod]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      toast.success("StartupOS analytics refreshed");
      setIsRefreshing(false);
    }, 1000);
  };

  const handleTeamChange = (value: string) => {
    setSelectedTeam(value);
    toast.info(`Showing data for ${value === 'all' ? 'all startups' : `${value} portfolio`}`);
  };

  const handleExportReport = () => {
    toast.success("Startup performance report exported. Check your email.");
  };

  const handleViewModeChange = (mode: string) => {
    setViewMode(mode);
    toast.info(`Dashboard view changed to ${mode === 'standard' ? 'Portfolio Overview' : 
      mode === 'focus-agents' ? 'Startup Focus' : 'AI Impact Analysis'}`);
  };

  return (
    <div className="space-y-8 p-6 bg-gradient-to-b from-slate-100 to-slate-50 min-h-screen">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            StartupOS AI Platform Analytics
          </h2>
          <p className="text-slate-500">
            Real-time business intelligence across your startup portfolio
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white rounded-lg shadow-sm p-1 flex items-center">
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedPeriod === "day" 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
              onClick={() => setSelectedPeriod("day")}
            >
              Daily
            </button>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedPeriod === "week" 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
              onClick={() => setSelectedPeriod("week")}
            >
              Weekly
            </button>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedPeriod === "month" 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
              onClick={() => setSelectedPeriod("month")}
            >
              Monthly
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <Select value={selectedTeam} onValueChange={handleTeamChange}>
              <SelectTrigger className="w-[140px] bg-white">
                <div className="flex items-center">
                  <Filter className="h-4 w-4 mr-1 text-primary" />
                  <SelectValue placeholder="Filter Portfolio" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Startups</SelectItem>
                <SelectItem value="tech">Tech Startups</SelectItem>
                <SelectItem value="fintech">FinTech Portfolio</SelectItem>
                <SelectItem value="saas">SaaS Companies</SelectItem>
              </SelectContent>
            </Select>

            <Select value={viewMode} onValueChange={handleViewModeChange}>
              <SelectTrigger className="w-[150px] bg-white">
                <div className="flex items-center">
                  <ListFilter className="h-4 w-4 mr-1 text-primary" />
                  <SelectValue placeholder="Dashboard View" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Portfolio Overview</SelectItem>
                <SelectItem value="focus-agents">Startup Focus</SelectItem>
                <SelectItem value="focus-impact">AI Impact</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white"
              onClick={handleRefresh}
              disabled={isRefreshing}
            >
              <RefreshCcw className={cn("h-4 w-4 mr-1", isRefreshing && "animate-spin")} />
              {isRefreshing ? "Refreshing..." : "Refresh"}
            </Button>

            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white hidden md:flex"
              onClick={handleExportReport}
            >
              <FileText className="h-4 w-4 mr-1" />
              Export Report
            </Button>
          </div>
        </div>
      </div>

      <StatsOverview />
      
      {viewMode === "standard" && (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <AnalyticsCharts selectedPeriod={selectedPeriod} selectedTeam={selectedTeam} />
            </div>
            <div className="space-y-6">
              <AIInsights />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <RecentClaims />
            <TeamCommunication />
          </div>
        </>
      )}
      
      {viewMode === "focus-agents" && (
        <div className="grid gap-6 md:grid-cols-2">
          <LiveAgentMonitoring />
          <div className="space-y-6">
            <AIInsights />
          </div>
        </div>
      )}
      
      {viewMode === "focus-impact" && (
        <div className="px-4 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-12">
            <GenAIImpactMetrics />
          </div>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="medical-card card-gradient-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-slate-800 flex items-center">
              <div className="icon-container icon-container-accent mr-2">
                <ChartPie className="h-5 w-5" />
              </div>
              Startup Growth Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={performanceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {performanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value} Startups`, 'Count']}
                    contentStyle={{ 
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                      color: '#1e293b'
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-card card-gradient-info hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-slate-800 flex items-center">
              <div className="icon-container icon-container-info mr-2">
                <Calendar className="h-5 w-5" />
              </div>
              Upcoming Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-info/40 transition-all group">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-slate-800 group-hover:text-info transition-colors">
                        {["Series A Demo Day", "Product Launch: TechFlow", "Beta Release: DataVerse"][i]}
                      </h4>
                      <div className="flex items-center mt-1 text-sm text-slate-500">
                        <Clock className="h-3 w-3 mr-1 text-info" />
                        <span>{["June 15, 2024", "July 2, 2024", "July 20, 2024"][i]}</span>
                      </div>
                    </div>
                    <div className="bg-info/10 px-2 py-1 rounded text-xs font-medium text-info">
                      {["3 weeks", "5 weeks", "7 weeks"][i]}
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <Target className="h-3 w-3 text-slate-400 mr-1" />
                      <span className="text-xs text-slate-500">{["$2M target", "$50K MRR", "100 beta users"][i]}</span>
                    </div>
                    <button className="text-xs text-info font-medium flex items-center hover:underline">
                      Track <ArrowUpRight className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="medical-card card-gradient-success hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-slate-800 flex items-center">
              <div className="icon-container icon-container-success mr-2">
                <TrendingUp className="h-5 w-5" />
              </div>
              AI Platform Impact Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {["Cost Optimization", "Revenue Intelligence", "Growth Acceleration"].map((metric, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-slate-700">{metric}</span>
                    <div className="flex items-center text-xs text-success">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      {["60%", "3.5x", "85%"][i]} improvement
                    </div>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full">
                    <div 
                      className="h-2 bg-gradient-to-r from-success/70 to-success rounded-full transition-all duration-1000"
                      style={{ width: ["85%", "92%", "78%"][i] }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Baseline: {["25%", "1.2x", "45%"][i]}</span>
                    <span>Current: {["85%", "4.2x", "83%"][i]}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ManagerDashboard;
