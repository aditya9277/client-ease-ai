
import { HeadphonesIcon, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const PreCallCard = () => {
  return (
    <Card className="medical-card card-gradient-info">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <div className="icon-container icon-container-info">
            <HeadphonesIcon className="h-5 w-5" />
          </div>
          Pre-Call Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Get instant context and insights before your next call
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Clock className="h-4 w-4 text-info" />
              <span>Next call in: 2 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Users className="h-4 w-4 text-info" />
              <span>Customer: John Smith</span>
            </div>
          </div>
          <Button className="w-full bg-info hover:bg-info/90 text-white" asChild>
            <a href="#">Prepare for Call</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
