const puntero = document.querySelector('.puntero');

document.addEventListener('mousemove', (e) => {
    puntero.style.left = (e.clientX - puntero.offsetWidth / 2) + 'px';
    puntero.style.top = (e.clientY - puntero.offsetHeight / 2) + 'px';
});

document.addEventListener('mouseenter', () => {
    puntero.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
    puntero.style.display = 'none';
});
