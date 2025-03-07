
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
import { BarChart3, LineChartIcon, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState, useEffect } from "react";

interface AnalyticsChartsProps {
  selectedPeriod: string;
  selectedTeam: string;
}

export const AnalyticsCharts = ({ selectedPeriod, selectedTeam }: AnalyticsChartsProps) => {
  const [data, setData] = useState([
    { name: 'Mon', calls: 150, resolution: 92 },
    { name: 'Tue', calls: 230, resolution: 89 },
    { name: 'Wed', calls: 224, resolution: 95 },
    { name: 'Thu', calls: 218, resolution: 91 },
    { name: 'Fri', calls: 235, resolution: 88 },
  ]);

  // Mock daily data
  const dailyData = [
    { name: '9 AM', calls: 25, resolution: 95 },
    { name: '10 AM', calls: 40, resolution: 92 },
    { name: '11 AM', calls: 35, resolution: 89 },
    { name: '12 PM', calls: 20, resolution: 94 },
    { name: '1 PM', calls: 30, resolution: 90 },
    { name: '2 PM', calls: 45, resolution: 87 },
    { name: '3 PM', calls: 38, resolution: 91 },
    { name: '4 PM', calls: 28, resolution: 93 },
  ];

  // Mock weekly data
  const weeklyData = [
    { name: 'Mon', calls: 150, resolution: 92 },
    { name: 'Tue', calls: 230, resolution: 89 },
    { name: 'Wed', calls: 224, resolution: 95 },
    { name: 'Thu', calls: 218, resolution: 91 },
    { name: 'Fri', calls: 235, resolution: 88 },
  ];

  // Mock monthly data
  const monthlyData = [
    { name: 'Week 1', calls: 850, resolution: 90 },
    { name: 'Week 2', calls: 920, resolution: 93 },
    { name: 'Week 3', calls: 890, resolution: 91 },
    { name: 'Week 4', calls: 950, resolution: 89 },
  ];

  // Team variations
  const teamVariations = {
    alpha: 1.2,
    beta: 0.9,
    gamma: 1.1,
    all: 1
  };

  useEffect(() => {
    let newData;
    
    // Set data based on selected period
    if (selectedPeriod === 'day') {
      newData = [...dailyData];
    } else if (selectedPeriod === 'week') {
      newData = [...weeklyData];
    } else {
      newData = [...monthlyData];
    }
    
    // Adjust data based on selected team
    if (selectedTeam !== 'all') {
      const variation = teamVariations[selectedTeam as keyof typeof teamVariations];
      newData = newData.map(item => ({
        ...item,
        calls: Math.round(item.calls * variation),
        resolution: Math.min(Math.round(item.resolution * (selectedTeam === 'alpha' ? 1.03 : 0.98)), 100)
      }));
    }
    
    setData(newData);
  }, [selectedPeriod, selectedTeam]);
  
  const handleExportChart = (chartName: string) => {
    toast.success(`${chartName} chart exported successfully`);
  };

  return (
    <Card className="medical-card card-gradient-info">
      <CardHeader>
        <CardTitle className="text-slate-800 flex items-center justify-between">
          <div className="flex items-center">
            <div className="icon-container icon-container-info mr-2">
              <BarChart3 className="h-5 w-5" />
            </div>
            {selectedPeriod === 'day' ? 'Daily' : selectedPeriod === 'week' ? 'Weekly' : 'Monthly'} Analytics
            {selectedTeam !== 'all' && (
              <span className="ml-2 text-sm bg-info/20 text-info px-2 py-0.5 rounded-full">
                Team {selectedTeam.charAt(0).toUpperCase() + selectedTeam.slice(1)}
              </span>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Call Volume Chart */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-700">Call Volume</h3>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-slate-500">
                  {selectedPeriod === 'day' ? 'Last 8 hours' : 
                   selectedPeriod === 'week' ? 'Last 5 days' : 'Last 4 weeks'}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-7 w-7 p-0"
                  onClick={() => handleExportChart('Call Volume')}
                >
                  <Download className="h-3.5 w-3.5 text-slate-500" />
                </Button>
              </div>
            </div>
            <div className="h-[200px] bg-slate-50 p-4 rounded-lg border border-slate-200">
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
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-info rounded-full"></div>
                  <span className="text-xs text-slate-500">Performance trend</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-7 w-7 p-0"
                  onClick={() => handleExportChart('Resolution Rate')}
                >
                  <Download className="h-3.5 w-3.5 text-slate-500" />
                </Button>
              </div>
            </div>
            <div className="h-[200px] bg-slate-50 p-4 rounded-lg border border-slate-200">
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
                    domain={selectedPeriod === 'month' ? [85, 95] : [80, 100]}
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
