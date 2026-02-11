import { Plane, Users, Wallet, Calendar, Clock, Home, Car } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TravelPreferences = ({ displayUser }) => (
  <div className="bg-card border border-border rounded-xl">
    <div className="p-6 border-b border-border">
      <h3 className="text-xl font-inter-semibold text-foreground flex items-center gap-2">
        <Plane className="h-5 w-5 text-accent" />
        Travel Preferences
      </h3>
    </div>
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-inter-medium text-foreground mb-2 block">
            <Users className="h-4 w-4 inline mr-2" />
            Travel Style
          </label>
          <div className="flex flex-wrap gap-2">
            {displayUser.travelPreferences?.travelStyle?.map((style, index) => (
              <Badge
                key={index}
                className="bg-accent/20 text-accent border-accent/30"
              >
                {style}
              </Badge>
            )) || (
              <span className="text-muted-foreground text-sm font-inter-regular">
                Not specified
              </span>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm font-inter-medium text-foreground mb-2 block">
            <Wallet className="h-4 w-4 inline mr-2" />
            Budget Range
          </label>
          <div className="flex flex-wrap gap-2">
            {displayUser.travelPreferences?.budgetRange?.map(
              (budget, index) => (
                <Badge
                  key={index}
                  className="bg-success/20 text-success border-success/30"
                >
                  {budget}
                </Badge>
              ),
            ) || (
              <span className="text-muted-foreground text-sm font-inter-regular">
                Not specified
              </span>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm font-inter-medium text-foreground mb-2 block">
            <Users className="h-4 w-4 inline mr-2" />
            Group Size
          </label>
          <div className="flex flex-wrap gap-2">
            {displayUser.travelPreferences?.groupSize?.map((size, index) => (
              <Badge
                key={index}
                className="bg-accent/20 text-accent border-accent/30"
              >
                {size}
              </Badge>
            )) || (
              <span className="text-muted-foreground text-sm font-inter-regular">
                Not specified
              </span>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm font-inter-medium text-foreground mb-2 block">
            <Calendar className="h-4 w-4 inline mr-2" />
            Trip Duration
          </label>
          <div className="flex flex-wrap gap-2">
            {displayUser.travelPreferences?.tripDuration?.map(
              (duration, index) => (
                <Badge
                  key={index}
                  className="bg-accent/20 text-accent border-accent/30"
                >
                  {duration}
                </Badge>
              ),
            ) || (
              <span className="text-muted-foreground text-sm font-inter-regular">
                Not specified
              </span>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm font-inter-medium text-foreground mb-2 block">
            <Clock className="h-4 w-4 inline mr-2" />
            Travel Frequency
          </label>
          <div className="flex flex-wrap gap-2">
            {displayUser.travelPreferences?.travelFrequency?.map(
              (frequency, index) => (
                <Badge
                  key={index}
                  className="bg-accent/20 text-accent border-accent/30"
                >
                  {frequency}
                </Badge>
              ),
            ) || (
              <span className="text-muted-foreground text-sm font-inter-regular">
                Not specified
              </span>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm font-inter-medium text-foreground mb-2 block">
            <Home className="h-4 w-4 inline mr-2" />
            Accommodation Type
          </label>
          <div className="flex flex-wrap gap-2">
            {displayUser.travelPreferences?.accommodationType?.map(
              (type, index) => (
                <Badge
                  key={index}
                  className="bg-accent/20 text-accent border-accent/30"
                >
                  {type}
                </Badge>
              ),
            ) || (
              <span className="text-muted-foreground text-sm font-inter-regular">
                Not specified
              </span>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-inter-medium text-foreground mb-2 block">
            <Car className="h-4 w-4 inline mr-2" />
            Transportation Preference
          </label>
          <div className="flex flex-wrap gap-2">
            {displayUser.travelPreferences?.transportationPreference?.map(
              (transport, index) => (
                <Badge
                  key={index}
                  className="bg-accent/20 text-accent border-accent/30"
                >
                  {transport}
                </Badge>
              ),
            ) || (
              <span className="text-muted-foreground text-sm font-inter-regular">
                Not specified
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TravelPreferences;
