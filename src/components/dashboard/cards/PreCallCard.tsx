import { HeadphonesIcon, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const PreCallCard = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HeadphonesIcon className="h-5 w-5 text-primary" />
          Pre-Call Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Get instant context and insights before your next call
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>Next call in: 2 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>Customer: John Smith</span>
            </div>
          </div>
          <Button className="w-full" asChild>
            <a href="#">Prepare for Call</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};