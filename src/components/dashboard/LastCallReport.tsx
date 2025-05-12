import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LastCallReportProps {
  phoneNumber: string | null; // ✅ Pass the phone number to dynamically fetch the file
  customerId?: string;
}

export const LastCallReport = ({ phoneNumber, customerId = "CUS-001" }: LastCallReportProps) => {
  if (!phoneNumber) return null;

  // ✅ Construct the file download URL
  const fileUrl = `${import.meta.env.VITE_API_URL}/logs/claim_doc_${phoneNumber}.pdf`;

  return (
    <div className="mt-6 border rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-medium">Last Call Report</h3>
          <p className="text-sm text-muted-foreground">Customer ID: {customerId}</p>
        </div>
        <Button
          variant="outline"
          className="gap-2"
          onClick={() => window.open(fileUrl, "_blank")} // ✅ Open PDF in new tab
        >
          <FileText className="h-4 w-4" />
          <span>Download Report</span>
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
