
import { BookOpen, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import axios from "axios";

export const KnowledgeBaseCard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const dummySuggestions = [
    "What's the process for filing a claim?",
    "How long does claim review typically take?",
    "What documents are required for insurance claims?",
    "What is the time period of the return policy?",
    "What is the company's holiday policy?"
];


  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      setAiResponse(null);
      return;
    }

    setHasInteracted(true);
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

    setHasInteracted(true);
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
              className="bg-white/60 border-cyan-500/20 text-slate-800 placeholder:text-slate-800"
            />
            <Button type="submit" variant="outline" className="border-cyan-500/20 text-cyan-400 hover:text-cyan-300">
              {loading ? "Searching..." : <Search className="h-4 w-4" />}
            </Button>
          </div>

          {suggestions.length > 0 && (
            <div className="space-y-2 p-3 bg-white/60 border border-cyan-500/20 rounded-md">
              {suggestions.map((s, idx) => (
                <p key={idx} className="text-sm text-slate-300">{s}</p>
              ))}
            </div>
          )}

          {!hasInteracted && (
            <div className="space-y-2 p-3 bg-white/60 border border-cyan-500/20 rounded-md">
              <p className="text-sm text-slate-500 mb-2">Suggested queries:</p>
              {dummySuggestions.map((s, idx) => (
                <p key={idx} className="text-sm text-slate-800 hover:text-cyan-600 cursor-pointer" 
                   onClick={() => setSearchQuery(s)}>
                  {s}
                </p>
              ))}
            </div>
          )}

          {aiResponse && (
            <div className="p-4 bg-white/60 border border-cyan-500/20 rounded-md text-slate-800">
              <p className="text-sm">{aiResponse}</p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};
