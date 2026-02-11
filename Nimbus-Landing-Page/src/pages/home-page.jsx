import { useEffect } from "react";
import { useRecommendationStore } from "@/stores/useRecommendationStore";
import HomeHeader from "@/components/home-page/header";
import RecommendationSection from "@/components/home-page/recommendations-section";

const HomePage = () => {
  const {
    recommendations,
    loading: recommendationsLoading,
    error: recommendationsError,
    getRecommendations,
  } = useRecommendationStore();

  useEffect(() => {
    getRecommendations();
  }, [getRecommendations]);

  const handleRefreshRecommendations = () => {
    getRecommendations();
  };

  return (
    <div className="bg-background px-4 py-6 md:px-8 md:py-10 ml-64">
      <div>
        <HomeHeader />
        <RecommendationSection
          recommendations={recommendations}
          loading={recommendationsLoading}
          error={recommendationsError}
          onRefresh={handleRefreshRecommendations}
        />
      </div>
    </div>
  );
};

export default HomePage;
