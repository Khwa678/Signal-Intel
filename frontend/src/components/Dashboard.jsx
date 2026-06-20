import React from 'react';
import { RefreshCw, Sliders, PlayCircle, ExternalLink, Activity } from 'lucide-react';

export default function Dashboard({ report, onRefresh, setTab }) {
  const score = report.opportunityScore || 8.4;
  
  // Custom styled score gauge color logic
  const getScoreColor = (val) => {
    if (val >= 8) return 'text-cyan-400 border-cyan-400/20';
    if (val >= 6) return 'text-emerald-400 border-emerald-400/20';
    return 'text-amber-400 border-amber-400/20';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 animate-fade-in" id="dashboard-view-box">
      
      {/* HEADER ROW */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 mb-8 border-b border-slate-900/40">
        <div>
          <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block">// PERSISTENT SIGNALS</span>
          <h1 className="font-sans font-black text-4xl sm:text-5xl text-white uppercase mt-2 select-none tracking-tight">
            {report.topic || "Agentic AI"}
          </h1>
        </div>
        
        <div className="flex gap-2.5">
          <button 
            onClick={onRefresh}
            className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-850 hover:border-slate-700 text-slate-350 rounded-lg transition focus:outline-none"
            title="Refresh current data source feeds"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          
          <button 
            onClick={() => setTab('explore')}
            className="px-5 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-850 hover:border-slate-700 text-slate-200 font-mono text-xs uppercase tracking-wider rounded-lg transition text-slate-350 hover:text-white flex items-center gap-2"
          >
            <Sliders className="w-4 h-4" />
            <span>DEEP DIVE EXPLORE</span>
          </button>
        </div>
      </div>

      {/* METRICS HUB ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* OPPORTUNITY GUAGE */}
        <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-6 flex flex-col justify-between" id="overview-gauge">
          <div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">// CONSOLIDATED SIGNALS</span>
            <h3 className="font-display font-black text-sm text-slate-200 uppercase mt-2">OPPORTUNITY SCORE</h3>
          </div>

          <div className="flex items-baseline gap-4 my-6">
            <span className={`text-7xl font-sans font-black tracking-tighter ${getScoreColor(score)}`}>
              {score}
            </span>
            <span className="text-slate-500 font-mono text-xs select-none">/ 10.0 MAXIMUM</span>
          </div>

          <p className="text-slate-500 font-mono text-[10px] leading-relaxed">
            Weighted composite scoring indicating rapid user intent shifts, content volume, and LLM classification signals.
          </p>
        </div>

        {/* FEED METRICS STATS */}
        <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-6 justify-between flex flex-col">
          <div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">// FEED STATISTICS</span>
            <h3 className="font-display font-black text-sm text-slate-200 uppercase mt-2">DATA HARVEST</h3>
          </div>

          <div className="grid grid-cols-2 gap-4 my-5">
            <div>
              <span className="text-[10px] font-mono text-slate-600 uppercase block tracking-wider">CONFIDENCE</span>
              <span className="text-3xl font-sans font-black text-white">{report.confidence || 84}%</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-600 uppercase block tracking-wider">SOURCES</span>
              <span className="text-3xl font-sans font-black text-cyan-400">{report.sourceCount || 36} urls</span>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-3">
            <span className="text-[9px] font-mono text-slate-650 uppercase block mb-1">DATA CHANNELS INCLUDED:</span>
            <span className="font-mono text-[10px] text-slate-400">Google News / Web indexes · Bing SERPs · LinkedIn (Apify mock)</span>
          </div>
        </div>

        {/* ACTION PANEL */}
        <div className="bg-[#0b1329]/30 border border-slate-900 rounded-xl p-6 flex flex-col justify-between" id="action-signals">
          <div>
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold block">// IMMEDIATE DIRECTIVES</span>
            <h3 className="font-display font-black text-sm text-slate-100 uppercase mt-2">PIPELINE TRIGGERS</h3>
          </div>

          <div className="space-y-2 my-4">
            <button 
              onClick={() => { alert('Triggered microservice alert pipeline dispatching webhooks to n8n!'); }}
              className="w-full p-3 bg-slate-950 hover:bg-slate-900 text-left text-xs font-mono rounded-lg border border-slate-900 hover:border-slate-800 transition flex items-center justify-between"
            >
              <span>⚙ RUN SCHEDULER CYCLE</span>
              <PlayCircle className="w-4 h-4 text-cyan-400" />
            </button>
            <button 
              onClick={() => setTab('reports')}
              className="w-full p-3 bg-slate-950 hover:bg-slate-900 text-left text-xs font-mono rounded-lg border border-slate-900 hover:border-slate-800 transition flex items-center justify-between"
            >
              <span>↗ CONFIGURE EXPORT PIPES</span>
              <ExternalLink className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

          <p className="text-[9px] font-mono text-slate-600 leading-normal">
            Automate reporting pipelines with n8n connectors, export schedules to Notion, and send webhook pulses.
          </p>
        </div>

      </div>

      {/* TREND CLUSTERS SHEET & SENTIMENT SUMMARY */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* KEYWORD CLUSTER TABLE */}
        <div className="lg:col-span-2 bg-[#050914]/60 border border-slate-900 rounded-xl p-6" id="dashboard-trend-box">
          <h3 className="font-display font-black text-sm text-slate-100 uppercase tracking-wider mb-6 border-b border-slate-900 pb-3">
            📚 DETECTED TREND CLUSTERS & VOLUME SIGNALS
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-12 text-[10px] font-mono text-slate-650 uppercase tracking-wider pb-1 border-b border-slate-900">
              <span className="col-span-6">CLUSTER THEMATIC INDEX</span>
              <span className="col-span-3 text-center">RATING SCORE</span>
              <span className="col-span-3 text-right">STATE</span>
            </div>

            {report.trendClusters && report.trendClusters.map((cluster) => (
              <div 
                key={cluster.id}
                className="grid grid-cols-12 items-center py-2.5 text-xs font-mono border-b border-slate-900/40 hover:bg-slate-900/10 px-1 rounded transition"
              >
                <span className="col-span-6 font-bold text-slate-200 truncate">{cluster.name}</span>
                
                {/* Horizontal scoring rating indicator bar */}
                <span className="col-span-3 flex items-center justify-center gap-2">
                  <span className="text-cyan-400 font-bold">{cluster.score}</span>
                  <div className="w-12 h-1.5 bg-slate-900 rounded overflow-hidden hidden sm:block">
                    <div className="bg-cyan-400 h-full" style={{ width: `${(cluster.score / 10) * 100}%` }}></div>
                  </div>
                </span>

                <span className="col-span-3 text-right">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-black ${
                    cluster.trendState === 'RISING' ? 'bg-emerald-950/20 text-emerald-400 border border-emerald-500/20' :
                    cluster.trendState === 'NEW' ? 'bg-indigo-950/20 text-indigo-400 border border-indigo-500/20' :
                    cluster.trendState === 'STABLE' ? 'bg-blue-950/20 text-blue-400 border border-blue-500/20' :
                    'bg-slate-950/40 text-slate-500'
                  }`}>
                    {cluster.trendState}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SENTIMENT CLASSIFICATION SCORE CHART MOCK */}
        <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-6" id="sentiment-overview">
          <h3 className="font-display font-black text-sm text-slate-100 uppercase tracking-wider mb-6 border-b border-slate-900 pb-3">
            📊 SENTIMENT SPLITS
          </h3>

          <div className="space-y-6 py-4">
            
            {/* Positive */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-slate-400 font-bold">POSITIVE (Bullish Intent)</span>
                <span className="text-emerald-450 font-black">64.5%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-900 rounded overflow-hidden">
                <div className="bg-emerald-450 h-full rounded" style={{ width: '64.5%' }}></div>
              </div>
            </div>

            {/* Neutral */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-slate-400 font-bold">NEUTRAL (Status Quo)</span>
                <span className="text-blue-400 font-black">28.0%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-900 rounded overflow-hidden">
                <div className="bg-blue-450 h-full rounded" style={{ width: '28%' }}></div>
              </div>
            </div>

            {/* Negative */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-slate-400 font-bold">NEGATIVE (Risk Index)</span>
                <span className="text-rose-400 font-black">7.5%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-900 rounded overflow-hidden">
                <div className="bg-rose-500 h-full rounded" style={{ width: '7.5%' }}></div>
              </div>
            </div>

          </div>

          <div className="bg-[#0b1329]/30 border border-slate-900 rounded-lg p-3.5 text-[10px] font-mono text-slate-500 mt-6 leading-relaxed flex items-start gap-2">
            <Activity className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>LLM-analyzed metrics outline clear bullish trajectory with minor resistance patterns on open integration topics.</span>
          </div>
        </div>

      </div>

    </div>
  );
}
