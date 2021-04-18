require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mundo');
})

app.listen(PORT, () => {
  console.log('Listen port of %d', PORT);
  console.log('http://localhost:%d', PORT);
})