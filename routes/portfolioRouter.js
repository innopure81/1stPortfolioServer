const express = require('express');
const Portfolio = require('../models/portfolio');
const portfolioRouter = express.Router();


portfolioRouter.route('/')
.get((req, res, next) => {
    Portfolio.find()
    .then(portfolios => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(portfolios);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Portfolio.create(req.body)
    .then(portfolio => {
        console.log('Portfolio Created ', portfolio);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(portfolio);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /portfolio');
})
.delete((req, res, next) => {
    Portfolio.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = portfolioRouter;