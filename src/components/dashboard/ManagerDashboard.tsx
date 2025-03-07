
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
  ListFilter
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
  const [viewMode, setViewMode] = useState("standard"); // standard, focus-agents, focus-impact
  const [performanceData, setPerformanceData] = useState([
    { name: "Excellent", value: 18, color: "#00cc88" },
    { name: "Good", value: 15, color: "#0088ff" },
    { name: "Average", value: 8, color: "#ffc107" },
    { name: "Needs Improvement", value: 4, color: "#ff3366" },
  ]);

  // Mock data for different periods
  const dailyData = [
    { name: "Excellent", value: 7, color: "#00cc88" },
    { name: "Good", value: 5, color: "#0088ff" },
    { name: "Average", value: 3, color: "#ffc107" },
    { name: "Needs Improvement", value: 1, color: "#ff3366" },
  ];
  
  const weeklyData = [
    { name: "Excellent", value: 18, color: "#00cc88" },
    { name: "Good", value: 15, color: "#0088ff" },
    { name: "Average", value: 8, color: "#ffc107" },
    { name: "Needs Improvement", value: 4, color: "#ff3366" },
  ];
  
  const monthlyData = [
    { name: "Excellent", value: 45, color: "#00cc88" },
    { name: "Good", value: 38, color: "#0088ff" },
    { name: "Average", value: 20, color: "#ffc107" },
    { name: "Needs Improvement", value: 12, color: "#ff3366" },
  ];

  // Effect to update data based on period selection
  useEffect(() => {
    if (selectedPeriod === "day") {
      setPerformanceData(dailyData);
    } else if (selectedPeriod === "week") {
      setPerformanceData(weeklyData);
    } else {
      setPerformanceData(monthlyData);
    }
  }, [selectedPeriod]);

  // Function to handle data refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate API call delay
    setTimeout(() => {
      toast.success("Dashboard data refreshed");
      setIsRefreshing(false);
    }, 1000);
  };

  // Function to handle team filter change
  const handleTeamChange = (value: string) => {
    setSelectedTeam(value);
    toast.info(`Showing data for ${value === 'all' ? 'all teams' : `team ${value}`}`);
  };

  // Function to handle exporting analytics report
  const handleExportReport = () => {
    toast.success("Analytics report exported. Check your email.");
  };

  // Function to handle view mode change
  const handleViewModeChange = (mode: string) => {
    setViewMode(mode);
    toast.info(`Dashboard view changed to ${mode === 'standard' ? 'Standard View' : 
      mode === 'focus-agents' ? 'Agent Focus' : 'GenAI Impact Focus'}`);
  };

  return (
    <div className="space-y-6 p-4 bg-gradient-to-b from-slate-100 to-slate-50 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-info to-accent">
            Call Center Analytics
          </h2>
          <p className="text-slate-500">
            Real-time insights and performance metrics
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="bg-white rounded-lg shadow-sm p-1 flex items-center flex-shrink-0">
            <button 
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedPeriod === "day" 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
              onClick={() => setSelectedPeriod("day")}
            >
              Daily
            </button>
            <button 
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedPeriod === "week" 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
              onClick={() => setSelectedPeriod("week")}
            >
              Weekly
            </button>
            <button 
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedPeriod === "month" 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
              onClick={() => setSelectedPeriod("month")}
            >
              Monthly
            </button>
          </div>
          
          <div className="flex items-center gap-2 flex-wrap">
            <Select value={selectedTeam} onValueChange={handleTeamChange}>
              <SelectTrigger className="w-[120px] sm:w-[140px] bg-white text-xs sm:text-sm">
                <div className="flex items-center">
                  <Filter className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-primary" />
                  <SelectValue placeholder="Filter Team" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Teams</SelectItem>
                <SelectItem value="alpha">Team Alpha</SelectItem>
                <SelectItem value="beta">Team Beta</SelectItem>
                <SelectItem value="gamma">Team Gamma</SelectItem>
              </SelectContent>
            </Select>

            <Select value={viewMode} onValueChange={handleViewModeChange}>
              <SelectTrigger className="w-[130px] sm:w-[150px] bg-white text-xs sm:text-sm">
                <div className="flex items-center">
                  <ListFilter className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-primary" />
                  <SelectValue placeholder="Dashboard View" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard View</SelectItem>
                <SelectItem value="focus-agents">Agent Focus</SelectItem>
                <SelectItem value="focus-impact">GenAI Impact</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white h-9 px-2 text-xs sm:text-sm"
              onClick={handleRefresh}
              disabled={isRefreshing}
            >
              <RefreshCcw className={cn("h-3 w-3 sm:h-4 sm:w-4 mr-1", isRefreshing && "animate-spin")} />
              {isRefreshing ? "Refreshing..." : "Refresh"}
            </Button>

            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white hidden md:flex h-9 px-2 text-xs sm:text-sm"
              onClick={handleExportReport}
            >
              <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              Export Report
            </Button>
          </div>
        </div>
      </div>

      <StatsOverview />
      
      {viewMode === "standard" && (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <AnalyticsCharts selectedPeriod={selectedPeriod} selectedTeam={selectedTeam} />
            </div>
            <div>
              <AIInsights />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <RecentClaims />
            <TeamCommunication />
          </div>
        </>
      )}
      
      {viewMode === "focus-agents" && (
        <div className="grid gap-4 md:grid-cols-2">
          <LiveAgentMonitoring />
          <div className="space-y-4">
            <AIInsights />
            <TeamCommunication />
          </div>
        </div>
      )}
      
      {viewMode === "focus-impact" && (
        <div className="grid gap-4 md:grid-cols-2">
          <GenAIImpactMetrics />
          <AIInsights />
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="medical-card card-gradient-accent hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-slate-800 flex items-center">
              <div className="icon-container icon-container-accent mr-2">
                <ChartPie className="h-5 w-5" />
              </div>
              Agent Performance Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]"> {/* Reduced height */}
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
                    formatter={(value) => [`${value} Agents`, 'Count']}
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

        <Card className="medical-card card-gradient-info hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-slate-800 flex items-center">
              <div className="icon-container icon-container-info mr-2">
                <Calendar className="h-5 w-5" />
              </div>
              Upcoming Training
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3"> {/* Reduced spacing */}
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="bg-slate-50 p-3 rounded-lg border border-slate-200 hover:border-info/40 transition-all group">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-slate-800 text-sm group-hover:text-info transition-colors">
                        {["AI Assistant Mastery", "Customer De-escalation", "Claims Process Advanced"][i]}
                      </h4>
                      <div className="flex items-center mt-1 text-xs text-slate-500">
                        <Clock className="h-3 w-3 mr-1 text-info" />
                        <span>{["May 25, 10:00 AM", "May 28, 2:00 PM", "June 2, 11:00 AM"][i]}</span>
                      </div>
                    </div>
                    <div className="bg-info/10 px-2 py-1 rounded text-xs font-medium text-info">
                      {["2h 30m", "1h 45m", "3h 15m"][i]}
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <div className="flex items-center">
                      <Users className="h-3 w-3 text-slate-400 mr-1" />
                      <span className="text-xs text-slate-500">{["12", "8", "15"][i]} agents registered</span>
                    </div>
                    <button className="text-xs text-info font-medium flex items-center hover:underline">
                      Register <ArrowUpRight className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="medical-card card-gradient-success hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-slate-800 flex items-center">
              <div className="icon-container icon-container-success mr-2">
                <TrendingUp className="h-5 w-5" />
              </div>
              Performance Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Call Resolution Time", "Customer Satisfaction", "First Call Resolution"].map((metric, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-xs font-medium text-slate-700">{metric}</span>
                    <div className="flex items-center text-xs text-success">
                      <ArrowUpRight className="h-3 w-3 mr-0.5" />
                      {["12%", "8%", "5%"][i]} improvement
                    </div>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full">
                    <div 
                      className="h-2 bg-gradient-to-r from-success/70 to-success rounded-full transition-all duration-1000"
                      style={{ width: ["78%", "92%", "65%"][i] }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Previous: {["5.2m", "87%", "62%"][i]}</span>
                    <span>Current: {["4.6m", "94%", "65%"][i]}</span>
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
