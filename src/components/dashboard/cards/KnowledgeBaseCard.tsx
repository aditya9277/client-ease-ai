
import { BookOpen, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export const KnowledgeBaseCard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [articles] = useState([
    {
      id: 1,
      title: "Common Insurance Claims Process",
      category: "Claims",
    },
    {
      id: 2,
      title: "Customer Service Best Practices",
      category: "Service",
    },
    {
      id: 3,
      title: "Policy Coverage Guidelines",
      category: "Policy",
    },
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Searching knowledge base for: ${searchQuery}`);
  };

  const handleArticleClick = (title: string) => {
    toast.success(`Opening article: ${title}`);
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
              placeholder="Search knowledge base..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#1A1F2C] border-purple-500/20 text-gray-200 placeholder:text-gray-500"
            />
            <Button type="submit" variant="outline" className="border-purple-500/20 text-purple-400 hover:text-purple-300">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2">
            {articles.map((article) => (
              <Button
                key={article.id}
                variant="ghost"
                className="w-full justify-start text-left hover:bg-purple-500/10 text-gray-300"
                onClick={() => handleArticleClick(article.title)}
              >
                <BookOpen className="mr-2 h-4 w-4 text-purple-400" />
                <div>
                  <p className="font-medium">{article.title}</p>
                  <p className="text-xs text-gray-500">{article.category}</p>
                </div>
              </Button>
            ))}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
