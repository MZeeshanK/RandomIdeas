const express = require('express');
require('dotenv').config();
const app = express();
const connectDb = require('./config/db');

connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to RandomIdea API' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
