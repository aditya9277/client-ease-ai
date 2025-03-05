
import { FileBox, Banknote, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

  return (
    <Card className="backdrop-blur-lg border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 shadow-lg shadow-indigo-500/5">
      <CardHeader className="pb-3">
        <CardTitle className="text-slate-200 text-xl flex items-center">
          <FileBox className="h-5 w-5 text-indigo-400 mr-2" />
          Recent Claims
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {claims.map((claim) => (
            <div
              key={claim.id}
              className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-900/80 to-slate-800/40 rounded-lg border border-indigo-500/20 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="bg-indigo-900/30 p-2 rounded-lg group-hover:bg-indigo-800/30 transition-colors">
                  <FileBox className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <p className="font-medium text-slate-200 group-hover:text-white transition-colors">{claim.customer}</p>
                  <div className="flex items-center text-sm text-slate-400 gap-1 mt-1">
                    <span className="text-indigo-500">{claim.id}</span>
                    <span className="text-slate-500">•</span>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {claim.date}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right flex flex-col items-end">
                <div className="flex items-center">
                  <Banknote className="h-4 w-4 text-emerald-400 mr-1" />
                  <p className="font-medium text-slate-200 group-hover:text-white transition-colors">{claim.amount}</p>
                </div>
                <Badge className={`mt-1 ${
                  claim.status === 'Approved' 
                    ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30' 
                    : claim.status === 'Pending' 
                    ? 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30' 
                    : 'bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30'
                }`}>
                  {claim.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
