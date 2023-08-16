const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();

app.use(cors());
app.use(express.json()); 

app.get('/Api', (req, res) => {
    console.log("GET isteği alındı.");
    res.json({ message: "Merhaba, bu bir API yanıtıdır!" });
});

app.post('/Api', (req, res) => {
    console.log("POST isteği alındı. Gönderilen veri:", req.body);
    res.json({ message: "Veri başarıyla alındı!" });
});

module.exports = serverless(app);
