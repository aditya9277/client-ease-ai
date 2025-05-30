
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
import { Lock, User, Headset, BarChart2, Brain } from "lucide-react";
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
    if (managerId === "manager" && password === "manager") {
      setIsAgent(false);
      setShowLoginDialog(false);
      toast.success("Manager authenticated successfully!");
    } else {
      toast.error("Invalid credentials. Try manager/manager");
    }
    // Reset fields
    setManagerId("");
    setPassword("");
  };

  return (
    <div className="bg-white border-b border-slate-200 px-6 py-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                StartupOS
              </h1>
              <p className="text-xs text-slate-500">AI-Powered Startup Operating System</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center text-sm text-slate-500 hover:text-slate-700 transition-colors cursor-pointer">
            <User className="h-4 w-4 mr-1" />
            <span>Profile</span>
          </div>
          
          <div className="h-5 w-px bg-slate-200"></div>
          <div className="flex items-center gap-3 bg-slate-50 px-3 py-1.5 rounded-lg">
            <div className="flex items-center">
              {isAgent ? (
                <Headset className="h-4 w-4 text-primary mr-2" />
              ) : (
                <BarChart2 className="h-4 w-4 text-secondary mr-2" />
              )}
              <Label htmlFor="role-toggle" className="text-sm font-medium text-slate-700 cursor-pointer">
                {isAgent ? "Startup Founder" : "Portfolio Manager"}
              </Label>
            </div>
            <Switch
              id="role-toggle"
              checked={isAgent}
              onCheckedChange={handleRoleToggle}
              className="data-[state=checked]:bg-primary"
            />
          </div>
        </div>
      </div>

      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="bg-white border border-slate-200 shadow-lg rounded-xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-slate-800">
              <Lock className="h-5 w-5 text-primary" />
              Portfolio Manager Access
            </DialogTitle>
            <DialogDescription className="text-slate-600">
              Enter your portfolio manager credentials to access the analytics dashboard.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="managerId" className="text-sm font-medium text-slate-700">
                Manager ID
              </Label>
              <Input
                id="managerId"
                type="text"
                placeholder="Enter your manager ID"
                value={managerId}
                onChange={(e) => setManagerId(e.target.value)}
                className="bg-slate-50 border-slate-200 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-slate-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-slate-50 border-slate-200 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded">
              Demo credentials: manager / manager
            </div>
          </div>

          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setShowLoginDialog(false)}
              className="text-slate-600 hover:text-slate-700"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleManagerLogin}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
            >
              Access Dashboard
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
