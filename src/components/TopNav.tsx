
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
import { Lock, User } from "lucide-react";
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
    <div className="border-b border-cyan-500/20 backdrop-blur-sm px-6 py-3 shadow-lg shadow-cyan-500/5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400">
          Client Ease AI - BPO Workflow Dashboard
        </h1>
        <div className="flex items-center gap-3">
          <Label htmlFor="role-switch" className="text-slate-800">
            View as {isAgent ? "Agent" : "Manager"}
          </Label>
          <Switch
            id="role-switch"
            checked={isAgent}
            onCheckedChange={handleRoleToggle}
            className="data-[state=checked]:bg-cyan-600"
          />
        </div>
      </div>

      {/* Manager Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="bg-gradient-to-b from-[#1E293B] to-[#0F172A] border border-cyan-500/20 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white text-center flex items-center justify-center gap-2">
              <Lock className="h-5 w-5 text-cyan-400" />
              Manager Authentication
            </DialogTitle>
            <DialogDescription className="text-center text-gray-400">
              Enter your credentials to access the manager dashboard.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="manager-id" className="text-gray-300">Manager ID</Label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input 
                  id="manager-id" 
                  placeholder="Enter manager ID" 
                  className="bg-[#0F172A]/70 border-cyan-500/20 pl-10 text-white"
                  value={managerId}
                  onChange={(e) => setManagerId(e.target.value)}
                />
              </div>
              <div className="text-xs text-cyan-400">Hint: manager123</div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter password" 
                  className="bg-[#0F172A]/70 border-cyan-500/20 pl-10 text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-xs text-cyan-400">Hint: manager123</div>
            </div>
          </div>
          <DialogFooter>
            <Button 
              onClick={handleManagerLogin}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
            >
              <Lock className="mr-2 h-4 w-4" /> Login
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}


// bg-[rgb(255,255,255)]/30