
import { FileText, Download, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import axios from "axios";

export const ClaimDocumentsCard = () => {
  const [businessDocs, setBusinessDocs] = useState<{ phoneNumber: string; filePath: string }[]>([]);

  useEffect(() => {
    const fetchBusinessDocuments = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logs/claim-documents`);
        // Ensure data is always an array
        const docsArray = Array.isArray(data) ? data : [];
        setBusinessDocs(docsArray);
      } catch (error) {
        console.error("Error fetching business documents:", error);
        // Set empty array on error to prevent map errors
        setBusinessDocs([]);
      }
    };
    fetchBusinessDocuments();
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
      console.error("Error fetching business document:", error);
    }
  };  
  return (
    <Card className="medical-card card-gradient-success">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <FileText className="h-5 w-5 text-cyan-400" />
          Business Intelligence Reports
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!Array.isArray(businessDocs) || businessDocs.length === 0 ? (
          <p className="text-slate-800">No business reports found.</p>
        ) : (
          <ul className="max-h-64 overflow-y-auto space-y-3 scrollbar-hide">
            {businessDocs.map((doc) => (
              <li
                key={doc.phoneNumber}
                className="flex items-center justify-between p-3 rounded-md bg-slate-50 border border-slate-200 text-slate-800"
              >
                <span className="text-slate-800">🚀 Startup ID: {doc.phoneNumber}</span>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-cyan-400 border-cyan-500/20 hover:text-cyan-300 hover:bg-cyan-500/10"
                  onClick={() => handleViewDocument(doc.filePath)}
                >
                  <Download className="h-4 w-4 mr-1" /> View Report
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};
