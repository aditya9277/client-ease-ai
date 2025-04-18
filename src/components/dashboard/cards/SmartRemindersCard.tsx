
import { useState } from "react";
import { Bell, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Reminder {
  id: string;
  text: string;
  completed: boolean;
  dueDate: string;
}

const initialReminders: Reminder[] = [
  {
    id: "1",
    text: "Follow up with farmer regarding soil testing request #ST001",
    completed: true,
    dueDate: "2025-02-21",
  },
  {
    id: "2",
    text: "Review documentation for crop insurance case #INS003",
    completed: false,
    dueDate: "2025-02-19",
  },
  {
    id: "3",
    text: "Schedule callback with agricultural expert for pest control inquiry #PC005",
    completed: false,
    dueDate: "2025-03-12",
  }
];

export const SmartRemindersCard = () => {
  const [reminders, setReminders] = useState<Reminder[]>(initialReminders);

  const handleComplete = (id: string) => {
    setReminders(prev =>
      prev.map(reminder =>
        reminder.id === id
          ? { ...reminder, completed: true }
          : reminder
      )
    );
    toast.success("Reminder marked as completed");
  };

  return (
    <Card className="medical-card card-gradient-warning">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Farm Task Reminders</CardTitle>
        <Bell className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reminders.map(reminder => (
            <div
              key={reminder.id}
              className={`flex items-center justify-between p-3 rounded-lg ${
                reminder.completed ? "bg-muted/30" : "bg-muted/50"
              }`}
            >
              <div className="space-y-1">
                <p className={`text-sm ${reminder.completed ? "line-through text-muted-foreground" : ""}`}>
                  {reminder.text}
                </p>
                <p className="text-xs text-muted-foreground">Due: {reminder.dueDate}</p>
              </div>
              {!reminder.completed && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleComplete(reminder.id)}
                  className="ml-2"
                >
                  <Check className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
