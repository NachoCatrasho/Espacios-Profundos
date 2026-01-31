const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting)

    {entrada.target.classList.add('aparecer'); }});
}, {threshold: 0.1});

const elementosVentana = document.querySelectorAll('.ventana, .advertencia, .ventanaL').forEach((el) => {
    observador.observe(el);
});

function toggleWin(){

    const ficha= document.getElementById('ficha')



}