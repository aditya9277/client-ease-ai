import { FileDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ReportCardProps {
  reportName: string;
}

export const ReportCard = ({ reportName }: ReportCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileDown className="h-5 w-5 text-primary" />
          Last Call Report
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Download the generated report from your last call
          </p>
          <Button className="w-full" variant="secondary" asChild>
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