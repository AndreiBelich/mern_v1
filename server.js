require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const PORT = process.env.PORT || 3500;
const MODE = process.env.MODE || 'PROD';

app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(errorHandler);

app.get('/', async(req, res, next) => {
  res.send({message: "Successuful data"});
})
app.listen(PORT, () => {
  if (MODE === 'DEV') {
    console.log(`Server starting on port ${PORT}`);
  }
});
