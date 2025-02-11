
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, PieChart, Pie, Cell,
} from "recharts";

const sentimentData = [
  { name: "Aug", positive: 65, negative: 35, neutral: 45 },
  { name: "Sep", positive: 59, negative: 41, neutral: 38 },
  { name: "Oct", positive: 50, negative: 60, neutral: 42 },
  { name: "Nov", positive: 71, negative: 29, neutral: 55 },
  { name: "Dec", positive: 56, negative: 44, neutral: 48 },
  { name: "Jan", positive: 89, negative: 11, neutral: 67 },
];

const performanceData = [
  { name: "Mon", total: 85, satisfied: 40, unsatisfied: 15, pending: 30 },
  { name: "Tue", total: 92, satisfied: 48, unsatisfied: 12, pending: 32 },
  { name: "Wed", total: 78, satisfied: 35, unsatisfied: 18, pending: 25 },
  { name: "Thu", total: 95, satisfied: 55, unsatisfied: 10, pending: 30 },
  { name: "Fri", total: 81, satisfied: 38, unsatisfied: 13, pending: 30 },
];

const distributionData = [
  { name: "Resolved (Satisfied)", value: 63, color: "#10B981" },
  { name: "Resolved (Unsatisfied)", value: 12, color: "#EF4444" },
  { name: "Pending Resolution", value: 25, color: "#F59E0B" },
];

export const AnalyticsCharts = () => (
  <div className="grid gap-6 md:grid-cols-2">
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Sentiment Analysis Trends</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sentimentData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px'
              }} 
            />
            <Legend />
            <Line type="monotone" dataKey="positive" stroke="#10B981" name="Positive" />
            <Line type="monotone" dataKey="neutral" stroke="#6366F1" name="Neutral" />
            <Line type="monotone" dataKey="negative" stroke="#EF4444" name="Negative" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Resolution Performance</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px'
              }} 
            />
            <Legend />
            <Bar dataKey="satisfied" fill="#10B981" name="Satisfied" stackId="stack" />
            <Bar dataKey="unsatisfied" fill="#EF4444" name="Unsatisfied" stackId="stack" />
            <Bar dataKey="pending" fill="#F59E0B" name="Pending" stackId="stack" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

    <Card className="md:col-span-2 hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Case Resolution Distribution</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={distributionData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {distributionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px'
              }} 
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </div>
);
