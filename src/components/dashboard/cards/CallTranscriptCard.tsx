import { FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CallTranscriptCardProps {
  transcriptText: string;
}

export const CallTranscriptCard = ({ transcriptText }: CallTranscriptCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Live Call Transcript</CardTitle>
        <FileText className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
          <pre className="text-sm whitespace-pre-wrap font-mono">
            {transcriptText || "Waiting for call to begin..."}
          </pre>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};