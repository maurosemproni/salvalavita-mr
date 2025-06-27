document.querySelectorAll('.bottone').forEach(el => {
    function addActive() {
        el.classList.add('attivo');
    }
    function removeActive() {
        el.classList.remove('attivo');
    }

    el.addEventListener('mousedown', addActive);
    el.addEventListener('touchstart', addActive);

    // Rimuovi la classe quando il mouse o il dito viene rilasciato ovunque
    document.addEventListener('mouseup', removeActive);
    document.addEventListener('touchend', removeActive);
    document.addEventListener('touchcancel', removeActive);

    el.addEventListener('mouseleave', removeActive);
});