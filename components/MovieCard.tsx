
import React from 'react';
import { Star, Play, Plus, Info } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="group relative min-w-[200px] md:min-w-[240px] transition-all duration-300 hover:scale-105 hover:z-10">
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-xl border border-slate-800">
        <img 
          src={movie.posterUrl} 
          alt={movie.title}
          className="w-full h-full object-cover transition-opacity group-hover:opacity-40"
          loading="lazy"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent">
          <div className="flex gap-2 mb-3">
            <button className="p-2 bg-white rounded-full text-slate-950 hover:bg-slate-200">
              <Play size={16} fill="currentColor" />
            </button>
            <button className="p-2 bg-slate-800/80 rounded-full text-white hover:bg-slate-700">
              <Plus size={16} />
            </button>
            <button className="p-2 bg-slate-800/80 rounded-full text-white hover:bg-slate-700 ml-auto">
              <Info size={16} />
            </button>
          </div>
          <h3 className="font-bold text-sm md:text-base leading-tight mb-1">{movie.title}</h3>
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-2">
            <span className="flex items-center gap-0.5 text-yellow-400">
              <Star size={12} fill="currentColor" /> {movie.rating}
            </span>
            <span>•</span>
            <span>{movie.year}</span>
            <span>•</span>
            <span className="bg-slate-800 px-1 rounded uppercase text-[10px]">{movie.language}</span>
          </div>
          <p className="text-[10px] text-slate-400 line-clamp-2">{movie.genre.join(', ')}</p>
        </div>
      </div>
      
      {/* Footer text (Visible reason) */}
      {movie.reason && (
        <div className="mt-2 text-[11px] text-indigo-400 font-medium line-clamp-1 italic">
          ✨ {movie.reason}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
