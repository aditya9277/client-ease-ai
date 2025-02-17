import { BookOpen, Search } from "lucide-react";
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

  // **🔍 Fetch live suggestions as user types**
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
        console.error("❌ Error fetching suggestions:", error);
      }
    };

    fetchSuggestions();
  }, [searchQuery]);

  // **🤖 Fetch AI response when "Search" is clicked**
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/knowledge-base/query?query=${searchQuery}`);
      setAiResponse(data.answer);
      toast.success("AI-powered response fetched!");
    } catch (error) {
      console.error("❌ Error fetching AI response:", error);
      toast.error("Could not fetch response. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-[#252A3C] border-purple-500/20 hover:border-purple-500/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-100">
          <BookOpen className="h-5 w-5 text-purple-400" />
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
              className="bg-[#1A1F2C] border-purple-500/20 text-gray-200 placeholder:text-gray-500"
            />
            <Button type="submit" variant="outline" className="border-purple-500/20 text-purple-400 hover:text-purple-300">
              {loading ? "Searching..." : <Search className="h-4 w-4" />}
            </Button>
          </div>

          {/* 🔍 Show Live Suggestions */}
          {suggestions.length > 0 && (
            <div className="space-y-2 p-3 bg-[#1A1F2C] border border-purple-500/20 rounded-md">
              {suggestions.map((s, idx) => (
                <p key={idx} className="text-sm text-gray-300">{s}</p>
              ))}
            </div>
          )}

          {/* 🤖 Show AI Response */}
          {aiResponse && (
            <div className="p-4 bg-[#1A1F2C] border border-purple-500/20 rounded-md text-gray-300">
              <p className="text-sm">{aiResponse}</p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};
