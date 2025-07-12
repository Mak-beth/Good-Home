// index.js
const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('✅ Backend is working!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
