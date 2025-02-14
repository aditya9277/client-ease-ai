
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface TopNavProps {
  isAgent: boolean;
  setIsAgent: (value: boolean) => void;
}

export default function TopNav({ isAgent, setIsAgent }: TopNavProps) {
  return (
    <div className="border-b border-purple-500/20 bg-[#252A3C] px-6 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
          Client Ease AI - BPO Workflow Dashboard
        </h1>
        <div className="flex items-center gap-3">
          <Label htmlFor="role-switch" className="text-gray-300">
            View as {isAgent ? "Agent" : "Manager"}
          </Label>
          <Switch
            id="role-switch"
            checked={isAgent}
            onCheckedChange={setIsAgent}
          />
        </div>
      </div>
    </div>
  );
}
