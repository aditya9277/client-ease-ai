
import { FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CallTranscriptCardProps {
  transcriptText: string;
}

export const CallTranscriptCard = ({ transcriptText }: CallTranscriptCardProps) => {
  return (
    <Card className="bg-[#1E293B]/90 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-100">Live Call Transcript</CardTitle>
        <FileText className="h-4 w-4 text-cyan-400" />
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full rounded-md border border-cyan-500/20 bg-[#0F172A]/60 p-4">
          <pre className="text-sm whitespace-pre-wrap font-mono text-gray-300">
            {transcriptText || "Waiting for call to begin..."}
          </pre>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
