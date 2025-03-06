
import { useState } from "react";
import TopNav from "./TopNav";

export default function DashboardLayout({ 
  children 
}: { 
  children: (props: { isAgent: boolean }) => React.ReactNode 
}) {
  const [isAgent, setIsAgent] = useState(true);

  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex-1">
        <TopNav isAgent={isAgent} setIsAgent={setIsAgent} />
        <main className="p-6 transition-all duration-300 animate-fade-in">
          {children({ isAgent })}
        </main>
      </div>
    </div>
  );
}
