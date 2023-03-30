const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const cors = require('cors');

const connectDb = require('./config/db');
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: ['http://localhost:5000', 'http://localhost:3000'],
  })
);

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to RandomIdea API' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
