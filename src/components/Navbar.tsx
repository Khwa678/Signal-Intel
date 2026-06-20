import React from 'react';

interface NavbarProps {
  currentTab: 'discover' | 'loading' | 'dashboard' | 'explore' | 'reports';
  setTab: (tab: 'discover' | 'loading' | 'dashboard' | 'explore' | 'reports') => void;
  activeTopic: string;
}

export default function Navbar({ currentTab, setTab, activeTopic }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/80 border-b border-slate-900 backdrop-blur-md px-4 sm:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-4">
        
        {/* LOGO WITH DIAGONAL CYAN SQUARE / ROTATED DIAMOND */}
        <div 
          onClick={() => setTab('discover')} 
          className="flex items-center gap-2.5 cursor-pointer group"
          id="nav-logo"
        >
          <div className="w-4.5 h-4.5 bg-cyan-400 transform rotate-45 shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
          <span className="font-mono font-bold text-sm tracking-[0.16em] text-white uppercase flex items-center gap-1.5 pt-0.5">
            SIGNAL <span className="text-white">INTEL</span>
          </span>
        </div>

        {/* TABS MENU IN ALL CAPS */}
        <nav className="flex items-center gap-4 sm:gap-6" id="nav-menu">
          <button
            id="tab-btn-discover"
            onClick={() => setTab('discover')}
            className={`text-xs font-mono tracking-widest transition-colors cursor-pointer uppercase ${
              currentTab === 'discover'
                ? 'text-cyan-400 font-bold'
                : 'text-slate-500 hover:text-slate-300 font-medium'
            }`}
          >
            Discover
          </button>

          <button
            id="tab-btn-dashboard"
            onClick={() => setTab('dashboard')}
            className={`text-xs font-mono tracking-widest transition-colors cursor-pointer uppercase ${
              currentTab === 'dashboard' || currentTab === 'loading'
                ? 'text-cyan-400 font-bold'
                : 'text-slate-500 hover:text-slate-300 font-medium'
            }`}
          >
            Dashboard
          </button>

          <button
            id="tab-btn-explore"
            onClick={() => {
              if (activeTopic) setTab('explore');
            }}
            className={`text-xs font-mono tracking-widest transition-colors cursor-pointer uppercase ${
              currentTab === 'explore'
                ? 'text-cyan-400 font-bold'
                : 'text-slate-500 hover:text-slate-300 font-medium'
            }`}
          >
            Explore
          </button>

          <button
            id="tab-btn-reports"
            onClick={() => {
              if (activeTopic) setTab('reports');
            }}
            className={`text-xs font-mono tracking-widest transition-colors cursor-pointer uppercase ${
              currentTab === 'reports'
                ? 'text-cyan-400 font-bold bg-cyan-950/35 border border-cyan-500/30 px-3.5 py-1.5 rounded-lg'
                : 'text-slate-500 hover:text-slate-300 font-medium'
            }`}
          >
            Reports
          </button>
        </nav>

        {/* RIGHT METADATA STATUS */}
        <div className="flex items-center gap-2">
          {currentTab === 'discover' ? (
            <div 
              id="sys-status-badge"
              className="bg-slate-900/40 border border-slate-800 text-slate-400 text-xs px-3.5 py-1.5 rounded-full font-mono flex items-center gap-2"
            >
              <span className="text-amber-500">⚡</span>
              <span>System Status</span>
            </div>
          ) : (
            <button 
              id="active-topic-pills-link"
              onClick={() => setTab('dashboard')}
              className="bg-transparent hover:bg-cyan-950/20 border border-cyan-500/40 text-cyan-400 text-xs px-4 py-1.5 rounded-full font-mono font-medium transition cursor-pointer"
            >
              {activeTopic}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
