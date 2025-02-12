
import { HeadphonesIcon, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const PreCallCard = () => {
  return (
    <Card className="bg-[#252A3C] border-purple-500/20 hover:border-purple-500/40 transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-100">
          <HeadphonesIcon className="h-5 w-5 text-purple-400" />
          Pre-Call Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-gray-400">
            Get instant context and insights before your next call
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Clock className="h-4 w-4 text-purple-400" />
              <span>Next call in: 2 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Users className="h-4 w-4 text-purple-400" />
              <span>Customer: John Smith</span>
            </div>
          </div>
          <Button className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300" asChild>
            <a href="#">Prepare for Call</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
