const express = require('express');
const app = express();
const morgan = require('morgan');

morgan.token('body', function getBody (req) {
    return JSON.stringify(req.body);
});

// Middleware   =>  https://expressjs.com/fr/guide/using-middleware.html
app.use(function (req, res, next) {
    const email = req.header("X-USER-EMAIL");
    if(email) req.currentUser = { email };
    next();
});

morgan.token('x-user-email', function getEmail (req) {
    return JSON.stringify(req.currentUser);
});

let logger = morgan(':method :url :status :res[content-length] - :response-time ms :body :x-user-email'); // tiny =>     :method :url :status :res[content-length] - :response-time ms

exports.logger = logger;