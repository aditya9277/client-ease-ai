
import { 
  FileText, 
  Users, 
  Clock, 
  TrendingUp, 
  ThumbsUp, 
  AlertTriangle, 
  CheckCircle 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const RecentClaims = () => {
  // Sample data for recent claims
  const recentClaims = [
    {
      id: "CL-78945",
      customer: "Emily Johnson",
      type: "Auto Accident",
      date: "May 20, 2023",
      status: "In Review",
      agent: "Alex Rivera",
      priority: "high"
    },
    {
      id: "CL-78932",
      customer: "Michael Chen",
      type: "Property Damage",
      date: "May 19, 2023",
      status: "Pending Info",
      agent: "Jordan Smith",
      priority: "medium"
    },
    {
      id: "CL-78916",
      customer: "Sarah Thompson",
      type: "Medical Claim",
      date: "May 18, 2023",
      status: "Approved",
      agent: "Taylor Wilson",
      priority: "low"
    },
    {
      id: "CL-78905",
      customer: "David Rodriguez",
      type: "Liability",
      date: "May 17, 2023",
      status: "In Review",
      agent: "Casey Jones",
      priority: "medium"
    }
  ];

  // Function to determine status badge color
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return (
          <Badge className="bg-success/20 text-success hover:bg-success/30 border-0">
            <CheckCircle className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        );
      case "In Review":
        return (
          <Badge className="bg-info/20 text-info hover:bg-info/30 border-0">
            <Clock className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        );
      case "Pending Info":
        return (
          <Badge className="bg-warning/20 text-warning hover:bg-warning/30 border-0">
            <AlertTriangle className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        );
      default:
        return (
          <Badge className="bg-slate-200 text-slate-700 hover:bg-slate-300 border-0">
            {status}
          </Badge>
        );
    }
  };

  // Function to determine priority marker
  const getPriorityMarker = (priority: string) => {
    switch (priority) {
      case "high":
        return <span className="absolute left-0 top-0 bottom-0 w-1 bg-destructive rounded-l-lg"></span>;
      case "medium":
        return <span className="absolute left-0 top-0 bottom-0 w-1 bg-warning rounded-l-lg"></span>;
      case "low":
        return <span className="absolute left-0 top-0 bottom-0 w-1 bg-success rounded-l-lg"></span>;
      default:
        return null;
    }
  };

  return (
    <Card className="medical-card card-gradient-success h-full">
      <CardHeader>
        <CardTitle className="text-slate-800 flex items-center">
          <div className="icon-container icon-container-success mr-2">
            <FileText className="h-5 w-5" />
          </div>
          Recent Claims
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentClaims.map((claim) => (
            <div key={claim.id} className="relative bg-white rounded-lg shadow-sm border border-slate-100 hover:border-success/20 hover:shadow-md transition-all overflow-hidden group">
              {getPriorityMarker(claim.priority)}
              <div className="p-3 pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-medium text-slate-800 group-hover:text-slate-900">{claim.customer}</h4>
                      <span className="ml-2 text-xs text-slate-500">{claim.id}</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">{claim.type}</p>
                  </div>
                  <div>{getStatusBadge(claim.status)}</div>
                </div>
                <div className="flex justify-between items-center mt-3 text-xs">
                  <div className="flex items-center text-slate-500">
                    <Users className="h-3 w-3 mr-1" />
                    <span>{claim.agent}</span>
                  </div>
                  <div className="text-slate-500">{claim.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
