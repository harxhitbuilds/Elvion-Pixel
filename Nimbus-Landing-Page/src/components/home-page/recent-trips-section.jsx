import { Link } from "react-router-dom";
import {
  Plus,
  Share2,
  ChevronRight,
  MoreHorizontal,
  Users,
  MapPin,
} from "lucide-react";
import { recentTrips } from "@/constants/home";

const ReccentTripsSection = () => {
  return (
    <div className="p-[2px] rounded-xl bg-linear-to-br from-[#370389] via-transparent to-transparent  shadow-sm w-full">
      <section className="rounded-xl bg-background w-full h-full p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold font-robert-medium ">
            Recent Trips
          </h2>
          <Link
            to="/my-trips"
            className="text-sm font-inter-medium hover:underline flex items-center"
          >
            View All
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        {/* Trips List */}
        <div className="space-y-3">
          {recentTrips.map((trip) => (
            <div
              key={trip.id}
              className="group flex items-center gap-4 bg-muted-foreground/10 rounded-xl px-6 py-2 transition-shadow hover:shadow-md min-h-14"
            >
              {/* Icon */}
              <div className="w-4 h-4 rounded-lg flex items-center justify-center">
                <MapPin className="h-4 w-4" />
              </div>

              {/* Trip Info */}
              <div className="flex-1 flex flex-col gap-2 justify-center">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="text-sm font-robert-regular font-medium truncate">
                    {trip.destination}
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-xs text-blue-500/80">
                  <span>{trip.date}</span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3 " />
                    {trip.participants}{" "}
                    {trip.participants === 1 ? "person" : "people"}
                  </span>
                  <span>
                    <span className="">Budget:</span>{" "}
                    <span className="font-inter-medium text-white">
                      {trip.budget}
                    </span>
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors">
                  <Share2 className="h-3 w-3" />
                </button>
                <button className="p-1 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors">
                  <MoreHorizontal className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>


        <Link
          to="/my-trips"
          className="bg-blue-950/10  rounded-xl flex flex-col items-center py-4 mt-5 cursor-pointer  transition-colors"
        >
          <Plus className="h-5 w-5 mb-1" />
          <p className="font-robert-regular text-xs">Plan New Trip</p>
        </Link>
      </section>
    </div>
  );
};

export default ReccentTripsSection;
