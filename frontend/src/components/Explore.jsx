import React, { useState } from 'react';
import { Search, Filter, RefreshCw, Check, ArrowUpRight } from 'lucide-react';

export default function Explore({ report, setTab }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('ALL');

  // Hardcoded real-looking dynamic mock sources representing feed contents
  const mockSources = [
    {
      id: 'sc1',
      title: `${report.topic || "Agentic AI"} Integration Schemes and Emerging Ecosystems`,
      url: 'https://arxiv.org/html/draft-topic-signal',
      source: 'arXiv Repository',
      category: 'RESEARCH',
      sentiment: 'POSITIVE',
      date: '1 day ago'
    },
    {
      id: 'sc2',
      title: `How Enterprises are Adopting ${report.topic || "Agentic AI"} solutions in 2026`,
      url: 'https://venturebeat.com/category/signal-insights',
      source: 'VentureBeat',
      category: 'NEWS',
      sentiment: 'POSITIVE',
      date: '2 days ago'
    },
    {
      id: 'sc3',
      title: `The Future of Developers using ${report.topic || "Agentic AI"} Tool Chains`,
      url: 'https://github.com/trending/topic-signals',
      source: 'GitHub Blog',
      category: 'COMMUNITY',
      sentiment: 'POSITIVE',
      date: '3 days ago'
    },
    {
      id: 'sc4',
      title: `Risks and Challenges of deploying ${report.topic || "Agentic AI"} frameworks`,
      url: 'https://techcrunch.com/articles/topic-warnings',
      source: 'TechCrunch',
      category: 'NEWS',
      sentiment: 'NEGATIVE',
      date: '4 days ago'
    },
    {
      id: 'sc5',
      title: `Deep-Dive Whitepaper: Next-Gen ${report.topic || "Agentic AI"} Design Patterns`,
      url: 'https://arxiv.org/pdf/topic-full-analysis.pdf',
      source: 'IEEE Spectrum',
      category: 'RESEARCH',
      sentiment: 'NEUTRAL',
      date: '1 week ago'
    }
  ];

  const categories = ['ALL', 'RESEARCH', 'NEWS', 'COMMUNITY'];

  // Filter sources based on both Search input and Selected Category Tab
  const indexedSources = mockSources.filter((src) => {
    const matchesSearch = src.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          src.source.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterType === 'ALL' || src.category === filterType;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 animate-fade-in" id="explore-view-box">
      
      {/* HEADER ROW */}
      <div className="pb-6 mb-8 border-b border-slate-900/40" id="explore-header-row">
        <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block">// GRANULAR SIGNAL DATA</span>
        <h1 className="font-sans font-black text-5xl sm:text-6xl text-white uppercase mt-3 leading-none tracking-tight">
          Deep Dive<br />Sources
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm font-mono mt-4 leading-relaxed">
          // Inspect raw url assets · Granular sentiment reports · Keyword classifications
        </p>
      </div>

      {/* FILTER CONTROLS BAR */}
      <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-4.5 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center" id="filter-panel-row">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filter by keyword..."
            className="w-full bg-slate-950/80 border border-slate-900 focus:border-cyan-500/40 rounded-lg text-xs font-mono pl-10 pr-4 py-3 text-slate-200 placeholder-slate-650 focus:outline-none transition animate-fade-in"
          />
        </div>

        {/* Categories Tab Pill Selector */}
        <div className="flex flex-wrap gap-1.5" id="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterType(cat)}
              className={`px-4 py-2.5 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase transition-all border cursor-pointer ${
                filterType === cat
                  ? 'bg-cyan-500/10 border-cyan-400/40 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.15)]'
                  : 'bg-transparent border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* RESULTS LIST BOARD */}
      <div className="space-y-4" id="explore-results-board">
        {indexedSources.length > 0 ? (
          indexedSources.map((item) => (
            <div 
              key={item.id}
              className="bg-[#050914]/60 border border-slate-900/80 rounded-xl p-6 hover:border-slate-800 transition duration-300 flex flex-col justify-between"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/20 px-2 py-0.5 rounded border border-cyan-500/15 font-bold uppercase">
                      {item.category}
                    </span>
                    <span className="text-slate-600 font-mono text-xs">·</span>
                    <span className="text-[10px] font-mono text-slate-400 font-bold">{item.source}</span>
                    <span className="text-slate-600 font-mono text-xs">·</span>
                    <span className="text-slate-500 font-mono text-[10px]">{item.date}</span>
                  </div>

                  <h3 className="font-sans font-black text-lg text-slate-100 hover:text-cyan-400 transition cursor-pointer leading-snug">
                    <a href={item.url} target="_blank" rel="noreferrer noopener">
                      {item.title}
                    </a>
                  </h3>
                </div>

                <div className="shrink-0">
                  <span className={`px-2.5 py-1 rounded text-[10px] font-mono font-black border ${
                    item.sentiment === 'POSITIVE' ? 'bg-emerald-950/20 border-emerald-500/20 text-emerald-400' :
                    item.sentiment === 'NEGATIVE' ? 'bg-rose-950/20 border-rose-500/20 text-rose-455' :
                    'bg-slate-900 border-slate-800 text-slate-400'
                  }`}>
                    {item.sentiment} SENTIMENT
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-5 mt-5 border-t border-slate-900/60 text-xs font-mono text-slate-500">
                <span className="truncate max-w-sm sm:max-w-md bg-black/20 px-2 py-1 rounded text-slate-600 text-[10px]">{item.url}</span>
                
                <a 
                  href={item.url}
                  target="_blank" 
                  rel="noreferrer noopener"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors uppercase font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <span>SOURCE LINK</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-slate-950/10 border border-slate-900 rounded-xl" id="empty-state-card">
            <span className="text-4xl">🔎</span>
            <span className="block text-xs font-mono text-slate-500 uppercase tracking-widest mt-4">No granular source assets match your filter query.</span>
          </div>
        )}
      </div>

    </div>
  );
}
