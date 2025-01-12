import { FileText, Users, Clock, TrendingUp, BrainCircuit, HeartPulse, Target, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatsCard from "@/components/dashboard/StatsCard";
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

const recentClaims = [
  { id: "CLM001", customer: "Kanishk Shukla", type: "Insurance", status: "Pending", sentiment: "Positive" },
  { id: "CLM002", customer: "Aditya Gupta", type: "Warranty", status: "Processing", sentiment: "Neutral" },
  { id: "CLM003", customer: "Priyanshi Sharma", type: "Insurance", status: "Pending", sentiment: "Positive" },
  { id: "CLM004", customer: "Nisha", type: "Refund", status: "Resolved", sentiment: "Negative" },
];

const ManagerDashboard = () => (
  <div className="space-y-6">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Claims"
        value="1,234"
        icon={<FileText className="h-4 w-4 text-muted-foreground" />}
        description="+14% from last month"
      />
      <StatsCard
        title="Active Agents"
        value="45"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
        description="Currently online"
      />
      <StatsCard
        title="Avg. Resolution Time"
        value="24m"
        icon={<Clock className="h-4 w-4 text-muted-foreground" />}
        description="-8% from last week"
      />
      <StatsCard
        title="Customer Satisfaction"
        value="92%"
        icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
        description="+5% this month"
      />
    </div>
    
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

      <Card>
        <CardHeader>
          <CardTitle>AI Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
              <BrainCircuit className="h-8 w-8 text-purple-500" />
              <div>
                <h4 className="font-medium">Pattern Detection</h4>
                <p className="text-sm text-muted-foreground">Common customer issues identified in last 24h</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
              <HeartPulse className="h-8 w-8 text-red-500" />
              <div>
                <h4 className="font-medium">Sentiment Alerts</h4>
                <p className="text-sm text-muted-foreground">3 agents need support with challenging calls</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
              <Target className="h-8 w-8 text-blue-500" />
              <div>
                <h4 className="font-medium">Performance Optimization</h4>
                <p className="text-sm text-muted-foreground">Team efficiency increased by 12%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Claims</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentClaims.map((claim) => (
              <div
                key={claim.id}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium">{claim.customer}</p>
                  <p className="text-xs text-muted-foreground">
                    {claim.id} - {claim.type}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    claim.sentiment === "Positive" ? "bg-green-100 text-green-700" :
                    claim.sentiment === "Negative" ? "bg-red-100 text-red-700" :
                    "bg-yellow-100 text-yellow-700"
                  }`}>
                    {claim.sentiment}
                  </span>
                  <span className="text-xs text-muted-foreground">{claim.status}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Team Communication</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-500" />
              <h4 className="font-medium">Active Discussions</h4>
            </div>
            <p className="text-2xl font-bold">8</p>
            <p className="text-sm text-muted-foreground">Team threads</p>
          </div>
          <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-500" />
              <h4 className="font-medium">Team Collaboration</h4>
            </div>
            <p className="text-2xl font-bold">92%</p>
            <p className="text-sm text-muted-foreground">Response rate</p>
          </div>
          <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-500" />
              <h4 className="font-medium">Average Response</h4>
            </div>
            <p className="text-2xl font-bold">14m</p>
            <p className="text-sm text-muted-foreground">Response time</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default ManagerDashboard;