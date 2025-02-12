
import { FileDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ReportCardProps {
  reportName: string;
}

export const ReportCard = ({ reportName }: ReportCardProps) => {
  return (
    <Card className="bg-[#252A3C] border-purple-500/20 hover:border-purple-500/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-100">
          <FileDown className="h-5 w-5 text-purple-400" />
          Last Call Report
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-gray-400">
            Download the generated report from your last call
          </p>
          <Button className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300" asChild>
            <a href="#" download={reportName}>
              <FileDown className="mr-2 h-4 w-4" />
              Download Report
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
