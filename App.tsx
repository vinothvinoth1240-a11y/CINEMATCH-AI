
import React, { useEffect, useState, useMemo } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import { MOCK_MOVIES } from './constants';
import { UserProfile, RecommendationInsights } from './types';
import { GeminiService } from './services/geminiService';
import { Info, Play, TrendingUp, Sparkles, Languages, History } from 'lucide-react';

const App: React.FC = () => {
  const [insights, setInsights] = useState<RecommendationInsights | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const userProfile: UserProfile = useMemo(() => ({
    name: "Aryan",
    preferences: ["Action", "Drama", "Thriller", "Sci-Fi"],
    languages: ["Hindi", "Telugu", "Tamil", "English"],
    recentlyWatched: ["RRR", "3 Idiots", "Inception", "Vikram"],
    mood: "Excited"
  }), []);

  useEffect(() => {
    const fetchInsights = async () => {
      const gemini = new GeminiService();
      const result = await gemini.generateUserInsights(userProfile);
      setInsights(result);
      setIsLoading(false);
    };

    fetchInsights();
  }, [userProfile]);

  const sections = useMemo(() => {
    return [
      { title: "Top Recommended Movies", movies: MOCK_MOVIES.filter(m => m.category === 'Top') },
      { title: "Trending Now", movies: MOCK_MOVIES.filter(m => m.category === 'Trending') },
      { title: "Bollywood Picks for You", movies: MOCK_MOVIES.filter(m => m.category === 'Bollywood') },
      { title: "South Indian Cinema Treasures", movies: MOCK_MOVIES.filter(m => m.category === 'SouthIndian') },
      { title: "Because You Watched...", movies: MOCK_MOVIES.filter(m => m.category === 'BecauseWatched') },
    ];
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[85vh] w-full">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/hero/1920/1080" 
            className="w-full h-full object-cover" 
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="relative h-full flex flex-col justify-end px-4 md:px-12 pb-20 md:pb-32 max-w-[1920px] mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs md:text-sm font-semibold uppercase tracking-wider">
            <Sparkles size={14} className="text-indigo-400" /> AI Recommended for {userProfile.name}
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
            RRR <span className="text-indigo-500">2022</span>
          </h1>
          <p className="max-w-2xl text-slate-300 text-sm md:text-lg mb-8 leading-relaxed">
            A fearless revolutionary and an officer in the British force, who are also best friends, join forces to chart a new path of freedom against the despotic rulers.
          </p>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white text-slate-950 px-6 md:px-8 py-3 rounded font-bold hover:bg-slate-200 transition-all">
              <Play size={20} fill="currentColor" /> Play Now
            </button>
            <button className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-md text-white px-6 md:px-8 py-3 rounded font-bold hover:bg-slate-700 transition-all">
              <Info size={20} /> More Info
            </button>
          </div>
        </div>
      </div>

      {/* Personalized AI Insight Dashboard */}
      <div className="relative z-10 -mt-24 px-4 md:px-12 mb-12 max-w-[1920px] mx-auto">
        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                  <Sparkles className="text-indigo-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">Personalized Insights</h3>
                  <p className="text-xs text-indigo-400 font-semibold tracking-widest uppercase">{isLoading ? "Analyzing..." : insights?.tagline}</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed italic">
                {isLoading ? "Consulting the CineMatch neural network..." : `"${insights?.summary}"`}
              </p>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 min-w-[160px] flex flex-col items-center">
                <div className="mb-2 text-indigo-400 bg-indigo-500/10 p-2 rounded-full"><TrendingUp size={20}/></div>
                <span className="text-xl font-bold">Action</span>
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Core Genre</span>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 min-w-[160px] flex flex-col items-center">
                <div className="mb-2 text-emerald-400 bg-emerald-500/10 p-2 rounded-full"><Languages size={20}/></div>
                <span className="text-xl font-bold">Multilingual</span>
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Global Taste</span>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 min-w-[160px] flex flex-col items-center">
                <div className="mb-2 text-amber-400 bg-amber-500/10 p-2 rounded-full"><History size={20}/></div>
                <span className="text-xl font-bold">85% Match</span>
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Predictive Score</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rows */}
      <main className="pb-20 max-w-[1920px] mx-auto">
        {sections.map((section, idx) => (
          <Section key={idx} title={section.title} movies={section.movies} />
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 pt-16 pb-12 px-4 md:px-12 text-slate-500">
        <div className="max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h4 className="text-slate-300 font-bold mb-4">CineMatch AI</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-slate-300">Audio Description</a></li>
              <li><a href="#" className="hover:text-slate-300">Help Center</a></li>
              <li><a href="#" className="hover:text-slate-300">Gift Cards</a></li>
              <li><a href="#" className="hover:text-slate-300">Media Center</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-slate-300 font-bold mb-4">Discovery</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-slate-300">Investor Relations</a></li>
              <li><a href="#" className="hover:text-slate-300">Jobs</a></li>
              <li><a href="#" className="hover:text-slate-300">Terms of Use</a></li>
              <li><a href="#" className="hover:text-slate-300">Privacy</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-slate-300 font-bold mb-4">Legal</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-slate-300">Legal Notices</a></li>
              <li><a href="#" className="hover:text-slate-300">Cookie Preferences</a></li>
              <li><a href="#" className="hover:text-slate-300">Corporate Information</a></li>
              <li><a href="#" className="hover:text-slate-300">Contact Us</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-slate-300 font-bold mb-4">Language</h4>
            <select className="bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm outline-none">
              <option>English (US)</option>
              <option>Hindi (IN)</option>
              <option>Tamil (IN)</option>
              <option>Telugu (IN)</option>
            </select>
          </div>
        </div>
        <div className="max-w-[1920px] mx-auto text-xs flex justify-between items-center border-t border-slate-900 pt-8">
          <p>© 2024 CineMatch AI. All rights reserved.</p>
          <div className="flex gap-4">
            <span>FB</span>
            <span>TW</span>
            <span>IG</span>
            <span>YT</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
