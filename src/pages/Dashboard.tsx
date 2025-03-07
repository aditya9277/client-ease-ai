
import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import ManagerDashboard from "@/components/dashboard/ManagerDashboard";
import AgentDashboard from "@/components/dashboard/AgentDashboard";
import { Sparkles } from "lucide-react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a smooth transition effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Reduced loading time for better UX
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="h-16 w-16 rounded-full border-4 border-primary/30 border-t-primary animate-spin mx-auto"></div>
            <Sparkles className="h-6 w-6 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h3 className="text-xl font-medium text-slate-700 animate-pulse">
            Loading AI-Powered Dashboard
          </h3>
          <p className="text-sm text-slate-500">
            Preparing your personalized experience...
          </p>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout>
      {({ isAgent }) => (
        <div className="animate-fade-in">
          {isAgent ? <AgentDashboard /> : <ManagerDashboard />}
        </div>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
