
import { FileBox, Banknote, Calendar, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const RecentClaims = () => {
  const claims = [
    {
      id: "CLM-1234",
      customer: "Aditya Gupta",
      status: "Pending",
      date: "2025-02-15",
      amount: "$120",
    },
    {
      id: "CLM-1235",
      customer: "Priyanshi Sharma",
      status: "Approved",
      date: "2025-02-14",
      amount: "$85",
    },
    {
      id: "CLM-1236",
      customer: "Kanishk Shukla",
      status: "Processing",
      date: "2025-02-17",
      amount: "$230",
    },
  ];

  const handleDownload = (claimId: string) => {
    // This is a placeholder for the actual download function
    // You can add the real download link here
    toast.info(`Downloading claim document ${claimId}...`);
  };

  return (
    <Card className="medical-card card-gradient-primary">
      <CardHeader className="pb-3">
        <CardTitle className="text-slate-800 text-xl flex items-center">
          <div className="icon-container icon-container-primary mr-2">
            <FileBox className="h-5 w-5" />
          </div>
          Recent Claims
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {claims.map((claim) => (
            <div
              key={claim.id}
              className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-primary/20 hover:shadow-sm transition-all duration-300 group relative"
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <FileBox className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 group-hover:text-slate-900 transition-colors">{claim.customer}</p>
                  <div className="flex items-center text-sm text-slate-500 gap-1 mt-1">
                    <span className="text-primary">{claim.id}</span>
                    <span className="text-slate-400">•</span>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {claim.date}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right flex flex-col items-end">
                <div className="flex items-center">
                  <Banknote className="h-4 w-4 text-success mr-1" />
                  <p className="font-medium text-slate-800 group-hover:text-slate-900 transition-colors">{claim.amount}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={
                    claim.status === 'Approved' 
                      ? 'badge-success' 
                      : claim.status === 'Pending' 
                      ? 'badge-warning' 
                      : 'badge-info'
                  }>
                    {claim.status}
                  </Badge>
                  <Button 
                    onClick={() => handleDownload(claim.id)} 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 w-8 p-0 text-slate-500 hover:text-primary hover:bg-primary/10"
                  >
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download {claim.id}</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
