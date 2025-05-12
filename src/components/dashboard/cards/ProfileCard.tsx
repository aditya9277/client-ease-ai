
import { Crown, Star, Clock, MessageSquare, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileCard = () => {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <Avatar className="h-14 w-14 border-2 border-primary shadow-lg ring-2 ring-white transition-all duration-300 group-hover:scale-105">
              <AvatarImage src="https://randomuser.me/api/portraits/women/25.jpg" alt="Nisha Sharma" />
              <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">NS</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-success border-2 border-white animate-pulse"></span>
          </div>
          <div>
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-slate-800">Nisha Sharma</h3>
              <Badge className="ml-2 bg-gradient-to-r from-primary to-accent text-white animate-pulse">
                <Crown className="h-3 w-3 mr-1" /> Top Agent
              </Badge>
            </div>
            <div className="flex items-center text-sm text-slate-500 mt-1">
              <div className="flex items-center mr-3">
                <Clock className="h-3 w-3 mr-1" /> 
                <span>Active since 08:30 AM</span>
              </div>
              <div className="flex items-center">
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <div className="bg-success/10 px-3 py-1 rounded-full flex items-center">
              <div className="h-2 w-2 bg-success rounded-full animate-pulse mr-2"></div>
              <span className="text-sm font-medium text-success">Available</span>
            </div>
            <div className="bg-primary/10 px-3 py-1 rounded-full flex items-center">
              <MessageSquare className="h-3 w-3 text-primary mr-1" />
              <span className="text-sm font-medium text-primary">24 Calls Today</span>
            </div>
            <div className="bg-accent/10 px-3 py-1 rounded-full flex items-center">
              <Activity className="h-3 w-3 text-accent mr-1" />
              <span className="text-sm font-medium text-accent">96% Resolution Rate</span>
            </div>
          </div>
          <div className="h-2 bg-slate-100 rounded-full w-full">
            <div className="h-2 bg-gradient-to-r from-success to-primary rounded-full w-[85%]"></div>
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span>Daily Goal: 85%</span>
            <span>30/35 Resolved</span>
          </div>
        </div>
      </div>
    </div>
  );
};