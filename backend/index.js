require('dotenv').config();
const cors = require('cors');
const express = require('express');
const todoRoutes = require('./routes/todoRoutes');
const connectDB = require('./config/global');
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

app.use('/todo', todoRoutes);

connectDB();

app.listen(PORT, () => {
  console.log('Listen port of %d', PORT);
  console.log('http://localhost:%d', PORT);
});
