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
        
        server.use(function (err, req, res, next) {
            if (err.name === 'UnauthorizedError') {
                res.status(401).send({
                    title: 'Unauthorized', 
                    detail: 'Unauthorized Access!'
                });
            }
        });

        const PORT = process.env.PORT || 3000;

        server.use(handle).listen(PORT, (err) => {
            if (err) throw err;
            console.log('> Ready on port ' + PORT);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });