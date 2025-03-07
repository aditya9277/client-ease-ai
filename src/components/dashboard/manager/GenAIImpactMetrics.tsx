
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Sparkles, 
  TrendingUp, 
  Clock, 
  Brain, 
  LineChart, 
  Download,
  CalendarClock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';
import { cn } from "@/lib/utils";

export const GenAIImpactMetrics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [impactData, setImpactData] = useState<any>({
    resolutionTime: { before: 8.2, after: 3.6, unit: "minutes", improvement: 56 },
    customerSatisfaction: { before: 72, after: 94, unit: "%", improvement: 31 },
    firstCallResolution: { before: 65, after: 88, unit: "%", improvement: 35 },
    agentEfficiency: { before: 14, after: 32, unit: "calls/day", improvement: 129 }
  });
  
  const [timeSeriesData, setTimeSeriesData] = useState<any[]>([]);
  const [currentPoint, setCurrentPoint] = useState(0);
  
  // Generate initial time series data
  useEffect(() => {
    const generateTimeSeriesData = () => {
      const baseData = [
        { time: "7 AM", withAI: 92, withoutAI: 71 },
        { time: "8 AM", withAI: 94, withoutAI: 69 },
        { time: "9 AM", withAI: 91, withoutAI: 68 },
        { time: "10 AM", withAI: 95, withoutAI: 72 },
        { time: "11 AM", withAI: 93, withoutAI: 70 },
        { time: "12 PM", withAI: 89, withoutAI: 65 },
        { time: "1 PM", withAI: 87, withoutAI: 62 },
        { time: "2 PM", withAI: 92, withoutAI: 68 },
        { time: "3 PM", withAI: 96, withoutAI: 73 },
        { time: "4 PM", withAI: 95, withoutAI: 71 },
        { time: "5 PM", withAI: 93, withoutAI: 70 },
      ];
      
      return baseData;
    };
    
    setTimeSeriesData(generateTimeSeriesData());
    
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  
  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current data point with a slight variation to simulate live data
      setTimeSeriesData(prev => {
        const updated = [...prev];
        const randomVariation = Math.random() > 0.5 ? 1 : -1;
        
        updated[currentPoint] = {
          ...updated[currentPoint],
          withAI: Math.min(100, Math.max(85, updated[currentPoint].withAI + randomVariation))
        };
        
        return updated;
      });
      
      // Move to the next point in a circular manner
      setCurrentPoint(prev => (prev + 1) % timeSeriesData.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentPoint, timeSeriesData.length]);
  
  const handleExportReport = () => {
    toast.success("GenAI Impact Report exported successfully");
  };
  
  const renderImpactMetric = (title: string, data: any, icon: React.ReactNode) => (
    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-primary/20 hover:shadow-sm transition-all">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <div className="icon-container icon-container-accent mr-2 p-2">
            {icon}
          </div>
          <h4 className="font-medium text-slate-800">{title}</h4>
        </div>
        <Badge variant="outline" className="bg-success/10 text-success border-success/20 flex items-center">
          <TrendingUp className="h-3 w-3 mr-1" />
          {data.improvement}% ↑
        </Badge>
      </div>
      
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-xs text-slate-500">Before GenAI</p>
          <p className="text-xl font-semibold text-slate-400">{data.before} {data.unit}</p>
        </div>
        
        <div className="h-8 w-8 flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-accent animate-pulse" />
        </div>
        
        <div className="text-right">
          <p className="text-xs text-slate-500">With GenAI</p>
          <p className="text-2xl font-bold text-primary">{data.after} {data.unit}</p>
        </div>
      </div>
      
      <div className="mt-3 h-1 w-full bg-slate-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary to-accent" style={{ width: `${data.improvement}%` }}></div>
      </div>
    </div>
  );
  
  const Badge = ({ 
    children, 
    variant = "default", 
    className 
  }: { 
    children: React.ReactNode, 
    variant?: string, 
    className?: string 
  }) => (
    <div className={cn(
      "inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold",
      className
    )}>
      {children}
    </div>
  );
  
  return (
    <Card className="medical-card card-gradient-accent">
      <CardHeader>
        <CardTitle className="text-slate-800 flex items-center justify-between">
          <div className="flex items-center">
            <div className="icon-container icon-container-accent mr-2">
              <Brain className="h-5 w-5" />
            </div>
            GenAI Impact Metrics
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white hover:bg-slate-50"
            onClick={handleExportReport}
          >
            <Download className="h-4 w-4 mr-2" />
            Export Impact Report
          </Button>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center h-80">
            <div className="flex flex-col items-center">
              <div className="relative h-12 w-12">
                <div className="absolute inset-0 rounded-full border-4 border-slate-200 border-t-accent animate-spin"></div>
                <Brain className="h-6 w-6 text-accent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <p className="mt-4 text-slate-500">Analyzing GenAI impact...</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid gap-4 grid-cols-2">
              {renderImpactMetric("Resolution Time", impactData.resolutionTime, <Clock className="h-4 w-4" />)}
              {renderImpactMetric("Customer Satisfaction", impactData.customerSatisfaction, <Sparkles className="h-4 w-4" />)}
              {renderImpactMetric("First Call Resolution", impactData.firstCallResolution, <LineChart className="h-4 w-4" />)}
              {renderImpactMetric("Agent Efficiency", impactData.agentEfficiency, <CalendarClock className="h-4 w-4" />)}
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-slate-700 mb-3">Real-time Customer Satisfaction</h3>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={timeSeriesData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                    >
                      <defs>
                        <linearGradient id="colorWithAI" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorWithoutAI" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis 
                        dataKey="time" 
                        stroke="#64748b" 
                        fontSize={12}
                        axisLine={{ stroke: '#e2e8f0' }}
                        tickLine={{ stroke: '#e2e8f0' }}
                      />
                      <YAxis 
                        stroke="#64748b" 
                        fontSize={12} 
                        domain={[50, 100]}
                        axisLine={{ stroke: '#e2e8f0' }}
                        tickLine={{ stroke: '#e2e8f0' }}
                        tickFormatter={(value) => `${value}%`}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e2e8f0',
                          borderRadius: '8px',
                          boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                          color: '#1e293b'
                        }}
                        formatter={(value) => [`${value}%`, '']}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="withAI" 
                        stroke="#6366f1" 
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorWithAI)"
                        activeDot={{ r: 6, strokeWidth: 0, fill: '#6366f1' }}
                        name="With GenAI"
                        isAnimationActive={true}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="withoutAI" 
                        stroke="#94a3b8" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        fillOpacity={1}
                        fill="url(#colorWithoutAI)"
                        activeDot={{ r: 6, strokeWidth: 0, fill: '#94a3b8' }}
                        name="Without GenAI"
                        isAnimationActive={true}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center mt-2 space-x-6">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
                    <span className="text-xs text-slate-600">With GenAI</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-slate-400 mr-2"></div>
                    <span className="text-xs text-slate-600">Without GenAI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
