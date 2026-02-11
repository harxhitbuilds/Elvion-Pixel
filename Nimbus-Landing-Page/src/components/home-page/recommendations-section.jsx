import SectionHeading from "../globals/section-heading";
import { Link } from "react-router-dom";
import {
  RefreshCw,
  Settings,
  Sparkles,
  ArrowRight,
  Calendar,
  Clock,
  IndianRupee,
} from "lucide-react";
import { useState } from "react";

const RecommendationSection = ({
  recommendations = [],
  loading = false,
  error = null,
  onRefresh = () => {},
}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const renderAISuggestions = () => {
    if (loading) {
      return (
        <div className="space-y-4 mb-8">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="border border-border rounded-xl p-4 animate-pulse"
            >
              <div className="w-full h-32 bg-accent/20 rounded-lg mb-4"></div>
              <div className="h-4 bg-accent/30 rounded mb-2"></div>
              <div className="h-3 bg-muted rounded mb-3 w-3/4"></div>
              <div className="flex items-center justify-between">
                <div className="h-3 bg-success/30 rounded w-20"></div>
                <div className="h-4 bg-accent/30 rounded w-4"></div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 text-center mb-8">
          <div className="text-destructive mb-2">⚠️</div>
          <h3 className="text-destructive font-inter-semibold mb-2">
            Unable to load recommendations
          </h3>
          <p className="text-destructive/80 text-sm mb-4">{error}</p>
          <button
            onClick={onRefresh}
            className="px-4 py-2 bg-destructive/10 border border-destructive/30 text-destructive rounded-lg text-sm hover:bg-destructive/20 transition-colors flex items-center gap-2 mx-auto"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>
        </div>
      );
    }

    if (!recommendations || recommendations.length === 0) {
      return (
        <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center mb-8">
          <Sparkles className="h-8 w-8 text-accent mx-auto mb-3" />
          <h3 className="text-foreground font-inter-semibold mb-2">
            No recommendations yet
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            Complete your profile to get personalized travel suggestions
          </p>
          <Link
            to="/profile"
            className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent rounded-lg text-sm hover:bg-accent/20 transition-colors inline-flex items-center gap-2"
          >
            <Settings className="h-4 w-4" />
            Complete Profile
          </Link>
        </div>
      );
    }

    return (
      <div className="mb-8 flex flex-row gap-4 overflow-x-scroll max-w-8xl">
        {recommendations.slice(0, 5).map((recommendation, index) => (
          <div
            key={recommendation.id || index}
            className="p-[1px] rounded-xl bg-linear-to-br from-transparent via-black to-[#370389]  min-w-90 max-w-xs shrink-0 transition-all duration-300 group shadow-sm "
          >
            <div
              className={`bg-card border border-border rounded-xl pb-4 hover:bg-accent/10 transition-all cursor-pointer h-full ${
                expandedIndex === index ? "h-auto" : "h-70 overflow-hidden"
              }`}
            >
              <div className="w-full h-32 bg-linear-to-br from-accent/20 to-accent/30 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img
                  src={recommendation.picture}
                  alt={recommendation.placeName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-4">
                <h3 className="text-lg font-robert-medium text-foreground mb-2">
                  {recommendation.placeName}
                </h3>
                <p className="text-muted-foreground font-robert-regular text-sm mb-3 line-clamp-2">
                  {recommendation.description}
                </p>
              </div>

              <div className="flex items-center px-4 justify-between mt-6">
                <button
                  className="bg-transparent  text-muted-foreground/60 rounded-lg text-sm cursor-pointer transition-colors flex items-center gap-2 font-robert-regular"
                  onClick={() => handleExpand(index)}
                >
                  {expandedIndex === index ? "Hide Details" : "Show Details"}
                  <ArrowRight
                    className={`h-4 w-4 transition-transform ${
                      expandedIndex === index ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div className="flex items-center gap-2 mr-4">
                  <Sparkles className="h-3 w-3 text-warning" />
                  <span className="text-warning font-robert-regular text-xs">
                    AI Recommended
                  </span>
                </div>
              </div>

              {expandedIndex === index && (
                <div className="mt-6 px-4">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3 text-accent" />
                      <span className="text-muted-foreground text-xs">
                        Best time: {recommendation.bestTimeToVisit}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-accent" />
                      <span className="text-muted-foreground text-xs">
                        Duration: {recommendation.travelDuration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="h-3 w-3 text-accent" />
                      <span className="text-muted-foreground text-xs">
                        Budget: {recommendation.estimatedBudget}
                      </span>
                    </div>
                  </div>
                  {recommendation.fitReasoning &&
                    recommendation.fitReasoning.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center gap-1 mb-2">
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                          <span className="text-success font-inter-medium text-xs">
                            Perfect match
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {recommendation.fitReasoning
                            .slice(0, 2)
                            .map((reason, idx) => (
                              <li
                                key={idx}
                                className="text-muted-foreground text-xs flex items-start gap-2"
                              >
                                <span className="text-muted mt-1">•</span>
                                <span className="line-clamp-1">{reason}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <SectionHeading heading="Some Places For You" />
      {renderAISuggestions()}
    </div>
  );
};

export default RecommendationSection;
