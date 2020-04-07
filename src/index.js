const express = require('express');

const app = express();

const users = ['rico', 'zumbi', 'verde'];

app.get('/users',(req, res) => {
    return res.json(users);
});

app.get('/users/:index', (req, res) => {
    const { index } = req.params;

    return res.json(users[index]);
}),

// localhost:3000/teste
app.listen(3000);