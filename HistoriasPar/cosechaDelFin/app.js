const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting)

    {entrada.target.classList.add('aparecer'); }});
}, {threshold: 0.1});

const elementosVentana = document.querySelectorAll('.ventana, .advertencia, .ventanaL').forEach((el) => {
    observador.observe(el);
});

// Ejemplo para app.js


//function toggleWin() {
//    const el = document.getElementById('ficha');
//    if (el) {
//        el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
//    }
//}



function toggleWin(id) {
    const el = document.getElementById(id);
    if (el) {
        // Esto cambia entre 'block' y 'none' dinámicamente
        el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
    }
}