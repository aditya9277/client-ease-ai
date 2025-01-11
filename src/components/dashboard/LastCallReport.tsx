import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LastCallReportProps {
  reportName: string | null;
  customerId?: string;
}

export const LastCallReport = ({ reportName, customerId = "CUS-001" }: LastCallReportProps) => {
  if (!reportName) return null;

  return (
    <div className="mt-6 border rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-medium">Last Call Report</h3>
          <p className="text-sm text-muted-foreground">Customer ID: {customerId}</p>
        </div>
        <Button variant="outline" className="gap-2">
          <FileText className="h-4 w-4" />
          <span>Download Report</span>
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};