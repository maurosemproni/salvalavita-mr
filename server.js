require('dotenv').config();
const express = require('express');
const fetch = global.fetch || require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.use(express.static('public'));

app.get('/notifica', async (req, res) => {
  const messaggio = '🔔 Il pulsante è stato premuto!';

  try {
    const telegramRes = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: messaggio })
    });

    const data = await telegramRes.json();
    data.ok ? res.sendStatus(200) : res.status(500).send(data.description);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});