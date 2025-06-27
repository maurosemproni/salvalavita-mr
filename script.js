document.querySelectorAll('.bottone').forEach(el => {
    function addActive() {
        el.classList.add('attivo');
    }
    function removeActive() {
        el.classList.remove('attivo');
    }

    var led = document.querySelector('.led');

    el.addEventListener('mousedown', addActive);
    el.addEventListener('touchstart', addActive);

    led.addEventListener('mousedown', addActive);
    led.addEventListener('touchstart', addActive);

    // Rimuovi la classe quando il mouse o il dito viene rilasciato ovunque
    document.addEventListener('mouseup', removeActive);
    document.addEventListener('touchend', removeActive);
    document.addEventListener('touchcancel', removeActive);

    el.addEventListener('mouseleave', removeActive);

    led.addEventListener('mouseleave', removeActive);
});