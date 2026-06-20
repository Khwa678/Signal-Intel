import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Discover from './components/Discover';
import LoadingView from './components/LoadingView';
import Dashboard from './components/Dashboard';
import Explore from './components/Explore';
import Reports from './components/Reports';
import { getReportData, INITIAL_HISTORY } from './data';
import { IntelligenceReport, HistoryRecord } from './types';
import { AlertTriangle, Sparkles, Terminal } from 'lucide-react';

export default function App() {
  const [currentTab, setTab] = useState<'discover' | 'loading' | 'dashboard' | 'explore' | 'reports'>('discover');
  const [activeTopic, setActiveTopic] = useState<string>('Agentic AI');
  const [reportData, setReportData] = useState<IntelligenceReport>(getReportData('Agentic AI'));
  const [history, setHistory] = useState<HistoryRecord[]>(INITIAL_HISTORY);
  const [pendingTopic, setPendingTopic] = useState<string>('');

  // Tiggered when a user initiates analysis
  const handleSearchAnalysis = (topic: string) => {
    setPendingTopic(topic);
    setTab('loading');
  };

  // Called when the progress bar in LoadingView hits 100%
  const handleLoadingComplete = () => {
    if (pendingTopic) {
      setActiveTopic(pendingTopic);
      const data = getReportData(pendingTopic);
      setReportData(data);

      // Add to search history if not already present
      setHistory((prev) => {
        const exists = prev.some((h) => h.topic.toLowerCase() === pendingTopic.toLowerCase());
        if (exists) return prev;

        const newRecord: HistoryRecord = {
          id: `h_${Date.now()}`,
          topic: pendingTopic,
          date: new Date().toISOString().replace('T', ' ').slice(0, 16),
          score: data.opportunityScore,
          status: 'Completed',
        };
        return [newRecord, ...prev];
      });

      setPendingTopic('');
    }
    setTab('dashboard');
  };

  // Click on a historical item to reload it instantly
  const handleSelectHistoricalTopic = (topic: string) => {
    setActiveTopic(topic);
    setReportData(getReportData(topic));
    setTab('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dev mode logs
  useEffect(() => {
    console.log(`[Signal Intel System] Navigated to Tab: ${currentTab.toUpperCase()} | Active Topic: ${activeTopic}`);
  }, [currentTab, activeTopic]);

  return (
    <div className="min-h-screen bg-cyber-bg bg-grid-cyber pb-24 relative selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* GLOWING AMBIENT GRADIENTS FOR SPACE-SENSITIVE DESIGN */}
      <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full bg-cyan-900/10 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-purple-900/10 blur-[130px] pointer-events-none"></div>

      {/* NAVBAR */}
      <Navbar 
        currentTab={currentTab} 
        setTab={setTab} 
        activeTopic={activeTopic} 
      />

      {/* RENDER ACTIVE SCREEN COMPONENT */}
      <main className="relative z-10 pt-4 px-4 sm:px-6 lg:px-8">
        
        {currentTab === 'discover' && (
          <Discover 
            onSearch={handleSearchAnalysis} 
            setTab={setTab} 
            activeTopic={activeTopic} 
          />
        )}

        {currentTab === 'loading' && (
          <LoadingView 
            topic={pendingTopic || activeTopic} 
            onFinish={handleLoadingComplete} 
          />
        )}

        {currentTab === 'dashboard' && (
          <Dashboard 
            report={reportData} 
            onRefresh={() => handleSearchAnalysis(activeTopic)} 
            setTab={setTab} 
          />
        )}

        {currentTab === 'explore' && (
          <Explore 
            report={reportData} 
            setTab={setTab} 
          />
        )}

        {currentTab === 'reports' && (
          <Reports 
            report={reportData} 
            history={history} 
            onSelectTopic={handleSelectHistoricalTopic} 
          />
        )}

      </main>

      {/* STICKY BOTTOM RADAR ALERT FOR ENTERPRISE ATMOSPHERE */}
      <div className="fixed bottom-4 right-4 z-40 max-w-xs bg-slate-950/95 border border-cyan-500/30 p-3 rounded-lg shadow-neon-cyan/15 backdrop-blur-md hidden sm:flex items-center gap-3 animate-fade-in" id="global-beacon-terminal">
        <div className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </div>
        <div className="flex-1 font-mono text-[9px] text-slate-400 uppercase tracking-wider">
          Node: <strong className="text-cyan-400">SIGNAL_STREAMER_ONLINE</strong>
          <div className="text-[8px] text-slate-550 leading-none mt-1">LATENCY: 0.003s · CLOUD_SECURE</div>
        </div>
      </div>
    </div>
  );
}
