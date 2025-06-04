import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db.mjs';

// Import route files
import studentRoutes from './routes/studentRoutes.mjs';
import paymentRoutes from './routes/paymentRoutes.mjs';
import eventRoutes from './routes/eventRoutes.mjs';
import contactRoutes from './routes/contactRoutes.mjs';

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mount routers
app.use('/api/students', studentRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/contact', contactRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});