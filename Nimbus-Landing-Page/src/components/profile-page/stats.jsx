import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TravelStats = ({ displayUser }) => (
  <div className="bg-card border border-border rounded-xl">
    <div className="p-6 border-b border-border">
      <h3 className="text-xl font-inter-semibold text-foreground flex items-center gap-2">
        <Award className="h-5 w-5 text-accent" />
        Travel Stats
      </h3>
    </div>
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground font-inter-regular">
          Member since
        </span>
        <span className="text-foreground font-inter-medium">
          {new Date(displayUser.createdAt).toLocaleDateString()}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground font-inter-regular">
          Countries visited
        </span>
        <span className="text-foreground font-inter-medium">
          {displayUser.experience?.visitedCountries || "Not specified"}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground font-inter-regular">
          Travel experience
        </span>
        <Badge className="bg-accent/20 text-accent border-accent/30">
          {displayUser.experience?.travelExperience || "Not set"}
        </Badge>
      </div>
    </div>
  </div>
);

export default TravelStats;
