import { Mountain, Star, Languages, Globe, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ExperienceBackground = ({
  displayUser,
  isEditing,
  editedUser,
  handleNestedInputChange,
}) => (
  <div className="bg-card border border-border rounded-xl">
    <div className="p-6 border-b border-border">
      <h3 className="text-xl font-inter-semibold text-foreground flex items-center gap-2">
        <Mountain className="h-5 w-5 text-accent" />
        Experience & Background
      </h3>
    </div>
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-inter-medium text-foreground mb-2 block">
            <Star className="h-4 w-4 inline mr-2" />
            Travel Experience
          </label>
          {isEditing ? (
            <Input
              value={editedUser.experience?.travelExperience || ""}
              onChange={(e) =>
                handleNestedInputChange(
                  "experience",
                  "travelExperience",
                  e.target.value,
                )
              }
              className="bg-card border-border text-foreground"
              placeholder="e.g., Beginner, Intermediate, Expert"
            />
          ) : (
            <Badge className="bg-accent/20 text-accent border-accent/30">
              {displayUser.experience?.travelExperience || "Not specified"}
            </Badge>
          )}
        </div>

        <div>
          <label className="text-sm font-inter-medium text-muted-foreground mb-2 block">
            <Languages className="h-4 w-4 inline mr-2" />
            Languages
          </label>
          <div className="flex flex-wrap gap-2">
            {displayUser.experience?.languages?.map((language, index) => (
              <Badge
                key={index}
                className="bg-accent/20 text-accent border-accent/30"
              >
                {language}
              </Badge>
            )) || (
              <span className="text-muted-foreground text-sm font-inter-regular">
                Not specified
              </span>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm font-inter-medium text-muted-foreground mb-2 block">
            <Globe className="h-4 w-4 inline mr-2" />
            Countries Visited
          </label>
          {isEditing ? (
            <Input
              value={editedUser.experience?.visitedCountries || ""}
              onChange={(e) =>
                handleNestedInputChange(
                  "experience",
                  "visitedCountries",
                  e.target.value,
                )
              }
              className="bg-card border-border text-foreground"
              placeholder="e.g., 15+ countries"
            />
          ) : (
            <span className="text-foreground font-inter-medium">
              {displayUser.experience?.visitedCountries || "Not specified"}
            </span>
          )}
        </div>

        <div>
          <label className="text-sm font-inter-medium text-muted-foreground mb-2 block">
            <Heart className="h-4 w-4 inline mr-2" />
            Dream Destinations
          </label>
          {isEditing ? (
            <Textarea
              value={editedUser.experience?.dreamDestinations || ""}
              onChange={(e) =>
                handleNestedInputChange(
                  "experience",
                  "dreamDestinations",
                  e.target.value,
                )
              }
              className="bg-card border-border text-foreground"
              placeholder="Places you dream to visit..."
              rows={3}
            />
          ) : (
            <p className="text-muted-foreground font-inter-regular text-sm">
              {displayUser.experience?.dreamDestinations || "Not specified"}
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ExperienceBackground;
