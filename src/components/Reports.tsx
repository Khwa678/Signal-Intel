import React, { useState } from 'react';
import { IntelligenceReport, HistoryRecord } from '../types';
import { 
  FileText, Send, Slack, Calendar, Clock, ToggleLeft, ToggleRight, 
  RefreshCw, CheckCircle2, ChevronRight, Download, Info, Mail
} from 'lucide-react';

interface ReportsProps {
  report: IntelligenceReport;
  history: HistoryRecord[];
  onSelectTopic: (topic: string) => void;
}

export default function Reports({ report, history, onSelectTopic }: ReportsProps) {
  const [email, setEmail] = useState('your@email.com');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  
  const [slackStatus, setSlackStatus] = useState<'idle' | 'posting' | 'posted'>('idle');
  const [notionStatus, setNotionStatus] = useState<'idle' | 'exporting' | 'exported'>('idle');
  
  const [automationEnabled, setAutomationEnabled] = useState(true);
  const [frequency, setFrequency] = useState<'daily' | 'twice' | 'weekly' | 'monthly'>('daily');
  const [showSetupGuide, setShowSetupGuide] = useState(true);

  // Email simulation
  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      alert('Please enter a valid recipient email address.');
      return;
    }
    setEmailStatus('sending');
    setTimeout(() => {
      setEmailStatus('sent');
      setTimeout(() => setEmailStatus('idle'), 4000);
    }, 1500);
  };

  // Slack dispatch simulation
  const handleSlackPost = () => {
    setSlackStatus('posting');
    setTimeout(() => {
      setSlackStatus('posted');
      setTimeout(() => setSlackStatus('idle'), 4000);
    }, 1500);
  };

  // Notion dispatch simulation
  const handleNotionExport = () => {
    setNotionStatus('exporting');
    setTimeout(() => {
      setNotionStatus('exported');
      setTimeout(() => setNotionStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 animate-fade-in" id="reports-view-box">
      
      {/* HEADER SECTION (Page 1 matching layout) */}
      <div className="pb-6 mb-8 border-b border-slate-900/40" id="reports-header-row">
        <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block">// REPORTS & AUTOMATION</span>
        <h1 className="font-sans font-black text-5xl sm:text-6xl text-white uppercase mt-3 leading-none tracking-tight">
          Automate &<br />Export
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm font-mono mt-4 leading-relaxed">
          // Schedule reports · Export to Notion · Email digests · Slack notifications
        </p>
      </div>

      {/* AUTOMATED SCHEDULE N8N COMPONENT (Page 1 layout) */}
      <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-6 mb-10" id="automated-schedule-box">
        <div className="flex justify-between items-center mb-6 border-b border-slate-900 pb-3">
          <h3 className="font-display font-black text-sm sm:text-base text-slate-100 uppercase flex items-center gap-2">
            <span>⚙ AUTOMATED SCHEDULE (N8N)</span>
          </h3>
          <button 
            onClick={() => { alert('Webhook settings synchronized with n8n workflow!'); }}
            className="text-cyan-400 hover:text-cyan-300 transition focus:outline-none"
            title="Refresh integration status"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-slate-500 font-mono uppercase tracking-wider block">Current topic:</span>
            <span className="text-cyan-400 font-sans font-black text-base">{report.topic || "Agentic AI"}</span>
          </div>

          <div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-3 font-bold">REPORT FREQUENCY</span>
            <div className="flex flex-wrap gap-2.5" id="frequency-pills">
              {[
                { id: 'daily', label: 'Daily 9 AM' },
                { id: 'twice', label: 'Twice Daily' },
                { id: 'weekly', label: 'Weekly Monday' },
                { id: 'monthly', label: 'Monthly' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFrequency(item.id as any)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-mono border transition-all duration-200 cursor-pointer ${
                    frequency === item.id
                      ? 'bg-cyan-500/10 border-cyan-400 text-cyan-400 font-bold shadow-[0_0_8px_rgba(6,182,212,0.15)]'
                      : 'bg-slate-900/60 border-slate-800 text-slate-550 hover:text-slate-350'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* SETUP GUIDE SECTION (Accordion steps 1-4) */}
          <div className="border border-slate-900 bg-slate-900/10 rounded-xl overflow-hidden mt-6">
            <div 
              onClick={() => setShowSetupGuide(!showSetupGuide)}
              className="p-4 bg-slate-950/60 flex items-center justify-between cursor-pointer border-b border-slate-900 text-slate-300 hover:text-slate-100 transition"
            >
              <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-cyan-400 uppercase tracking-widest">
                <span>⚡ Setup Guide — Connect n8n in 4 steps</span>
              </div>
              <span className="text-xs font-mono text-slate-500">
                {showSetupGuide ? '▲ Hide' : '▼ Show'}
              </span>
            </div>

            {showSetupGuide && (
              <div className="p-4 space-y-4 text-xs font-mono border-t border-slate-900/30">
                {/* Step 1 */}
                <div className="flex gap-4 items-start p-4 bg-slate-950/40 rounded-lg border border-slate-900/60">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-400/50 flex items-center justify-center text-xs font-mono font-bold text-cyan-400 shrink-0">1</span>
                  <div>
                    <h4 className="text-slate-200 font-bold uppercase mb-1">Install & start n8n locally</h4>
                    <p className="text-slate-500 leading-relaxed">
                      Run <code className="text-cyan-350 bg-black/40 px-1.5 py-0.5 rounded border border-slate-900 select-all font-mono text-[10px]">npx n8n start</code> in your terminal. n8n will start at <code className="text-slate-400 bg-black/20 px-1 py-0.5 rounded">localhost:5678</code> .
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 items-start p-4 bg-slate-950/40 rounded-lg border border-slate-900/60">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-400/50 flex items-center justify-center text-xs font-mono font-bold text-cyan-400 shrink-0">2</span>
                  <div>
                    <h4 className="text-slate-200 font-bold uppercase mb-1">Create a Webhook node</h4>
                    <p className="text-slate-500 leading-relaxed">
                      In n8n, create a new workflow → add a <strong className="text-slate-300">Webhook</strong> node → set HTTP Method to <strong className="text-amber-500">POST</strong> → copy the <strong className="text-slate-350">Production URL</strong> (not test URL).
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 items-start p-4 bg-slate-950/40 rounded-lg border border-slate-900/60">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-400/50 flex items-center justify-center text-xs font-mono font-bold text-cyan-400 shrink-0">3</span>
                  <div>
                    <h4 className="text-slate-200 font-bold uppercase mb-1">Add the URL to your .env file</h4>
                    <p className="text-slate-500 leading-relaxed">
                      Paste it as <code className="text-purple-350 bg-black/40 px-1.5 py-0.5 rounded border border-slate-900 select-all font-mono text-[10px]" style={{ wordBreak: 'break-all' }}>N8N_WEBHOOK_URL=https://localhost:5678/webhook/your-id</code> and restart the backend.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4 items-start p-4 bg-slate-950/40 rounded-lg border border-slate-900/60">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-400/50 flex items-center justify-center text-xs font-mono font-bold text-cyan-400 shrink-0">4</span>
                  <div>
                    <h4 className="text-slate-200 font-bold uppercase mb-1">Activate the workflow</h4>
                    <p className="text-slate-500 leading-relaxed">
                      Toggle the workflow to <strong className="text-emerald-400">Active</strong> in n8n (top-right switch). Test mode webhooks expire — only active webhooks receive scheduled calls.
                    </p>
                  </div>
                </div>

                {/* Bottom link block */}
                <div className="p-4 bg-slate-950/60 border border-slate-900 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-slate-500">
                  <span>No local setup? n8n Cloud is a hosted alternative — no install needed.</span>
                  <a 
                    href="https://n8n.io/cloud" 
                    target="_blank" 
                    rel="referrer noopener"
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 font-mono text-[10px] uppercase rounded border border-slate-800 font-bold hover:text-cyan-400 transition"
                  >
                    n8n Cloud →
                  </a>
                </div>
              </div>
            )}
          </div>

          <button 
            onClick={() => { alert('Triggered automated pipeline execution cycle!'); }}
            className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono font-bold text-xs uppercase tracking-widest rounded-lg transition-all cursor-pointer shadow-[0_0_12px_rgba(34,211,238,0.25)] flex items-center gap-2 w-fit"
          >
            <span>⚙ SCHEDULE VIA N8N →</span>
          </button>
        </div>
      </div>

      {/* CORE INTEGRATION CHANNELS GRID (Page 2 layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10" id="export-channels-container">
        
        {/* EXPORT TO NOTION */}
        <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-6 flex flex-col justify-between" id="channel-notion">
          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">// EXPORT TO NOTION</span>
              <FileText className="w-5 h-5 text-slate-500" />
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span>Topic:</span>
                <span className="text-cyan-400 font-sans font-bold">{report.topic || "Agentic AI"}</span>
              </div>

              <p className="text-slate-450 text-xs leading-relaxed">
                Creates a formatted Notion page with your analysis summary, key trends, and opportunities. Requires <strong className="text-slate-300 select-all">NOTION_API_KEY</strong> + <strong className="text-slate-350 select-all">NOTION_PAGE_ID</strong> in .env.
              </p>
            </div>
          </div>

          <button
            onClick={handleNotionExport}
            disabled={notionStatus !== 'idle'}
            className={`w-full py-3 rounded-lg font-mono text-xs uppercase tracking-wider font-bold transition duration-200 border cursor-pointer ${
              notionStatus === 'exported'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : notionStatus === 'exporting'
                ? 'bg-slate-900 border-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 border-transparent shadow-lg hover:shadow-cyan-400/20'
            }`}
          >
            {notionStatus === 'exported' ? '✓ EXPORT COMPLETE' : notionStatus === 'exporting' ? 'CONNECTING NOTION HUB...' : '↗ EXPORT NOW'}
          </button>
        </div>

        {/* EMAIL DIGEST */}
        <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-6 flex flex-col justify-between" id="channel-email">
          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">// EMAIL DIGEST</span>
              <Mail className="w-5 h-5 text-slate-500" />
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span>Topic:</span>
                <span className="text-cyan-400 font-sans font-bold">{report.topic || "Agentic AI"}</span>
              </div>

              <div>
                <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wider mb-2 font-bold">RECIPIENT EMAIL</span>
                <form onSubmit={handleSendEmail} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    disabled={emailStatus !== 'idle'}
                    className="bg-slate-950 border border-slate-900 rounded-lg text-xs font-mono px-3 py-2 w-full text-slate-200 focus:outline-none focus:border-cyan-400 transition"
                  />
                  <button
                    type="submit"
                    disabled={emailStatus !== 'idle'}
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase px-4.5 rounded-lg shrink-0 cursor-pointer disabled:opacity-40"
                  >
                    SEND →
                  </button>
                </form>
              </div>

              <p className="text-slate-500 font-mono text-[10px] leading-relaxed">
                Requires <strong className="text-slate-400 select-all">SENDGRID_API_KEY</strong> + <strong className="text-slate-450 select-all">FROM_EMAIL</strong> in .env.
              </p>
            </div>
          </div>

          <div>
            {emailStatus === 'sent' && (
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/10 p-2.5 rounded border border-emerald-500/20 block text-center animate-fade-in font-bold">
                ✓ EMAIL DISPATCHED SUCCESSFULLY!
              </span>
            )}
            {emailStatus === 'sending' && (
              <span className="text-xs font-mono text-cyan-455 animate-pulse bg-slate-900 p-2.5 rounded border border-slate-800 block text-center">
                SENDING DIGEST DOCUMENT POOL...
              </span>
            )}
          </div>
        </div>

        {/* SLACK NOTIFICATION */}
        <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-6 flex flex-col justify-between lg:col-span-1" id="channel-slack">
          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold block">// SLACK NOTIFICATION</span>
              <Slack className="w-5 h-5 text-slate-500" />
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span>Topic:</span>
                <span className="text-cyan-400 font-sans font-bold">{report.topic || "Agentic AI"}</span>
              </div>

              <p className="text-slate-450 text-xs leading-relaxed">
                Posts a rich Slack message with your top trend summary and opportunity signals. Requires <strong className="text-slate-350 select-all">SLACK_WEBHOOK_URL</strong> in .env.
              </p>
            </div>
          </div>

          <button
            onClick={handleSlackPost}
            disabled={slackStatus !== 'idle'}
            className={`w-full py-3 rounded-lg font-mono text-xs uppercase tracking-wider font-bold transition duration-200 border cursor-pointer ${
              slackStatus === 'posted'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : slackStatus === 'posting'
                ? 'bg-slate-900 border-slate-800 text-slate-550 cursor-not-allowed'
                : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 border-transparent shadow-lg'
            }`}
          >
            {slackStatus === 'posted' ? '✓ DISPATCHED TO SLACK' : slackStatus === 'posting' ? 'POSTING WEBHOOK METRICS...' : '# POST TO SLACK'}
          </button>
        </div>

        {/* COMPACT ANALYSIS HISTORY BOX (Page 2 layout) */}
        <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-6 flex flex-col justify-between" id="channel-history">
          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold block">// ANALYSIS HISTORY</span>
              <span className="w-5 h-5 text-slate-500 flex items-center justify-center font-bold">📋</span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 text-[10px] font-mono text-slate-500 uppercase tracking-wider pb-2 border-b border-slate-900">
                <span>TOPIC</span>
                <span className="text-right">WHEN</span>
              </div>

              <div 
                onClick={() => onSelectTopic(report.topic || "Agentic AI")}
                className="grid grid-cols-2 text-xs font-mono py-2 hover:text-cyan-400 transition cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="text-slate-200 font-bold">{report.topic || "Agentic AI"}</span>
                  <span className="text-[9px] font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 px-1.5 py-0.5 rounded uppercase font-bold leading-none select-none">current</span>
                </div>
                <span className="text-right text-slate-500">21h ago</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
