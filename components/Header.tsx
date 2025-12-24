
import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent">
      <div className="max-w-[1920px] mx-auto px-4 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold text-xl italic tracking-tighter shadow-lg shadow-indigo-500/20">C</div>
            <span className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">CINEMATCH AI</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="hover:text-white transition-colors">Movies</a>
            <a href="#" className="hover:text-white transition-colors">TV Shows</a>
            <a href="#" className="hover:text-white transition-colors">New & Popular</a>
            <a href="#" className="hover:text-white transition-colors">My List</a>
          </nav>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex items-center bg-slate-900/50 border border-slate-800 rounded-full px-4 py-1.5 focus-within:bg-slate-800 transition-all">
            <Search size={18} className="text-slate-500" />
            <input 
              type="text" 
              placeholder="Search movies, actors..." 
              className="bg-transparent border-none outline-none text-sm ml-2 w-48 text-slate-200 placeholder:text-slate-600"
            />
          </div>
          <Bell size={20} className="text-slate-400 cursor-pointer hover:text-white" />
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 bg-indigo-500 rounded-md overflow-hidden ring-2 ring-transparent group-hover:ring-indigo-400 transition-all">
              <img src="https://picsum.photos/seed/user1/64/64" alt="User" />
            </div>
            <Menu className="lg:hidden text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
