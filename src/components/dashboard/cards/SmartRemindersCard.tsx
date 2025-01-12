import { Bell, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export const SmartRemindersCard = () => {
  const [reminders, setReminders] = useState([
    { id: 1, text: "Follow up with John regarding insurance claim", completed: false },
    { id: 2, text: "Review customer feedback from last call", completed: false },
  ]);

  const handleComplete = (id: number) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id 
          ? { ...reminder, completed: true }
          : reminder
      )
    );
    toast.success("Reminder marked as complete");
  };

  const handleScheduleFollowUp = () => {
    const newId = reminders.length + 1;
    setReminders(prev => [...prev, {
      id: newId,
      text: "New follow-up scheduled for tomorrow",
      completed: false
    }]);
    toast.success("Follow-up scheduled successfully");
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Smart Reminders</CardTitle>
        <Bell className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Active Reminders</span>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            {reminders.map(reminder => (
              <div key={reminder.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                <span className={`text-sm ${reminder.completed ? 'line-through text-muted-foreground' : ''}`}>
                  {reminder.text}
                </span>
                {!reminder.completed && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleComplete(reminder.id)}
                  >
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
          <Button 
            variant="outline" 
            className="w-full justify-start text-left font-normal"
            onClick={handleScheduleFollowUp}
          >
            <Calendar className="mr-2 h-4 w-4" />
            <span>Schedule New Follow-up</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};