
import { useState, useEffect } from "react";
import { FileText, Clock, Download, ArrowUpRight, Calendar, User, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export const RecentClaims = () => {
  const [claims, setClaims] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for claims
  const mockClaims = [
    {
      id: "CLM-2023-001",
      customer: "John Davis",
      date: "2023-05-10",
      type: "Health Insurance",
      amount: "$1,250.00",
      status: "approved",
      aiAssisted: true,
      processingTime: "1h 15m",
    },
    {
      id: "CLM-2023-002",
      customer: "Sarah Johnson",
      date: "2023-05-09",
      type: "Auto Insurance",
      amount: "$3,750.00",
      status: "pending",
      aiAssisted: true,
      processingTime: "45m",
    },
    {
      id: "CLM-2023-003",
      customer: "Michael Brown",
      date: "2023-05-08",
      type: "Home Insurance",
      amount: "$5,200.00",
      status: "rejected",
      aiAssisted: false,
      processingTime: "2h 30m",
    },
    {
      id: "CLM-2023-004",
      customer: "Lisa Wilson",
      date: "2023-05-08",
      type: "Health Insurance",
      amount: "$950.00",
      status: "approved",
      aiAssisted: true,
      processingTime: "1h 05m",
    }
  ];

  // Simulate loading and fetch claims
  useEffect(() => {
    const timer = setTimeout(() => {
      setClaims(mockClaims);
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadClaim = (id: string) => {
    toast.success(`Downloading claim details for ${id}`);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-success/10 text-success border-success/20">Approved</Badge>;
      case "pending":
        return <Badge className="bg-warning/10 text-warning border-warning/20">Pending</Badge>;
      case "rejected":
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Rejected</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Health Insurance":
        return <div className="p-2 rounded-lg bg-info/10 text-info"><FileText className="h-5 w-5" /></div>;
      case "Auto Insurance":
        return <div className="p-2 rounded-lg bg-warning/10 text-warning"><FileText className="h-5 w-5" /></div>;
      case "Home Insurance":
        return <div className="p-2 rounded-lg bg-accent/10 text-accent"><FileText className="h-5 w-5" /></div>;
      default:
        return <div className="p-2 rounded-lg bg-primary/10 text-primary"><FileText className="h-5 w-5" /></div>;
    }
  };

  return (
    <Card className="shadow-md border-slate-200 hover:shadow-lg transition-all duration-300">
      <CardHeader className="bg-slate-50 border-b border-slate-100">
        <CardTitle className="text-slate-800 flex items-center">
          <div className="icon-container icon-container-primary mr-2">
            <FileText className="h-5 w-5" />
          </div>
          Recent Claims
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <div className="space-y-4">
          {isLoading ? (
            <div className="flex items-center justify-center h-40">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full border-4 border-slate-200 border-t-primary animate-spin"></div>
                <p className="mt-3 text-sm text-slate-500">Loading claims...</p>
              </div>
            </div>
          ) : (
            <div className="grid gap-4">
              {claims.map(claim => (
                <div key={claim.id} className="bg-white rounded-lg border border-slate-200 hover:border-primary/20 hover:shadow-sm transition-all p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-3">
                      {getTypeIcon(claim.type)}
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-medium text-slate-800">{claim.id}</h4>
                          {claim.aiAssisted && (
                            <span className="ml-2 px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                              AI Processed
                            </span>
                          )}
                        </div>
                        <div className="grid grid-cols-1 gap-1 mt-1">
                          <div className="flex items-center text-xs text-slate-500">
                            <User className="h-3 w-3 mr-1" />
                            <span>{claim.customer}</span>
                          </div>
                          <div className="flex items-center text-xs text-slate-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{claim.date}</span>
                          </div>
                          <div className="flex items-center text-xs text-slate-500">
                            <Tag className="h-3 w-3 mr-1" />
                            <span>{claim.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-800">{claim.amount}</div>
                        <div className="mt-1">
                          {getStatusBadge(claim.status)}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="flex items-center text-xs text-slate-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {claim.processingTime}
                        </div>
                        <button
                          onClick={() => handleDownloadClaim(claim.id)}
                          className="p-1.5 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
                          aria-label="Download claim details"
                        >
                          <Download className="h-4 w-4 text-slate-400 hover:text-primary" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
