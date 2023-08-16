import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';

const app = express();

app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
    console.log("GET isteği alındı.");
    res.json({ message: "Merhaba, bu bir API yanıtıdır!" });
});

app.post('/', (req, res) => {
    console.log("POST isteği alındı. Gönderilen veri:", req.body);
    res.json({ message: "Veri başarıyla alındı!" });
});

export default serverless(app);
