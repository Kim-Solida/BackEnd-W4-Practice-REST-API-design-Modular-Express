// server.js
import express from 'express';
import articlesRoutes from './routes/articlesRoutes.js';
import journalistsRoutes from './routes/journalistsRoutes.js';
import categoriesRoutes from './routes/categoriesRoutes.js';

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/articles', articlesRoutes);
app.use('/journalists', journalistsRoutes);
app.use('/categories', categoriesRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('📰 Welcome to the News API!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
