
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
}

export default function StatsCard({ title, value, icon, description }: StatsCardProps) {
  return (
    <Card className="bg-[#1E293B]/90 backdrop-blur-sm border-cyan-500/20 shadow-lg shadow-cyan-500/5 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-200">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-100">{value}</div>
        {description && <p className="text-xs text-slate-400">{description}</p>}
      </CardContent>
    </Card>
  );
}
