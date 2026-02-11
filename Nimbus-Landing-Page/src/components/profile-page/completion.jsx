import { Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProfileCompletion = ({ displayUser }) => (
  <div className="bg-card border border-border rounded-xl">
    <div className="p-6 border-b border-border">
      <h3 className="text-xl font-inter-semibold text-foreground flex items-center gap-2">
        <Settings className="h-5 w-5 text-accent" />
        Profile Completion
      </h3>
    </div>
    <div className="p-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">Basic Info</span>
          <Badge className="bg-success/20 text-success border-success/30">
            Complete
          </Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">
            Travel Preferences
          </span>
          <Badge
            className={`${
              displayUser.travelPreferences?.travelStyle?.length > 0
                ? "bg-success/20 text-success border-success/30"
                : "bg-warning/20 text-warning border-warning/30"
            }`}
          >
            {displayUser.travelPreferences?.travelStyle?.length > 0
              ? "Complete"
              : "Pending"}
          </Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">Interests</span>
          <Badge
            className={`${
              displayUser.interests?.activityInterests?.length > 0
                ? "bg-success/20 text-success border-success/30"
                : "bg-warning/20 text-warning border-warning/30"
            }`}
          >
            {displayUser.interests?.activityInterests?.length > 0
              ? "Complete"
              : "Pending"}
          </Badge>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-muted-foreground text-sm font-inter-medium">
            Overall Progress
          </span>
          <span className="text-foreground text-sm">75%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileCompletion;
