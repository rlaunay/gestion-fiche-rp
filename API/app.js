const express = require('express');

// routes
const ficheRoutes = require('./routes/fichesRoutes');

const app = express();

// global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes middleware
app.use('/api/v1/fiches', ficheRoutes);

module.exports = app;

