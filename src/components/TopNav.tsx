import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface TopNavProps {
  isAgent: boolean;
  setIsAgent: (value: boolean) => void;
}

export default function TopNav({ isAgent, setIsAgent }: TopNavProps) {
  return (
    <div className="border-b bg-white px-6 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">BPO Workflow Dashboard</h1>
        <div className="flex items-center gap-3">
          <Label htmlFor="role-switch">View as {isAgent ? "Agent" : "Manager"}</Label>
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