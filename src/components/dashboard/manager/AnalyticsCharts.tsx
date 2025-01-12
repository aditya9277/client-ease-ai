import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const sentimentData = [
  { name: "Aug", positive: 65, negative: 35 },
  { name: "Sep", positive: 59, negative: 41 },
  { name: "Oct", positive: 50, negative: 60 },
  { name: "Nov", positive: 71, negative: 29 },
  { name: "Dec", positive: 56, negative: 44 },
  { name: "Jan", positive: 89, negative: 11 },
];

const performanceData = [
  { name: "Mon", calls: 45, resolved: 40 },
  { name: "Tue", calls: 52, resolved: 48 },
  { name: "Wed", calls: 38, resolved: 35 },
  { name: "Thu", calls: 60, resolved: 55 },
  { name: "Fri", calls: 41, resolved: 38 },
];

export const AnalyticsCharts = () => (
  <div className="grid gap-6 md:grid-cols-2">
    <Card>
      <CardHeader>
        <CardTitle>Sentiment Analysis Trends</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sentimentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="positive" stroke="#10B981" name="Positive" />
            <Line type="monotone" dataKey="negative" stroke="#EF4444" name="Negative" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Agent Performance</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="calls" fill="#6366F1" name="Total Calls" />
            <Bar dataKey="resolved" fill="#10B981" name="Resolved" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </div>
);