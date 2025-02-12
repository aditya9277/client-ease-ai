
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const recentClaims = [
  { id: "CLM001", customer: "Kanishk Shukla", type: "Insurance", status: "Pending", sentiment: "Positive" },
  { id: "CLM002", customer: "Aditya Gupta", type: "Warranty", status: "Processing", sentiment: "Neutral" },
  { id: "CLM003", customer: "Priyanshi Sharma", type: "Insurance", status: "Pending", sentiment: "Positive" },
  { id: "CLM004", customer: "Nisha", type: "Refund", status: "Resolved", sentiment: "Negative" },
];

export const RecentClaims = () => (
  <Card className="bg-[#252A3C] border-purple-500/20 hover:border-purple-500/40">
    <CardHeader>
      <CardTitle className="text-gray-100">Recent Claims</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {recentClaims.map((claim) => (
          <div
            key={claim.id}
            className="flex items-center justify-between p-4 rounded-lg bg-[#1A1F2C]/60"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-100">{claim.customer}</p>
              <p className="text-xs text-gray-400">
                {claim.id} - {claim.type}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-xs px-2 py-1 rounded-full ${
                claim.sentiment === "Positive" ? "bg-green-500/20 text-green-300" :
                claim.sentiment === "Negative" ? "bg-red-500/20 text-red-300" :
                "bg-yellow-500/20 text-yellow-300"
              }`}>
                {claim.sentiment}
              </span>
              <span className="text-xs text-gray-400">{claim.status}</span>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);
