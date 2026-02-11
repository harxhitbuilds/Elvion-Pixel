import {
  Shield,
  Accessibility,
  Utensils,
  BookOpen,
  StickyNote,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

const SpecialRequirements = ({
  displayUser,
  isEditing,
  editedUser,
  handleNestedInputChange,
}) => (
  <div className="bg-card border border-border rounded-xl">
    <div className="p-6 border-b border-border">
      <h3 className="text-xl font-inter-semibold text-foreground flex items-center gap-2">
        <Shield className="h-5 w-5 text-accent" />
        Special Requirements
      </h3>
    </div>
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-inter-medium text-muted-foreground mb-2 block">
            <Accessibility className="h-4 w-4 inline mr-2" />
            Accessibility Needs
          </label>
          {isEditing ? (
            <Textarea
              value={editedUser.specialRequirements?.accessibility || ""}
              onChange={(e) =>
                handleNestedInputChange(
                  "specialRequirements",
                  "accessibility",
                  e.target.value,
                )
              }
              className="bg-card border-border text-foreground"
              placeholder="Any accessibility requirements..."
              rows={2}
            />
          ) : (
            <p className="text-muted-foreground font-inter-regular text-sm">
              {displayUser.specialRequirements?.accessibility ||
                "None specified"}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-inter-medium text-muted-foreground mb-2 block">
            <Utensils className="h-4 w-4 inline mr-2" />
            Dietary Restrictions
          </label>
          <div className="flex flex-wrap gap-2">
            {displayUser.specialRequirements?.dietaryRestrictions?.map(
              (restriction, index) => (
                <Badge
                  key={index}
                  className="bg-secondary text-secondary-foreground border-secondary"
                >
                  {restriction}
                </Badge>
              ),
            ) || (
              <span className="text-muted-foreground text-sm font-inter-regular">
                None specified
              </span>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm font-inter-medium text-muted-foreground mb-2 block">
            <BookOpen className="h-4 w-4 inline mr-2" />
            Special Interests
          </label>
          {isEditing ? (
            <Textarea
              value={editedUser.specialRequirements?.specialInterests || ""}
              onChange={(e) =>
                handleNestedInputChange(
                  "specialRequirements",
                  "specialInterests",
                  e.target.value,
                )
              }
              className="bg-card border-border text-foreground"
              placeholder="Photography, wildlife, architecture, etc..."
              rows={2}
            />
          ) : (
            <p className="text-muted-foreground font-inter-regular text-sm">
              {displayUser.specialRequirements?.specialInterests ||
                "None specified"}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-inter-medium text-muted-foreground mb-2 block">
            <StickyNote className="h-4 w-4 inline mr-2" />
            Additional Notes
          </label>
          {isEditing ? (
            <Textarea
              value={editedUser.specialRequirements?.additionalNotes || ""}
              onChange={(e) =>
                handleNestedInputChange(
                  "specialRequirements",
                  "additionalNotes",
                  e.target.value,
                )
              }
              className="bg-card border-border text-foreground"
              placeholder="Any other important information..."
              rows={2}
            />
          ) : (
            <p className="text-muted-foreground font-inter-regular text-sm">
              {displayUser.specialRequirements?.additionalNotes ||
                "None specified"}
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialRequirements;
