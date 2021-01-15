'use strict';

const http = require('http');
const debug = require('debug')('blogprotbe:server');
const express = require('express');
const router = express.Router();

const app = express();
const port = 4000;
app.set('port', port);

const server = http.createServer(app);

const route = router.get('/', (req, res, next) => {
        res.status(200).send({
            title: "Node Store API",
            version: "0.0.1"
        });
    });

app.use('/', route);

server.listen(port);
console.log('API rodando na porta ' + port);


