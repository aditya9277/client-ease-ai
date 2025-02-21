import { FileText, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import axios from "axios";

export const ClaimDocumentsCard = () => {
  const [claimDocs, setClaimDocs] = useState<{ phoneNumber: string; filePath: string }[]>([]);

  useEffect(() => {
    const fetchClaimDocuments = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logs/claim-documents`);
        setClaimDocs(data);
      } catch (error) {
        console.error("Error fetching claim documents:", error);
      }
    };
    fetchClaimDocuments();
  }, []);

  const handleViewDocument = async (filePath: string) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}${filePath}`, {
        responseType: "blob", // Get the PDF as a blob
      });
  
      // Create a blob URL
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
  
      // Open the PDF in a new tab
      window.open(url, "_blank", "noopener,noreferrer");
  
    } catch (error) {
      console.error("Error fetching claim document:", error);
    }
  };  
  return (
    <Card className="bg-[#1E293B]/90 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-100">
          <FileText className="h-5 w-5 text-cyan-400" />
          Claim Documents
        </CardTitle>
      </CardHeader>
      <CardContent>
        {claimDocs.length === 0 ? (
          <p className="text-gray-400">No claim documents found.</p>
        ) : (
          <ul className="max-h-64 overflow-y-auto space-y-3 scrollbar-hide">
            {claimDocs.map((doc) => (
              <li
                key={doc.phoneNumber}
                className="flex items-center justify-between p-3 rounded-md bg-[#0F172A]/60 border border-cyan-500/20"
              >
                <span className="text-gray-300">📞 {doc.phoneNumber}</span>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-cyan-400 border-cyan-500/20 hover:text-cyan-300 hover:bg-cyan-500/10"
                  onClick={() => handleViewDocument(doc.filePath)}
                >
                  <Download className="h-4 w-4 mr-1" /> View & Download
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};
