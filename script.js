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