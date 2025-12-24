
export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  genre: string[];
  language: string;
  year: number;
  rating: number;
  reason?: string;
  category: 'Top' | 'Bollywood' | 'SouthIndian' | 'Trending' | 'BecauseWatched';
}

export interface UserProfile {
  name: string;
  preferences: string[];
  languages: string[];
  recentlyWatched: string[];
  mood: string;
}

export interface RecommendationInsights {
  summary: string;
  tagline: string;
}
