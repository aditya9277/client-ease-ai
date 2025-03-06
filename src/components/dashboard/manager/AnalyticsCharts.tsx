
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
import { BarChart3, LineChart as LineChartIcon } from "lucide-react";

export const AnalyticsCharts = () => {
  const data = [
    { name: 'Mon', calls: 150, resolution: 92 },
    { name: 'Tue', calls: 230, resolution: 89 },
    { name: 'Wed', calls: 224, resolution: 95 },
    { name: 'Thu', calls: 218, resolution: 91 },
    { name: 'Fri', calls: 235, resolution: 88 },
  ];

  return (
    <Card className="medical-card card-gradient-info">
      <CardHeader>
        <CardTitle className="text-slate-800 flex items-center">
          <div className="icon-container icon-container-info mr-2">
            <BarChart3 className="h-5 w-5" />
          </div>
          Weekly Analytics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Call Volume Chart */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-700">Call Volume</h3>
              <span className="text-xs text-slate-500">Last 5 days</span>
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
