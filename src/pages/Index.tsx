import { FileText, MessageSquare, BarChart2, Zap } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <DashboardLayout>
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
    </DashboardLayout>
  );
};

export default Index;