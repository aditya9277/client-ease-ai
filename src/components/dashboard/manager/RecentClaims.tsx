
import { FileBox } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const RecentClaims = () => {
  const claims = [
    {
      id: "CLM-1234",
      customer: "Sarah Johnson",
      status: "Pending",
      date: "2024-03-15",
      amount: "$1,200",
    },
    {
      id: "CLM-1235",
      customer: "Mike Chen",
      status: "Approved",
      date: "2024-03-14",
      amount: "$850",
    },
    {
      id: "CLM-1236",
      customer: "Emily Davis",
      status: "Processing",
      date: "2024-03-14",
      amount: "$2,300",
    },
  ];

  return (
    <Card className="bg-[#1E293B]/90 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40">
      <CardHeader>
        <CardTitle className="text-gray-100">Recent Claims</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {claims.map((claim) => (
            <div
              key={claim.id}
              className="flex items-center justify-between p-4 bg-[#0F172A]/60 rounded-lg border border-cyan-500/20"
            >
              <div className="flex items-center gap-3">
                <FileBox className="h-5 w-5 text-cyan-400" />
                <div>
                  <p className="font-medium text-gray-200">{claim.customer}</p>
                  <p className="text-sm text-gray-400">{claim.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-200">{claim.amount}</p>
                <p className={`text-sm ${
                  claim.status === 'Approved' 
                    ? 'text-teal-400' 
                    : claim.status === 'Pending' 
                    ? 'text-amber-400' 
                    : 'text-cyan-400'
                }`}>
                  {claim.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
