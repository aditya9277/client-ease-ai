import { Bell, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const SmartRemindersCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Smart Reminders</CardTitle>
        <Bell className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Next Follow-up</span>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start text-left font-normal">
              <span>Schedule Follow-up</span>
            </Button>
            <Button variant="outline" className="w-full justify-start text-left font-normal">
              <span>View Priority Tasks</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};