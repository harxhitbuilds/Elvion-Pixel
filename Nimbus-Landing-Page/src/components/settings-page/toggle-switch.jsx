import { Button } from "@/components/ui/button";
import { ToggleLeft, ToggleRight } from "lucide-react";

const ToggleSwitch = ({ enabled, onToggle }) => (
  <Button
    variant="ghost"
    size="sm"
    onClick={onToggle}
    className="p-0 h-auto hover:bg-transparent"
  >
    {enabled ? (
      <ToggleRight className="h-6 w-6 text-blue-500" />
    ) : (
      <ToggleLeft className="h-6 w-6 text-muted" />
    )}
  </Button>
);

export default ToggleSwitch;