
import { Zap, CheckCircle, Clock, Brain, Rocket, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export const AIAutoPilotCard = () => {
  const [autoPilotTasks, setAutoPilotTasks] = useState([
    {
      id: 1,
      task: "Optimize pricing strategy based on competitor analysis",
      status: "in_progress",
      progress: 78,
      aiConfidence: 94,
      timeRemaining: 12
    },
    {
      id: 2, 
      task: "Generate investor pitch deck with market insights",
      status: "completed",
      progress: 100,
      aiConfidence: 98,
      timeRemaining: 0
    },
    {
      id: 3,
      task: "Automate customer acquisition funnel optimization",
      status: "queued",
      progress: 0,
      aiConfidence: 91,
      timeRemaining: 25
    },
    {
      id: 4,
      task: "AI-powered team productivity enhancement",
      status: "in_progress",
      progress: 45,
      aiConfidence: 89,
      timeRemaining: 18
    }
  ]);

  const [activeTasks, setActiveTasks] = useState(2);
  const [completedToday, setCompletedToday] = useState(7);

  useEffect(() => {
    // Simulate AI autopilot progress
    const interval = setInterval(() => {
      setAutoPilotTasks(prev => prev.map(task => {
        if (task.status === 'in_progress') {
          const newProgress = Math.min(100, task.progress + Math.random() * 3);
          return {
            ...task,
            progress: newProgress,
            timeRemaining: Math.max(0, task.timeRemaining - 1),
            status: newProgress >= 100 ? 'completed' : 'in_progress'
          };
        }
        return task;
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleTaskAction = (taskId: number, action: string) => {
    if (action === 'view') {
      toast.success("Opening AI task details...");
    } else if (action === 'approve') {
      setAutoPilotTasks(prev => prev.map(task => 
        task.id === taskId ? { ...task, status: 'in_progress' } : task
      ));
      toast.success("AI task approved and queued for execution");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-success';
      case 'in_progress': return 'text-primary';
      case 'queued': return 'text-warning';
      default: return 'text-slate-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed': return <Badge variant="outline" className="bg-success/10 text-success border-success/20">Done</Badge>;
      case 'in_progress': return <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 animate-pulse">Running</Badge>;
      case 'queued': return <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">Queued</Badge>;
      default: return null;
    }
  };

  return (
    <Card className="medical-card card-gradient-primary">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-slate-800">
          <div className="flex items-center gap-2">
            <div className="icon-container icon-container-primary">
              <Brain className="h-5 w-5" />
            </div>
            AI AutoPilot
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-primary/20 text-primary border-primary/20">
              {activeTasks} Active
            </Badge>
            <Badge variant="outline" className="bg-success/20 text-success border-success/20">
              {completedToday} Today
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* AI AutoPilot Status */}
          <div className="p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">AI is handling your startup operations</span>
              </div>
              <Rocket className="h-4 w-4 text-accent" />
            </div>
            <div className="text-xs text-slate-600">
              Autonomous execution saving you 40+ hours/week
            </div>
          </div>

          {/* Active Tasks */}
          <div className="space-y-3 max-h-[250px] overflow-y-auto scrollbar-hide">
            {autoPilotTasks.map((task) => (
              <div
                key={task.id}
                className="p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-sm text-slate-700 font-medium mb-1">
                      {task.task}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>AI Confidence: {task.aiConfidence}%</span>
                      {task.timeRemaining > 0 && (
                        <>
                          <span>•</span>
                          <Clock className="h-3 w-3" />
                          <span>{task.timeRemaining}m remaining</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(task.status)}
                  </div>
                </div>
                
                {task.status === 'in_progress' && (
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-600">Progress</span>
                      <span className="text-xs font-medium text-primary">{Math.round(task.progress)}%</span>
                    </div>
                    <Progress value={task.progress} className="h-1" />
                  </div>
                )}

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Brain className="h-3 w-3" />
                    <span>AI Autonomous</span>
                  </div>
                  <div className="flex gap-1">
                    {task.status === 'completed' && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 px-2 text-xs text-primary hover:text-primary"
                        onClick={() => handleTaskAction(task.id, 'view')}
                      >
                        View Results
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    )}
                    {task.status === 'queued' && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 px-2 text-xs text-success hover:text-success"
                        onClick={() => handleTaskAction(task.id, 'approve')}
                      >
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Approve
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
