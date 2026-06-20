import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle2, ShieldCheck, Cpu, Database, Network } from 'lucide-react';

interface LoadingViewProps {
  topic: string;
  onFinish: () => void;
}

interface Step {
  id: number;
  label: string;
  status: 'pending' | 'loading' | 'completed';
}

export default function LoadingView({ topic, onFinish }: LoadingViewProps) {
  const [progress, setProgress] = useState(0);
  const [steps, setSteps] = useState<Step[]>([
    { id: 1, label: 'Collecting Sources', status: 'pending' },
    { id: 2, label: 'Processing Articles', status: 'pending' },
    { id: 3, label: 'Building Trend Clusters', status: 'pending' },
    { id: 4, label: 'Calculating Opportunity Scores', status: 'pending' },
    { id: 5, label: 'Generating AI Insights', status: 'pending' },
    { id: 6, label: 'Forecasting Growth', status: 'pending' },
  ]);

  useEffect(() => {
    // Progress interval (0-100 over ~3.6 seconds)
    const totalDuration = 3200; // ms
    const intervalTime = 40; // ms
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Update step status based on progress percentage
  useEffect(() => {
    setSteps((prevSteps) =>
      prevSteps.map((step) => {
        // Distribute percentage thresholds
        const startThreshold = (step.id - 1) * 16.6;
        const endThreshold = step.id * 16.6;

        if (progress >= endThreshold) {
          return { ...step, status: 'completed' };
        } else if (progress >= startThreshold) {
          return { ...step, status: 'loading' };
        } else {
          return { ...step, status: 'pending' };
        }
      })
    );
  }, [progress]);

  // Handle completion redirect
  useEffect(() => {
    if (progress >= 100) {
      const waitTimer = setTimeout(() => {
        onFinish();
      }, 600); // short pause at 100% for aesthetic pacing
      return () => clearTimeout(waitTimer);
    }
  }, [progress, onFinish]);

  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-center animate-fade-in" id="loading-view-container">
      {/* GLOWING LOGO ICON */}
      <div className="relative inline-block mb-8">
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl"></div>
        <div className="relative bg-slate-950 border-2 border-cyan-400 p-5 rounded-full shadow-neon-cyan animate-spin-slow">
          <Database className="w-10 h-10 text-cyan-400" />
        </div>
      </div>

      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight uppercase mb-2">
        Analysing <span className="text-cyan-400 glow-text-cyan">{topic}</span>
      </h2>
      <p className="text-slate-400 text-xs font-mono tracking-widest uppercase mb-10">// INITIALIZING RAW SIGNAL HARVESTING PIPELINE</p>

      {/* PIPELINE PROGRESS BAR */}
      <div className="glass-panel rounded-xl p-5 border border-cyan-500/10 mb-8 max-w-md mx-auto">
        <div className="flex justify-between text-xs font-mono mb-2" id="loading-progress-labels">
          <span className="text-cyan-400">ENGINE_LOAD_STATE</span>
          <span className="text-slate-200 font-bold">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
          <div 
            id="loading-progress-bar-fill"
            className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-500 progress-bar-transition"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* DETAILED CHECKLIST */}
      <div className="glass-panel text-left rounded-xl p-6 border border-slate-800 max-w-sm mx-auto" id="loading-steps-list">
        <div className="text-[10px] text-slate-500 font-mono mb-4 text-center tracking-widest uppercase border-b border-slate-900 pb-2">
          SIGNAL REPORT ENGINE CORRELATORS
        </div>
        
        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center justify-between" id={`loading-step-row-${step.id}`}>
              <div className="flex items-center gap-3">
                {step.status === 'completed' ? (
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                ) : step.status === 'loading' ? (
                  <Loader2 className="w-4.5 h-4.5 text-cyan-400 shrink-0 animate-spin" />
                ) : (
                  <div className="w-4.5 h-4.5 rounded-full border-2 border-slate-800 shrink-0"></div>
                )}
                
                <span 
                  className={`text-xs font-mono font-medium transition-colors ${
                    step.status === 'completed'
                      ? 'text-slate-200'
                      : step.status === 'loading'
                      ? 'text-cyan-400 glow-text-cyan'
                      : 'text-slate-600'
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {step.status === 'completed' && (
                <span className="text-[10px] text-emerald-400 font-mono uppercase bg-emerald-950/20 px-1.5 py-0.5 rounded border border-emerald-500/10">
                  Ready
                </span>
              )}
              {step.status === 'loading' && (
                <span className="text-[10px] text-cyan-400 font-mono uppercase bg-cyan-950/20 px-1.5 py-0.5 rounded border border-cyan-500/10 animate-pulse">
                  Active
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MOCK HARDWARE METADATA */}
      <div className="mt-8 text-[11px] text-slate-600 font-mono">
        EXEC: /bin/signal_intel_harvester --topic=&#34;{topic}&#34; --output=json
      </div>
    </div>
  );
}
