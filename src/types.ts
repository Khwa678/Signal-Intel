export type SentimentType = 'positive' | 'neutral' | 'negative';
export type TrendStateType = 'RISING' | 'STABLE' | 'FALLING' | 'NEW';

export interface TrendCluster {
  id: string;
  rank: number;
  name: string;
  keywords: string[];
  score: number;
  trendState: TrendStateType;
  scoreHistory: { period: string; score: number }[];
  description: string;
  relevanceExplanation: string;
}

export interface Article {
  id: string;
  title: string;
  source: string;
  date: string;
  sentiment: SentimentType;
  sentimentScore: number; // e.g. -1.0 to 1.0 or +0.48, etc
  relevanceScore: number; // e.g. 0 to 100
  summary: string;
  url?: string;
  clusterId?: string; // Links this article to a trend cluster
}

export interface Opportunity {
  id: string;
  name: string;
  description: string;
  score: number;
  growthPotential: 'Low' | 'Medium' | 'High' | 'Exponential';
  competitionLevel: 'Low' | 'Medium' | 'High';
}

export interface JobMarketPulse {
  openRoles: number;
  locations: string[];
  topCompanies: string[];
  salaryRange: string;
  featuredRole: {
    title: string;
    description: string;
    skills: string[];
  };
}

export interface IntelligenceReport {
  topic: string;
  opportunityScore: number;
  trendClustersCount: number;
  confidence: number;
  sourceCount: number;
  sentiment: {
    positive: number;
    neutral: number;
    negative: number;
  };
  trendClusters: TrendCluster[];
  opportunities: Opportunity[];
  jobMarket: JobMarketPulse;
  llmSummary: string;
  growthCurrent: 'Low' | 'Medium' | 'High';
  growthForecast: 'Low' | 'Medium' | 'High' | 'Exponential';
  interestHistory: { year: string; value: number; isForecast?: boolean }[];
  articles: Article[];
}

export interface HistoryRecord {
  id: string;
  topic: string;
  date: string;
  score: number;
  status: 'Active' | 'Completed' | 'Idle';
}
