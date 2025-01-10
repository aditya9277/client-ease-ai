import { FileText, Users, Clock, TrendingUp } from "lucide-react";
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
} from "recharts";

const sentimentData = [
  { name: "Jan", positive: 65, negative: 35 },
  { name: "Feb", positive: 59, negative: 41 },
  { name: "Mar", positive: 80, negative: 20 },
  { name: "Apr", positive: 71, negative: 29 },
  { name: "May", positive: 56, negative: 44 },
  { name: "Jun", positive: 89, negative: 11 },
];

const recentClaims = [
  { id: "CLM001", customer: "John Doe", type: "Insurance", status: "Pending", sentiment: "Positive" },
  { id: "CLM002", customer: "Jane Smith", type: "Warranty", status: "Processing", sentiment: "Neutral" },
  { id: "CLM003", customer: "Mike Johnson", type: "Refund", status: "Resolved", sentiment: "Negative" },
  { id: "CLM004", customer: "Sarah Williams", type: "Insurance", status: "Pending", sentiment: "Positive" },
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
  </div>
);

export default ManagerDashboard;