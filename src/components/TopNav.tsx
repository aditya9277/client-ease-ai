
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface TopNavProps {
  isAgent: boolean;
  setIsAgent: (value: boolean) => void;
}

export default function TopNav({ isAgent, setIsAgent }: TopNavProps) {
  return (
    <div className="border-b border-indigo-500/20 bg-[#252A3C]/90 backdrop-blur-sm px-6 py-3 shadow-lg shadow-indigo-500/5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          Client Ease AI - BPO Workflow Dashboard
        </h1>
        <div className="flex items-center gap-3">
          <Label htmlFor="role-switch" className="text-slate-300">
            View as {isAgent ? "Agent" : "Manager"}
          </Label>
          <Switch
            id="role-switch"
            checked={isAgent}
            onCheckedChange={setIsAgent}
            className="data-[state=checked]:bg-indigo-600"
          />
        </div>
      </div>
    </div>
  );
}
