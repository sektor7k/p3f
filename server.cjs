const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // Bu middleware'i ekleyerek gelen JSON verisini okuyabiliriz.

app.get('/Api', (req, res) => {
    res.json({ message: "Merhaba, bu bir API yanıtıdır!" });
});

// Yeni bir POST endpoint'i oluşturalım.
app.post('/Api', (req, res) => {
    console.log(req.body); // Burada gelen JSON veriyi konsola yazdırıyoruz.

    // İsteğe yanıt olarak bir mesaj gönderelim.
    res.json({ message: "Veri başarıyla alındı!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});