
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

export const AnalyticsCharts = () => {
  const data = [
    { name: 'Mon', calls: 150, resolution: 92 },
    { name: 'Tue', calls: 230, resolution: 89 },
    { name: 'Wed', calls: 224, resolution: 95 },
    { name: 'Thu', calls: 218, resolution: 91 },
    { name: 'Fri', calls: 235, resolution: 88 },
  ];

  return (
    <Card className="bg-[#252A3C] border-purple-500/20 hover:border-purple-500/40">
      <CardHeader>
        <CardTitle className="text-gray-100">Weekly Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Call Volume Chart */}
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis 
                  dataKey="name" 
                  stroke="#94a3b8" 
                  fontSize={12}
                />
                <YAxis 
                  stroke="#94a3b8" 
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A1F2C',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    borderRadius: '8px',
                    color: '#e2e8f0'
                  }}
                />
                <Bar 
                  dataKey="calls" 
                  fill="rgba(139, 92, 246, 0.6)" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Resolution Rate Chart */}
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis 
                  dataKey="name" 
                  stroke="#94a3b8" 
                  fontSize={12}
                />
                <YAxis 
                  stroke="#94a3b8" 
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A1F2C',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    borderRadius: '8px',
                    color: '#e2e8f0'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="resolution" 
                  stroke="#a78bfa" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
