
import { Bell, Brain, Zap, TrendingUp, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export const SmartNotificationsCard = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "opportunity",
      priority: "high",
      title: "New investor actively seeking your sector",
      message: "AI detected VC firm Andreessen Horowitz is actively investing in AI startups. 94% match with your profile.",
      time: "2 min ago",
      action: "Connect Now",
      icon: TrendingUp,
      read: false
    },
    {
      id: 2,
      type: "warning",
      priority: "critical",
      title: "Competitor launched competing feature",
      message: "Your competitor just launched AI-powered analytics. Recommend immediate product pivot.",
      time: "15 min ago", 
      action: "View Analysis",
      icon: AlertTriangle,
      read: false
    },
    {
      id: 3,
      type: "success",
      priority: "medium",
      title: "AI optimization saved $12K this month",
      message: "Automated cost optimization reduced infrastructure spend by 40%. Reinvest in marketing?",
      time: "1 hour ago",
      action: "Approve",
      icon: CheckCircle,
      read: true
    },
    {
      id: 4,
      type: "insight",
      priority: "high",
      title: "Perfect timing for Series A",
      message: "Market conditions optimal. AI recommends raising Series A within next 2 months.",
      time: "3 hours ago",
      action: "Plan Fundraise",
      icon: Brain,
      read: false
    }
  ]);

  const [unreadCount, setUnreadCount] = useState(3);

  useEffect(() => {
    // Simulate new notifications
    const interval = setInterval(() => {
      const newNotifications = [
        {
          type: "insight",
          title: "User engagement spike detected",
          message: "40% increase in daily active users. Scale customer success team now?",
          icon: TrendingUp
        },
        {
          type: "opportunity", 
          title: "Strategic partnership opportunity",
          message: "Microsoft Azure team interested in integration. High revenue potential.",
          icon: Zap
        }
      ];
      
      const randomNotification = newNotifications[Math.floor(Math.random() * newNotifications.length)];
      
      setNotifications(prev => [
        {
          id: Date.now(),
          priority: "high",
          time: "Just now",
          action: "View Details",
          read: false,
          ...randomNotification
        },
        ...prev.slice(0, 6) // Keep only latest 7 notifications
      ]);
      
      setUnreadCount(prev => prev + 1);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleNotificationAction = (notificationId: number, action: string) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === notificationId ? { ...notif, read: true } : notif
    ));
    setUnreadCount(prev => Math.max(0, prev - 1));
    toast.success(`${action} initiated by AI assistant`);
  };

  const markAllRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
    setUnreadCount(0);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'opportunity': return TrendingUp;
      case 'warning': return AlertTriangle;
      case 'success': return CheckCircle;
      case 'insight': return Brain;
      default: return Bell;
    }
  };

  return (
    <Card className="medical-card card-gradient-warning">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-slate-800">
          <div className="flex items-center gap-2">
            <div className="icon-container icon-container-warning">
              <Bell className="h-5 w-5" />
            </div>
            Smart Notifications
          </div>
          <div className="flex items-center gap-2">
            {unreadCount > 0 && (
              <Badge variant="destructive" className="animate-pulse">
                {unreadCount}
              </Badge>
            )}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={markAllRead}
              className="text-xs text-slate-500 hover:text-slate-700"
            >
              Mark all read
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-[350px] overflow-y-auto scrollbar-hide">
          {notifications.map((notification) => {
            const IconComponent = getTypeIcon(notification.type);
            return (
              <div
                key={notification.id}
                className={`p-3 rounded-lg border transition-all hover:shadow-sm ${
                  notification.read 
                    ? 'bg-slate-50 border-slate-200 opacity-70' 
                    : 'bg-white border-warning/30 shadow-sm'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-1.5 rounded-full ${getPriorityColor(notification.priority)}`}>
                    <IconComponent className="h-3 w-3" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="text-sm font-medium text-slate-800 truncate">
                        {notification.title}
                      </h4>
                      <div className="flex items-center gap-2 ml-2">
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getPriorityColor(notification.priority)}`}
                        >
                          {notification.priority}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-xs text-slate-600 mb-2">
                      {notification.message}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="h-3 w-3" />
                        <span>{notification.time}</span>
                      </div>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-6 px-2 text-xs text-warning hover:text-warning hover:bg-warning/10"
                        onClick={() => handleNotificationAction(notification.id, notification.action)}
                      >
                        {notification.action}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Notification Summary */}
        <div className="mt-4 p-3 bg-gradient-to-r from-warning/10 to-accent/10 rounded-lg border border-warning/20">
          <div className="flex items-center gap-2 mb-1">
            <Brain className="h-4 w-4 text-warning animate-pulse" />
            <span className="text-xs font-medium text-warning">AI Summary</span>
          </div>
          <p className="text-xs text-slate-700">
            {unreadCount > 0 
              ? `${unreadCount} high-priority items need your attention. AI recommends addressing funding and competitive threats first.`
              : "All notifications processed. AI is monitoring 127 data points for new opportunities."
            }
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
