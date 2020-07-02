//index.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const { publicRoutes, authRoutes } = require('./routes');

require('../database')

const app = express();

app.use(cors());
app.use(express.json());
app.use(publicRoutes);
app.use(authRoutes);

app.use('/uploads/interfaces', express.static(path.resolve(__dirname, '..', 'uploads', 'interfaces')));
app.use('/uploads/artifacts', express.static(path.resolve(__dirname, '..', 'uploads', 'artifacts')));
app.use('/uploads/processes', express.static(path.resolve(__dirname, '..', 'uploads', 'processes')));

app.listen(3332);