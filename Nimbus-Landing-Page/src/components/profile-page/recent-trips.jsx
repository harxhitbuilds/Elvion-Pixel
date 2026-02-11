import { Plane } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const RecentTrips = ({ displayUser }) => (
  <div className="bg-card border border-border rounded-xl">
    <div className="p-6 border-b border-border">
      <h3 className="text-xl font-inter-semibold text-foreground flex items-center gap-2">
        <Plane className="h-5 w-5 text-accent" />
        Recent Trips
      </h3>
    </div>
    <div className="p-6">
      {displayUser.trips && displayUser.trips.length > 0 ? (
        <div className="space-y-3">
          <p className="text-foreground font-inter-medium">
            Total Trips: {displayUser.trips.length}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {displayUser.trips.slice(0, 6).map((trip, index) => (
              <div
                key={index}
                className="bg-secondary/30 p-3 rounded-lg border border-border"
              >
                <Badge className="bg-secondary text-secondary-foreground border-border text-xs">
                  Trip #{index + 1}
                </Badge>
              </div>
            ))}
          </div>
          {displayUser.trips.length > 6 && (
            <p className="text-muted-foreground text-sm font-inter-regular">
              +{displayUser.trips.length - 6} more trips
            </p>
          )}
        </div>
      ) : (
        <div className="text-center py-6">
          <Plane className="h-12 w-12 text-accent mx-auto mb-3" />
          <p className="text-muted-foreground font-inter-regular">
            No trips yet
          </p>
          <p className="text-muted-foreground text-sm">
            Start planning your first adventure!
          </p>
        </div>
      )}
    </div>
  </div>
);

export default RecentTrips;
