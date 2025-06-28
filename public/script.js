document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('dblclick', function(e) {
    e.preventDefault();
});

// Vibrazione al tocco del bottone
const bottone = document.querySelector('.bottone');

if (bottone && 'vibrate' in navigator) {
    bottone.addEventListener('touchstart', () => {
        navigator.vibrate(100); // vibra per 100ms
    });
    bottone.addEventListener('mousedown', () => {
        navigator.vibrate(100); // vibra per 100ms anche su click mouse
    });
}

// Funzione per inviare la notifica a Telegram
function notifica() {
      fetch('/notifica')
        .then(res => {
          if (res.ok) {
            alert('✅ Richiesta di aiuto inviata!');
          } else {
            alert('❌ Errore durante l’invio. Riprova più tardi se sei ancora in grado.');
          }
        })
        .catch(err => alert('❌ Errore di rete (sei spacciato mi sa): ' + err.message));
    }