import { useState, useEffect } from "react";
import { Wrapper } from "@/components/globals/wrapper";
import { Container } from "@/components/globals/container";
import { useAuthStore } from "@/stores/useAuthStore";
import { RefreshCw, User } from "lucide-react";
import ProfileHeader from "@/components/profile-page/header";
import ProfileCard from "@/components/profile-page/profile-card";
import TravelStats from "@/components/profile-page/stats";
import ProfileCompletion from "@/components/profile-page/completion";
import TravelPreferences from "@/components/profile-page/travel-pre";
import InterestsPreferences from "@/components/profile-page/interest-pre";
import ExperienceBackground from "@/components/profile-page/expierence-bg";
import SpecialRequirements from "@/components/profile-page/special-req";
import RecentTrips from "@/components/profile-page/recent-trips";

const Profile = () => {
  const { user, getUserProfile, updateUserProfile, isLoading } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    if (!user) {
      getUserProfile();
    }
  }, []);

  useEffect(() => {
    if (user) {
      setEditedUser({ ...user });
    }
  }, [user]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedUser({ ...user });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser({ ...user });
  };

  const handleSave = async () => {
    try {
      await updateUserProfile(editedUser);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNestedInputChange = (section, field, value) => {
    setEditedUser((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  if (!user && isLoading) {
    return (
      <div className="min-h-screen w-full bg-background">
        <Wrapper className="pt-6">
          <Container>
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="flex items-center space-x-2">
                <RefreshCw className="h-6 w-6 animate-spin text-blue-500" />
                <span className="text-foreground font-inter-medium">
                  Loading profile...
                </span>
              </div>
            </div>
          </Container>
        </Wrapper>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen w-full bg-background">
        <Wrapper className="pt-6">
          <Container>
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center text-muted-foreground">
                <User className="h-16 w-16 mx-auto mb-4 text-blue-500" />
                <p className="font-inter-medium">Unable to load profile</p>
              </div>
            </div>
          </Container>
        </Wrapper>
      </div>
    );
  }

  const displayUser = isEditing ? editedUser : user;

  return (
    <div className="min-h-screen w-full bg-background ml-32">
      <Wrapper className="pt-6">
        <Container>
          <ProfileHeader
            isEditing={isEditing}
            handleEdit={handleEdit}
            handleCancel={handleCancel}
            handleSave={handleSave}
            isLoading={isLoading}
            accentColor="blue-500"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-6 sticky top-6">
                <ProfileCard
                  displayUser={displayUser}
                  isEditing={isEditing}
                  editedUser={editedUser}
                  handleInputChange={handleInputChange}
                  accentColor="blue-500"
                />
                <TravelStats displayUser={displayUser} accentColor="blue-500" />
                <ProfileCompletion
                  displayUser={displayUser}
                  accentColor="blue-500"
                />
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <TravelPreferences
                displayUser={displayUser}
                accentColor="blue-500"
              />
              <InterestsPreferences
                displayUser={displayUser}
                accentColor="blue-500"
              />
              <ExperienceBackground
                displayUser={displayUser}
                isEditing={isEditing}
                editedUser={editedUser}
                handleNestedInputChange={handleNestedInputChange}
                accentColor="blue-500"
              />
              <SpecialRequirements
                displayUser={displayUser}
                isEditing={isEditing}
                editedUser={editedUser}
                handleNestedInputChange={handleNestedInputChange}
                accentColor="blue-500"
              />
              <RecentTrips displayUser={displayUser} accentColor="blue-500" />
            </div>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Profile;