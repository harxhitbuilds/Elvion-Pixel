import { User, Mail, MapPin, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const ProfileCard = ({
  displayUser,
  isEditing,
  editedUser,
  handleInputChange,
}) => (
  <div className="bg-card border border-border rounded-xl">
    <div className="p-6">
      <div className="text-center">
        <div className="relative mx-auto w-24 h-24 mb-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
            {displayUser.profile ? (
              <img
                src={displayUser.profile}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <User className="h-12 w-12 text-primary-foreground" />
            )}
          </div>
          {isEditing && (
            <Button
              size="sm"
              className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground p-0"
            >
              <Camera className="h-4 w-4" />
            </Button>
          )}
        </div>

        {isEditing ? (
          <div className="space-y-2 mb-4">
            <Input
              value={editedUser.name || ""}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="text-center text-xl font-inter-semibold bg-card border-border text-foreground"
              placeholder="Full Name"
            />
            <div className="grid grid-cols-2 gap-2">
              <Input
                value={editedUser.firstName || ""}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="text-center text-sm bg-card border-border text-foreground"
                placeholder="First Name"
              />
              <Input
                value={editedUser.lastName || ""}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="text-center text-sm bg-card border-border text-foreground"
                placeholder="Last Name"
              />
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <h2 className="text-xl font-inter-semibold text-foreground mb-2">
              {displayUser.name}
            </h2>
            {(displayUser.firstName || displayUser.lastName) && (
              <p className="text-sm text-muted-foreground font-inter-regular">
                {displayUser.firstName} {displayUser.lastName}
              </p>
            )}
          </div>
        )}

        {isEditing ? (
          <Input
            value={editedUser.username || ""}
            onChange={(e) => handleInputChange("username", e.target.value)}
            className="text-center bg-card border-border text-foreground mb-2"
            placeholder="@username"
          />
        ) : (
          <p className="text-muted-foreground mb-2 font-inter-regular">
            @{displayUser.username || "Not set"}
          </p>
        )}

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
          <Mail className="h-4 w-4 text-accent" />
          <span className="text-sm font-inter-regular">
            {displayUser.email}
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4 text-accent" />
          {isEditing ? (
            <Input
              value={editedUser.hometown || ""}
              onChange={(e) => handleInputChange("hometown", e.target.value)}
              className="text-sm bg-card border-border text-foreground"
              placeholder="Hometown"
            />
          ) : (
            <span className="text-sm font-inter-regular">
              {displayUser.hometown || "Not specified"}
            </span>
          )}
        </div>

        <div className="mt-4">
          <Badge
            variant={displayUser.onBoarded ? "default" : "secondary"}
            className={
              displayUser.onBoarded
                ? "bg-success/20 text-success border-success/30"
                : "bg-warning/20 text-warning border-warning/30"
            }
          >
            {displayUser.onBoarded ? "Profile Complete" : "Setup Pending"}
          </Badge>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileCard;
