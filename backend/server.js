const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Verbindung
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio-ck', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Mit MongoDB verbunden!');
});

// Routes
const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend läuft erfolgreich!' });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});