const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection Simulation / Real Setup
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/signal-intel';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connection established successfully!'))
.catch(err => console.log('MongoDB connection warning (Run local mongod to activate database):', err.message));

// Schemas & Models
const TrendClusterSchema = new mongoose.Schema({
  id: String,
  name: String,
  score: Number,
  trendState: String,
});

const ReportSchema = new mongoose.Schema({
  topic: { type: String, required: true, unique: true },
  opportunityScore: Number,
  trendClustersCount: Number,
  confidence: Number,
  sourceCount: Number,
  trendClusters: [TrendClusterSchema],
  timestamp: { type: Date, default: Date.now }
});

const Report = mongoose.model('Report', ReportSchema);

const SearchHistorySchema = new mongoose.Schema({
  topic: String,
  timestamp: { type: Date, default: Date.now }
});

const SearchHistory = mongoose.model('SearchHistory', SearchHistorySchema);

// Dynamic Report Generator Utility
function generateDynamicReport(topic) {
  const cleanTopic = topic.trim();
  const baseScore = Math.floor(Math.random() * 3 + 7); // Random 7.0 - 10.0
  const sources = Math.floor(Math.random() * 20 + 20); // 20 - 40
  
  return {
    topic: cleanTopic,
    opportunityScore: parseFloat(baseScore.toFixed(1)),
    trendClustersCount: 5,
    confidence: Math.floor(Math.random() * 15 + 75), // 75 - 90 %
    sourceCount: sources,
    trendClusters: [
      {
        id: 'cls1',
        name: `Trends ${cleanTopic} Autonomous Explore`,
        score: parseFloat((baseScore * 0.95).toFixed(2)),
        trendState: 'RISING'
      },
      {
        id: 'cls2',
        name: `${cleanTopic} Players Key Value`,
        score: parseFloat((baseScore * 0.81).toFixed(2)),
        trendState: 'RISING'
      },
      {
        id: 'cls3',
        name: `Act ${cleanTopic} Autonomous Fully`,
        score: parseFloat((baseScore * 0.65).toFixed(2)),
        trendState: 'STABLE'
      },
      {
        id: 'cls4',
        name: `${cleanTopic} Agents Tasks Intelligence`,
        score: parseFloat((baseScore * 0.45).toFixed(2)),
        trendState: 'FALLING'
      },
      {
        id: 'cls5',
        name: `Cloud Build Tech ${cleanTopic}`,
        score: parseFloat((baseScore * 0.25).toFixed(2)),
        trendState: 'NEW'
      }
    ]
  };
}

// REST Endpoints
// 1. Get or Generate Report dynamically for a topic
app.post('/api/analysis', async (req, res) => {
  try {
    const { topic } = req.body;
    if (!topic || topic.trim() === '') {
      return res.status(400).json({ error: 'Topic query parameter is required.' });
    }

    const searchTopic = topic.trim();
    
    // Check if topic exists in DB
    let reportDoc = await Report.findOne({ topic: new RegExp(`^${searchTopic}$`, 'i') });
    
    if (!reportDoc) {
      // Generate fully dynamic structured data if not exist
      const generated = generateDynamicReport(searchTopic);
      reportDoc = new Report(generated);
      await reportDoc.save();
    }

    // Save to searches history
    await SearchHistory.create({ topic: searchTopic });

    res.json(reportDoc);
  } catch (err) {
    console.error('Error in fetching/creating analysis:', err);
    res.status(500).json({ error: 'Internal server deployment error.' });
  }
});

// 2. Fetch past searches history log
app.get('/api/history', async (req, res) => {
  try {
    const logs = await SearchHistory.find().sort({ timestamp: -1 }).limit(10);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve search analytics history.' });
  }
});

// 3. Health check status
app.get('/api/health', (req, res) => {
  res.json({ status: 'live', engine: 'MERN compliant', db: mongoose.connection.readyState === 1 ? 'connected' : 'offline' });
});

// Port Server boot
app.listen(PORT, () => {
  console.log(`MERN Backend actively running on host http://localhost:${PORT}`);
});
