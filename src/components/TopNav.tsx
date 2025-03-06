
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, User, Headset, BarChart2 } from "lucide-react";
import { toast } from "sonner";

interface TopNavProps {
  isAgent: boolean;
  setIsAgent: (value: boolean) => void;
}

export default function TopNav({ isAgent, setIsAgent }: TopNavProps) {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [managerId, setManagerId] = useState("");
  const [password, setPassword] = useState("");

  const handleRoleToggle = (checked: boolean) => {
    if (!checked && isAgent) {
      // User is switching from Agent to Manager
      setShowLoginDialog(true);
    } else {
      // User is switching from Manager to Agent
      setIsAgent(checked);
    }
  };

  const handleManagerLogin = () => {
    // Hardcoded credentials for demo purposes
    if (managerId === "manager123" && password === "manager123") {
      setIsAgent(false);
      setShowLoginDialog(false);
      toast.success("Manager authenticated successfully!");
    } else {
      toast.error("Invalid credentials. Try manager123/manager123");
    }
    // Reset fields
    setManagerId("");
    setPassword("");
  };

  return (
    <div className="bg-white border-b border-slate-200 px-6 py-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="relative text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-info to-accent animate-gradient before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary before:via-info before:to-accent before:animate-shimmer before:bg-clip-text before:text-transparent ">
            ClientEase AI
          </h1>
          
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center text-sm text-slate-500 hover:text-slate-700 transition-colors cursor-pointer">
            <User className="h-4 w-4 mr-1" />
            <span>Profile</span>
          </div>
          <div className="flex items-center text-sm text-slate-500 hover:text-slate-700 transition-colors cursor-pointer">
            <BarChart2 className="h-4 w-4 mr-1" />
            <span>Reports</span>
          </div>
          <div className="h-5 w-px bg-slate-200"></div>
          <div className="flex items-center gap-3 bg-slate-50 px-3 py-1.5 rounded-lg">
            <div className="flex items-center">
              {isAgent ? (
                <Headset className="h-4 w-4 text-primary mr-2" />
              ) : (
                <BarChart2 className="h-4 w-4 text-accent mr-2" />
              )}
              <Label htmlFor="role-switch" className="text-slate-700 font-medium text-sm">
                {isAgent ? "Agent View" : "Manager View"}
              </Label>
            </div>
            <Switch
              id="role-switch"
              checked={isAgent}
              onCheckedChange={handleRoleToggle}
              className="data-[state=checked]:bg-primary"
            />
          </div>
        </div>
      </div>

      {/* Manager Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="bg-white border border-slate-200 sm:max-w-md rounded-xl shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-slate-800 text-center flex items-center justify-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              Manager Authentication
            </DialogTitle>
            <DialogDescription className="text-center text-slate-500">
              Enter your credentials to access the manager dashboard.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="manager-id" className="text-slate-700">Manager ID</Label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                <Input 
                  id="manager-id" 
                  placeholder="Enter manager ID" 
                  className="bg-slate-50 border-slate-200 pl-10 text-slate-800"
                  value={managerId}
                  onChange={(e) => setManagerId(e.target.value)}
                />
              </div>
              <div className="text-xs text-primary">Hint: manager123</div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter password" 
                  className="bg-slate-50 border-slate-200 pl-10 text-slate-800"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-xs text-primary">Hint: manager123</div>
            </div>
          </div>
          <DialogFooter>
            <Button 
              onClick={handleManagerLogin}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white transition-all duration-300"
            >
              <Lock className="mr-2 h-4 w-4" /> Login
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
