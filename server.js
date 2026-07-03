const express = require('express');
const path = require('path');
require('dotenv').config();

const connectDB = require('./server/config/db');

const app = express();

if (process.env.MONGO_URI) {
  connectDB();
}

app.use(express.json());

app.use('/api/users', require('./server/routes/api/users'));
app.use('/api/auth', require('./server/routes/api/auth'));
app.use('/api/profile', require('./server/routes/api/profile'));
app.use('/api/posts', require('./server/routes/api/posts'));
app.use('/api/offers', require('./server/routes/api/offers'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

const PORT = process.env.SERVER_PORT || process.env.PORT || 5025;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
