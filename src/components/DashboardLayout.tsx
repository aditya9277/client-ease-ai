import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "./DashboardSidebar";
import TopNav from "./TopNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isAgent, setIsAgent] = useState(true);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <DashboardSidebar />
        <div className="flex-1">
          <TopNav isAgent={isAgent} setIsAgent={setIsAgent} />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}