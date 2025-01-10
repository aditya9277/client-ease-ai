import { FileText, MessageSquare, BarChart2, Zap, Phone, HeadphonesIcon, ClipboardList, Bot, Users, TrendingUp, Clock } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

const AgentDashboard = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold">Agent Assistance Hub</h2>
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">Agent Status:</span>
        <Button variant="outline" className="gap-2">
          <Phone className="h-4 w-4" />
          Ready for Calls
        </Button>
      </div>
    </div>

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HeadphonesIcon className="h-5 w-5 text-primary" />
            Pre-Call Assistant
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Get instant context and insights before your next call
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Next call in: 2 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>Customer: John Smith</span>
              </div>
            </div>
            <Button className="w-full" asChild>
              <a href="#">Prepare for Call</a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-primary" />
            Claims Documentation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              AI-powered documentation assistant
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span>Active claims: 3</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <span>Completion rate: 95%</span>
              </div>
            </div>
            <Button className="w-full" variant="secondary" asChild>
              <a href="#">Open Claims Assistant</a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            AI Support
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Real-time AI assistance during calls
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                <span>Smart suggestions ready</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BarChart2 className="h-4 w-4 text-muted-foreground" />
                <span>Sentiment tracking active</span>
              </div>
            </div>
            <Button className="w-full" variant="secondary" asChild>
              <a href="#">Launch AI Support</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Live Call Assistance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="font-medium">Real-time Sentiment</h3>
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-300 rounded-full" />
              <p className="text-sm text-muted-foreground">
                Current: Positive (89%)
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Call Duration</h3>
              <div className="text-2xl font-bold">05:23</div>
              <p className="text-sm text-muted-foreground">
                Avg. call time: 07:15
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Smart Suggestions</h3>
              <div className="text-sm text-muted-foreground">
                3 suggestions available
              </div>
              <Button variant="outline" size="sm" className="w-full">
                View Suggestions
              </Button>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="w-40">Hold Call</Button>
            <Button variant="destructive" className="w-40">End Call</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const Index = () => {
  return (
    <DashboardLayout>
      {({ isAgent }) => (
        isAgent ? <AgentDashboard /> : <ManagerDashboard />
      )}
    </DashboardLayout>
  );
};

export default Index;