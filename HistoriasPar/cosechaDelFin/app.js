const obserbador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting)

    {entrada.target.classList.add('aparecer'); }});
}, {threshold: 0.1});

const elementosVentana = document.querySelectorAll('.ventana, .advertencia, .ventanaL').forEach((el) => {
    obserbador.observe(el);
});

/*
// Cambiamos 'obserbador' por 'observador'
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('aparecer');
            // Opcional: deja de observar el elemento una vez que apareció
            // observador.unobserve(entrada.target); 
        }
    });
}, { 
    threshold: 0.2 // Se activa cuando el 20% del elemento es visible
});

// Seleccionamos y observamos
const elementos = document.querySelectorAll('.ventana, .advertencia, .ventanaL, p'); 
elementos.forEach((el) => observador.observe(el));*/