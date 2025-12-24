
import React from 'react';
import MovieCard from './MovieCard';
import { Movie } from '../types';
import { ChevronRight } from 'lucide-react';

interface SectionProps {
  title: string;
  movies: Movie[];
}

const Section: React.FC<SectionProps> = ({ title, movies }) => {
  if (movies.length === 0) return null;

  return (
    <div className="mb-10 px-4 md:px-12">
      <div className="flex items-center justify-between mb-4 group cursor-pointer">
        <h2 className="text-xl md:text-2xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
          {title}
          <ChevronRight size={20} className="text-slate-500 group-hover:text-slate-200 transition-colors" />
        </h2>
        <button className="text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors">View All</button>
      </div>
      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 custom-scrollbar scroll-smooth">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Section;
