
import { useState } from "react";
import { StatsOverview } from "./manager/StatsOverview";
import { AnalyticsCharts } from "./manager/AnalyticsCharts";
import { AIInsights } from "./manager/AIInsights";
import { RecentClaims } from "./manager/RecentClaims";
import { TeamCommunication } from "./manager/TeamCommunication";
import { 
  FileText, 
  Users, 
  Calendar, 
  Clock, 
  ChartPie, 
  ArrowUpRight, 
  TrendingUp,
  Filter,
  Download,
  Share2
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
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const ManagerDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");
  const [selectedTeam, setSelectedTeam] = useState("all");
  const [isExporting, setIsExporting] = useState(false);

  // Sample data for the agent performance pie chart
  const performanceData = [
    { name: "Excellent", value: 18, color: "#00cc88" },
    { name: "Good", value: 15, color: "#0088ff" },
    { name: "Average", value: 8, color: "#ffc107" },
    { name: "Needs Improvement", value: 4, color: "#ff3366" },
  ];

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      toast.success("Dashboard exported successfully!");
    }, 1500);
  };

  const handleShare = () => {
    toast.success("Dashboard link copied to clipboard!");
  };

  return (
    <div className="space-y-8 p-6 bg-gradient-to-b from-slate-100 to-slate-50 min-h-screen animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-info to-accent">
            Call Center Analytics
          </h2>
          <p className="text-slate-500">
            Real-time insights and performance metrics
          </p>
        </div>

        <div className="flex space-x-4">
          <div className="flex space-x-2">
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
          
          <div className="flex space-x-2">
            <Button 
              variant="outline"
              size="sm"
              className="bg-white border-slate-200"
              onClick={handleExport}
            >
              <Download className={`h-4 w-4 mr-1 ${isExporting ? 'animate-bounce' : ''}`} />
              {isExporting ? 'Exporting...' : 'Export'}
            </Button>
            
            <Button 
              variant="outline"
              size="sm"
              className="bg-white border-slate-200"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Filter className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Team View</h3>
              <p className="text-sm text-slate-500">Filter dashboard by team</p>
            </div>
          </div>

          <div className="flex space-x-2">
            <Badge 
              className={`px-3 py-1 cursor-pointer transition-all ${selectedTeam === 'all' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              onClick={() => setSelectedTeam('all')}
            >
              All Teams
            </Badge>
            <Badge 
              className={`px-3 py-1 cursor-pointer transition-all ${selectedTeam === 'claims' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              onClick={() => setSelectedTeam('claims')}
            >
              Claims
            </Badge>
            <Badge 
              className={`px-3 py-1 cursor-pointer transition-all ${selectedTeam === 'customer' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              onClick={() => setSelectedTeam('customer')}
            >
              Customer Service
            </Badge>
            <Badge 
              className={`px-3 py-1 cursor-pointer transition-all ${selectedTeam === 'tech' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              onClick={() => setSelectedTeam('tech')}
            >
              Technical Support
            </Badge>
          </div>
        </div>
      </div>

      <StatsOverview />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AnalyticsCharts selectedPeriod={selectedPeriod} />
        </div>
        <div className="space-y-6">
          <AIInsights />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <RecentClaims />
        <TeamCommunication />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="medical-card card-gradient-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-slate-800 flex items-center">
              <div className="icon-container icon-container-accent mr-2">
                <ChartPie className="h-5 w-5" />
              </div>
              Agent Performance Distribution
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
                    animationDuration={1000}
                    animationBegin={200}
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

        <Card className="medical-card card-gradient-info hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-slate-800 flex items-center">
              <div className="icon-container icon-container-info mr-2">
                <Calendar className="h-5 w-5" />
              </div>
              Upcoming Training
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-info/40 transition-all group">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-slate-800 group-hover:text-info transition-colors">
                        {["AI Assistant Mastery", "Customer De-escalation", "Claims Process Advanced"][i]}
                      </h4>
                      <div className="flex items-center mt-1 text-sm text-slate-500">
                        <Clock className="h-3 w-3 mr-1 text-info" />
                        <span>{["May 25, 10:00 AM", "May 28, 2:00 PM", "June 2, 11:00 AM"][i]}</span>
                      </div>
                    </div>
                    <div className="bg-info/10 px-2 py-1 rounded text-xs font-medium text-info">
                      {["2h 30m", "1h 45m", "3h 15m"][i]}
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
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

        <Card className="medical-card card-gradient-success hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-slate-800 flex items-center">
              <div className="icon-container icon-container-success mr-2">
                <TrendingUp className="h-5 w-5" />
              </div>
              Performance Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {["Call Resolution Time", "Customer Satisfaction", "First Call Resolution"].map((metric, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-slate-700">{metric}</span>
                    <div className="flex items-center text-xs text-success">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
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
