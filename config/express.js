const express = require('express');
const expressValidation = require('express-validation');
const bodyParser = require('body-parser');
const speedTestRoutes = require('../api/speed-test/routes');

const app = express();

app.use(function (req, res, next) {
    if (req.headers && req.headers.origin) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    }
    next();
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/api', speedTestRoutes);

app.use((err, req, res, next) => {
    if (err instanceof expressValidation.ValidationError) {
        res.status(err.status).json(err);
    } else {
        console.error('Status: 500 : ', err);
        res.status(500).json({
            status: err.status,
            message: err.message
        });
    }
});

module.exports = app;