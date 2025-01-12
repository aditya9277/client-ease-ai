import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const recentClaims = [
  { id: "CLM001", customer: "Kanishk Shukla", type: "Insurance", status: "Pending", sentiment: "Positive" },
  { id: "CLM002", customer: "Aditya Gupta", type: "Warranty", status: "Processing", sentiment: "Neutral" },
  { id: "CLM003", customer: "Priyanshi Sharma", type: "Insurance", status: "Pending", sentiment: "Positive" },
  { id: "CLM004", customer: "Nisha", type: "Refund", status: "Resolved", sentiment: "Negative" },
];

export const RecentClaims = () => (
  <Card>
    <CardHeader>
      <CardTitle>Recent Claims</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {recentClaims.map((claim) => (
          <div
            key={claim.id}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium">{claim.customer}</p>
              <p className="text-xs text-muted-foreground">
                {claim.id} - {claim.type}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-xs px-2 py-1 rounded-full ${
                claim.sentiment === "Positive" ? "bg-green-100 text-green-700" :
                claim.sentiment === "Negative" ? "bg-red-100 text-red-700" :
                "bg-yellow-100 text-yellow-700"
              }`}>
                {claim.sentiment}
              </span>
              <span className="text-xs text-muted-foreground">{claim.status}</span>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);