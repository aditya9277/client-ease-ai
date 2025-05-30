
import { Brain, Search, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import axios from "axios";

export const LiveKnowledgeBaseCard = () => {
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
        console.error("Error fetching business insights:", error);
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
      toast.success("AI business insights generated!");
    } catch (error) {
      console.error("Error fetching AI business response:", error);
      toast.error("Could not generate insights. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="medical-card card-gradient-info">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <Brain className="h-5 w-5 text-cyan-400" />
          AI Business Intelligence
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Ask AI about your startup..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/60 border-cyan-500/20 text-slate-800 placeholder:text-slate-800"
            />
            <Button type="submit" variant="outline" className="border-cyan-500/20 text-cyan-400 hover:text-cyan-300">
              {loading ? "Analyzing..." : <Search className="h-4 w-4" />}
            </Button>
          </div>

          {suggestions.length > 0 && (
            <div className="space-y-2 p-3 bg-white/60 border border-cyan-500/20 rounded-md">
              {suggestions.map((s, idx) => (
                <p key={idx} className="text-sm text-slate-800">{s}</p>
              ))}
            </div>
          )}

          {aiResponse && (
            <div className="p-4 bg-white/60 border border-cyan-500/20 rounded-md text-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">AI Business Insight</span>
              </div>
              <p className="text-sm">{aiResponse}</p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};
