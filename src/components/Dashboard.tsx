import React, { useState } from 'react';
import { IntelligenceReport, TrendCluster } from '../types';
import { 
  Sparkles, ExternalLink, RefreshCw, ChevronRight, 
  MapPin, Briefcase, Landmark, ArrowRight, TrendingUp,
  Mail, MessageSquare, Calendar, Compass, BarChart2
} from 'lucide-react';

interface DashboardProps {
  report: IntelligenceReport;
  onRefresh: () => void;
  setTab: (tab: 'discover' | 'loading' | 'dashboard' | 'explore' | 'reports') => void;
}

export default function Dashboard({ report, onRefresh, setTab }: DashboardProps) {
  const [selectedClusterId, setSelectedClusterId] = useState<string | null>(report.trendClusters[0]?.id || null);

  const selectedCluster = report.trendClusters.find(c => c.id === selectedClusterId) || report.trendClusters[0];

  // Map simulated opportunity scores from clusters or use custom metrics
  const opScores = [10.0, 8.1, 6.1, 3.9];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 animate-fade-in" id="dashboard-view-box">
      
      {/* 1. TOP HEADER PANEL */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 bg-slate-950/40 border border-slate-900 rounded-xl" id="dashboard-header-block">
        <div>
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] block">// ANALYSIS RESULT</span>
          <h1 className="font-sans font-black text-4xl sm:text-5xl text-white uppercase mt-2 select-all">
            {report.topic || "Agentic AI"}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <div className="bg-slate-900/60 border border-slate-800 text-slate-400 text-xs px-4 py-2 rounded-full font-mono">
            Sources: <span className="text-cyan-400 font-bold">{report.sourceCount || 36}</span>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 text-slate-400 text-xs px-4 py-2 rounded-full font-mono">
            Trends: <span className="text-cyan-400 font-bold">{report.trendClustersCount || 5}</span>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 text-slate-400 text-xs px-4 py-2 rounded-full font-mono">
            Time: <span className="text-cyan-400 font-bold">3.26s</span>
          </div>

          <button
            onClick={() => setTab('discover')}
            className="border border-cyan-500/35 hover:border-cyan-400 bg-cyan-950/20 text-cyan-400 hover:text-cyan-300 font-mono text-xs px-4  py-2 rounded-lg transition-all cursor-pointer active:scale-95 uppercase font-bold tracking-widest"
          >
            ← New Analysis
          </button>
        </div>
      </div>

      {/* 2. SUB HEADER TELEMETRY */}
      <div className="flex items-center gap-2.5 mb-10 text-[10px] p-1 font-mono text-slate-500 uppercase tracking-widest" id="telemetry-log-strip">
        <span className="w-2 h-2 rounded-full bg-emerald-450 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
        <span className="text-emerald-400 font-bold">● Live</span>
        <span>·</span>
        <span>3.26s</span>
      </div>

      {/* 3. FOUR COLUMN KPI GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10" id="dashboard-kpi-ribbon">
        
        {/* KPI 1 - TOP OPPORTUNITY SCORE */}
        <div className="bg-slate-950/40 rounded-xl p-6 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.06)] flex flex-col justify-between" id="kpi-opportunity-score">
          <div>
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
              <span>TOP OPPORTUNITY SCORE</span>
              <span className="cursor-help text-[8px] bg-cyan-950/60 border border-cyan-400/30 w-3.5 h-3.5 flex items-center justify-center rounded-full font-mono font-bold">?</span>
            </div>
            <div className="mt-4">
              <span className="font-sans font-black text-6xl text-cyan-400 leading-none">
                {report.opportunityScore ? report.opportunityScore.toFixed(1) : "10.0"}
              </span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-500 mt-4 lowercase">
            /10 · high growth + low competition
          </div>
        </div>

        {/* KPI 2 - TREND CLUSTERS */}
        <div className="bg-slate-950/40 rounded-xl p-6 border border-slate-900 flex flex-col justify-between" id="kpi-trend-clusters">
          <div>
            <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold block">TREND CLUSTERS</div>
            <div className="mt-4">
              <span className="font-sans font-black text-6xl text-slate-100 leading-none">
                {report.trendClustersCount || 5}
              </span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-500 mt-4 lowercase">
            extracted
          </div>
        </div>

        {/* KPI 3 - CONFIDENCE */}
        <div className="bg-slate-950/40 rounded-xl p-6 border border-slate-900 flex flex-col justify-between" id="kpi-confidence">
          <div>
            <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold block">CONFIDENCE</div>
            <div className="mt-4">
              <span className="font-sans font-black text-6xl text-slate-100 leading-none">
                {report.confidence || 70}%
              </span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-505 mt-4 lowercase">
            % LLM certainty
          </div>
        </div>

        {/* KPI 4 - SOURCES */}
        <div className="bg-slate-950/40 rounded-xl p-6 border border-slate-900 flex flex-col justify-between" id="kpi-sources">
          <div>
            <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold block">SOURCES</div>
            <div className="mt-4">
              <span className="font-sans font-black text-6xl text-slate-100 leading-none">
                {report.sourceCount || 36}
              </span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-550 mt-4 lowercase">
            analysed
          </div>
        </div>

      </div>

      {/* 4. SENTIMENT OVERVIEW BAR SECTION */}
      <div className="flex justify-between items-center mb-4 mt-6">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">// SENTIMENT OVERVIEW</span>
        <div className="bg-slate-900/80 border border-emerald-500/35 px-4 py-1 rounded-full text-[9px] font-mono text-emerald-400 uppercase flex items-center gap-1.5 shadow-[0_0_8px_rgba(16,185,129,0.15)] font-bold">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
          <span>↑ positive</span>
        </div>
      </div>

      <div className="bg-slate-950/40 rounded-xl p-6 border border-slate-900 mb-10" id="panel-sentiment">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-emerald-400 font-extrabold uppercase tracking-widest">
              ↑ POSITIVE SENTIMENT <span className="text-slate-400 font-normal ml-2">score +0.48 · {report.sourceCount || 36} sources analysed</span>
            </span>
          </div>
        </div>

        {/* THERMOMETER PROGRESS SCALE */}
        <div className="w-full h-4 bg-slate-900/60 rounded-full overflow-hidden flex mb-6 p-0.5 border border-slate-900">
          <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{ width: `58%` }}></div>
          <div className="h-full bg-slate-800 transition-all duration-1000" style={{ width: `42%` }}></div>
        </div>

        {/* SPLIT RENDER COLUMNS FOR 58% vs 42% */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-b border-slate-900/60 pb-6">
          <div>
            <div className="flex justify-between items-end text-xs font-mono text-slate-350 mb-2 font-bold uppercase tracking-wider">
              <span>↑ POSITIVE</span>
              <span className="text-emerald-400 font-black text-sm">58%</span>
            </div>
            <div className="w-full h-1 bg-slate-900 rounded-full">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `58%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end text-xs font-mono text-slate-350 mb-2 font-bold uppercase tracking-wider">
              <span>➔ NEUTRAL</span>
              <span className="text-slate-300 font-black text-sm">42%</span>
            </div>
            <div className="w-full h-1 bg-slate-900 rounded-full">
              <div className="h-full bg-slate-500 rounded-full" style={{ width: `42%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end text-xs font-mono text-slate-500 mb-2 font-semibold uppercase tracking-wider">
              <span>↓ NEGATIVE</span>
              <span className="text-slate-600 text-sm font-bold">0%</span>
            </div>
            <div className="w-full h-1 bg-slate-900 rounded-full">
              <div className="h-full bg-rose-500/20" style={{ width: `0%` }}></div>
            </div>
          </div>
        </div>

        {/* SOURCE CHIPS */}
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <span className="bg-slate-900/50 border border-slate-800 text-[10px] font-mono text-slate-400 px-3.5 py-1.5 rounded-md uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block"></span>
            SERPAPI <span className="text-slate-500 font-normal">↑ positive (20)</span>
          </span>

          <span className="bg-slate-900/50 border border-slate-800 text-[10px] font-mono text-slate-400 px-3.5 py-1.5 rounded-md uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block"></span>
            NEWSAPI <span className="text-slate-500 font-normal">↑ positive (16)</span>
          </span>
        </div>
      </div>

      {/* 5. TREND SCORES WITH PROGRESS BARS */}
      <div className="bg-slate-950/20 rounded-xl p-2 border border-slate-900/60 mb-10 overflow-hidden" id="trend-ranking-section">
        <div className="flex justify-between items-center px-4 py-3 border-b border-slate-900/80 mb-4">
          <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase font-bold">// TREND SCORES</span>
          <button 
            onClick={() => setTab('explore')}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold hover:underline transition"
          >
            Deep Dive →
          </button>
        </div>

        <div className="space-y-4 p-4">
          {report.trendClusters.slice(0, 5).map((cluster, idx) => {
            // Colors matching screenshot bars
            const barColors = [
              "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.3)]", 
              "bg-emerald-400", 
              "bg-amber-400", 
              "bg-purple-400", 
              "bg-rose-400"
            ];
            const showFire = idx < 3;
            // Map the layout percentage
            const percentage = Math.min(100, Math.max(10, cluster.score * 10));

            return (
              <div 
                key={cluster.id} 
                onClick={() => setSelectedClusterId(cluster.id)}
                className="flex flex-col gap-2 p-3 rounded-lg hover:bg-slate-900/20 transition cursor-pointer"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="font-sans font-bold text-slate-200 hover:text-cyan-400 transition flex items-center gap-1.5 text-sm sm:text-base">
                    {cluster.name} {showFire && <span>🔥</span>}
                  </span>
                  <span className="font-mono font-black text-slate-300 text-sm sm:text-base">
                    {cluster.score.toFixed(2)}
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-850">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${barColors[idx % barColors.length]}`} 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. SOURCE MIX & GROWTH PROBABILITY DIAGRAMS IN A GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10" id="middle-doughnuts-grid">
        
        {/* SOURCE MIX DOUGHNUT */}
        <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-6 flex flex-col justify-between" id="panel-source-mix">
          <div>
            <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase font-bold block mb-4">// SOURCE MIX</span>
            <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-6 border-slate-900">
              
              {/* BEAUTIFUL SVG RING DOUGHNUT */}
              <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  {/* Outer circle track */}
                  <circle cx="72" cy="72" r="54" stroke="#0f172a" strokeWidth="18" fill="none" />
                  {/* segment 1: serpapi (50%) */}
                  <circle cx="72" cy="72" r="54" stroke="#06b6d4" strokeWidth="18" fill="none" 
                    strokeDasharray="339.29" strokeDashoffset="169.64" />
                  {/* segment 2: newsapi (50%) */}
                  <circle cx="72" cy="72" r="54" stroke="#10b981" strokeWidth="18" fill="none" 
                    strokeDasharray="339.29" strokeDashoffset="339.29" transform="rotate(180 72 72)" />
                </svg>
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-sans font-black text-3xl text-slate-100">{report.sourceCount || 36}</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">sources</span>
                </div>
              </div>

              {/* Legend column on right */}
              <div className="space-y-4 font-mono text-xs w-full sm:w-auto">
                <div className="flex items-center justify-between gap-12 border-b border-slate-900 pb-2">
                  <span className="flex items-center gap-2 text-slate-350">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block"></span>
                    serpapi
                  </span>
                  <span className="text-slate-300 font-bold">50% <span className="text-slate-500 font-normal">({Math.round((report.sourceCount || 36) / 2)})</span></span>
                </div>
                <div className="flex items-center justify-between gap-12">
                  <span className="flex items-center gap-2 text-slate-350">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
                    newsapi
                  </span>
                  <span className="text-slate-300 font-bold">50% <span className="text-slate-500 font-normal">({Math.round((report.sourceCount || 36) / 2)})</span></span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* GROWTH PROBABILITY ARC GAUGE */}
        <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-6 flex flex-col justify-between" id="panel-growth-probability">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase font-bold">// GROWTH PROBABILITY</span>
              <span className="text-[10px] font-mono font-bold tracking-widest bg-amber-950/30 text-amber-500 border border-amber-500/20 px-3 py-1 rounded">
                MEDIUM
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-4">
              {/* BEAUTIFUL SVG GAUGE ARC */}
              <div className="relative w-64 h-32 overflow-hidden flex flex-col justify-end items-center mb-4">
                <svg className="w-full h-full transform translate-y-3" viewBox="0 0 200 100">
                  <defs>
                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="50%" stopColor="#eab308" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                  
                  {/* Gauge colored track */}
                  <path d="M20,90 A80,80 0 0,1 180,90" fill="none" stroke="url(#gaugeGradient)" strokeWidth="15" strokeLinecap="round" />
                  
                  {/* Needle line styled for 63% (about 113 degrees clockwise from left horizon) */}
                  {/* x2: 100 + 75 * cos(theta), y2: 90 + 75 * sin(theta) where theta is 113.4 deg, converted to radians => ~1.98 rad */}
                  {/* (cos 113.4 deg = -0.397, sin 113.4 deg = 0.917). We draw from center 100,90 */}
                  <line 
                    x1="100" y1="90" 
                    x2="70" y2="28" 
                    stroke="#f8fafc" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                  />
                  {/* Center pin circle */}
                  <circle cx="100" cy="90" r="7" fill="#0f172a" stroke="#f8fafc" strokeWidth="2" />
                </svg>

                {/* Overlaid stats summary text */}
                <div className="absolute top-1/2 flex flex-col items-center justify-center mt-3 scale-95">
                  <span className="font-sans font-black text-4xl text-slate-100 leading-none">63%</span>
                  <span className="text-[9px] font-mono text-slate-450 uppercase tracking-widest mt-1">GROWTH PROB.</span>
                </div>
              </div>

              {/* Coordinates */}
              <div className="w-full flex justify-between font-mono text-[9px] text-slate-500 uppercase tracking-widest max-w-[240px] mb-4">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
              </div>

              {/* Caption sentence */}
              <div className="text-xs sm:text-sm font-mono text-amber-400 font-medium text-center">
                Mixed signals – avg opportunity 6.3/10
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 7. OPPORTUNITIES COGNITIVE DEBIEF & QUICK ACTIONS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10" id="opportunities-actions-split">
        
        {/* OPPORTUNITIES SCORECARD CARDS list */}
        <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-6" id="panel-opportunities-ranks">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase font-bold block">// OPPORTUNITIES</span>
            <span className="text-[10px] font-mono text-slate-500 hover:text-cyan-400 cursor-pointer">All →</span>
          </div>

          <div className="space-y-4">
            {report.trendClusters.slice(0, 4).map((cluster, idx) => {
              const opScore = opScores[idx % opScores.length];
              return (
                <div 
                  key={cluster.id}
                  className="flex justify-between items-center p-4 rounded-xl bg-slate-950/50 border border-slate-900/60 hover:border-cyan-550/20 transition group"
                >
                  <div className="min-w-0 pr-4">
                    <h4 className="font-sans font-bold text-slate-200 text-xs sm:text-sm truncate">
                      {cluster.name}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-500 block mt-1 leading-normal">
                      {idx === 3 ? "high growth + low competition" : "distinct cluster with limited overlap"}
                    </span>
                  </div>
                  <span className="font-mono text-xl sm:text-2xl font-black text-emerald-400 shrink-0 select-all tracking-tight">
                    {opScore.toFixed(1)}<span className="text-slate-600 text-xs font-normal">/10</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* QUICK ACTIONS UTILITY GRID */}
        <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-6 flex flex-col justify-between animate-fade-in" id="panel-utility-portal-strip">
          <div>
            <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase font-bold block mb-6">// QUICK ACTIONS</span>
            
            <div className="space-y-3">
              {[
                { label: 'Export to Notion', icon: <ChevronRight className="w-4 h-4 shrink-0 rotate-[-45deg] text-slate-500" />, action: () => setTab('reports') },
                { label: 'Email Digest', icon: <Mail className="w-4 h-4 shrink-0 text-slate-500" />, action: () => setTab('reports') },
                { label: 'Post to Slack', icon: <MessageSquare className="w-4 h-4 shrink-0 text-slate-500" />, action: () => setTab('reports') },
                { label: 'Schedule Automation', icon: <Calendar className="w-4 h-4 shrink-0 text-slate-500" />, action: () => setTab('reports') },
                { label: 'Explore All Results', icon: <Compass className="w-4 h-4 shrink-0 text-slate-500" />, action: () => setTab('explore') },
              ].map((act, i) => (
                <div 
                  key={i} 
                  onClick={act.action}
                  className="flex items-center justify-between p-4 bg-slate-900/15 border border-slate-900 rounded-lg hover:bg-slate-900/40 hover:border-cyan-500/10 transition duration-200 cursor-pointer group"
                >
                  <span className="text-xs font-mono font-medium text-slate-350 group-hover:text-cyan-400 transition">
                    {act.label}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {act.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* 8. SECTOR SIGNAL HEATMAP ROW (Bento row stats grid) */}
      <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase font-bold block mb-4">// SECTOR SIGNAL HEATMAP <span className="text-slate-550 font-normal select-none">by keyword cluster</span></span>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-10" id="sector-signal-heatmap-strip">
        {report.trendClusters.slice(0, 5).map((cluster, idx) => {
          // Custom column colors exactly matching original mockup screen
          const colsThemeColors = [
            { bg: "bg-cyan-950/20 border-cyan-500/30 text-cyan-400", name: "Trends " + cluster.name.split(' ')[0] },
            { bg: "bg-emerald-950/10 border-emerald-500/15 text-emerald-400", name: cluster.name.split(' ').slice(0, 2).join(' ') },
            { bg: "bg-amber-950/10 border-amber-500/15 text-amber-400", name: cluster.name.split(' ').slice(0, 2).join(' ') },
            { bg: "bg-purple-950/10 border-purple-500/15 text-purple-400", name: cluster.name.split(' ').slice(0, 2).join(' ') },
            { bg: "bg-rose-950/10 border-rose-500/15 text-rose-400", name: "Cloud Tech " + cluster.name.split(' ').pop() },
          ];
          const curr = colsThemeColors[idx % colsThemeColors.length];

          return (
            <div 
              key={cluster.id} 
              onClick={() => setSelectedClusterId(cluster.id)}
              className={`p-5 rounded-lg border flex flex-col justify-between gap-5 transition cursor-pointer ${curr.bg} ${
                selectedClusterId === cluster.id ? 'ring-2 ring-cyan-400 border-transparent scale-[1.02]' : 'opacity-90 hover:opacity-100'
              }`}
            >
              <div className="text-[11px] font-sans font-bold leading-snug tracking-tight text-slate-300">
                {curr.name}
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-black select-all">
                {cluster.score.toFixed(1)}
              </div>
            </div>
          );
        })}
      </div>

      {/* 9. TREND EVOLUTION COMPACT DETAILS */}
      <div className="mb-4">
        <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase font-bold block">// TREND EVOLUTION</span>
      </div>

      <div className="bg-slate-950/40 rounded-xl border border-slate-900 overflow-hidden mb-10" id="trend-bar-ranking-list">
        {report.trendClusters.map((cluster, idx) => {
          const isRising = cluster.trendState === 'RISING' || cluster.trendState === 'NEW';
          const isFalling = cluster.trendState === 'FALLING';
          const strokeColor = isRising ? '#10b981' : isFalling ? '#ef4444' : '#64748b';
          const strokeWidth = "2.5";
          
          // Generate nice upward, flat, or downward SVG sparkline coords
          let sparklineCoords = "5,22 25,18 45,20 65,15 85,16 105,8 125,10";
          if (isFalling) {
            sparklineCoords = "5,6 25,10 45,12 65,18 85,20 105,24 125,25";
          } else if (cluster.trendState === 'STABLE') {
            sparklineCoords = "5,15 25,14 45,15 65,14 85,15 105,14 125,15";
          }

          return (
            <div 
              key={cluster.id} 
              onClick={() => setSelectedClusterId(cluster.id)}
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 border-b border-slate-900/50 hover:bg-slate-900/20 cursor-pointer transition ${
                selectedClusterId === cluster.id ? 'bg-cyan-950/10 border-l-4 border-l-cyan-400' : ''
              }`}
            >
              <div className="min-w-0 flex-1">
                <span className="font-sans font-bold text-sm text-slate-200 block truncate hover:text-cyan-400 transition">
                  {cluster.name}
                </span>
                <span className="text-[10px] font-mono text-slate-500 block mt-1.5">
                  prev {(cluster.score * 0.9).toFixed(2)} → now {cluster.score.toFixed(2)}
                </span>
              </div>

              {/* Sparkline vector rendering */}
              <div className="h-8 w-32 shrink-0 flex items-center">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 130 30">
                  <polyline
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={sparklineCoords}
                  />
                  <circle cx="125" cy={isFalling ? 25 : cluster.trendState === 'STABLE' ? 15 : 10} r="3" fill={strokeColor} />
                </svg>
              </div>

              {/* State control */}
              <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto justify-between sm:justify-end">
                <span className={`text-[9px] font-mono font-black tracking-widest px-2.5 py-1 rounded-md uppercase ${
                  cluster.trendState === 'RISING' 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                    : cluster.trendState === 'NEW'
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    : 'bg-slate-900 text-slate-500 border border-slate-800'
                }`}>
                  {cluster.trendState}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 10. LLM INSIGHT COGNITIVE PANEL */}
      <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-6 mb-10 relative overflow-hidden" id="cognitive-debrief">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase font-bold block">// LLM INSIGHTS</span>
          <span className="text-[10px] font-mono font-bold tracking-widest bg-cyan-950/30 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded">
            70% confidence
          </span>
        </div>

        <div className="pl-4 border-l-[3.5px] border-l-cyan-400">
          <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mb-6 select-all">
            Analysis of {report.sourceCount || 36} filtered sources for '{report.topic || "Agentic AI"}' shows the strongest trend clusters around {report.trendClusters[0]?.name || "Autonomous Loops"} ({report.trendClusters[0]?.score || "6.34"}), {report.trendClusters[1]?.name || "Sprinting Units"} ({report.trendClusters[1]?.score || "4.80"}), {report.trendClusters[2]?.name || "Interactive Shells"} ({report.trendClusters[2]?.score || "4.33"}). High-engagement documents reinforce these clusters through repeated keyword overlap and concentrated scoring.
          </p>
        </div>

        {/* Detailed Bullet Points exactly as shown in screenshot page 4 */}
        <div className="space-y-4 pt-4 border-t border-slate-900/60 text-slate-405 font-mono text-[11px] sm:text-xs">
          <div className="text-slate-400 uppercase tracking-widest text-[9px] font-extrabold mb-1">// COGNITIVE OVERLAPS</div>
          <div className="flex items-start gap-2 leading-relaxed">
            <span className="text-slate-550 shrink-0 select-none">›</span>
            <p>
              'Trends {report.trendClusters[0]?.name || "Autonomous Learnings"}' is a leading trend because its cluster score is {(report.trendClusters[0]?.score || 6.34).toFixed(2)} and it overlaps with high-engagement content scored at 100.00, especially around security, cautious agentic, autonomous loops.
            </p>
          </div>
          <div className="flex items-start gap-2 leading-relaxed">
            <span className="text-slate-550 shrink-0 select-none">›</span>
            <p>
              '{report.trendClusters[1]?.name || "Players Key Value"}' is a leading trend because its cluster score is {(report.trendClusters[1]?.score || 4.80).toFixed(2)} and it overlaps with high-engagement content scored at 100.00, especially around security, business units, cautious deployment.
            </p>
          </div>
          <div className="flex items-start gap-2 leading-relaxed">
            <span className="text-slate-550 shrink-0 select-none">›</span>
            <p>
              '{report.trendClusters[2]?.name || "Core Architectures"}' is a leading trend because its cluster score is {(report.trendClusters[2]?.score || 4.33).toFixed(2)} and it overlaps with high-engagement content scored at 100.00, especially around framework compliance and stateful memory.
            </p>
          </div>
        </div>
      </div>

      {/* 11. INTEREST OVER TIME (CHART VECTOR METRIC) */}
      <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-6 mb-10" id="panel-interest-timeline">
        <div className="flex justify-between items-center mb-6 border-b border-slate-900 pb-3">
          <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase font-bold block">// INTEREST OVER TIME</span>
          <span className="text-[10px] font-mono font-bold tracking-widest bg-slate-900/60 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded">
            ➔ Stable
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="chart-lowest-layout-split">
          
          {/* Quick Metrics columns side-stacked */}
          <div className="space-y-4 lg:border-r lg:border-slate-900/80 lg:pr-6 justify-between flex flex-col" id="chart-mini-readouts">
            <div>
              <div className="border-b border-slate-900/30 pb-3 mb-3">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">AVG INTEREST (3M)</span>
                <span className="font-sans font-black text-4xl text-slate-100 select-all leading-relaxed">95</span>
                <span className="text-[10px] font-mono text-slate-500 block leading-none">out of 100</span>
              </div>

              <div className="border-b border-slate-900/30 pb-3 mb-3">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">PEAK YEAR</span>
                <span className="font-sans font-black text-45 text-slate-100 block select-all">2026</span>
                <span className="text-[10px] font-mono text-slate-500">highest recorded</span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">DIRECTION</span>
                <span className="font-sans font-black text-lg text-amber-500 block">➔ Stable</span>
                <span className="text-[10px] font-mono text-slate-500">vs prev 8 weeks</span>
              </div>
            </div>
          </div>

          {/* SVG TIMELINE PLOT RENDER (Page 4 style) */}
          <div className="lg:col-span-2 flex flex-col justify-between" id="timeline-chart-canvas">
            <div className="w-full relative p-2">
              <svg className="w-full h-44 overflow-visible" viewBox="0 0 500 150">
                <defs>
                  <linearGradient id="chartUnderfill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal reference grid lines */}
                <line x1="0" y1="20" x2="500" y2="20" stroke="#0f172a" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="60" x2="500" y2="60" stroke="#0f172a" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#0f172a" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="140" x2="500" y2="140" stroke="#0f172a" strokeWidth="1" />

                {/* Coordinates Y-axis numbers */}
                <text x="5" y="25" fill="#475569" fontSize="8" fontFamily="monospace">100</text>
                <text x="5" y="65" fill="#475569" fontSize="8" fontFamily="monospace">75</text>
                <text x="5" y="105" fill="#475569" fontSize="8" fontFamily="monospace">50</text>
                <text x="5" y="135" fill="#475569" fontSize="8" fontFamily="monospace">25</text>

                {/* Dotted threshold dividing year 2026 onwards to mark FORECAST divider */}
                <line x1="330" y1="10" x2="330" y2="140" stroke="#4c1d95" strokeWidth="1.5" strokeDasharray="4 4" />

                {/* Area under historical graph */}
                <path 
                  d="M 20,120 L 40,82 L 60,110 L 80,95 L 100,105 L 120,78 L 140,88 L 160,70 L 180,96 L 200,80 L 220,68 L 240,85 L 260,65 L 280,55 L 300,75 L 320,40 L 330,42 L 330,140 L 20,140 Z" 
                  fill="url(#chartUnderfill)" 
                />

                {/* Historical Polyline Path */}
                {/* Coordinates adjusted to nice ups & downs */}
                <polyline
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="20,120 40,82 60,110 80,95 100,105 120,78 140,88 160,70 180,96 200,80 220,68 240,85 260,65 280,55 300,75 320,40 330,42"
                />

                {/* Forecast Polyline Dotted Path (from point X=330, Y=42 to right onwards) */}
                <polyline
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="330,42 350,40 370,41 390,38 410,39 430,37 450,39 470,36 490,38"
                />

                {/* Small indicator pin dots */}
                <circle cx="330" cy="42" r="4.5" fill="#312e81" stroke="#8b5cf6" strokeWidth="2" />
              </svg>
            </div>

            {/* Horizontal timeline labels */}
            <div className="w-full flex justify-between font-mono text-[9px] text-slate-500 uppercase tracking-widest pl-4 pr-4 mt-2">
              <span>2021</span>
              <span>2022</span>
              <span>2023</span>
              <span>2024</span>
              <span>2025</span>
              <span>2026</span>
              <span>2027</span>
            </div>

            {/* Legend indicators row at the bottom */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-900/60 text-[10px] font-mono text-slate-400">
              <div className="flex gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
                  Historical (5yr)
                </span>
                <span className="flex items-center gap-1.5 text-purple-400">
                  <span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>
                  12-month forecast
                </span>
              </div>
              <div className="text-slate-550 lowercase">
                Source: synthetic · Keyword: "{report.topic || "Agentic"}"
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 12. JOB MARKET PULSE SECTION */}
      <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase font-bold block mb-4">// JOB MARKET PULSE <span className="text-slate-550 font-normal hover:underline cursor-pointer select-element uppercase">remotive</span></span>
      <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-6 mb-10" id="panel-job-market-expanded">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center mb-8 border-b border-slate-900 pb-6">
          <div className="flex flex-col items-center justify-center p-4 bg-slate-900/15 border border-slate-900 rounded-xl max-w-full text-center">
            <span className="font-sans font-black text-6xl text-emerald-400">29</span>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-2">Open Roles</span>
          </div>

          <div className="lg:col-span-3 space-y-4 font-mono text-xs text-slate-300">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-slate-500 uppercase font-black tracking-wider w-40 shrink-0 block">Top locations:</span>
              <span className="text-slate-200">Americas, Europe, Israel, Worldwide, USA, Canada, USA timezones</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-slate-500 uppercase font-black tracking-wider w-40 shrink-0 block">Active companies:</span>
              <span className="text-slate-250">A.Team, Quinncia Inc, Mitre Media</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-slate-500 uppercase font-black tracking-wider w-40 shrink-0 block">Salary range:</span>
              <span className="text-emerald-400 font-extrabold">$120 - $170 /hour</span>
            </div>
          </div>
        </div>

        {/* JOB ROLES GRID CARDS (Page 5 styled row cards) */}
        <div className="space-y-4" id="job-market-listings-stack">
          {[
            { title: "Senior Independent AI Engineer / Architect", company: "A.Team", location: "Americas, Europe, Israel", date: "2026-06-16", salary: "$120 - $170 /hour" },
            { title: "Senior Independent Software Developer", company: "A.Team", location: "Americas, Europe, Israel", date: "2026-06-16", salary: "$90 - $150 /hour" },
            { title: "Frontend Developer", company: "Quinncia Inc", location: "Worldwide", date: "2026-06-16", salary: "$20k - $35k • No equity" },
            { title: "Tech Lead Full-Stack Rails Engineer", company: "Mitre Media", location: "USA, Canada, USA timezones", date: "2026-06-14", salary: "$170k - $200k" },
            { title: "Assistant Account Payable", company: "The Obesity Society", location: "USA", date: "2026-06-12", salary: "" },
            { title: "Head of Engineering", company: "Lemon.io", location: "LATAM, Europe, Central America", date: "2026-06-12", salary: "" },
          ].map((job, idx) => (
            <div 
              key={idx}
              className="p-5 bg-slate-950/60 border border-slate-900 rounded-xl hover:bg-slate-900/10 cursor-pointer transition flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
            >
              <div>
                <h4 className="font-sans font-bold text-slate-200 text-sm sm:text-base hover:text-cyan-400 transition">
                  {job.title}
                </h4>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-mono text-slate-500 uppercase">
                  <span className="text-cyan-400 hover:underline">{job.company}</span>
                  <span>·</span>
                  <span>{job.location}</span>
                  <span>·</span>
                  <span>{job.date}</span>
                </div>
              </div>
              
              {job.salary && (
                <span className="text-xs sm:text-sm font-mono text-emerald-400 font-extrabold uppercase bg-emerald-950/20 px-3 py-1 rounded border border-emerald-500/10 shrink-0 self-start sm:self-center">
                  {job.salary}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
