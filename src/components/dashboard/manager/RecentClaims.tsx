
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
      id: "CLM-2025-001",
      customer: "Aditya Gupta",
      date: "March 10, 2025",
      type: "Health Insurance",
      amount: "Rs2500",
      status: "approved",
      aiAssisted: true,
      processingTime: "15m",
    },
    {
      id: "CLM-2025-002",
      customer: "Priyanshi Sharma",
      date: "March 11, 2025",
      type: "Product Malfunctioning",
      amount: "$3,750.00",
      status: "Processed",
      aiAssisted: true,
      processingTime: "45m",
    },
    {
      id: "CL-78916",
      customer: "Raj",
      type: "TV refund claim",
      date: "March 12, 2025",
      status: "Pending",
      agent: "Taylor Wilson",
      priority: "low"
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
        return <Badge variant="outline" className="bg-success/10 text-success border-success/20">Approved</Badge>;
      case "pending":
        return <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">Pending</Badge>;
      case "rejected":
        return <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">Rejected</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <Card className="medical-card card-gradient-primary">
      <CardHeader>
        <CardTitle className="text-slate-800 flex items-center">
          <div className="icon-container icon-container-primary mr-2">
            <FileText className="h-5 w-5" />
          </div>
          Recent Claims
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isLoading ? (
            <div className="flex items-center justify-center h-40">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full border-4 border-slate-200 border-t-primary animate-spin"></div>
                <p className="mt-3 text-sm text-slate-500">Loading claims...</p>
              </div>
            </div>
          ) : (
            claims.map(claim => (
              <div key={claim.id} className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-primary/20 hover:shadow-sm transition-all">
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${
                      claim.type === "Health Insurance" ? "bg-info/10 text-info" :
                      claim.type === "Auto Insurance" ? "bg-warning/10 text-warning" :
                      "bg-accent/10 text-accent"
                    }`}>
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 flex items-center">
                        {claim.id}
                        {claim.aiAssisted && (
                          <span className="inline-flex items-center ml-2 px-1.5 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                            AI Processed
                          </span>
                        )}
                      </h4>
                      <div className="flex flex-col space-y-1 mt-1">
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
                  <div className="flex flex-col items-end space-y-2">
                    <div className="text-right">
                      <div className="text-sm font-semibold text-slate-800">{claim.amount}</div>
                      <div className="mt-1">
                        {getStatusBadge(claim.status)}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center text-xs text-slate-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {claim.processingTime}
                      </div>
                      <button
                        onClick={() => handleDownloadClaim(claim.id)}
                        className="p-1 hover:bg-slate-100 rounded-full transition-colors"
                      >
                        <Download className="h-4 w-4 text-slate-400 hover:text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};
