import { IntelligenceReport, HistoryRecord, Article, TrendCluster, Opportunity } from './types';

// Initial search history
export const INITIAL_HISTORY: HistoryRecord[] = [
  { id: 'h1', topic: 'Agentic AI', date: '2026-06-19 11:35', score: 10.0, status: 'Completed' },
  { id: 'h2', topic: 'Generative AI', date: '2026-06-15 08:22', score: 9.2, status: 'Completed' },
  { id: 'h3', topic: 'Robotics', date: '2026-06-12 14:10', score: 8.5, status: 'Completed' },
  { id: 'h4', topic: 'Climate Tech', date: '2026-06-08 17:45', score: 7.9, status: 'Completed' },
];

export function getReportData(topicRaw: string): IntelligenceReport {
  const topic = topicRaw.trim();
  const lower = topic.toLowerCase();

  // 1. MAIN TARGET TOPIC - AGENTIC AI (Matches exact specifications)
  if (lower.includes('agentic')) {
    return {
      topic: 'Agentic AI',
      opportunityScore: 10.0,
      trendClustersCount: 5,
      confidence: 70,
      sourceCount: 36,
      sentiment: {
        positive: 58,
        neutral: 42,
        negative: 0
      },
      llmSummary: "Analysis of 36 filtered sources for 'Agentic AI' shows the strongest trend clusters around Trends Agentic Autonomous Explore (6.34), Agentic Players Key Value (4.80), Act Agentic Autonomous Fully (4.33). High-engagement documents reinforce these clusters through repeated keyword overlap and concentrated scoring.\n\nConfidence: 70%.\n\nKey Insights:\n1. 'Trends Agentic Autonomous Explore' is a leading trend because its cluster score is 6.34 and it overlaps with high-engagement content focused heavily on enterprise-ready autonomy and execution safeguard chains.\n2. 'Agentic Players Key Value' demonstrates robust commercial alignment as top software vendors build native API hooks for multi-agent handoffs.\n3. 'Act Agentic Autonomous Fully' points to the long-term paradigm shift from co-pilot advisory chat boxes to fully automated background actors that complete complex, multi-day operations.",
      growthCurrent: 'Medium',
      growthForecast: 'High',
      interestHistory: [
        { year: '2021', value: 25 },
        { year: '2022', value: 48 },
        { year: '2023', value: 55 },
        { year: '2024', value: 68 },
        { year: '2025', value: 85 },
        { year: '2026', value: 95 },
        { year: '2027', value: 99, isForecast: true },
      ],
      trendClusters: [
        {
          id: 'tc1',
          rank: 1,
          name: 'Trends Agentic Autonomous Explore',
          keywords: ['autonomous', 'explore', 'behavior', 'workflow', 'planning'],
          score: 6.34,
          trendState: 'RISING',
          relevanceExplanation: 'Represents the cutting-edge shift from rigid sequential workflows to dynamic, goal-oriented exploration where agents plan their own steps.',
          description: 'This cluster is rising rapidly, fueled by novel reinforcement learning feedback loops and open-source planning frameworks.',
          scoreHistory: [
            { period: 'prev 5.60', score: 5.60 },
            { period: 'now 6.34', score: 6.34 }
          ]
        },
        {
          id: 'tc2',
          rank: 2,
          name: 'Agentic Players Key Value',
          keywords: ['players', 'value', 'commercial', 'enterprises', 'ecosystem'],
          score: 4.80,
          trendState: 'RISING',
          relevanceExplanation: 'Focuses on key software players shifting from general LLM queries to specialized functional agents producing tangible commercial ROI.',
          description: 'Significant venture capital has moved into developer tooling and SDKs designed to build agentic networks.',
          scoreHistory: [
            { period: 'prev 4.09', score: 4.09 },
            { period: 'now 4.80', score: 4.80 }
          ]
        },
        {
          id: 'tc3',
          rank: 3,
          name: 'Act Agentic Autonomous Fully',
          keywords: ['fully', 'autonomous', 'non-interactive', 'background', 'execution'],
          score: 4.33,
          trendState: 'STABLE',
          relevanceExplanation: 'Tracks the technical feasibility and security implications of enabling agent pipelines to execute background tasks without human-in-the-loop validation.',
          description: 'The core bottleneck is trust, and this trend is stable as standard safety frameworks and sandboxed runtimes mature.',
          scoreHistory: [
            { period: 'prev 4.33', score: 4.33 },
            { period: 'now 4.33', score: 4.33 }
          ]
        },
        {
          id: 'tc4',
          rank: 4,
          name: 'Agentic Agents Tasks Intelligence',
          keywords: ['intelligence', 'multi-agent', 'orchestration', 'communication', 'protocols'],
          score: 2.99,
          trendState: 'FALLING',
          relevanceExplanation: 'Examines the older concepts of chat-based task routing, which are being replaced by highly integrated system-to-system asynchronous messaging.',
          description: 'Simple dialog-centric models of agent interaction are declining in favor of highly optimized database-backed worker states.',
          scoreHistory: [
            { period: 'prev 3.55', score: 3.55 },
            { period: 'now 2.99', score: 2.99 }
          ]
        },
        {
          id: 'tc5',
          rank: 5,
          name: 'Cloud Build Tech Robotics',
          keywords: ['robotics', 'physical', 'embodiment', 'vla', 'actuation'],
          score: 1.93,
          trendState: 'NEW',
          relevanceExplanation: 'Correlates the software intelligence of agent models with physical actuators, humanoid robots, and warehouse automation systems.',
          description: 'A newly emerging hybrid field combining digital agency with hardware-level spatial control.',
          scoreHistory: [
            { period: 'prev 0.00', score: 0.00 },
            { period: 'now 1.93', score: 1.93 }
          ]
        }
      ],
      opportunities: [
        {
          id: 'op1',
          name: 'Trends Agentic Autonomous Explore',
          description: 'A focused offering or content strategy around "Trends Agentic Autonomous Explore" is supported by its cluster score of 6.34 and recurring keywords like trends, agentic, autonomous.',
          score: 10.0,
          growthPotential: 'Exponential',
          competitionLevel: 'Low'
        },
        {
          id: 'op2',
          name: 'Agentic Players Key Value',
          description: 'A commercial validation suite or market-mapping software targets the key players cluster to deliver structured insights on vendor pricing, API performance, and security profiles.',
          score: 8.08,
          growthPotential: 'Exponential',
          competitionLevel: 'Low'
        },
        {
          id: 'op3',
          name: 'Act Agentic Autonomous Fully',
          description: 'Sandbox-as-a-Service environments providing safe, quarantined nodes where autonomous background agents can process web requests without risking secure server networks.',
          score: 6.14,
          growthPotential: 'High',
          competitionLevel: 'Medium'
        },
        {
          id: 'op4',
          name: 'Cloud Build Tech Robotics',
          description: 'Cross-platform agent interfaces enabling web-based software agents to interact directly with hardware ROS nodes via unified event-driven protocols.',
          score: 3.88,
          growthPotential: 'High',
          competitionLevel: 'Low'
        },
        {
          id: 'op5',
          name: 'Agentic Agents Tasks Intelligence',
          description: 'Developer utilities focused on diagnosing multi-agent deadlock scenarios and inspecting conversation logs with visual sequence flows.',
          score: 3.55,
          growthPotential: 'Medium',
          competitionLevel: 'Medium'
        }
      ],
      jobMarket: {
        openRoles: 29,
        locations: ['Americas', 'Europe', 'Israel', 'Worldwide', 'USA', 'Canada', 'Remote'],
        topCompanies: ['A.Team', 'Quinncia Inc', 'Mitre Media'],
        salaryRange: '$120 - $170 /hour',
        featuredRole: {
          title: 'Senior Independent AI Engineer / Architect',
          description: 'Designing modular orchestration pipelines integrating Claude 3.5 Sonnet and Gemini 1.5 Pro with native tool-calling fallback nodes. Establishing self-correcting agent chains to process massive unstructured signal grids under strict SLA budgets.',
          skills: ['Multi-Agent orchestration', 'Semantic Cache', 'TypeScript SDK', 'Vector DB', 'Tool Guardrails']
        }
      },
      // AT LEAST 10 HIGHEST-QUALITY SAMPLE RESULTS
      articles: [
        {
          id: 'a1',
          title: '2026 Hype Cycle for Agentic AI: Crossing the Valley of Actionable Value',
          source: 'SerpAPI',
          date: '6/19/2026, 11:35:13 PM',
          sentiment: 'positive',
          sentimentScore: 0.33,
          relevanceScore: 98,
          summary: 'The 2026 Hype Cycle for Agentic AI helps tech leaders cut through standard marketing noise, assess genuine AI agent maturity, and build secure pipelines that deliver physical enterprise workflow automation.'
        },
        {
          id: 'a2',
          title: 'Agentic AI Trends: Why Enterprise Leaders Can\'t Ignore Self-Planning Workflows',
          source: 'SerpAPI',
          date: '6/19/2026, 10:14:02 PM',
          sentiment: 'neutral',
          sentimentScore: 0.0,
          relevanceScore: 94,
          summary: 'An depth review of architectural blueprints for multi-agent teams. Illustrates how industry standard APIs are graduating from simple text prompt-and-reply towards stateful continuous loop background actions.'
        },
        {
          id: 'a3',
          title: 'Autonomous System Protocols & Token Cost Guardrails in Financial Operations',
          source: 'NewsAPI',
          date: '6/18/2026, 9:20:11 AM',
          sentiment: 'positive',
          sentimentScore: 0.45,
          relevanceScore: 91,
          summary: 'Leading compliance firms outline the secure isolation sandboxes required to let independent agents execute transaction reviews, revealing massive cost savings and high speedups.'
        },
        {
          id: 'a4',
          title: 'Venture Shift: VC Capital Moves Aggressively Into Agent Evaluator Networks',
          source: 'LinkedIn',
          date: '6/17/2026, 2:45:30 PM',
          sentiment: 'positive',
          sentimentScore: 0.62,
          relevanceScore: 89,
          summary: 'Market analysis indicates investor dollars are exiting basic model fine-tuning and instead pouring heavily into evaluation systems, synthetic signal networks, and runtime guardrail protocols.'
        },
        {
          id: 'a5',
          title: 'The Dark Side of Agency: Navigating Agentic Hallucinations in Live Production',
          source: 'NewsAPI',
          date: '6/16/2026, 4:12:00 PM',
          sentiment: 'neutral',
          sentimentScore: -0.1,
          relevanceScore: 87,
          summary: 'Critical analysis of the risks of fully autonomous background scripts. Experts recommend a combined human-in-the-loop gateway to intercept non-deterministic outbound API commands.'
        },
        {
          id: 'a6',
          title: 'Mitre Media Launches Real-Time Agent Data Feeds for Enterprise Sentiment Analysis',
          source: 'SerpAPI',
          date: '6/15/2026, 1:30:15 PM',
          sentiment: 'positive',
          sentimentScore: 0.52,
          relevanceScore: 85,
          summary: 'A new API platform delivers synthetic signal indexes specifically optimized for financial forecasting bots to dynamically recalibrate asset risks based on live policy shifts.'
        },
        {
          id: 'a7',
          title: 'Quinncia Unveils AI Career Matching Agents Utilizing Deep Fit Scoring',
          source: 'NewsAPI',
          date: '6/14/2026, 11:05:44 AM',
          sentiment: 'positive',
          sentimentScore: 0.28,
          relevanceScore: 82,
          summary: 'New career orchestration system allows autonomous modules to simulate double-ended interviews, matching executive skills against enterprise culture profiles with 91% predictive accuracy.'
        },
        {
          id: 'a8',
          title: 'Security Vulnerability Discovered In Open-Source Multi-Agent Messaging Protocols',
          source: 'NewsAPI',
          date: '6/13/2026, 8:40:12 AM',
          sentiment: 'neutral',
          sentimentScore: -0.2,
          relevanceScore: 78,
          summary: 'Whitehat researchers alert developers to prompt-injection issues where an external email file could hijack an agent workflow, giving it mock high-priority execution instructions.'
        },
        {
          id: 'a9',
          title: 'How A.Team Built a Freelance Network of Elite AI Agents paired with Human Leaders',
          source: 'LinkedIn',
          date: '6/12/2026, 3:15:22 PM',
          sentiment: 'positive',
          sentimentScore: 0.41,
          relevanceScore: 76,
          summary: 'Examines the hybrid staffing wave where teams are built as human engineers managing multi-agent units, resulting in lightning-fast product sprints and incredibly high output density.'
        },
        {
          id: 'a10',
          title: 'VLA Models Take Flight: Connecting Visual-Language-Action Models to Web-Scrapers',
          source: 'SerpAPI',
          date: '6/11/2026, 10:00:10 AM',
          sentiment: 'positive',
          sentimentScore: 0.15,
          relevanceScore: 73,
          summary: 'Exploring how multimodal vision-based action networks browse complex websites, bypassed standard layout shifts, and successfully process checkouts in simulated tests.'
        }
      ]
    };
  }

  // 2. SUPPORT ANOTHER FREQUENT TOPIC - GENERATIVE AI
  if (lower.includes('generative') || lower.includes('genai')) {
    return {
      topic: 'Generative AI',
      opportunityScore: 9.2,
      trendClustersCount: 4,
      confidence: 85,
      sourceCount: 45,
      sentiment: {
        positive: 62,
        neutral: 28,
        negative: 10
      },
      llmSummary: "Generative AI continues its commercial consolidation with large enterprises integrating LLM hubs into proprietary databases. Extreme focus is shifting toward RAG optimizations, high-density vector caching, and localized small language models (SLMs) to cut operational costs.",
      growthCurrent: 'High',
      growthForecast: 'High',
      interestHistory: [
        { year: '2021', value: 10 },
        { year: '2022', value: 35 },
        { year: '2023', value: 92 },
        { year: '2024', value: 98 },
        { year: '2025', value: 95 },
        { year: '2026', value: 92 },
        { year: '2027', value: 90, isForecast: true },
      ],
      trendClusters: [
        {
          id: 'tc_g1',
          rank: 1,
          name: 'High Density Fine-Tuning SLMs',
          keywords: ['slm', 'distillation', 'inference', 'edge', 'caching'],
          score: 8.44,
          trendState: 'RISING',
          relevanceExplanation: 'Enterprises are migrating away from massive general APIs to narrow, distilled 8B parameter models running locally at 90% lower operational cost.',
          description: 'Highly relevant for localized finance, military, and hospital intelligence databases.',
          scoreHistory: [{ period: 'prev 7.10', score: 7.10 }, { period: 'now 8.44', score: 8.44 }]
        },
        {
          id: 'tc_g2',
          rank: 2,
          name: 'Hybrid Graph RAG Integrations',
          keywords: ['knowledge graph', 'retrieval', 'RAG', 'neo4j', 'context'],
          score: 7.12,
          trendState: 'RISING',
          relevanceExplanation: 'Standard vector lookup is giving way to graph networks that preserve entity relationships and virtually eliminate hallucinations.',
          description: 'Graph RAG increases context accuracy by 4x for complex legal and technical standards.',
          scoreHistory: [{ period: 'prev 5.80', score: 5.80 }, { period: 'now 7.12', score: 7.12 }]
        },
        {
          id: 'tc_g3',
          rank: 3,
          name: 'Multimodal Video Synthesis and Physics',
          keywords: ['sora', 'veo', 'diffusion', 'physics', '3D', 'spatial'],
          score: 5.50,
          trendState: 'STABLE',
          relevanceExplanation: 'Generation of high-fidelity video streams that respect basic physics equations for movie making, training simulators, and social marketing.',
          description: 'A massive visual leap although rendering times remain a bottle-neck.',
          scoreHistory: [{ period: 'prev 5.50', score: 5.50 }, { period: 'now 5.50', score: 5.50 }]
        },
        {
          id: 'tc_g4',
          rank: 4,
          name: 'Synthetic Training Data Pipeline Generation',
          keywords: ['synthetic', 'overfitting', 'legal-risk', 'reinforcement', 'data'],
          score: 3.10,
          trendState: 'NEW',
          relevanceExplanation: 'Creating high-fidelity synthetic textbooks to train model iterations once public web data exhausts.',
          description: 'A key defense against copyright suits and trademark issues.',
          scoreHistory: [{ period: 'prev 0.00', score: 0.00 }, { period: 'now 3.10', score: 3.10 }]
        }
      ],
      opportunities: [
        {
          id: 'op_g1',
          name: 'Automatic Graph RAG Builders',
          description: 'Software that automatically parses company wikis and converts them into optimized Knowledge Graphs without complex database setups.',
          score: 9.2,
          growthPotential: 'Exponential',
          competitionLevel: 'Low'
        },
        {
          id: 'op_g2',
          name: 'Local Distillation SDKs',
          description: 'A one-click desktop suite to distill general models into robust 3B models optimized strictly for developer coding workflows or medical charts.',
          score: 8.1,
          growthPotential: 'High',
          competitionLevel: 'Medium'
        }
      ],
      jobMarket: {
        openRoles: 142,
        locations: ['San Francisco', 'New York', 'London', 'Remote'],
        topCompanies: ['Anthropic', 'OpenAI', 'Meta', 'Cohere'],
        salaryRange: '$180 - $260 /hour',
        featuredRole: {
          title: 'Lead RAG Optimization Architect',
          description: 'Architecting ultra-low latency context loading frameworks for premium finance customer service portals.',
          skills: ['Graph RAG', 'LlamaIndex', 'PgVector', 'CUDA']
        }
      },
      articles: [
        {
          id: 'ag1',
          title: 'Graph RAG: The Ultimate Antidote to LLM Inaccuracies',
          source: 'TechCrunch',
          date: '6/19/2026',
          sentiment: 'positive',
          sentimentScore: 0.48,
          relevanceScore: 97,
          summary: 'In-depth review of how combining knowledge databases with standard semantic embeddings achieves zero-hallucination outputs in critical healthcare and tax compliance software.'
        },
        {
          id: 'ag2',
          title: 'The Real Cost of GPT-4: Why Big Brands are Migrating to Localized Slim Models',
          source: 'VentureBeat',
          date: '6/18/2026',
          sentiment: 'neutral',
          sentimentScore: -0.05,
          relevanceScore: 92,
          summary: 'Analyzing the heavy bills of enterprise-wide chat queries. Brands are shifting tasks to fine-tuned Llama-3-8B units running locally.'
        }
      ]
    };
  }

  // 3. CLIMATE TECH
  if (lower.includes('climate') || lower.includes('green') || lower.includes('carbon')) {
    return {
      topic: 'Climate Tech',
      opportunityScore: 8.7,
      trendClustersCount: 4,
      confidence: 78,
      sourceCount: 22,
      sentiment: {
        positive: 65,
        neutral: 25,
        negative: 10
      },
      llmSummary: "Climate Tech is experiencing high growth in grid orchestration, battery storage chemistries, and AI-driven land monitoring. Government funding is flowing heavily into carbon sequestration pipelines and resilient agricultural tech.",
      growthCurrent: 'Medium',
      growthForecast: 'Exponential',
      interestHistory: [
        { year: '2021', value: 20 },
        { year: '2022', value: 38 },
        { year: '2023', value: 45 },
        { year: '2024', value: 62 },
        { year: '2025', value: 78 },
        { year: '2026', value: 87 },
        { year: '2027', value: 96, isForecast: true },
      ],
      trendClusters: [
        {
          id: 'tc_c1',
          rank: 1,
          name: 'Sodium-Ion Utility Storage Systems',
          keywords: ['sodium-ion', 'battery', 'lithium-free', 'grid', 'anode'],
          score: 7.92,
          trendState: 'RISING',
          relevanceExplanation: 'The shift from expensive lithium to safe, abundant sodium for large-scale grid containment blocks.',
          description: 'A vital piece for load balancing solar and wind generator surges.',
          scoreHistory: [{ period: 'prev 5.20', score: 5.20 }, { period: 'now 7.92', score: 7.92 }]
        },
        {
          id: 'tc_c2',
          rank: 2,
          name: 'AI Smart Grid Balancing Loops',
          keywords: ['smart grid', 'orchestration', 'microgrids', 'predictive', 'llm'],
          score: 6.88,
          trendState: 'RISING',
          relevanceExplanation: 'Using real-time compute models to forecast power surges and automatically route solar cells storage.',
          description: 'Saves municipalities up to 15% in electrical waste.',
          scoreHistory: [{ period: 'prev 4.90', score: 4.90 }, { period: 'now 6.88', score: 6.88 }]
        }
      ],
      opportunities: [
        {
          id: 'op_c1',
          name: 'Microgrid Management Controls',
          description: 'A cloud operating system enabling distributed agricultural communities to share local solar grids seamlessly during high-heat seasons.',
          score: 8.7,
          growthPotential: 'High',
          competitionLevel: 'Low'
        }
      ],
      jobMarket: {
        openRoles: 43,
        locations: ['Munich', 'Boston', 'Stockholm', 'Remote'],
        topCompanies: ['Tesla Energy', 'Climeworks', 'Form Energy'],
        salaryRange: '$90 - $140 /hour',
        featuredRole: {
          title: 'Power Grid Routing Algorithm Engineer',
          description: 'Designing real-time dispatch systems for high-voltage battery arrays.',
          skills: ['Python Optimization', 'C++', 'Linear Programming', 'Rust']
        }
      },
      articles: [
        {
          id: 'ac1',
          title: 'Why Sodium-Ion is Ready to Break the Lithium Dependency',
          source: 'CleanEnergy Herald',
          date: '6/19/2026',
          sentiment: 'positive',
          sentimentScore: 0.54,
          relevanceScore: 92,
          summary: 'New test cases reveal sodium storage achieves 80% cheaper manufacturing costs while maintaining 10-year reliable cycles.'
        }
      ]
    };
  }

  // 4. GENERAL FALLBACK FOR ROBOTICS, QUANTUM COMPUTING, CYBERSECURITY, HEALTHCARE ETC.
  // We customize the fields based on input to make it incredibly lifelike!
  const friendlyTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
  const scoreFactor = Math.abs(topic.charCodeAt(0) % 5) / 5; // pseudo-random stable per topic name
  const oppScore = Number((7.0 + scoreFactor * 3).toFixed(1));
  const trendCount = 4 + (topic.charCodeAt(1) % 2);
  const confidencePercent = 65 + (topic.charCodeAt(0) % 15);
  const sourcesCount = 18 + (topic.charCodeAt(2) % 25);

  return {
    topic: friendlyTopic,
    opportunityScore: oppScore,
    trendClustersCount: trendCount,
    confidence: confidencePercent,
    sourceCount: sourcesCount,
    sentiment: {
      positive: Math.round(45 + scoreFactor * 25),
      neutral: Math.round(30 - scoreFactor * 10),
      negative: Math.round(25 - scoreFactor * 15)
    },
    llmSummary: `${friendlyTopic} represents a dynamic, rapidly evolving segment in modern enterprise SaaS. Drivers include increasing data volumes, localized computational hardware, and demands for hyper-relevance. Significant venture capital and developer activity suggest a major market expansion is underway.`,
    growthCurrent: oppScore > 8.5 ? 'High' : 'Medium',
    growthForecast: 'High',
    interestHistory: [
      { year: '2021', value: 15 },
      { year: '2022', value: 30 },
      { year: '2023', value: 45 },
      { year: '2024', value: 60 },
      { year: '2025', value: 75 },
      { year: '2026', value: 88 },
      { year: '2027', value: 97, isForecast: true },
    ],
    trendClusters: [
      {
        id: 'tc_f1',
        rank: 1,
        name: `Integrated ${friendlyTopic} Architecture`,
        keywords: ['infrastructure', 'scalability', 'standards', 'integration'],
        score: Number((5.5 + scoreFactor * 2).toFixed(2)),
        trendState: 'RISING',
        relevanceExplanation: `Represents the overarching infrastructure required to bring ${friendlyTopic} into traditional secure corporate clouds.`,
        description: 'This is the foundational layer scaling this segment globally this year.',
        scoreHistory: [{ period: 'prev 4.10', score: 4.10 }, { period: 'now 5.50', score: 5.50 }]
      },
      {
        id: 'tc_f2',
        rank: 2,
        name: `Next-Gen ${friendlyTopic} Tools`,
        keywords: ['automation', 'efficiency', 'SaaS', 'developer-friendly'],
        score: Number((4.1 + scoreFactor * 1.5).toFixed(2)),
        trendState: 'RISING',
        relevanceExplanation: 'Focuses on the commercial software utilities replacing manual legacy configuration screens.',
        description: 'Spurred by rapid cloud-native adoption patterns.',
        scoreHistory: [{ period: 'prev 3.20', score: 3.20 }, { period: 'now 4.10', score: 4.10 }]
      },
      {
        id: 'tc_f3',
        rank: 3,
        name: `Cognitive ${friendlyTopic} Optimization`,
        keywords: ['cognitive', 'deep-learning', 'efficiency', 'analytics'],
        score: Number((3.0 + scoreFactor).toFixed(2)),
        trendState: 'STABLE',
        relevanceExplanation: 'Tracks optimization of the physical core processors to lower dynamic carbon overhead.',
        description: 'Stable but vital for large-scale operations managers.',
        scoreHistory: [{ period: 'prev 3.00', score: 3.00 }, { period: 'now 3.00', score: 3.00 }]
      }
    ],
    opportunities: [
      {
        id: 'op_f1',
        name: `Unified ${friendlyTopic} Orchestrator`,
        description: `A SaaS workspace helping IT teams monitor, configure, and secure multiple ${friendlyTopic} instances via a centralized terminal layout.`,
        score: oppScore,
        growthPotential: 'Exponential',
        competitionLevel: 'Low'
      },
      {
        id: 'op_f2',
        name: `${friendlyTopic} Guardrails & Audit API`,
        description: 'An independent real-time tracking network confirming compliance with international security standards and local laws.',
        score: Number((oppScore - 1.2).toFixed(1)),
        growthPotential: 'High',
        competitionLevel: 'Medium'
      }
    ],
    jobMarket: {
      openRoles: 35,
      locations: ['San Francisco', 'Europe', 'Remote'],
      topCompanies: ['Apex Systems', 'Innovate Tech', 'Signal Labs'],
      salaryRange: '$110 - $160 /hour',
      featuredRole: {
        title: `Principal ${friendlyTopic} Solution Architect`,
        description: `Leading product scoping, pilot runs, and security integrations for enterprise deployments of ${friendlyTopic} across global offices.`,
        skills: ['Infrastructure scaling', 'API Security', 'Cloud Run', 'Multi-tenant setups']
      }
    },
    articles: [
      {
        id: 'af1',
        title: `The 2026 Playbook for ${friendlyTopic} in Global Enterprises`,
        source: 'SerpAPI',
        date: '6/19/2026',
        sentiment: 'positive',
        sentimentScore: 0.28,
        relevanceScore: 95,
        summary: `Strategic overview of how leading technology officers deploy ${friendlyTopic} frameworks to unlock faster product creation and secure system execution.`
      },
      {
        id: 'af2',
        title: `Why Traditional Firms Fail at ${friendlyTopic} Integrations`,
        source: 'NewsAPI',
        date: '6/18/2026',
        sentiment: 'neutral',
        sentimentScore: 0.0,
        relevanceScore: 88,
        summary: 'Exposing common pitfalls of standard integrations: static databases, bloated dependencies, and inadequate developer feedback loops.'
      },
      {
        id: 'af3',
        title: `Breaking: Security Leaders Set Guardrails for ${friendlyTopic} Usage`,
        source: 'LinkedIn',
        date: '6/17/2026',
        sentiment: 'neutral',
        sentimentScore: -0.15,
        relevanceScore: 81,
        summary: 'Global policy teams demand immediate sandboxing and encryption structures before wide scale adoption passes core thresholds.'
      }
    ]
  };
}
