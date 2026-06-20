import React, { useState } from 'react';
import { AlertCircle, Info } from 'lucide-react';

export default function Discover({ onSearch, setTab, activeTopic }) {
  const [query, setQuery] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const suggestedTopics = [
    'Generative AI',
    'Agentic AI',
    'Climate Tech',
    'Quantum Computing',
    'Web3',
    'Edge AI'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setErrorMsg('Please enter a target topic to run analysis.');
      return;
    }
    setErrorMsg('');
    onSearch(query);
  };

  const handleSuggestedClick = (topic) => {
    setQuery(topic);
    onSearch(topic);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20 animate-fade-in" id="discover-page-container">
      
      {/* ABOVE ACCENTS */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-xs text-cyan-400 font-mono tracking-widest uppercase mb-6">
          <span className="w-10 h-[1px] bg-cyan-400 block"></span>
          <span>INTELLIGENCE PIPELINE</span>
        </div>
        
        <h1 className="font-sans font-extrabold text-5xl sm:text-7xl tracking-tight text-white mb-6 leading-tight">
          Topic <span className="text-cyan-400">Signal</span>
          <br />
          Intelligence
        </h1>
        
        <p className="text-slate-200 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed font-sans">
          Analyse any topic and get AI-powered trend signals, keyword clusters, and content insights.
        </p>

        <div className="flex items-center gap-4 text-[10px] font-mono text-slate-600 mt-6 uppercase tracking-wider">
          <span>// LLM-powered</span>
          <span>·</span>
          <span>TF-IDF</span>
          <span>·</span>
          <span>Multi-source</span>
          <span>·</span>
          <span>Structured insights</span>
        </div>
      </div>

      {/* COMPACT FLOATING INPUT SECTION */}
      <div className="mb-12">
        <form onSubmit={handleSubmit} className="space-y-4" id="search-form">
          <div className="relative flex items-center bg-slate-950/90 border border-slate-900 rounded-xl p-1.5 focus-within:border-cyan-500/40 transition">
            <input
              type="text"
              id="topic-search-input"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (e.target.value.trim()) setErrorMsg('');
              }}
              placeholder="Enter a topic — e.g. Generative AI, Robotics, Quantum Computing..."
              className="w-full bg-transparent px-4 py-3.5 text-slate-100 placeholder-slate-600 text-xs sm:text-sm focus:outline-none font-mono"
            />
            
            <button
              id="run-analysis-btn"
              type="submit"
              className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono font-bold text-xs px-6 py-3.5 rounded-lg tracking-wider uppercase transition active:scale-95 cursor-pointer shrink-0"
            >
              RUN ANALYSIS
            </button>
          </div>

          {errorMsg && (
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono bg-rose-950/20 px-3 py-2 rounded-lg border border-rose-500/20 animate-fade-in" id="search-error">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {errorMsg}
            </div>
          )}

          {/* LOWER OPTION CHIPS */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              id="source-selector-webnews"
              type="button"
              className="bg-transparent border border-cyan-500/30 text-cyan-400 text-[10px] tracking-wider uppercase px-4 py-2 rounded-lg font-mono font-bold hover:bg-cyan-950/10 transition"
            >
              WEB + NEWS
            </button>
            
            <button
              id="source-selector-linkedin"
              type="button"
              className="bg-transparent border border-slate-900 text-slate-500 text-[10px] tracking-wider uppercase px-4 py-2 rounded-lg font-mono flex items-center gap-1.5 hover:text-slate-400 transition"
            >
              + LINKEDIN (Apify) <Info className="w-3.5 h-3.5 text-slate-550" />
            </button>
          </div>
        </form>

        {/* SUGGESTED PILLS */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-[10px] font-mono text-slate-500 tracking-wider">TRY:</span>
          <div className="flex flex-wrap gap-2 animate-fade-in" id="suggested-topics-list">
            {suggestedTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => handleSuggestedClick(topic)}
                className="bg-slate-950/40 hover:bg-cyan-950/20 border border-slate-900 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-400 px-3 py-1.5 rounded-lg text-xs font-mono transition"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* OR NAVIGATE DIVIDER & DIRECT NAVIGATION CARDS */}
      <div className="border-t border-slate-900/60 pt-10">
        <div className="flex items-center justify-between gap-4 text-xs font-mono text-slate-600 tracking-widest uppercase mb-8" id="nav-direct-divider">
          <span className="h-[1px] bg-slate-900/40 flex-1"></span>
          <span>OR NAVIGATE TO</span>
          <span className="h-[1px] bg-slate-900/40 flex-1"></span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" id="nav-direct-cards">
          {/* DASHBOARD CARD */}
          <div 
            onClick={() => {
              if (activeTopic) setTab('dashboard');
              else alert('Please parse a topic search query to continue to the Dashboard layout!');
            }}
            className="bg-[#0b1329]/80 hover:bg-[#0f1b3d]/90 rounded-xl p-6 border-l border-r border-b border-slate-900 border-t-2 border-t-cyan-400/90 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
          >
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#070d19] border border-slate-800/80 rounded-md">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="12" width="3.5" height="8" rx="0.75" fill="#f43f5e" />
                    <rect x="10" y="6" width="3.5" height="14" rx="0.75" fill="#a855f7" />
                    <rect x="16" y="10" width="3.5" height="10" rx="0.75" fill="#06b6d4" />
                  </svg>
                </div>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 tracking-widest font-extrabold uppercase mb-1 block">
                OVERVIEW
              </span>
              <h3 className="font-sans font-black text-xl text-slate-100 group-hover:text-cyan-400 transition-colors mb-2">
                Dashboard
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 font-sans">
                KPIs, trend summary, LLM insights & quick actions for your latest analysis.
              </p>
            </div>
            <div className="text-xs text-cyan-400 font-mono tracking-wider font-bold transition-transform group-hover:translate-x-1 duration-200">
              → Go to Dashboard
            </div>
          </div>

          {/* EXPLORE CARD */}
          <div 
            onClick={() => {
              if (activeTopic) setTab('explore');
              else alert('Please parse a topic search query to view details!');
            }}
            className="bg-[#0b1329]/80 hover:bg-[#0f1b3d]/90 rounded-xl p-6 border-l border-r border-b border-slate-900 border-t-2 border-t-emerald-400/90 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
          >
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#070d19] border border-slate-800/80 rounded-md">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10.5" cy="10.5" r="5.5" stroke="#06b6d4" strokeWidth="2.5" />
                    <line x1="14.5" y1="14.5" x2="20" y2="20" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-450 tracking-widest font-extrabold uppercase mb-1 block">
                DEEP DIVE
              </span>
              <h3 className="font-sans font-black text-xl text-slate-100 group-hover:text-emerald-450 transition-colors mb-2">
                Explore
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 font-sans">
                Browse all sources, filter by query clusters, and inspect raw results.
              </p>
            </div>
            <div className="text-xs text-emerald-450 font-mono tracking-wider font-bold transition-transform group-hover:translate-x-1 duration-200">
              → Go to Explore
            </div>
          </div>

          {/* REPORTS CARD */}
          <div 
            onClick={() => {
              if (activeTopic) setTab('reports');
              else alert('Please query a topic to view automations.');
            }}
            className="bg-[#0b1329]/80 hover:bg-[#0f1b3d]/90 rounded-xl p-6 border-l border-r border-b border-slate-900 border-t-2 border-t-amber-450/90 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
          >
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#070d19] border border-slate-800/80 rounded-md">
                  <svg className="w-6 h-6 animate-spin-slow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#a855f7" strokeWidth="2" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <span className="text-[10px] font-mono text-amber-500 tracking-widest font-extrabold uppercase mb-1 block">
                AUTOMATION
              </span>
              <h3 className="font-sans font-black text-xl text-slate-100 group-hover:text-amber-500 transition-colors mb-2">
                Reports
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 font-sans">
                Schedule automated reports, export to Notion, Slack, and email digests.
              </p>
            </div>
            <div className="text-xs text-amber-500 font-mono tracking-wider font-bold transition-transform group-hover:translate-x-1 duration-200">
              → Go to Reports
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
