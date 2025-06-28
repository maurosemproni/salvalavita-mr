require('dotenv').config();
const express = require('express');
const fetch = global.fetch || require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.use(express.static('public'));

app.get('/notifica', async (req, res) => {
  const messaggio = pickNextMessage();

  try {
    const telegramRes = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: messaggio,
        parse_mode: 'markdown'
      })
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

function pickNextMessage() {
  const baseMessage = '🚑 *Richiesta di Aiuto!* 🚑\n\n';
  const messages = [
    "🏳️ Sto sudando da punti del corpo che non sapevo esistessero. Mandate soccorsi. E un negroni.",
    "🍹 Se qualcuno riceve questo messaggio, porti da bere. E non acqua. L’acqua è per i vincitori, e io sto perdendo.",
    "📉 Ogni piegamento è un insulto al mio stile di vita.",
    "⚰️ Se non ce la faccio, sappiate che ho odiato ogni secondo. E che il mio ultimo desiderio è un Campari coi giri.",
    "🔞 Sto urlando mentalmente parole che non posso scrivere qui. Ma finiscono tutte con: '...e un amaro, grazie.'",
    "🍸 Il sudore mi cola negli occhi e brucia. Come la verità, o la Tequila di bassa qualità. O qualsiasi Tequila.",
    "🍺 Ho appena fatto tre affondi e il mio spirito è uscito dal corpo. Ho bisogno di reintegrarlo.",
    "🥴 Se questo è il fitness, preferisco il coma etilico del sabato sera. Almeno lì c’era musica.",
    "🧉 Sto sudando Campari. Il mio corpo sta cercando di purificarsi e io non sono d’accordo.",
    "🍻 Ma non potevamo semplicemente bere, come tutte le cazzo di volte?",
    "🧠 Questa idea vince il premio come seconda idea più del cazzo al mondo, dopo la birra analcolica.",
    "🏳️ Manco ci provo a chiedervi aiuto. Ma colgo questa preziosa opportunità per mandarvi affanculo",
    "📉 Sto perdendo massa grassa, ed io odio perdere."
  ];
  return baseMessage + " " + messages[Math.floor(Math.random() * messages.length)];
}