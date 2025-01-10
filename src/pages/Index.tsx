import { FileText, MessageSquare, BarChart2, Zap, Phone, HeadphonesIcon, ClipboardList, Bot } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ManagerDashboard = () => (
  <>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Active Claims"
        value="128"
        icon={<FileText className="h-4 w-4 text-muted-foreground" />}
        description="+14% from last month"
      />
      <StatsCard
        title="Chatbot Interactions"
        value="2,842"
        icon={<MessageSquare className="h-4 w-4 text-muted-foreground" />}
        description="Last 24 hours"
      />
      <StatsCard
        title="Sentiment Score"
        value="4.2"
        icon={<BarChart2 className="h-4 w-4 text-muted-foreground" />}
        description="Average rating"
      />
      <StatsCard
        title="Automated Tasks"
        value="1,234"
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
        description="This week"
      />
    </div>
    
    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Recent Claims</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Placeholder for claims table
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Sentiment Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Placeholder for sentiment chart
          </p>
        </CardContent>
      </Card>
    </div>
  </>
);

const AgentDashboard = () => (
  <>
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Agent Assistance Hub</h2>
        <Button variant="outline" className="gap-2">
          <Phone className="h-4 w-4" />
          Ready for Calls
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HeadphonesIcon className="h-5 w-5" />
              Pre-Call Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                AI-powered pre-call insights and customer context
              </p>
              <Button className="w-full" asChild>
                <a href="#">Launch Pre-Call Assistant</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              Claims Documentation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Auto-generate and manage claim documentation
              </p>
              <Button className="w-full" asChild>
                <a href="#">Open Claims Assistant</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              AI Chat Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Real-time AI assistance during calls
              </p>
              <Button className="w-full" asChild>
                <a href="#">Start AI Support</a>
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
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-medium">Real-time Sentiment</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor customer sentiment during the call
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Smart Suggestions</h3>
                <p className="text-sm text-muted-foreground">
                  Get AI-powered response suggestions
                </p>
              </div>
            </div>
            <Button className="w-full" variant="secondary" asChild>
              <a href="#">Open Live Assistant</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </>
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