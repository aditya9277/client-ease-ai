
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  variant?: "primary" | "success" | "info" | "warning" | "destructive" | "default";
}

export default function StatsCard({ 
  title, 
  value, 
  icon, 
  description,
  variant = "primary" 
}: StatsCardProps) {
  const getCardClasses = () => {
    switch (variant) {
      case "primary":
        return "card-gradient-primary";
      case "success":
        return "card-gradient-success";
      case "info":
        return "card-gradient-info";
      case "warning":
        return "card-gradient-warning";
      case "destructive":
        return "card-gradient-destructive";
      default:
        return "bg-white";
    }
  };

  const getIconClasses = () => {
    switch (variant) {
      case "primary":
        return "icon-container-primary";
      case "success":
        return "icon-container-success";
      case "info":
        return "icon-container-info";
      case "warning":
        return "icon-container-warning";
      case "destructive":
        return "icon-container-destructive";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <Card className={`medical-card ${getCardClasses()} hover:shadow-md`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-700">{title}</CardTitle>
        <div className={`p-2 rounded-xl ${getIconClasses()} transition-colors`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-800">{value}</div>
        {description && (
          <p className="text-xs text-slate-500 mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
