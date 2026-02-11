import { Button } from "@/components/ui/button";
import { Edit3, Save, X } from "lucide-react";
import SectionHeading from "../globals/section-heading";

const ProfileHeader = ({
  isEditing,
  handleEdit,
  handleCancel,
  handleSave,
  isLoading,
}) => (
  <div className="flex items-center justify-between mb-8">
    <div className="flex items-center gap-3">
      <div>
        <SectionHeading heading="Profile" />
        <p className="text-muted-foreground font-robert-regular mt-1">
          Manage your account and travel preferences
        </p>
      </div>
    </div>
    {!isEditing ? (
      <Button
        onClick={handleEdit}
        className="bg-background border text-white transition-all duration-200 font-inter-medium rounded-xl"
      >
        <Edit3 className="h-4 w-4 mr-2 text-lime-500" />
        Edit Profile
      </Button>
    ) : (
      <div className="flex gap-2">
        <Button
          onClick={handleCancel}
          variant="outline"
          className="border-border text-foreground hover:bg-accent/10 font-inter-medium"
        >
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          disabled={isLoading}
          className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 font-inter-medium"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>
    )}
  </div>
);

export default ProfileHeader;
