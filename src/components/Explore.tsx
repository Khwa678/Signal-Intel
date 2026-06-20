import React, { useState } from 'react';
import { IntelligenceReport, Article, SentimentType, TrendCluster } from '../types';
import { 
  Search, SlidersHorizontal, Filter, AlertCircle, FileText, CheckCircle2, 
  HelpCircle, ChevronDown, Award, TrendingUp, Sparkles, ExternalLink, Zap
} from 'lucide-react';

interface ExploreProps {
  report: IntelligenceReport;
  setTab: (tab: 'discover' | 'loading' | 'dashboard' | 'explore' | 'reports') => void;
}

export default function Explore({ report, setTab }: ExploreProps) {
  const [sourceFilter, setSourceFilter] = useState<'all' | 'serpapi' | 'newsapi' | 'linkedin'>('all');
  const [sentimentFilter, setSentimentFilter] = useState<'all' | SentimentType>('all');
  const [selectedClusterId, setSelectedClusterId] = useState<string>('all');
  const [selectedQuery, setSelectedQuery] = useState<string>('all');

  const expandedQueries = [
    { text: `${report.topic} latest trends 2026`, count: 10 },
    { text: `${report.topic} industry developments`, count: 10 },
    { text: `${report.topic} market growth`, count: 10 },
    { text: `${report.topic} technology innovations`, count: 10 },
  ];

  // Map user-friendly source labels
  const getSourceDisplay = (src: string) => {
    const s = src.toLowerCase();
    if (s.includes('serpapi')) return 'serpapi';
    if (s.includes('newsapi')) return 'newsapi';
    if (s.includes('linkedin')) return 'linkedin';
    return 'all';
  };

  // Filter articles based on user selections
  const filteredArticles = report.articles.filter((art) => {
    // 1. Source filter
    if (sourceFilter !== 'all') {
      const artSource = getSourceDisplay(art.source);
      if (artSource !== sourceFilter) return false;
    }

    // 2. Sentiment filter
    if (sentimentFilter !== 'all') {
      if (art.sentiment !== sentimentFilter) return false;
    }

    // 3. Cluster filter
    if (selectedClusterId !== 'all') {
      // simulate clustering - link odd files to odd clusters to make clicking interactive!
      const simulatedClusterId = `tc${(art.id.charCodeAt(1) % 4) + 1}`;
      if (simulatedClusterId !== selectedClusterId) return false;
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-fade-in" id="explore-container">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-slate-900 pb-6" id="explore-header-row">
        <div>
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">// EXPLORER ENGINE : DATA DIALECTICS</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase mt-1">
            Deep Dive Explore
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
            Browse through all {report.sourceCount} verified sources, filter raw clusters, and evaluate enterprise opportunities.
          </p>
        </div>

        <button
          id="go-dash-btn"
          onClick={() => setTab('dashboard')}
          className="bg-slate-900 hover:bg-slate-850 text-slate-350 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/20 px-4 py-2 rounded-xl text-xs font-mono transition active:scale-95 flex items-center gap-2 cursor-pointer"
        >
          ← Return to Dashboard
        </button>
      </div>

      {/* FILTER CONTROLS BAR */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-cyan-500/15 mb-8" id="explore-filters-box">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          
          {/* SOURCE FILTERS */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block py-1 mr-1">SOURCE:</span>
            
            <button
              id="filter-src-all"
              onClick={() => setSourceFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition ${
                sourceFilter === 'all'
                  ? 'bg-cyan-500/15 border-cyan-400 text-cyan-400'
                  : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              All
            </button>
            
            <button
              id="filter-src-serp"
              onClick={() => setSourceFilter('serpapi')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition ${
                sourceFilter === 'serpapi'
                  ? 'bg-cyan-500/15 border-cyan-400 text-cyan-400'
                  : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              SerpAPI
            </button>

            <button
              id="filter-src-news"
              onClick={() => setSourceFilter('newsapi')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition ${
                sourceFilter === 'newsapi'
                  ? 'bg-cyan-500/15 border-cyan-400 text-cyan-400'
                  : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              NewsAPI
            </button>

            <button
              id="filter-src-ln"
              onClick={() => setSourceFilter('linkedin')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition ${
                sourceFilter === 'linkedin'
                  ? 'bg-cyan-500/15 border-cyan-400 text-cyan-400'
                  : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              LinkedIn
            </button>
          </div>

          {/* SENTIMENT FILTERS */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block py-1 mr-1">SENTIMENT:</span>

            <button
              id="filter-sent-all"
              onClick={() => setSentimentFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition ${
                sentimentFilter === 'all'
                  ? 'bg-cyan-500/15 border-white/20 text-slate-100'
                  : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              All
            </button>

            <button
              id="filter-sent-pos"
              onClick={() => setSentimentFilter('positive')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition flex items-center gap-1.5 ${
                sentimentFilter === 'positive'
                  ? 'bg-emerald-500/15 border-emerald-500 text-emerald-400'
                  : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:text-emerald-400'
              }`}
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              Positive
            </button>

            <button
              id="filter-sent-neu"
              onClick={() => setSentimentFilter('neutral')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition flex items-center gap-1.5 ${
                sentimentFilter === 'neutral'
                  ? 'bg-slate-500/15 border-slate-500 text-slate-300'
                  : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
              Neutral
            </button>

            <button
              id="filter-sent-neg"
              onClick={() => setSentimentFilter('negative')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition flex items-center gap-1.5 ${
                sentimentFilter === 'negative'
                  ? 'bg-rose-500/15 border-rose-500 text-rose-400'
                  : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:text-rose-400'
              }`}
            >
              <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
              Negative
            </button>
          </div>

          <div className="text-[10px] text-slate-500 font-mono italic leading-none lg:text-right">
            Showing {filteredArticles.length} of {report.articles.length} sources
          </div>
        </div>
      </div>

      {/* CORE CONTENTS ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12" id="explore-corpus-grids">
        
        {/* LEFT COLUMN: QUERY EXPANSION & TREND CLUSTERS INDEX */}
        <div className="lg:col-span-1 space-y-6" id="explore-sidebar-panel">
          
          {/* RELATED QUERY EXPANSION */}
          <div className="glass-panel rounded-xl p-5 border border-slate-800" id="box-expanded-queries">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-1">SEMANTIC MAPPING</span>
            <h3 className="font-display font-medium text-xs text-slate-400 uppercase border-b border-slate-950 pb-2.5 mb-3">
              Expanded Queries
            </h3>

            <div className="space-y-1.5">
              <button
                id="q-btn-all"
                onClick={() => setSelectedQuery('all')}
                className={`w-full text-left font-mono text-xs px-3 py-2.5 rounded-lg border transition duration-150 flex items-center justify-between ${
                  selectedQuery === 'all'
                    ? 'bg-cyan-950/30 border-cyan-500/20 text-cyan-300'
                    : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>● All query scopes</span>
              </button>

              {expandedQueries.map((q, idx) => (
                <button
                  key={idx}
                  id={`q-btn-item-${idx}`}
                  onClick={() => setSelectedQuery(q.text)}
                  className={`w-full text-left font-mono text-xs px-3 py-2.5 rounded-lg border transition duration-150 flex items-start gap-1 justify-between ${
                    selectedQuery === q.text
                      ? 'bg-cyan-950/30 border-cyan-500/30 text-cyan-300'
                      : 'bg-transparent border-transparent hover:bg-slate-900/20 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="truncate leading-tight flex gap-1.5 items-center">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${selectedQuery === q.text ? 'bg-cyan-400' : 'bg-slate-700'}`}></span>
                    {q.text}
                  </span>
                  <span className="text-[9px] text-slate-500 bg-slate-950 px-1 py-0.5 rounded ml-1 shrink-0">{q.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* DYNAMIC CLUSTERS SIDE SELECTOR */}
          <div className="glass-panel rounded-xl p-5 border border-slate-800" id="box-trend-clusters-picker">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-1">CLUSTER CORRELATIONS</span>
            <h3 className="font-display font-medium text-xs text-slate-400 uppercase border-b border-slate-950 pb-2.5 mb-3">
              Trend Clusters
            </h3>

            <div className="space-y-1.5">
              <button
                id="cluster-btn-all"
                onClick={() => setSelectedClusterId('all')}
                className={`w-full text-left font-mono text-xs px-3 py-2.5 rounded-lg border transition duration-150 flex items-center justify-between ${
                  selectedClusterId === 'all'
                    ? 'bg-cyan-950/30 border-cyan-500/30 text-cyan-300 font-bold'
                    : 'bg-transparent border-transparent hover:bg-slate-900/20 text-slate-400 hover:border-slate-800/10'
                }`}
              >
                <span>● All clusters</span>
                <span className="text-[9px] text-slate-500">{report.trendClustersCount}</span>
              </button>

              {report.trendClusters.map((cluster) => (
                <button
                  key={cluster.id}
                  id={`cluster-btn-${cluster.id}`}
                  onClick={() => setSelectedClusterId(cluster.id)}
                  className={`w-full text-left font-mono text-xs px-3 py-2.5 rounded-lg border transition duration-150 flex items-start justify-between gap-1.5 ${
                    selectedClusterId === cluster.id
                      ? 'bg-cyan-950/30 border-cyan-500/30 text-cyan-300 font-bold'
                      : 'bg-transparent border-transparent hover:bg-slate-900/10 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="truncate leading-tight pl-1">
                    • {cluster.name}
                  </span>
                  <span className="text-[9px] font-mono bg-slate-950 px-1 py-0.5 rounded text-slate-500 shrink-0">
                    {cluster.score.toFixed(1)}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: CORROBORATING ARTICLES (SOURCE RESULTS) */}
        <div className="lg:col-span-3 space-y-4" id="explore-articles-container">
          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2 flex justify-between items-center bg-slate-950/40 p-2.5 rounded-lg border border-slate-900" id="explore-corpus-stats">
            <span>INDEXED NEWS CORPUS DEBENTURES</span>
            <span>CAPACITY: {filteredArticles.length} / {report.articles.length} UNITS ENROLLED</span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="glass-panel rounded-xl p-16 text-center border border-slate-800" id="explore-empty-state">
              <AlertCircle className="w-10 h-10 text-slate-600 mx-auto mb-4 animate-bounce" />
              <h3 className="font-display font-bold text-lg text-slate-200">No signals match your filters</h3>
              <p className="text-slate-500 text-xs mt-1">Try resetting your source or sentiment filters to evaluate more indexed nodes.</p>
              
              <button 
                id="reset-explore-filters"
                onClick={() => { setSourceFilter('all'); setSentimentFilter('all'); setSelectedClusterId('all'); }}
                className="mt-4 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 text-xs font-mono px-4 py-2 rounded-lg transition"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4" id="explore-articles-list">
              {filteredArticles.map((article) => {
                // Determine sentiment color
                const sentColor = 
                  article.sentiment === 'positive' 
                    ? 'text-emerald-400 bg-emerald-950/30 border-emerald-500/20' 
                    : article.sentiment === 'neutral' 
                    ? 'text-slate-300 bg-slate-900/50 border-slate-800' 
                    : 'text-rose-400 bg-rose-950/30 border-rose-500/20';

                return (
                  <div 
                    key={article.id} 
                    id={`article-card-${article.id}`}
                    className="glass-panel hover:bg-slate-900/25 rounded-xl p-5 border border-slate-800 hover:border-cyan-500/20 transition-all duration-300 shadow-md group relative overflow-hidden"
                  >
                    {/* TOP META ROW */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-cyan-400 font-bold bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-550/10 uppercase">
                          {article.source}
                        </span>
                        
                        <span className={`text-[9px] font-mono px-2 py-0.5 rounded border uppercase flex items-center gap-1 font-bold ${sentColor}`}>
                          <span className="w-1 h-1 rounded-full bg-current"></span>
                          {article.sentiment} {article.sentimentScore > 0 ? `+${article.sentimentScore}` : article.sentimentScore !== 0 ? article.sentimentScore : ''}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-[10px] text-slate-500 font-mono">
                        <span>Relevance: <strong className="text-cyan-400 font-bold">{article.relevanceScore}%</strong></span>
                        <span>|</span>
                        <span>{article.date}</span>
                      </div>
                    </div>

                    {/* ARTICLE CONTENT */}
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300 transition duration-150 mb-2 leading-snug">
                      {article.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-2">
                      {article.summary}
                    </p>

                    {/* LINK ACCENTS */}
                    <div className="mt-4 pt-3 border-t border-slate-950/60 flex justify-between items-center text-[10px] font-mono text-slate-550 group-hover:text-slate-450 transition">
                      <span className="text-slate-500">// CLUSTER REFERENCE SHIELD: tc_id_{(article.id.charCodeAt(1) % 4) + 1}</span>
                      <span className="text-cyan-500 hover:underline cursor-pointer flex items-center gap-0.5 font-bold group-hover:glow-text-cyan">
                        Trace Source Artifact <ExternalLink className="w-2.5 h-2.5" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>

      </div>

      {/* DEDICATED HIGHLIGHT SECTION: OPPORTUNITY ENGINE */}
      <div className="border-t border-slate-900 pt-10" id="explore-opportunity-block">
        <div className="flex justify-between items-end mb-6">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block">// HIGH-ROI STRATEGIC DISCOVERY NODE</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase mt-1">
              Opportunity Engine
            </h2>
          </div>
          <span className="text-[10px] font-mono text-slate-500 uppercase bg-slate-950 px-2.5 py-1 rounded border border-slate-900">
            {report.opportunities.length} OPPORTUNITIES ANALYSED
          </span>
        </div>

        {/* OPPORTUNITY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="explore-opportunity-cards-grid">
          {report.opportunities.map((opp, index) => {
            
            // Custom sizing for ratings
            const borderColors = [
              'border-cyan-500/20 hover:border-cyan-400 shadow-cyan-500/5',
              'border-emerald-500/20 hover:border-emerald-400 shadow-emerald-500/5',
              'border-purple-500/20 hover:border-purple-400 shadow-purple-500/5',
              'border-amber-500/20 hover:border-amber-400 shadow-amber-500/5',
            ];

            return (
              <div 
                key={opp.id} 
                id={`opp-card-${opp.id}`}
                className={`glass-panel rounded-xl p-5 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group ${borderColors[index % borderColors.length]}`}
              >
                <div>
                  {/* Card Header stats */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">// ALGORITHM SCORE RANK-{opp.id}</span>
                    <div className="text-right">
                      <span className="font-display font-black text-2xl sm:text-3xl text-slate-100 group-hover:text-cyan-300 transition leading-none">
                        {opp.score.toFixed(2)}
                      </span>
                      <span className="text-xs font-mono text-slate-500">/10</span>
                    </div>
                  </div>

                  {/* Core description */}
                  <h3 className="font-display font-bold text-base text-slate-100 mb-2 group-hover:text-cyan-200 transition">
                    {opp.name}
                  </h3>
                  
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {opp.description}
                  </p>
                </div>

                {/* Growth and Competition tags bar */}
                <div className="bg-slate-950/60 border border-slate-900/80 rounded-lg p-3 flex flex-wrap justify-between items-center gap-3 text-xs font-mono">
                  <div>
                    <span className="text-slate-500 mr-1.5 uppercase tracking-wider text-[10px]">POTENTIAL:</span>
                    <span className="text-emerald-400 font-bold uppercase">{opp.growthPotential}</span>
                  </div>

                  <div>
                    <span className="text-slate-500 mr-1.5 uppercase tracking-wider text-[10px]">COMPETITION:</span>
                    <span className="text-cyan-400 font-bold uppercase">{opp.competitionLevel}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
