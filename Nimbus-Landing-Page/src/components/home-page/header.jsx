import SectionHeading from "../globals/section-heading";
import ReccentTripsSection from "./recent-trips-section";
import Slider from "./slider";
import { useAuthStore } from "@/stores/useAuthStore";
const HomeHeader = () => {
  const { user } = useAuthStore();
  return (
    <div className="space-y-6 ">
      <div className="flex items-center gap-2">
        <img src={user.profile} alt="" className="w-12 h-12 " />
        <div>
          <SectionHeading heading={`Welcome ${user?.name} !`} />
          <p className="text-sm text-muted-foreground">Get ready for new exploration !</p>
        </div>
      </div>
      <div className="flex gap-8 mb-8">
        <div className="w-[50%] h-95 flex items-center justify-center  rounded-lg p-0">
          <div className="w-full h-full">
            <Slider />
          </div>
        </div>

        <div className="w-[50%] h-95 px-4 flex items-center justify-end  rounded-xl p-0 ">
          <div className="w-full h-full flex items-center">
            <ReccentTripsSection />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeHeader;
