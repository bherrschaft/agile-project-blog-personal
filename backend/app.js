const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', postRoutes);

module.exports = app;
