
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  CartesianGrid 
} from 'recharts';
import { BarChart3, LineChart as LineChartIcon, Filter, RefreshCw } from "lucide-react";

export const AnalyticsCharts = ({ selectedPeriod }: { selectedPeriod: string }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const dailyData = [
    { name: '9AM', calls: 25, resolution: 88 },
    { name: '11AM', calls: 40, resolution: 92 },
    { name: '1PM', calls: 65, resolution: 87 },
    { name: '3PM', calls: 48, resolution: 90 },
    { name: '5PM', calls: 37, resolution: 93 },
  ];

  const weeklyData = [
    { name: 'Mon', calls: 150, resolution: 92 },
    { name: 'Tue', calls: 230, resolution: 89 },
    { name: 'Wed', calls: 224, resolution: 95 },
    { name: 'Thu', calls: 218, resolution: 91 },
    { name: 'Fri', calls: 235, resolution: 88 },
  ];

  const monthlyData = [
    { name: 'Week 1', calls: 680, resolution: 91 },
    { name: 'Week 2', calls: 720, resolution: 89 },
    { name: 'Week 3', calls: 840, resolution: 93 },
    { name: 'Week 4', calls: 790, resolution: 90 },
  ];

  const data = selectedPeriod === "day" ? dailyData : selectedPeriod === "week" ? weeklyData : monthlyData;
  
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <Card className="medical-card card-gradient-info hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-slate-800 flex items-center">
          <div className="icon-container icon-container-info mr-2">
            <BarChart3 className="h-5 w-5" />
          </div>
          {selectedPeriod === "day" ? "Daily" : selectedPeriod === "week" ? "Weekly" : "Monthly"} Analytics
        </CardTitle>
        <button 
          onClick={handleRefresh}
          className="p-2 rounded-full hover:bg-info/10 transition-colors"
        >
          <RefreshCw className={`h-4 w-4 text-info ${isRefreshing ? 'animate-spin' : ''}`} />
        </button>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Call Volume Chart */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-700">Call Volume</h3>
              <div className="flex items-center gap-2">
                <Filter className="h-3 w-3 text-slate-500" />
                <span className="text-xs text-slate-500">
                  {selectedPeriod === "day" ? "Today" : selectedPeriod === "week" ? "Last 5 days" : "This month"}
                </span>
              </div>
            </div>
            <div className="h-[200px] bg-slate-50 p-4 rounded-lg border border-slate-200 animate-fade-in">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#64748b" 
                    fontSize={12}
                    axisLine={{ stroke: '#e2e8f0' }}
                    tickLine={{ stroke: '#e2e8f0' }}
                  />
                  <YAxis 
                    stroke="#64748b" 
                    fontSize={12}
                    axisLine={{ stroke: '#e2e8f0' }}
                    tickLine={{ stroke: '#e2e8f0' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                      color: '#1e293b'
                    }}
                  />
                  <Bar 
                    dataKey="calls" 
                    fill="#0088ff" 
                    radius={[4, 4, 0, 0]}
                    animationDuration={1000}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Resolution Rate Chart */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-700">Resolution Rate (%)</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-info rounded-full"></div>
                <span className="text-xs text-slate-500">Performance trend</span>
              </div>
            </div>
            <div className="h-[200px] bg-slate-50 p-4 rounded-lg border border-slate-200 animate-fade-in">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#64748b" 
                    fontSize={12}
                    axisLine={{ stroke: '#e2e8f0' }}
                    tickLine={{ stroke: '#e2e8f0' }}
                  />
                  <YAxis 
                    stroke="#64748b" 
                    fontSize={12}
                    axisLine={{ stroke: '#e2e8f0' }}
                    tickLine={{ stroke: '#e2e8f0' }}
                    domain={[80, 100]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                      color: '#1e293b'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="resolution" 
                    stroke="#6c7ae0" 
                    strokeWidth={3}
                    dot={{ fill: '#6c7ae0', strokeWidth: 2, r: 4 }}
                    activeDot={{ fill: '#6c7ae0', strokeWidth: 2, r: 6 }}
                    animationDuration={1000}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
