
import DashboardLayout from "@/components/DashboardLayout";
import ManagerDashboard from "@/components/dashboard/ManagerDashboard";
import AgentDashboard from "@/components/dashboard/AgentDashboard";

const Dashboard = () => {
  return (
    <DashboardLayout>
      {({ isAgent }) => (
        isAgent ? <AgentDashboard /> : <ManagerDashboard />
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
