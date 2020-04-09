const express = require('express');

const routes = express.Router();


routes.get('/',(req, res) => {
    return res.json({ message: `fala meu compas ${req.query.name}` });
});

module.exports = routes;