const express = require('express');
const dashboardRouter = express.Router();

dashboardRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the portfolios to you');
})
.post((req, res) => {
    res.end(`Will add the dashboard: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dashboard');
})
.delete((req, res) => {
    res.end('Deleting the dashboard');
});

module.exports = dashboardRouter;