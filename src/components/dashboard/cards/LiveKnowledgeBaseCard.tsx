
import { BookOpen, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import axios from "axios";

interface LiveKnowledgeBaseCardProps {
  isLoading?: boolean;
}

export const LiveKnowledgeBaseCard = ({ isLoading = false }: LiveKnowledgeBaseCardProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      setAiResponse(null);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/knowledge-base/search?query=${searchQuery}`);
        setSuggestions(data.suggestions || []);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    fetchSuggestions();
  }, [searchQuery]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/knowledge-base/query?query=${searchQuery}`);
      setAiResponse(data.answer);
      toast.success("AI-powered response fetched!");
    } catch (error) {
      console.error("Error fetching AI response:", error);
      toast.error("Could not fetch response. Try again!");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Card className="medical-card card-gradient-info">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <BookOpen className="h-5 w-5 text-cyan-400" />
            Knowledge Base
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="h-10 bg-slate-200 rounded-md animate-pulse flex-grow"></div>
              <div className="h-10 w-10 bg-slate-200 rounded-md animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-slate-200 rounded-md animate-pulse"></div>
              <div className="h-16 bg-slate-200 rounded-md animate-pulse"></div>
              <div className="h-16 bg-slate-200 rounded-md animate-pulse"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="medical-card card-gradient-info">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <BookOpen className="h-5 w-5 text-cyan-400" />
          Knowledge Base
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Ask AI a question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#0F172A]/60 border-cyan-500/20 text-gray-200 placeholder:text-gray-500"
            />
            <Button type="submit" variant="outline" className="border-cyan-500/20 text-cyan-400 hover:text-cyan-300">
              {loading ? "Searching..." : <Search className="h-4 w-4" />}
            </Button>
          </div>

          {suggestions.length > 0 && (
            <div className="space-y-2 p-3 bg-[#0F172A]/60 border border-cyan-500/20 rounded-md">
              {suggestions.map((s, idx) => (
                <p key={idx} className="text-sm text-gray-300">{s}</p>
              ))}
            </div>
          )}

          {aiResponse && (
            <div className="p-4 bg-[#0F172A]/60 border border-cyan-500/20 rounded-md text-gray-300">
              <p className="text-sm">{aiResponse}</p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};
