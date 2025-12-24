
import { GoogleGenAI, Type } from "@google/genai";
import { UserProfile, RecommendationInsights } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async generateUserInsights(profile: UserProfile): Promise<RecommendationInsights> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analyze this movie user profile and generate a professional insight summary and a tagline.
        User: ${profile.name}
        Preferences: ${profile.preferences.join(', ')}
        Languages: ${profile.languages.join(', ')}
        Recently Watched: ${profile.recentlyWatched.join(', ')}
        Current Mood: ${profile.mood}
        
        Provide the output in a clean JSON format with keys "summary" and "tagline".`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              summary: { type: Type.STRING },
              tagline: { type: Type.STRING }
            },
            required: ["summary", "tagline"]
          }
        }
      });

      return JSON.parse(response.text.trim());
    } catch (error) {
      console.error("Error generating insights:", error);
      return {
        summary: "You have a diverse palette that balances grand Indian spectacles with thought-provoking global thrillers. Your recent activity suggests a strong preference for high-stakes narratives and emotional depth.",
        tagline: "The Epic Storyteller's Choice"
      };
    }
  }
}
