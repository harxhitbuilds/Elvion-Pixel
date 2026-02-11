import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Database,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categories = [
  { icon: User, label: "Account", count: 3 },
  { icon: Bell, label: "Notifications", count: 5 },
  { icon: Shield, label: "Privacy", count: 3 },
  { icon: Palette, label: "Appearance", count: 4 },
  { icon: Globe, label: "Language & Region", count: 2 },
  { icon: Database, label: "Data Management", count: 2 },
  { icon: HelpCircle, label: "Help & Support", count: 0 },
];

const SettingsSidebar = () => (
  <div className="bg-card border border-border rounded-xl sticky top-6">
    <div className="p-6 border-b border-border">
      <h2 className="text-xl font-inter-semibold text-foreground">
        Categories
      </h2>
    </div>
    <div className="p-0">
      <div className="space-y-1 p-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 hover:bg-muted cursor-pointer rounded-lg transition-colors"
          >
            <div className="flex items-center gap-3">
              <category.icon className="h-4 w-4 text-blue-500" />
              <span className="text-foreground text-sm font-inter-medium">
                {category.label}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {category.count > 0 && (
                <Badge className="bg-blue-950/50 text-blue-500 border-lime-500/20 text-xs">
                  {category.count}
                </Badge>
              )}
              <ChevronRight className="h-4 w-4 text-blue-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SettingsSidebar;
