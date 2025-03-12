
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Shield } from "lucide-react";
import { toast } from "sonner";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AuthDialog = ({ open, onOpenChange }: AuthDialogProps) => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "aditya77") {
      // Store authentication in localStorage
      localStorage.setItem("auth", "aditya77");
      
      toast.success("Access granted!", {
        description: "Welcome to the dashboard."
      });
      onOpenChange(false);
      navigate("/dashboard");
    } else {
      toast.error("Access denied", {
        description: "The password you entered is incorrect."
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border border-slate-100 shadow-lg rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-800 flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Access Restricted
          </DialogTitle>
          <DialogDescription className="text-center text-slate-600">
            Post-hackathon, to save our free resources, we are pausing public access to this application.
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-1">
          <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-lg text-sm mb-5">
            This project is currently in a paused state. Only authorized personnel can access the dashboard.
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-slate-700">
                Administrator Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter sudo password" 
                  className="pl-10 border-slate-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            
            <DialogFooter className="mt-6">
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Verify Access
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
