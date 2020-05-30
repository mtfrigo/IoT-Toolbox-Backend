//index.js
const express = require('express');
const cors = require('cors');
const {publicRoutes, authRoutes} = require('./routes');

require('../database')

const app = express();

app.use(cors());
app.use(express.json());
app.use(publicRoutes);
app.use(authRoutes);

app.listen(3332);