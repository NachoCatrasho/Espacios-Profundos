// import { useState, useEffect } from 'react';s


// document.addEventListener("DOMContentLoaded",function(){//aquí va TODO lo que quieras, después de cargar la pag, si es parte del documento

// })

//const Libros = ['DIARIO DE SUPERVIVENCIA.html', 'DIARIO DE UN SER INMORTAL.html', 'ElCambio.html', 'index.html', 'Una Vida Normal!?.html'];

// let boton1 = document.getElementById('rotar');

// function buscar(){
//     let buscar = document.getElementById('rotar').innerHTML = 'otra vez \n 64';
// }

// function publish(){
//     const el = document.querySelector(`h1`);
//     el.innerHTML='untextomas';
// }

function buscar(){
    let en = Document.getElementById("in");

    en.getText();

    en.innerHTML("hsdhoasnd");
}

//prueba de cambio ifr

const Libros = ['DiarioDeSupervivencia.html', 'DiarioDeUnSerInmortal.html', 'ElCambio.html', 'index.html', 'UnaVidaNormal.html','shalala.html','DUInmortalTwo.html','EspaciosProfundos.html','EspaciosProfundosOriginal.html'];
const  ifr = document.getElementById('historias');
let src = 'HistoriasPar/' + Libros[Math.round(Math.random() * Libros.length)];
// ifr.setAttribute('src', src);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

console.log(src);

// averiguar como acceder al texto
function buscar(){
    const buscar = document.getElementById('Buscar'); /*.value.focus*/
}

function cambio(){
    document.body.classList.toggle('realidad-alterada');
}

let stars=1000;
for (let i = 0; i < stars; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    const size = Math.random()* 3+1;
    star.style.width = `${size}px`;
    star.style.height =`${size}px`;

    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDelay = (Math.random() * 5) + 's';
	star.style.animationDuration = (Math.random() * 3 + 2) + 's';
 	document.body.appendChild(star);
}