const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/endpoint', (req, res) => {
    const ip = req.body.ip;
    const mac = req.body.mac;

    // Veriyi işleyin veya saklayın

    res.send({ success: true });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});