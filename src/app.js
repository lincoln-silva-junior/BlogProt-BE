// PACKAGES *******************

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

// ****************************

// APPLICATION INIT
const app = express();
const router = express.Router();

// BODY PARSER
app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({ extended: false }));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// MODELS
const User = require('./models/user');

// ROUTES
const indexRoute = require('./routes/index-route');
const userRoute = require('./routes/user-route');

// DATABASE
mongoose.connect(config.connectionString
                , { useNewUrlParser: true,  useUnifiedTopology: true });

app.use('/', indexRoute);
app.use('/users', userRoute);

module.exports = app;