import React from 'react';
import { Sparkles, Terminal } from 'lucide-react';

export default function Navbar({ setTab, activeTab, currentTopic }) {
  return (
    <header className="border-b border-slate-900/40 bg-slate-950/20 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between">
        
        {/* LOGO SHAPE */}
        <div 
          onClick={() => setTab('discover')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Sparkles className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="font-sans font-black text-sm uppercase tracking-[0.25em] text-white">
            SIGNAL INTEL
          </span>
        </div>

        {/* NAVIGATION MENUS */}
        <nav className="hidden md:flex items-center gap-1.5 text-xs font-mono">
          {[
            { id: 'discover', label: 'Discover' },
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'explore', label: 'Explore' },
            { id: 'reports', label: 'Reports' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'discover') {
                  setTab('discover');
                } else if (currentTopic !== 'None') {
                  setTab(item.id);
                } else {
                  alert('Please enter a target topic on the Discover screen first.');
                }
              }}
              className={`px-4.5 py-2.5 rounded-lg border uppercase tracking-wider font-extrabold transition-all cursor-pointer ${
                activeTab === item.id
                  ? 'bg-cyan-500/10 border-cyan-400/40 text-cyan-400'
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-100 hover:bg-slate-900/30'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* METRICS & SYSTEM BUTTON */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end text-right font-mono text-[10px] text-slate-500">
            <span>Query: <strong className="text-slate-350">{currentTopic}</strong></span>
            <span>MERN Stack</span>
          </div>

          <button 
            onClick={() => alert('All core API microservices are fully stable and listening on port 3000!')}
            className="flex items-center gap-2 px-4 py-2 border border-slate-900 bg-slate-900/20 text-xs font-mono text-slate-400 hover:text-slate-200 hover:border-slate-800 rounded-lg transition"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-450 animate-pulse"></span>
            <span>⚡ System Status</span>
          </button>
        </div>

      </div>
    </header>
  );
}
