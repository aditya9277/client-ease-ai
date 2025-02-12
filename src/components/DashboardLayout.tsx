
import { useState } from "react";
import TopNav from "./TopNav";

export default function DashboardLayout({ 
  children 
}: { 
  children: (props: { isAgent: boolean }) => React.ReactNode 
}) {
  const [isAgent, setIsAgent] = useState(true);

  return (
    <div className="min-h-screen flex w-full bg-[#1A1F2C]">
      <div className="flex-1">
        <TopNav isAgent={isAgent} setIsAgent={setIsAgent} />
        <main className="p-6">{children({ isAgent })}</main>
      </div>
    </div>
  );
}
