import { GoogleGenerativeAI } from "@google/generative-ai";
import asyncHandler from "../utils/async-handle.js";
import ApiResponse from "../utils/response.js";
import ApiError from "../utils/error.js";
import User from "../models/user.model.js";
import "dotenv/config";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const RATE_LIMIT = {
  maxRetries: 2,
  baseDelay: 30000,
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getFallbackRecommendationsData = () => {
  return [
    {
      placeName: "Rajasthan Golden Triangle",
      picture: "https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Explore royal palaces, vibrant markets, and desert landscapes across Jaipur, Jodhpur, and Udaipur.",
      fitReasoning: [
        "Perfect for cultural enthusiasts",
        "Diverse accommodation options",
        "Rich historical significance",
      ],
      highlights: [
        "Amber Palace Jaipur",
        "Mehrangarh Fort Jodhour",
        "Lake Palace Udaipur",
        "Thar Desert Safari",
      ],
      bestTimeToVisit: "October to March",
      estimatedBudget: "₹4,000-12,000 per day",
      travelDuration: "7-10 days",
    },
    {
      placeName: "Kerala Backwaters",
      picture: "https://images.unsplash.com/photo-1624554305378-0f440dd3a8c1?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "God's Own Country offers serene houseboats, lush hills, and Ayurvedic wellness experiences.",
      fitReasoning: [
        "Ideal for nature lovers",
        "Peaceful and rejuvenating",
        "Excellent cuisine and culture",
      ],
      highlights: [
        "Alleppey Houseboats",
        "Munnar Tea Gardens",
        "Thekkady Wildlife",
        "Kovalam Beaches",
      ],
      bestTimeToVisit: "September to March",
      estimatedBudget: "₹3,500-10,000 per day",
      travelDuration: "5-8 days",
    },
    {
      placeName: "Himachal Pradesh",
      picture: "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Mountain paradise with snow-capped peaks, adventure sports, and charming hill stations.",
      fitReasoning: [
        "Perfect for adventure seekers",
        "Beautiful mountain scenery",
        "Great for couples and families",
      ],
      highlights: [
        "Manali Adventure Sports",
        "Shimla Colonial Architecture",
        "Dharamshala Monasteries",
        "Spiti Valley",
      ],
      bestTimeToVisit: "March to June, September to November",
      estimatedBudget: "₹3,000-8,000 per day",
      travelDuration: "6-9 days",
    },
    {
      placeName: "Andaman & Nicobar Islands",
      picture: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Tropical paradise with pristine beaches, crystal-clear waters, and vibrant marine life. Ideal for water sports and relaxation.",
      fitReasoning: [
        "Great for beach lovers",
        "Excellent for scuba diving and snorkeling",
        "Peaceful island atmosphere",
      ],
      highlights: [
        "Radhanagar Beach",
        "Cellular Jail",
        "Havelock Island",
        "Neil Island",
      ],
      bestTimeToVisit: "October to May",
      estimatedBudget: "₹5,000-15,000 per day",
      travelDuration: "5-7 days",
    },
  ];
};

export const getFallbackRecommendations = asyncHandler(async (req, res) => {
  try {
    const fallbackRecommendations = getFallbackRecommendationsData();

    const enhancedRecommendations = fallbackRecommendations.map(
      (rec, index) => ({
        id: `fallback_${Date.now()}_${index}`,
        ...rec,
        generatedAt: new Date().toISOString(),
        userId: req.user._id,
        type: "fallback",
      })
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          recommendations: enhancedRecommendations,
          generationInfo: {
            type: "fallback",
            totalRecommendations: enhancedRecommendations.length,
            generatedAt: new Date().toISOString(),
            note: "These are popular destinations. Complete your profile for personalized recommendations.",
          },
        },
        "Popular travel recommendations retrieved successfully"
      )
    );
  } catch (error) {
    console.error("❌ Fallback recommendations error:", error);
    throw new ApiError(500, "Failed to generate fallback recommendations", [
      error.message,
    ]);
  }
});

export const getPersonalizedRecommendations = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, "User not found", [
      "The authenticated user does not exist",
    ]);
  }
  const hasPreferences =
    user.travelPreferences &&
    ((user.travelPreferences.travelStyle &&
      user.travelPreferences.travelStyle.length > 0) ||
      (user.travelPreferences.budgetRange &&
        user.travelPreferences.budgetRange.length > 0));
  if (!hasPreferences) {
    return res
      .status(400)
      .json(
        new ApiResponse(
          400,
          null,
          "Insufficient profile data for recommendations",
          false,
          [
            "Please update your travel preferences and interests in your profile",
          ]
        )
      );
  }

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-pro",
  });

  const prompt = `Generate exactly 3 travel recommendations in India based on user preferences: ${JSON.stringify(
    user.travelPreferences
  )}. Return ONLY a JSON array with this structure: [{"placeName": "Name", "description": "Text", "fitReasoning": ["reason1", "reason2", "reason3"], "highlights": ["highlight1", "highlight2", "highlight3"], "bestTimeToVisit": "Time", "estimatedBudget": "Budget", "travelDuration": "Duration"}]`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    let parsedJson;
    try {
      // Clean the response text
      let cleanText = text.trim();
      cleanText = cleanText.replace(/```json\s*/g, "");
      cleanText = cleanText.replace(/```\s*/g, "");

      // Find array boundaries
      const arrayStart = cleanText.indexOf("[");
      const arrayEnd = cleanText.lastIndexOf("]") + 1;

      if (arrayStart === -1 || arrayEnd === 0) {
        throw new Error("No valid JSON array found");
      }

      const jsonText = cleanText.substring(arrayStart, arrayEnd);
      parsedJson = JSON.parse(jsonText);
    } catch (parseError) {
      console.error("Failed to parse Gemini response:", text);
      throw new ApiError(500, "Failed to parse AI response");
    }

    // Validate the parsed structure
    if (!Array.isArray(parsedJson)) {
      throw new ApiError(500, "Invalid JSON structure from AI");
    }

    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { recommendations: parsedJson },
          "Personalized travel recommendations generated successfully"
        )
      );
  } catch (error) {
    console.error("❌ Gemini API error:", error);
    return getFallbackRecommendations(req, res);
  }
});
