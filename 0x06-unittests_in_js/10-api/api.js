const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.end('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
    const id = Number(req.params.id);
    res.end(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
    res.json({
        "payment_methods": {
            "credit_cards": true,
            "paypal": false
        }
    })
});

app.post('/login', (req, res) => {
    const userName = req.body.userName;
    res.end(`Welcome ${userName}`);
});

app.listen(7865, () => {
    console.log('API available on localhost port 7865');
});
