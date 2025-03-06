
import { User, Clock, CalendarDays, CreditCard, Heart, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CustomerInsightsCardProps {
  isLoading?: boolean;
}

export const CustomerInsightsCard = ({ isLoading = false }: CustomerInsightsCardProps) => {
  const customerInfo = {
    name: "Sarah Johnson",
    age: 34,
    memberSince: "March 2019",
    planType: "Premium Health Plus",
    recentClaims: 3,
    careStatus: "Active Treatment",
  };

  if (isLoading) {
    return (
      <Card className="medical-card card-gradient-primary">
        <CardHeader>
          <CardTitle className="text-slate-800">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Customer Insights
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 bg-slate-50 p-4 rounded-lg border border-slate-200 animate-pulse">
              <div className="h-14 w-14 rounded-full bg-slate-200"></div>
              <div className="space-y-2">
                <div className="h-4 w-32 bg-slate-200 rounded"></div>
                <div className="h-3 w-24 bg-slate-200 rounded"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 animate-pulse">
                <div className="h-4 w-20 bg-slate-200 rounded mb-2"></div>
                <div className="h-3 w-28 bg-slate-200 rounded"></div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 animate-pulse">
                <div className="h-4 w-20 bg-slate-200 rounded mb-2"></div>
                <div className="h-3 w-24 bg-slate-200 rounded"></div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 col-span-2 animate-pulse">
                <div className="h-4 w-20 bg-slate-200 rounded mb-2"></div>
                <div className="h-3 w-32 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="medical-card card-gradient-primary">
      <CardHeader>
        <CardTitle className="text-slate-800">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Customer Insights
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="relative">
              <div className="h-14 w-14 rounded-full flex items-center justify-center bg-primary/20 text-primary text-2xl font-bold">
                SJ
              </div>
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-success rounded-full border-2 border-white" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">{customerInfo.name}</h3>
              <div className="flex items-center space-x-1 text-xs text-slate-500">
                <Clock className="h-3 w-3" />
                <span>Member since {customerInfo.memberSince}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="flex items-center space-x-2">
                <CreditCard className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium text-slate-700">Plan Type</span>
              </div>
              <p className="text-slate-900 text-sm mt-1">{customerInfo.planType}</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="flex items-center space-x-2">
                <CalendarDays className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium text-slate-700">Recent Claims</span>
              </div>
              <p className="text-slate-900 text-sm mt-1">{customerInfo.recentClaims} in last 90 days</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 col-span-2">
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium text-slate-700">Care Status</span>
              </div>
              <p className="text-slate-900 text-sm mt-1">{customerInfo.careStatus}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
