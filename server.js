require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const MODE = process.env.MODE || 'PROD';

app.listen(PORT, () => {
  if (MODE === 'DEV') {
    console.log(`Server starting on port ${PORT}`);
  }
});
