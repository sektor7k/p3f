import serverless from 'serverless-http';

const Api = async (req, res) => {
  document.title = 'Api P3F';

  // GET isteği için cevap
  if (req.method === 'GET') {
    console.log("GET isteği alındı.");
    res.json({ message: "Merhaba, bu bir API yanıtıdır!" });
  }

  // POST isteği için cevap
  if (req.method === 'POST') {
    console.log("POST isteği alındı. Gönderilen veri:", req.body);
    res.json({ message: "Veri başarıyla alındı!" });
  }
}

export default serverless(Api);
