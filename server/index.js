const express = require('express');
const compression = require('compression');
const path = require('path');
const next = require('next');
const mongoose = require('mongoose');
const routes = require('../routes');

// Service
const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);
const config = require('./config');

const Book = require('./models/book');
const bodyParser = require('body-parser');

mongoose.connect()
    .then()
    .catch(err => console.error(err));

app.prepare()
    .then(() => {
        const server = express();
        server.use(compression());
        server.use(bodyParser.json());
        
    });